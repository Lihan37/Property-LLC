import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Check, ClipboardCheck, Clock3, House, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { Button, Container } from "./ui";

export function PageHero({ eyebrow, title, copy, image }: { eyebrow: string; title: string; copy: string; image?: string }) {
  return <section className="page-hero"><Container><div className="page-hero-copy"><span className="eyebrow light">{eyebrow}</span><h1>{title}</h1><p>{copy}</p></div>{image && <div className="page-hero-image"><Image src={image} alt="Professionally maintained property" fill priority sizes="(max-width: 900px) 100vw, 45vw" /></div>}</Container></section>;
}

export function TrustStrip() {
  const items = [[House, "Residential & Commercial"], [Wrench, "Full-Service Maintenance"], [Clock3, "Responsive Service"], [ShieldCheck, "Quality-Focused Work"]] as const;
  return <div className="trust-strip" data-reveal="up"><Container>{items.map(([Icon, text]) => <div key={text} data-reveal="up"><Icon size={23}/><span>{text}</span></div>)}</Container></div>;
}

export function CTASection({ title = "Have a Property That Needs Attention?", copy = "Tell us what your property needs. We’ll help you define the scope and take the next practical step." }: { title?: string; copy?: string }) {
  return <section className="cta-section" data-reveal="up"><Container><div data-reveal="left"><span className="eyebrow light">LET’S TALK ABOUT YOUR PROPERTY</span><h2>{title}</h2><p>{copy}</p></div><div className="button-row" data-reveal="right"><Button href="/contact" variant="light">Get a Free Quote</Button><Button href="/contact" variant="outline">Contact Us</Button></div></Container></section>;
}

export function ProcessStrip() {
  const steps = [["01", "Share the need", "Tell us about the property, priorities, and timing."], ["02", "Confirm the scope", "We align on the work and the next steps."], ["03", "Care for the property", "The work is coordinated with clear communication."], ["04", "Close out clearly", "Review the result and any recommended follow-up."]];
  return <div className="process-grid">{steps.map(([n,t,c]) => <div key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></div>)}</div>;
}

export function AudienceGrid() {
  const audiences = [[House,"Homeowners","Repairs, upkeep, exterior care, and property improvements."],[Building2,"Property Managers","Turns, recurring maintenance, grounds care, and response support."],[ClipboardCheck,"Real Estate Professionals","Punch lists, clean-outs, preparations, and listing-ready work."],[Sparkles,"Property Investors","Post-acquisition cleanup, repairs, refreshes, and ongoing care."]];
  return <div className="audience-grid">{audiences.map(([Icon,t,c]) => <article key={t as string} data-reveal="up"><Icon/><h3>{t as string}</h3><p>{c as string}</p></article>)}</div>;
}

export function CheckList({ items }: { items: readonly string[] }) { return <ul className="check-list">{items.map(x => <li key={x}><Check size={17}/>{x}</li>)}</ul>; }

export function ProjectCard({ project }: { project: import("@/data/projects").Project }) {
  return <Link href="/projects" className="project-card" data-reveal="up"><div className="project-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 100vw, 33vw" /></div><div><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><b>View project <ArrowUpRight size={16}/></b></div></Link>;
}
