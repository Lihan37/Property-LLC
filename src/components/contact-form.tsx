"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { serviceOptions } from "@/data/services";

type Errors = Record<string, string>;
export function ContactForm() {
  const [sent, setSent] = useState(false); const [errors, setErrors] = useState<Errors>({});
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const data = new FormData(e.currentTarget); const next: Errors = {};
    for (const field of ["name","email","phone","propertyType","service","message"]) if (!String(data.get(field) || "").trim()) next[field] = "This field is required.";
    const email = String(data.get("email") || ""); if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    setErrors(next); if (Object.keys(next).length === 0) setSent(true);
  }
  if (sent) return <div className="form-success" role="status"><CheckCircle2/><span className="eyebrow">DEMO SUCCESS STATE</span><h2>Your request is ready to connect.</h2><p>This frontend demonstration does not send email yet. Connect the isolated submit handler in <code>src/components/contact-form.tsx</code> to the client’s preferred form service before launch.</p><button onClick={() => setSent(false)}>Submit another request</button></div>;
  const error = (name: string) => errors[name] ? <span className="field-error">{errors[name]}</span> : null;
  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-grid"><label>Full Name<input name="name" autoComplete="name" aria-invalid={!!errors.name}/>{error("name")}</label><label>Email<input name="email" type="email" autoComplete="email" aria-invalid={!!errors.email}/>{error("email")}</label><label>Phone<input name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone}/>{error("phone")}</label><label>Property Type<select name="propertyType" defaultValue="" aria-invalid={!!errors.propertyType}><option value="" disabled>Select property type</option><option>Residential</option><option>Commercial</option><option>Rental / Managed Property</option><option>Other</option></select>{error("propertyType")}</label></div>
    <label>Service Needed<select name="service" defaultValue="" aria-invalid={!!errors.service}><option value="" disabled>Select a service</option>{serviceOptions.map(x => <option key={x}>{x}</option>)}</select>{error("service")}</label>
    <label>Message / Project Details<textarea name="message" rows={6} placeholder="Tell us about the property, the work needed, and your preferred timing." aria-invalid={!!errors.message}/>{error("message")}</label>
    <button className="submit-button" type="submit">Request a Quote <span>→</span></button><p className="form-note">Demo form only—no information is transmitted or stored.</p>
  </form>;
}
