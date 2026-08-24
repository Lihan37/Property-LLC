import type { Metadata } from "next";
import Image from "next/image";
import { CTASection, CheckList, PageHero, ProcessStrip } from "@/components/sections";
import { Container, SectionHeading } from "@/components/ui";
import { serviceGroups, serviceImages } from "@/data/services";

export const metadata: Metadata = { title: "Property Maintenance Services", description: "Explore residential and commercial maintenance, turnovers, repairs, grounds care, clean-outs, and specialty coordination." };

export default function ServicesPage() { return <>
  <PageHero eyebrow="OUR SERVICES" title="Property services built around real-world needs." copy="A broad, coordinated range of maintenance and property preparation support for owners, managers, real estate professionals, and investors." image="https://images.unsplash.com/photo-1676311396794-f14881e9daaa?auto=format&fit=crop&w=1600&q=85"/>
  <section className="section intro-section"><Container><SectionHeading eyebrow="FULL-SERVICE CAPABILITY" title="Fewer handoffs. Clearer property care." copy="Choose support for a specific need or bring us a varied property punch list. We organize services into practical scopes while keeping the experience straightforward."/><div className="intro-aside"><b>Services for</b><span>Residential properties</span><span>Commercial properties</span><span>Rental and managed properties</span><span>Vacant and investment properties</span></div></Container></section>
  <section className="service-detail-list"><Container>{serviceGroups.map((group,i) => { const Icon=group.icon; return <article id={group.slug} key={group.slug}><div className="service-detail-image"><Image src={serviceImages[i]} alt={`${group.title} service setting`} fill sizes="(max-width: 850px) 100vw, 45vw"/><span>0{i+1}</span></div><div><span className="service-icon"><Icon/></span><p className="eyebrow">{group.title.toUpperCase()}</p><h2>{group.description}</h2><CheckList items={group.services}/><p className="benefit"><b>Where it helps:</b> {group.benefit}</p></div></article>})}</Container></section>
  <section className="section process-section"><Container><SectionHeading eyebrow="A STRAIGHTFORWARD PROCESS" title="From the first call to closeout." copy="The exact process varies by project, but clear scope and communication stay constant."/><ProcessStrip/></Container></section>
  <CTASection title="Need help defining the right service scope?" copy="Share the property details and your priorities. We’ll help organize the next step."/>
  </> }
