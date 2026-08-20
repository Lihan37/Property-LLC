import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/sections";
import { Container } from "@/components/ui";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Request a Free Quote", description: "Contact Pro Property Care Solutions LLC about residential or commercial maintenance, repairs, turnovers, or grounds care." };

export default function ContactPage() { const contact = [[Phone,"Phone",company.phone,company.phoneHref],[Mail,"Email",company.email,company.emailHref],[Clock3,"Business Hours",company.businessHours,""],[MapPin,"Service Area",company.serviceArea,""]] as const; return <><PageHero eyebrow="CONTACT US" title="Tell us what your property needs." copy="Share the property type, service needed, and any useful project details. This frontend is ready to connect to your preferred form provider." image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=85"/><section className="section contact-section"><Container><aside><span className="eyebrow">GET IN TOUCH</span><h2>Start with a clear conversation.</h2><p>Whether you have a detailed scope or just know the property needs attention, send the essentials and we’ll take it from there.</p><div className="contact-details">{contact.map(([Icon,label,value,href]) => <div key={label}><Icon/><span><b>{label}</b>{href ? <a href={href}>{value}</a> : <small>{value}</small>}</span></div>)}</div><div className="contact-note"><b>Client information pending</b><p>Phone, email, hours, and service coverage are centralized in <code>src/data/company.ts</code> for easy replacement before launch.</p></div></aside><div className="form-shell"><span className="eyebrow">REQUEST A QUOTE</span><h2>How can we help?</h2><ContactForm/></div></Container></section></> }
