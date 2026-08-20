"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { projectCategories, projects, type Project } from "@/data/projects";

export function ProjectGallery() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);
  function move(direction: number) { if (!selected) return; const i = filtered.findIndex(p => p.id === selected.id); setSelected(filtered[(i + direction + filtered.length) % filtered.length]); }
  useEffect(() => {
    if (!selected) return;
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); if (e.key === "ArrowRight") move(1); if (e.key === "ArrowLeft") move(-1); };
    document.addEventListener("keydown", key); document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", key); document.body.style.overflow = ""; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
  return <>
    <div className="filters" role="group" aria-label="Filter projects by category">{projectCategories.map(cat => <button key={cat} onClick={() => setFilter(cat)} className={filter === cat ? "active" : ""} aria-pressed={filter === cat}>{cat}</button>)}</div>
    <div className="gallery-grid">{filtered.map(project => <button className="gallery-card" key={project.id} onClick={() => setSelected(project)} aria-label={`View ${project.title}`}><div className="gallery-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div><div><span>{project.category}</span><h2>{project.title}</h2><p>{project.description}</p><b>Open project <span aria-hidden="true">↗</span></b></div></button>)}</div>
    {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onMouseDown={e => { if (e.target === e.currentTarget) setSelected(null); }}><button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close project"><X/></button><button className="lightbox-prev" onClick={() => move(-1)} aria-label="Previous project"><ChevronLeft/></button><div className="lightbox-panel"><div className="lightbox-image"><Image src={selected.image} alt={selected.alt} fill sizes="90vw" /></div><div><span>{selected.category} · {selected.label}</span><h2>{selected.title}</h2><p>{selected.description}</p><small>Temporary portfolio image and project description—replace with approved client project materials.</small></div></div><button className="lightbox-next" onClick={() => move(1)} aria-label="Next project"><ChevronRight/></button></div>}
  </>;
}
