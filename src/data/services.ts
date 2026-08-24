import { Building2, Brush, House, Leaf, ShieldCheck } from "lucide-react";

export const serviceGroups = [
  {
    title: "Property Maintenance",
    slug: "maintenance",
    icon: Building2,
    description: "Practical, responsive upkeep for occupied, vacant, residential, and commercial properties.",
    services: ["Residential property maintenance", "Commercial property maintenance", "General repairs", "Property securing", "Lock changes"],
    benefit: "A single point of contact for the routine needs that keep a property safe, functional, and presentable.",
  },
  {
    title: "Turnover & Property Preparation",
    slug: "turnovers",
    icon: House,
    description: "Coordinated preparation that helps properties move efficiently from vacancy to ready.",
    services: ["Turnkey / turn services", "Move-in / move-out work", "Trash-outs", "Clean-outs"],
    benefit: "Ideal for rental units, managed portfolios, listings, acquisitions, and post-occupancy resets.",
  },
  {
    title: "Interior Repairs",
    slug: "interior",
    icon: Brush,
    description: "Detail-focused interior work for refreshes, repairs, and everyday property needs.",
    services: ["Drywall repair", "Painting", "Minor electrical", "Minor plumbing", "Appliance installation", "Appliance repair"],
    benefit: "Resolve multiple punch-list items through one coordinated service relationship.",
  },
  {
    title: "Exterior & Grounds",
    slug: "exterior",
    icon: Leaf,
    description: "Year-round curb appeal, grounds care, and exterior maintenance for properties of every size.",
    services: ["Lawn care", "Landscaping", "Snow removal", "General exterior repairs"],
    benefit: "Support for seasonal maintenance, recurring grounds care, and exterior property concerns.",
  },
  {
    title: "Specialty Coordination",
    slug: "specialty",
    icon: ShieldCheck,
    description: "Help coordinating specialty property needs with the right scope and clear communication.",
    services: ["Mold remediation", "Pest control coordination"],
    benefit: "A more organized response when an issue requires specialized treatment or trade coordination.",
  },
] as const;

export const serviceOptions = serviceGroups.flatMap((group) => group.services);
export const serviceImages = [
  "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1730154838368-c37b1fdebcf6?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1747659629851-a92bd71149f6?auto=format&fit=crop&w=1400&q=85",
];
