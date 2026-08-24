"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { company, navigation } from "@/data/company";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 18); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
    <div className="container header-inner">
      <Link href="/" className="brand brand-image" aria-label={`${company.name} home`}><Image className="brand-logo" src="/ppcs-logo.png" alt={company.name} width={756} height={122} priority /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>{item.label}</Link>)}</nav>
      <Link className="header-cta" href="/contact">Get a Free Quote <ArrowIcon /></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
    </div>
    <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`}><nav aria-label="Mobile navigation">{navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={pathname === item.href ? "active" : ""}>{item.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="button button-primary">Get a Free Quote <ArrowIcon /></Link></nav></div>
  </header>;
}

function ArrowIcon() { return <span aria-hidden="true">→</span>; }
