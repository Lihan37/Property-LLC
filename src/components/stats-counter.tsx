"use client";

import Image from "next/image";
import { Building2, ClipboardCheck, Clock3, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { companyStats } from "@/data/company";
import { Container } from "./ui";

const icons = {
  properties: Building2,
  projects: ClipboardCheck,
  experience: Clock3,
  areas: MapPin,
};

function AnimatedNumber({ value, suffix, delay }: { value: number; suffix: string; delay: number }) {
  const [count, setCount] = useState(1);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let frame = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      frame = requestAnimationFrame(() => setCount(value));
      return () => cancelAnimationFrame(frame);
    }

    let timer = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      timer = window.setTimeout(() => {
        const startedAt = performance.now();
        const duration = 720;
        const update = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.max(1, Math.round(value * eased)));
          if (progress < 1) frame = requestAnimationFrame(update);
        };
        frame = requestAnimationFrame(update);
      }, delay);
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [delay, value]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export function StatsCounter() {
  return <section className="stats-section" aria-label="Company statistics" data-reveal="up">
    <Image className="stats-background" src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=2200&q=80" alt="" fill sizes="100vw" />
    <div className="stats-overlay" />
    <Container className="stats-grid">
      {companyStats.map((stat, index) => {
        const Icon = icons[stat.icon];
        return <article key={stat.label}>
          <Icon aria-hidden="true" />
          <strong><AnimatedNumber value={stat.value} suffix={stat.suffix} delay={index * 90} /></strong>
          <p>{stat.label}</p>
        </article>;
      })}
    </Container>
  </section>;
}
