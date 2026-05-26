// ─────────────────────────────────────────────────────────────
//  HOW TO ADD A NEW PROJECT
//  ─────────────────────────────────────────────────────────────
//  1. Create a folder inside:  public/projects/<folder>/
//  2. Drop images named:        1.jpeg  2.jpeg  3.jpeg  …  (1.jpeg = main/cover)
//  3. Add ONE entry below in PROJECT_CONFIG with:
//       folder     → matches the folder name you just created
//       imageCount → how many images are in that folder
//       …plus the project details (name, location, category, year)
//
//  That's it! The project card and gallery will render automatically.
// ─────────────────────────────────────────────────────────────

export interface Project {
  slug: string;
  name: string;
  location: string;
  category: string;
  year: number;
  images: string[]; // first entry is always the cover/thumbnail (1.jpeg)
}

// ─── Project Config — Edit only this section ─────────────────
interface ProjectConfig {
  folder: string;       // folder name inside public/projects/
  imageCount: number;   // how many images (1.jpeg … N.jpeg)
  name: string;
  location: string;
  category: string;
  year: number;
}

const PROJECT_CONFIG: ProjectConfig[] = [
  {
    folder: "kapoor-paladi",
    imageCount: 8,
    name: "The Kapoor Residence",
    location: "Paladi, Ahmedabad",
    category: "Residential",
    year: 2025,
  },
  {
    folder: "kapoor-residence",
    imageCount: 5,
    name: "The Kapoor Residence",
    location: "Bodakdev, Ahmedabad",
    category: "Residential",
    year: 2023,
  },
  {
    folder: "serenity-spa",
    imageCount: 4,
    name: "Serenity Spa & Wellness",
    location: "SG Highway, Ahmedabad",
    category: "Hospitality",
    year: 2023,
  },
  {
    folder: "mehta-hq",
    imageCount: 4,
    name: "Mehta Corporate HQ",
    location: "GIFT City, Gandhinagar",
    category: "Commercial",
    year: 2022,
  },
  {
    folder: "loft-studio",
    imageCount: 4,
    name: "The Loft Studio",
    location: "Prahladnagar, Ahmedabad",
    category: "Residential",
    year: 2024,
  },
  {
    folder: "artisan-cafe",
    imageCount: 4,
    name: "Tandoor Story",
    location: "Prahladnagar, Ahmedabad",
    category: "Restaurant",
    year: 2023,
  },
  {
    folder: "nair-villa",
    imageCount: 5,
    name: "Nair Family Villa",
    location: "Thaltej, Ahmedabad",
    category: "Residential",
    year: 2022,
  },
  {
    folder: "nakoda-lab",
    imageCount: 3,
    name: "Nakoda Diagnostic Laboratory",
    location: "Ahmedabad, Gujarat",
    category: "Commercial",
    year: 2024,
  },
  {
    folder: "paraadis-jewellery",
    imageCount: 4,
    name: "Paraadis Jewellery",
    location: "SBR, Ahmedabad",
    category: "Retail",
    year: 2024,
  },
];
// ─── End of editable config ───────────────────────────────────

// Auto-builds the Project array from the config above.
// Images are sourced from: /projects/<folder>/1.jpeg, 2.jpeg, …
function buildImages(folder: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/projects/${folder}/${i + 1}.jpeg`);
}

export const projects: Project[] = PROJECT_CONFIG.map((cfg) => ({
  slug: cfg.folder,
  name: cfg.name,
  location: cfg.location,
  category: cfg.category,
  year: cfg.year,
  images: buildImages(cfg.folder, cfg.imageCount),
}));
