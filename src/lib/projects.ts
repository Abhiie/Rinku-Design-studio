export interface Testimonial {
  quote: string;
  client: string;
}

export interface Project {
  slug: string;
  name: string;
  location: string;
  category: string;
  budgetLabel: string;
  budgetValue: number; // in Lakhs, or Crore mapped to equivalents
  durationLabel: string;
  durationMonths: number;
  rating: number;
  area: string;
  year: number;
  colorA: string;
  colorB: string;
  image: string;
  style: string;
  materials: string;
  testimonial: Testimonial;
  services: string[];
}

export const projects: Project[] = [
  {
    slug: "kapoor-residence",
    name: "The Kapoor Residence",
    location: "Bodakdev, Ahmedabad",
    category: "Residential",
    budgetLabel: "₹22 Lakhs",
    budgetValue: 22,
    durationLabel: "5 Months",
    durationMonths: 5,
    rating: 5,
    area: "2,400 sq.ft",
    year: 2023,
    colorA: "#1a1a2e",
    colorB: "#16213e",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000",
    style: "Contemporary Classic",
    materials: "Marble, Walnut, Brass",
    testimonial: {
      quote: "Rinku transformed our house into the home we always dreamed of. Every detail was considered.",
      client: "Ananya & Suresh Kapoor"
    },
    services: ["Space Planning", "3D Visualization", "Procurement", "Execution"]
  },
  {
    slug: "serenity-spa",
    name: "Serenity Spa & Wellness",
    location: "SG Highway, Ahmedabad",
    category: "Hospitality",
    budgetLabel: "₹45 Lakhs",
    budgetValue: 45,
    durationLabel: "8 Months",
    durationMonths: 8,
    rating: 5,
    area: "4,200 sq.ft",
    year: 2023,
    colorA: "#0d1b1e",
    colorB: "#1a3a3a",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?auto=format&fit=crop&q=80&w=1000",
    style: "Japandi Wellness",
    materials: "Teak, Travertine, Linen",
    testimonial: {
      quote: "Our spa ambiance has become our biggest selling point. Guests stay longer because of it.",
      client: "Priya Malhotra, Serenity Spa"
    },
    services: ["Concept Design", "Lighting Design", "FF&E Procurement", "Project Management"]
  },
  {
    slug: "mehta-hq",
    name: "Mehta Corporate HQ",
    location: "GIFT City, Gandhinagar",
    category: "Commercial",
    budgetLabel: "₹80 Lakhs",
    budgetValue: 80,
    durationLabel: "11 Months",
    durationMonths: 11,
    rating: 4.5,
    area: "8,000 sq.ft",
    year: 2022,
    colorA: "#0f172a",
    colorB: "#1e293b",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    style: "Modern Corporate",
    materials: "Steel, Glass, Oak",
    testimonial: {
      quote: "The office redesign boosted team morale overnight. Our clients are always impressed walking in.",
      client: "Rajiv Mehta, Mehta Corp"
    },
    services: ["Workplace Strategy", "Interior Architecture", "Branding Integration", "Execution"]
  },
  {
    slug: "loft-studio",
    name: "The Loft Studio",
    location: "Prahladnagar, Ahmedabad",
    category: "Residential",
    budgetLabel: "₹12 Lakhs",
    budgetValue: 12,
    durationLabel: "3 Months",
    durationMonths: 3,
    rating: 5,
    area: "900 sq.ft",
    year: 2024,
    colorA: "#1c1008",
    colorB: "#2d1f0e",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
    style: "Warm Minimalist",
    materials: "Plywood, Cane, Terracotta",
    testimonial: {
      quote: "We never thought our small flat could feel so spacious and beautiful.",
      client: "Nisha & Arun Lal"
    },
    services: ["Space Planning", "Custom Furniture", "Styling"]
  },
  {
    slug: "artisan-cafe",
    name: "Artisan Café Interiors",
    location: "Vastrapur, Ahmedabad",
    category: "Retail",
    budgetLabel: "₹28 Lakhs",
    budgetValue: 28,
    durationLabel: "6 Months",
    durationMonths: 6,
    rating: 4.5,
    area: "1,800 sq.ft",
    year: 2023,
    colorA: "#1a0f00",
    colorB: "#2e1d05",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000",
    style: "Industrial Artisan",
    materials: "Reclaimed Wood, Exposed Brick, Copper",
    testimonial: {
      quote: "People come for the coffee but stay for the interiors. Footfall doubled after the redesign.",
      client: "Farhan Ansari, Artisan Café"
    },
    services: ["Concept Design", "3D Renders", "Branding Touchpoints", "Execution"]
  },
  {
    slug: "nair-villa",
    name: "Nair Family Villa",
    location: "Thaltej, Ahmedabad",
    category: "Residential",
    budgetLabel: "₹55 Lakhs",
    budgetValue: 55,
    durationLabel: "10 Months",
    durationMonths: 10,
    rating: 5,
    area: "5,200 sq.ft",
    year: 2022,
    colorA: "#180a2a",
    colorB: "#2a1040",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    style: "Heritage Contemporary",
    materials: "Italian Marble, Teak, Brass, Cane",
    testimonial: {
      quote: "Pure luxury delivered with warmth. Rinku herself is an absolute pleasure to work with.",
      client: "Deepa Nair & Family"
    },
    services: ["Architecture", "Full Interior", "Landscape Coordination", "Art Curation"]
  },
  {
    slug: "pulse-fitness",
    name: "Pulse Fitness Studio",
    location: "Drive-In Road, Ahmedabad",
    category: "Commercial",
    budgetLabel: "₹18 Lakhs",
    budgetValue: 18,
    durationLabel: "4 Months",
    durationMonths: 4,
    rating: 4,
    area: "2,100 sq.ft",
    year: 2024,
    colorA: "#0a0a0a",
    colorB: "#1a1a1a",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    style: "Dark Athletic",
    materials: "Rubber Flooring, Steel, Mirror",
    testimonial: {
      quote: "Members constantly compliment the vibe. It makes working out feel premium.",
      client: "Karan Shah, Pulse Fitness"
    },
    services: ["Space Planning", "Lighting Design", "Branding", "FF&E"]
  },
  {
    slug: "orchid-hotel",
    name: "The Orchid Boutique Hotel",
    location: "Navrangpura, Ahmedabad",
    category: "Hospitality",
    budgetLabel: "₹1.2 Crore",
    budgetValue: 120, // 1.2Cr gets represented with a larger value
    durationLabel: "14 Months",
    durationMonths: 14,
    rating: 5,
    area: "18,000 sq.ft",
    year: 2021,
    colorA: "#0d0d1a",
    colorB: "#1a1a2e",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000",
    style: "Neo-Classical Indian",
    materials: "Onyx, Jaali Screens, Silk, Hand-painted Murals",
    testimonial: {
      quote: "Guests fly in just to experience the hotel. We have been featured in three design magazines.",
      client: "Orchid Hospitality Group"
    },
    services: ["Master Planning", "Interior Architecture", "FF&E", "Art Programme", "Lighting Design"]
  }
];
