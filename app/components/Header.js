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
  { label: "Popular", href: "/popular-courses" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="bg-brand-900 text-white text-xs">
        <div className="container-px mx-auto max-w-7xl flex justify-between items-center py-1.5">
          <span className="hidden sm:inline">
            Call us: <a href={`tel:${site.phoneRaw}`} className="font-semibold hover:text-accent-500">{site.phone}</a>
          </span>
          <span className="flex items-center gap-3">
            <span className="hidden md:inline">⭐ {site.rating} stars · {site.reviewCount} reviews</span>
            <a href={`mailto:${site.email}`} className="hover:text-accent-500">{site.email}</a>
          </span>
        </div>
      </div>
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-700 to-brand-900 text-white flex items-center justify-center font-extrabold text-lg">BC</div>
          <div className="leading-tight">
            <div className="text-lg font-extrabold text-brand-900">BookCourse</div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500">.co.uk</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-700 rounded-lg hover:bg-slate-50">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="btn-primary !py-2 !px-4 text-sm">Book now</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-slate-700" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container-px mx-auto max-w-7xl py-3 flex flex-col">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 px-2 text-slate-700 hover:text-brand-700 hover:bg-slate-50 rounded">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-3 text-center">Book now</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
