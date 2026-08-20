import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function Button({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "light" | "outline"; className?: string }) {
  return <Link href={href} className={`button button-${variant} ${className}`}>{children}<ArrowRight size={17} aria-hidden="true" /></Link>;
}

export function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "center" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}
