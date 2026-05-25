import Link from "next/link";
import { site } from "@/lib/site";
import { courses } from "@/lib/courses";
import { locations } from "@/lib/locations";

export default function Footer() {
  const featured = courses.slice(0, 5);
  return (
    <footer className="bg-brand-950 text-slate-300 mt-20">
      <div className="container-px mx-auto max-w-7xl py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white flex items-center justify-center font-extrabold">BC</div>
            <div>
              <div className="text-lg font-extrabold text-white">BookCourse</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400">.co.uk</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-4">{site.description}</p>
          <p className="text-sm">📞 <a href={`tel:${site.phoneRaw}`} className="hover:text-accent-500">{site.phone}</a></p>
          <p className="text-sm">✉️ <a href={`mailto:${site.email}`} className="hover:text-accent-500">{site.email}</a></p>
          <p className="text-sm mt-2">📍 {site.address}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Courses</h4>
          <ul className="space-y-2 text-sm">
            {featured.map((c) => (
              <li key={c.slug}><Link href={`/courses/${c.slug}`} className="hover:text-white">{c.shortTitle}</Link></li>
            ))}
            <li><Link href="/courses" className="hover:text-accent-500">View all courses →</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/popular-courses" className="hover:text-white">Popular Courses</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/faqs" className="hover:text-white">FAQs</Link></li>
          </ul>
          <h4 className="text-white font-semibold mt-6 mb-3">Locations</h4>
          <ul className="space-y-2 text-sm">
            {locations.map((l) => (
              <li key={l.slug}><Link href={`/locations/${l.slug}`} className="hover:text-white">{l.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faqs" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/refund-policy" className="hover:text-white">Refund Policy</Link></li>
          </ul>
          <div className="mt-6 p-4 rounded-xl bg-brand-900/60 border border-brand-800">
            <div className="text-white text-sm font-semibold">⭐ {site.rating}/5 from {site.reviewCount} reviews</div>
            <p className="text-xs text-slate-400 mt-1">Trusted across the UK for accredited training.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-900">
        <div className="container-px mx-auto max-w-7xl py-5 text-xs flex flex-col md:flex-row justify-between items-center gap-2 text-slate-400">
          <p>© {new Date().getFullYear()} BookCourse.co.uk. All rights reserved.</p>
          <p>Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
