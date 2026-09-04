export const company = {
  name: "Pro Property Care Solutions LLC",
  shortName: "Pro Property Care",
  tagline: "Complete Property Care. One Reliable Partner.",
  phone: "(346) 241-1766",
  phoneHref: "tel:+13462411766",
  email: "info@propropertycaresolutions.com",
  emailHref: "mailto:info@propropertycaresolutions.com",
  address: "7901 Cambridge St Apt 4, Houston, TX 77054, USA",
  addressHref: "https://www.google.com/maps/search/?api=1&query=7901%20Cambridge%20St%20Apt%204%2C%20Houston%2C%20TX%2077054%2C%20USA",
  serviceArea: "Service area details coming soon",
  businessHours: "Monday-Friday 9:00 AM-5:00 PM | Saturday 10:00 AM-2:00 PM",
  licenseStatus: "Licensing details to be provided",
  insuranceStatus: "Insurance details to be provided",
  bondingStatus: "Bonding details to be provided",
  socialLinks: {} as Record<string, string>,
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const companyStats = [
  { value: 500, suffix: "+", label: "Properties Serviced", icon: "properties" },
  { value: 500, suffix: "+", label: "Projects Completed", icon: "projects" },
  { value: 9, suffix: "+", label: "Years of Experience", icon: "experience" },
  { value: 30, suffix: "+", label: "Service Areas", icon: "areas" },
] as const;
