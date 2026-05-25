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
      <div className="hidden md:block bg-ink-100 text-ink-700 text-[13px] border-b border-ink-200">
        <div className="container-px mx-auto max-w-7xl flex justify-between items-center py-2.5">
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phoneRaw}`} className="hover:text-accent-600 transition-colors font-medium">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="hidden lg:inline hover:text-accent-600 transition-colors font-medium">{site.email}</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500">★</span>
            <span className="font-semibold text-ink-900">{site.rating}</span>
            <span className="text-ink-600">from {site.reviewCount} reviews</span>
          </div>
        </div>
      </div>
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between py-5">
        <Link href="/" className="flex items-center">
          <div className="leading-none">
            <div className="text-[26px] font-display font-extrabold text-ink-900 tracking-tight">Book<span className="text-accent-500">Course</span></div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-bold mt-1.5">UK Training College</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="px-3.5 py-2 text-[14px] font-semibold text-ink-700 hover:text-accent-600 transition-colors">{item.label}</Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact" className="btn-accent !py-2.5 !px-5 text-[13px]">Book a Course</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-ink-900" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/></svg>
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-ink-200 bg-white">
          <div className="container-px mx-auto max-w-7xl py-3 flex flex-col">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-3 px-2 text-ink-700 hover:text-accent-600 hover:bg-ink-100 rounded font-medium">{item.label}</Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-accent mt-3 text-center">Book a Course</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
