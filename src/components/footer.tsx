import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navigation } from "@/data/company";

export function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div className="footer-brand"><Link href="/" className="brand brand-image" aria-label={`${company.name} home`}><Image className="brand-logo footer-logo" src="/ppcs-logo.png" alt={company.name} width={756} height={122} /></Link><p>Dependable residential and commercial maintenance, repairs, turnovers, and grounds care—with one responsive point of contact.</p></div>
    <div><h3>Company</h3>{navigation.map((x) => <Link key={x.href} href={x.href}>{x.label}</Link>)}</div>
    <div><h3>Core Services</h3><Link href="/services#maintenance">Property Maintenance</Link><Link href="/services#turnovers">Turn Services</Link><Link href="/services#exterior">Lawn & Landscaping</Link><Link href="/services#interior">Repairs</Link><Link href="/services#turnovers">Trash-Outs</Link><Link href="/services#maintenance">Property Securing</Link></div>
    <div><h3>Contact</h3><a href={company.phoneHref} className="contact-line"><Phone size={16}/>{company.phone}</a><a href={company.emailHref} className="contact-line"><Mail size={16}/>{company.email}</a><p className="contact-line"><MapPin size={16}/>{company.serviceArea}</p><Link href="/contact" className="footer-link">Request a quote →</Link></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span><span>Site content and credentials pending client approval.</span></div></footer>;
}
