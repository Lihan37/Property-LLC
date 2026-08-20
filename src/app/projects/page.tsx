import type { Metadata } from "next";
import { ProjectGallery } from "@/components/project-gallery";
import { CTASection, PageHero } from "@/components/sections";
import { Container } from "@/components/ui";

export const metadata: Metadata = { title: "Property Maintenance Projects", description: "Browse property turnover, repair, painting, exterior, landscaping, and clean-out project examples." };

export default function ProjectsPage() { return <><PageHero eyebrow="OUR WORK" title="Care you can see in every detail." copy="Explore representative property maintenance, preparation, repair, and grounds-care work. Filter by service type and open any project for a closer view." image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85"/><section className="section gallery-section"><Container><div className="gallery-intro"><div><span className="eyebrow">PROJECT GALLERY</span><h2>Work across the property lifecycle.</h2></div><p>Temporary images and descriptions demonstrate the portfolio experience. Replace these entries in <code>src/data/projects.ts</code> with approved project photography before launch.</p></div><ProjectGallery/></Container></section><CTASection title="Have a similar property need?" copy="Share the scope, photos, or punch list and let’s talk about the right next step."/></> }
