export type ProjectCategory = "Turnovers" | "Repairs" | "Painting & Drywall" | "Exterior" | "Landscaping" | "Clean-Outs";

export type Project = {
  id: number; title: string; category: ProjectCategory; description: string; image: string; alt: string; label?: string;
};

export const projects: Project[] = [
  { id: 1, title: "Rental Unit Refresh", category: "Turnovers", description: "A coordinated unit reset covering preparation, repairs, finishes, and final readiness.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85", alt: "Freshly renovated apartment living room", label: "Turn-ready interior" },
  { id: 2, title: "Interior Wall Restoration", category: "Painting & Drywall", description: "Wall repairs and a clean paint finish that restored a bright, consistent interior.", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=85", alt: "Professional painting work in a residential interior", label: "Finish detail" },
  { id: 3, title: "Managed Property Grounds", category: "Landscaping", description: "Seasonal grounds care focused on clean edges, healthy plantings, and curb appeal.", image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=85", alt: "Grounds care professional tending a landscaped property", label: "Grounds care" },
  { id: 4, title: "Exterior Maintenance", category: "Exterior", description: "Targeted exterior attention designed to protect the property and improve presentation.", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85", alt: "Well maintained modern home exterior", label: "Exterior care" },
  { id: 5, title: "Kitchen Repair & Update", category: "Repairs", description: "Punch-list repairs, fixture attention, and final detailing for a functional update.", image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1600&q=85", alt: "Updated residential kitchen", label: "Repair coordination" },
  { id: 6, title: "Vacant Property Clean-Out", category: "Clean-Outs", description: "An organized clean-out that prepared the property for inspection and its next phase.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85", alt: "Clean and empty prepared residential room", label: "Property preparation" },
  { id: 7, title: "Common-Area Refresh", category: "Painting & Drywall", description: "Surface preparation and durable finishing for a high-use shared property area.", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85", alt: "Refreshed modern property interior", label: "Before / after ready" },
  { id: 8, title: "Curb Appeal Reset", category: "Landscaping", description: "A focused landscape cleanup to sharpen the property’s first impression.", image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=85", alt: "Neatly maintained lawn and landscaping", label: "Landscape cleanup" },
  { id: 9, title: "Ready-to-List Preparation", category: "Turnovers", description: "Multi-service preparation supporting a clean, polished, market-ready presentation.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85", alt: "Polished living space ready for listing", label: "Property turnover" },
];

export const projectCategories = ["All", "Turnovers", "Repairs", "Painting & Drywall", "Exterior", "Landscaping", "Clean-Outs"] as const;
