import os
import re
from pathlib import Path
from PIL import Image
import fitz  # PyMuPDF

# Paths
WORKSPACE_DIR = Path("D:/Freelance/Rinku/Rinku-Design-studio")
INPUT_DIR = WORKSPACE_DIR / "RInku Design phtos"
OUTPUT_DIR = WORKSPACE_DIR / "public/converted-photos"
METADATA_FILE = WORKSPACE_DIR / "src/lib/convertedPhotos.ts"

def slugify(text: str) -> str:
    # Convert to lowercase and replace non-alphanumeric characters with hyphens
    t = text.lower()
    t = re.sub(r'[^a-z0-9]+', '-', t)
    return t.strip('-')

def clean_title(name: str) -> str:
    # Clean file/folder names to make a nice title
    title = name.replace('_', ' ').replace('-', ' ')
    # Remove file extensions if present
    if '.' in title:
        title = title.rsplit('.', 1)[0]
    # Remove redundant keywords like "3d", "revised", "pdf", etc.
    title = re.sub(r'\b(3d|revised)\b', '', title, flags=re.IGNORECASE)
    # Title-case and remove double spaces
    title = ' '.join(word.capitalize() for word in title.split())
    
    # Append "(3D Concept)" or similar if PDF to make it rich
    if name.lower().endswith('.pdf'):
        title += " (3D Concept)"
    return title.strip()

def main():
    print("Starting assets conversion script...")
    
    # Ensure output directory exists
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    groups = []
    
    # 1. Process directories (Gift city, Tandoor story)
    subdirs = [d for d in INPUT_DIR.iterdir() if d.is_dir()]
    for subdir in subdirs:
        slug = slugify(subdir.name)
        title = clean_title(subdir.name)
        group_output_dir = OUTPUT_DIR / slug
        group_output_dir.mkdir(parents=True, exist_ok=True)
        
        print(f"Processing folder: {subdir.name} -> {title} [{slug}]")
        
        images_list = []
        image_files = sorted(
            [f for f in subdir.iterdir() if f.suffix.lower() in ['.jpg', '.jpeg', '.png']],
            key=lambda x: x.name
        )
        
        for idx, img_path in enumerate(image_files):
            out_filename = f"{idx + 1}.webp"
            out_path = group_output_dir / out_filename
            try:
                with Image.open(img_path) as img:
                    # Convert to RGB if needed before saving to webp
                    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                        img = img.convert('RGB')
                    img.save(out_path, 'WEBP', quality=85)
                relative_url = f"/converted-photos/{slug}/{out_filename}"
                images_list.append(relative_url)
                print(f"  Converted {img_path.name} -> {out_filename}")
            except Exception as e:
                print(f"  Error converting {img_path.name}: {e}")
                
        if images_list:
            groups.append({
                "id": slug,
                "title": title,
                "type": "folder",
                "images": images_list
            })

    # 2. Process JPEGs at root -> "General Showcase"
    root_jpegs = sorted(
        [f for f in INPUT_DIR.iterdir() if f.is_file() and f.suffix.lower() in ['.jpg', '.jpeg', '.png']],
        key=lambda x: x.name
    )
    if root_jpegs:
        slug = "general-showcase"
        title = "General Design Showcase"
        group_output_dir = OUTPUT_DIR / slug
        group_output_dir.mkdir(parents=True, exist_ok=True)
        
        print(f"Processing root JPEGs -> {title}")
        images_list = []
        for idx, img_path in enumerate(root_jpegs):
            out_filename = f"{idx + 1}.webp"
            out_path = group_output_dir / out_filename
            try:
                with Image.open(img_path) as img:
                    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                        img = img.convert('RGB')
                    img.save(out_path, 'WEBP', quality=85)
                relative_url = f"/converted-photos/{slug}/{out_filename}"
                images_list.append(relative_url)
                print(f"  Converted {img_path.name} -> {out_filename}")
            except Exception as e:
                print(f"  Error converting {img_path.name}: {e}")
                
        if images_list:
            groups.append({
                "id": slug,
                "title": title,
                "type": "general",
                "images": images_list
            })

    # 3. Process PDF files at root -> Convert each PDF into a separate group of images
    root_pdfs = sorted(
        [f for f in INPUT_DIR.iterdir() if f.is_file() and f.suffix.lower() == '.pdf'],
        key=lambda x: x.name
    )
    for pdf_path in root_pdfs:
        slug = slugify(pdf_path.stem)
        title = clean_title(pdf_path.name)
        group_output_dir = OUTPUT_DIR / slug
        group_output_dir.mkdir(parents=True, exist_ok=True)
        
        print(f"Processing PDF: {pdf_path.name} -> {title} [{slug}]")
        
        images_list = []
        try:
            doc = fitz.open(pdf_path)
            for page_num in range(len(doc)):
                page = doc.load_page(page_num)
                # Increase resolution to 2x for sharp renders (zoom factor 2)
                mat = fitz.Matrix(2.0, 2.0)
                pix = page.get_pixmap(matrix=mat)
                
                out_filename = f"page-{page_num + 1}.webp"
                out_path = group_output_dir / out_filename
                
                # Save pixmap as temporary PNG then convert to WebP using Pillow, or write directly
                pix.save(str(group_output_dir / "temp.png"))
                with Image.open(group_output_dir / "temp.png") as img:
                    img.save(out_path, 'WEBP', quality=85)
                os.remove(group_output_dir / "temp.png")
                
                relative_url = f"/converted-photos/{slug}/{out_filename}"
                images_list.append(relative_url)
                print(f"  Extracted page {page_num + 1} -> {out_filename}")
                
            doc.close()
        except Exception as e:
            print(f"  Error processing PDF {pdf_path.name}: {e}")
            
        if images_list:
            groups.append({
                "id": slug,
                "title": title,
                "type": "pdf",
                "images": images_list
            })

    # Write out TypeScript metadata file
    print(f"Writing metadata to {METADATA_FILE}...")
    
    METADATA_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    with open(METADATA_FILE, "w", encoding="utf-8") as f:
        f.write("// ─────────────────────────────────────────────────────────────\n")
        f.write("//  AUTO-GENERATED PORTFOLIO PHOTO GROUPS (DO NOT EDIT DIRECTLY)\n")
        f.write("//  Generated by convert_assets.py\n")
        f.write("// ─────────────────────────────────────────────────────────────\n\n")
        f.write("export interface PhotoGroup {\n")
        f.write("  id: string;\n")
        f.write("  title: string;\n")
        f.write("  type: 'folder' | 'pdf' | 'general';\n")
        f.write("  images: string[];\n")
        f.write("}\n\n")
        f.write("export const convertedPhotoGroups: PhotoGroup[] = [\n")
        
        for g in groups:
            f.write("  {\n")
            f.write(f"    id: {repr(g['id'])},\n")
            f.write(f"    title: {repr(g['title'])},\n")
            f.write(f"    type: {repr(g['type'])},\n")
            f.write("    images: [\n")
            for img in g['images']:
                f.write(f"      {repr(img)},\n")
            f.write("    ],\n")
            f.write("  },\n")
            
        f.write("];\n")
        
    print("Conversion completely successful!")

if __name__ == "__main__":
    main()
