"use client";
import { useState } from "react";
import { courses } from "@/lib/courses";

export default function ContactForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder: when deployed, swap action to Formspree URL like https://formspree.io/f/yourID
    // For now we just simulate success.
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
    e.target.reset();
  }

  if (submitted) {
    return (
      <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-green-900">
        <h3 className="font-bold text-lg">Thanks — we've got your enquiry</h3>
        <p className="text-sm mt-1">A member of our team will call or email you within one working day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-3 ${compact ? "" : "p-6 bg-white rounded-2xl shadow-lg border border-slate-100"}`}>
      {!compact && <h3 className="text-2xl font-extrabold text-slate-900">Send us your enquiry</h3>}
      <div className="grid md:grid-cols-2 gap-3">
        <input required name="name" placeholder="Your full name *" className="px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
        <input required name="phone" type="tel" placeholder="Phone *" className="px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
      </div>
      <input required name="email" type="email" placeholder="Email address *" className="px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
      <select name="course" defaultValue="" className="px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none">
        <option value="" disabled>Choose a course</option>
        {courses.map((c) => (
          <option key={c.slug} value={c.slug}>{c.title}</option>
        ))}
      </select>
      <textarea name="message" rows="4" placeholder="How can we help?" className="px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none resize-none" />
      <button disabled={submitting} className="btn-primary disabled:opacity-60">
        {submitting ? "Sending..." : "Send enquiry"}
      </button>
      <p className="text-xs text-slate-500">By submitting, you agree to be contacted about our courses. We won't share your details.</p>
    </form>
  );
}
