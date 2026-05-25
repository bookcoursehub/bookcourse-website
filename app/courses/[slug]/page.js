import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "@/app/components/ContactForm";
import CourseCard from "@/app/components/CourseCard";
import { courses, getCourse } from "@/lib/courses";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = getCourse(params.slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary
  };
}

export default function CoursePage({ params }) {
  const course = getCourse(params.slug);
  if (!course) notFound();
  const related = courses.filter((c) => c.category === course.category && c.slug !== course.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="hero-bg text-white">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-20">
          <div>
            <Link href="/courses" className="text-sm text-ink-300 hover:text-white transition-colors inline-flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              Back to all courses
            </Link>
            <span className="inline-flex items-center gap-2 mt-5 px-3 py-1.5 bg-accent-500 text-white text-[11px] uppercase tracking-[0.18em] font-bold rounded">
              {course.category}
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-5xl font-bold leading-tight">{course.title}</h1>
            <p className="mt-5 text-ink-200 max-w-xl text-[17px] leading-relaxed">{course.summary}</p>
            <div className="mt-7 flex flex-wrap gap-3 items-center">
              <div className="px-5 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur">
                <div className="text-[11px] uppercase tracking-wider text-ink-300 font-bold">Duration</div>
                <div className="text-[17px] font-bold mt-0.5">{course.duration}</div>
              </div>
              <div className="px-5 py-3 rounded-lg bg-accent-500 text-white">
                <div className="text-[11px] uppercase tracking-wider opacity-90 font-bold">Price from</div>
                <div className="text-[20px] font-extrabold mt-0.5">£{course.price.toFixed(2)}</div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#enquire" className="btn-accent">Book This Course</a>
              <a href={`tel:${site.phoneRaw}`} className="btn-outline-white">Call {site.phone}</a>
            </div>
          </div>
          <div className="relative">
            <img
              src={course.image}
              alt={course.title}
              className="relative w-full h-[420px] object-cover rounded-lg shadow-2xl border-2 border-accent-500"
            />
          </div>
        </div>
      </section>

      {/* COURSE CONTENT */}
      <section className="py-20 bg-white">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 prose-brand">
            <h2>About this course</h2>
            <p>{course.description}</p>
            <h2>What you'll learn</h2>
            <ul>
              {course.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <h2>Outcomes & career routes</h2>
            <ul>
              {course.outcomes.map((o) => <li key={o}>{o}</li>)}
            </ul>
          </div>
          <aside className="space-y-6" id="enquire">
            <div className="card p-6">
              <h3 className="font-display text-[19px] font-bold text-ink-900">Quick facts</h3>
              <dl className="mt-5 space-y-3 text-[14px]">
                <div className="flex justify-between border-b border-ink-200 pb-3">
                  <dt className="text-ink-500">Duration</dt>
                  <dd className="font-semibold text-ink-900">{course.duration}</dd>
                </div>
                <div className="flex justify-between border-b border-ink-200 pb-3">
                  <dt className="text-ink-500">Price</dt>
                  <dd className="font-semibold text-ink-900">£{course.price.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between border-b border-ink-200 pb-3">
                  <dt className="text-ink-500">Category</dt>
                  <dd className="font-semibold text-ink-900">{course.category}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-500">Format</dt>
                  <dd className="font-semibold text-ink-900">In-person & online</dd>
         