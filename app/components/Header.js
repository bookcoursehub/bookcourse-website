"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "SIA Courses", href: "/sia-courses" },
  { label: "Refresher", href: "/sia-refresher-training" },
  { label: "Construction", href: "/construction-courses" },
  { label: "First Aid", href: "/courses/emergency-first-aid" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_2px_rgba(17,17,17,0.04)]">
      {/* TOP UTILITY BAR — light, professional */}
      <div className="hidden md:block bg-ink-100 text-ink-700 text-[13px] border-b border-ink-200">
        <div className="container-px mx-auto max-w-7xl flex justify-between items-center py-2.5">
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-2 hover:text-accent-600 transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span className="font-medium">{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`} className="hidden lg:flex items-center gap-2 hover:text-accent-600 transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span className="font-medium">{site.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#FFB400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span className="font-semibold text-ink-900">{site.rating}</span>
            <span className="text-ink-600">from {site.reviewCount} verified reviews</span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between py-5">
        <Link href="/" className="flex items-center group">
          <div className="leading-none">
            <div className="text-[26px] font-display font-extrabold text-ink-900 tracking-tight">
              Book<span className="text-accent-500">Course</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-bold mt-1.5">UK Training College</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="px-3.5 py-2 text-[14px] font-semibold text-ink-700 hover:text-accent-600 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${site.phoneRaw}`} className="hidden xl:flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-accent-50 text-accent-600 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-wider text-ink-500 font-bol