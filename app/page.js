import Link from "next/link";
import CourseCard from "./components/CourseCard";
import ContactForm from "./components/ContactForm";
import { courses, featuredCourses, categories } from "@/lib/courses";
import { site } from "@/lib/site";

export const metadata = {
  title: "BookCourse | Security, Construction, First Aid & Refresher Training",
  description: site.description
};

export default function Home() {
  const featured = featuredCourses();
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient text-white">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-accent-500 backdrop-blur border border-white/10">
              ⭐ {site.rating} · {site.reviewCount} reviews · Trusted across the UK
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Boost Your Career.<br/>
              <span className="bg-gradient-to-r from-accent-500 to-yellow-300 bg-clip-text text-transparent">Get Certified.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-200 max-w-xl">
              Accredited SIA, construction, forklift and first aid training across London.
              Practical skills, recognised certificates, real jobs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/courses" className="btn-accent">Browse all courses</Link>
              <Link href="/contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-brand-900">Talk to an advisor</Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div><div className="text-3xl font-extrabold">10+</div><div className="text-xs text-slate-300">Courses</div></div>
              <div><div className="text-3xl font-extrabold">3</div><div className="text-xs text-slate-300">London centres</div></div>
              <div><div className="text-3xl font-extrabold">449</div><div className="text-xs text-slate-300">Happy learners</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent-500/30 to-brand-500/30 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
                alt="Security training in London"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <p className="text-sm text-white">Next intake</p>
                <p className="text-lg font-bold text-white">SIA Door Supervisor starts every Monday</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-px mx-auto max-w-7xl py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { t: "Accredited", d: "Ofqual & SIA approved" },
            { t: "Flexible", d: "Weekday & weekend" },
            { t: "Affordable", d: "From £40" },
            { t: "Career-ready", d: "Real UK job pathways" }
          ].map((x) => (
            <div key={x.t}>
              <div className="text-xl md:text-2xl font-extrabold text-brand-900">{x.t}</div>
              <div className="text-sm text-slate-500">{x.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider">Our Courses</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">All the skills you need in one place</h2>
              <p className="text-slate-600 max-w-2xl mt-3">From SIA security licences to forklift and first aid - explore the courses that fit your career goals.</p>
            </div>
            <Link href="/courses" className="btn-outline self-start md:self-end">View all courses</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const count = courses.filter((c) => c.category === cat.key).length;
              return (
                <Link key={cat.key} href={cat.href} className="card p-6 hover:border-brand-300 hover:-translate-y-0.5 transition">
                  <div className="text-xs uppercase tracking-wider text-accent-600 font-semibold">{count} courses</div>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">{cat.label}</h3>
                  <p className="text-sm text-slate-500 mt-2">Explore the {cat.label.toLowerCase()} pathway →</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="py-20 bg-slate-50">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider">Most Popular</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Featured Courses</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-3">The most-booked training programmes on BookCourse this month.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider">Why BookCourse</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Your pathway to professional success</h2>
            <p className="text-slate-600 mt-4">At BookCourse.co.uk we provide top-quality accredited training to help you advance your career. Expert-led courses, flexible learning options, real certifications.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Globally recognised certifications",
                "Tailored learning schedules",
                "Expert-led training delivered by industry professionals",
                "Seamless online registration",
                "Affordable, high-value courses"
              ].map((x) => (
                <li key={x} className="flex gap-3 text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-sm font-bold">✓</span>
                  {x}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Link href="/about" className="btn-primary">About BookCourse</Link>
              <Link href="/popular-courses" className="btn-ghost">See popular courses →</Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80"
              alt="BookCourse learners"
              className="rounded-3xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-white shadow-2xl border border-slate-100 max-w-xs">
              <div className="text-2xl font-extrabold text-brand-900">⭐ {site.rating}</div>
              <p className="text-sm text-slate-600">Average rating across {site.reviewCount} verified learner reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-900 text-white">
        <div className="container-px mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Start your security career</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">SIA Approved Security Training Courses</h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">Complete training and certification to stand out in the security industry. Door Supervisor, Security Guard, CCTV and refresher courses.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/sia-courses" className="btn-accent">Reserve your spot</Link>
            <Link href="/contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-brand-900">Call an advisor</Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider">Get in touch</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Fill out the form and we'll get back to you shortly</h2>
            <div className="mt-6 space-y-3 text-slate-700">
              <p>📞 <a href={`tel:${site.phoneRaw}`} className="font-semibold hover:text-brand-700">{site.phone}</a></p>
              <p>✉️ <a href={`mailto:${site.email}`} className="font-semibold hover:text-brand-700">{site.email}</a></p>
              <p>📍 {site.address}</p>
              <p>💬 Live chat support</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
