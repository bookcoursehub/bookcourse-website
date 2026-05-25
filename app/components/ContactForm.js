"use client";
import { useState } from "react";
import { courses } from "@/lib/courses";

export default function ContactForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
    e.target.reset();
  }

  if (submitted) {
    return (
      <div className="p-7 rounded-lg bg-brand-50 border border-brand-200">
        <div className="flex items-center gap-2 text-brand-800">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <h3 className="font-display font-bold text-[18px]">Thank you for your message. It has been sent.</h3>
        </div>
        <p className="text-[14px] text-ink-700 mt-2 leading-relaxed">We aim to respond within 1-2 hours - Monday to Friday between 09:00 - 17:30.</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3.5 rounded border border-ink-300 bg-white text-ink-900 text-[15px] focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition placeholder:text-ink-400";

  return (
    <form onSubmit={onSubmit} className={`${compact ? "" : "p-8 bg-white rounded-lg shadow-elegant border border-ink-200"}`}>
      {!compact && (
        <div className="mb-6">
          <span className="eyebrow">Talk to BookCourse</span>
          <h3 className="font-display text-[28px] font-bold text-brand-900 mt-2">Discuss your training needs</h3>
        </div>
      )}
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[12px] uppercase tracking-wider text-ink-600 font-bold mb-1.5">Full name *</label>
            <input required name="name" placeholder="Your full name" className={inputClass} />
          </div>
          <div>
            <label className="block text-[12px] uppercase tracking-wider text-ink-600 font-bold mb-1.5">Phone *</label>
            <input required name="phone" type="tel" placeholder="Phone number" className={inputClass} />
          </div>
        </div>
        <div>
          <label className="block text-[12px] uppercase tracking-wider text-ink-600 font-bold mb-1.5">Email *</label>
          <input required name="email" type="email" placeholder="you@example.com" className={inputClass} />
        </div>
        <div>
          <label className="block text-[12px] uppercase tracking-wider text-ink-600 font-bold mb-1.5">Course of interest</label>
          <select name="course" defaultValue="" className={inputClass}>
            <option value="" disabled>Choose a course...</option>
            {courses.map((c) => (
              <option key={c.slug} value={c.slug}>{c.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[12px] uppercase tracking-wider text-ink-600 font-bold mb-1.5">Your message</label>
          <textarea name="message" rows="4" placeholder="Tell us about your training needs..." className={`${inputClass} resize-none`} />
        </div>
        <button disabled={submitting} className="btn-accent w-full md:w-auto disabled:opacity-60 mt-2">
          {submitting ? "Sending..." : "Send Message"}
        </button>
        <p className="text-[12px] text-ink-500 leading-relaxed">BookCourse aim to respond within 1-2 hours - Monday to Friday between 09:00 - 17:30.</p>
      </div>
    </form>
  );
}
