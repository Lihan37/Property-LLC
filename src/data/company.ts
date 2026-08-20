export const company = {
  name: "Pro Property Care Solutions LLC",
  shortName: "Pro Property Care",
  tagline: "Complete Property Care. One Reliable Partner.",
  phone: "(000) 000-0000 — placeholder",
  phoneHref: "tel:+10000000000",
  email: "hello@example.com — placeholder",
  emailHref: "mailto:hello@example.com",
  address: "Business address to be provided",
  serviceArea: "Service area details coming soon",
  businessHours: "Business hours to be provided",
  licenseStatus: "Licensing details to be provided",
  insuranceStatus: "Insurance details to be provided",
  bondingStatus: "Bonding details to be provided",
  socialLinks: {} as Record<string, string>,
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];
