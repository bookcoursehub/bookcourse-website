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
      <section className="hero-gradient text-white">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center py-14 lg:py-20">
          <div>
            <Link href="/courses" className="text-sm text-slate-300 hover:text-white">← Back to all courses</Link>
            <span className="inline-block mt-4 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold border border-white/20">{course.category}</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">{course.title}</h1>
            <p className="mt-4 text-slate-200 max-w-xl">{course.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur">
                <div className="text-xs text-slate-300">Duration</div>
                <div className="text-lg font-bold">{course.duration}</div>
              </div>
              <div className="px-4 py-2 rounded-xl bg-accent-500 text-brand-950">
                <div className="text-xs">Price from</div>
                <div className="text-lg font-extrabold">£{course.price.toFixed(2)}</div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#enquire" className="btn-accent">Book this course</a>
              <a href={`tel:${site.phoneRaw}`} className="btn-outline !border-white !text-white hover:!bg-white hover:!text-brand-900">📞 {site.phone}</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent-500/20 rounded-3xl blur-2xl"></div>
            <img src={course.image} alt={course.title} className="relative w-full h-[380px] object-cover rounded-3xl shadow-xl border border-white/10" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-3 gap-10">
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
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="text-xl font-extrabold text-slate-900">Quick facts</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2"><dt className="text-slate-500">Duration</dt><dd className="font-semibold">{course.duration}</dd></div>
                <div className="flex justify-between border-b border-slate-200 pb-2"><dt className="text-slate-500">Price</dt><dd className="font-semibold">£{course.price.toFixed(2)}</dd></div>
                <div className="flex justify-between border-b border-slate-200 pb-2"><dt className="text-slate-500">Category</dt><dd className="font-semibold">{course.category}</dd></div>
                <div className="flex justify-between"><dt className="text-slate-500">Format</dt><dd className="font-semibold">In-person & online options</dd></div>
              </dl>
            </div>
            <ContactForm compact />
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container-px mx-auto max-w-7xl">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Related courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((c) => <CourseCard key={c.slug} course={c} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
