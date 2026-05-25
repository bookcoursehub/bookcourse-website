import Link from "next/link";
import { notFound } from "next/navigation";
import CourseCard from "@/app/components/CourseCard";
import ContactForm from "@/app/components/ContactForm";
import { locations, getLocation } from "@/lib/locations";
import { getCourse } from "@/lib/courses";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }) {
  const l = getLocation(params.slug);
  if (!l) return {};
  return { title: l.fullName, description: l.summary };
}

export default function LocationPage({ params }) {
  const loc = getLocation(params.slug);
  if (!loc) notFound();
  const courseObjs = loc.courses.map(getCourse).filter(Boolean);

  return (
    <>
      <section className="hero-gradient text-white py-16">
        <div className="container-px mx-auto max-w-7xl">
          <Link href="/" className="text-sm text-slate-300 hover:text-white">← Home</Link>
          <p className="text-sm font-semibold text-accent-500 uppercase tracking-wider mt-4">Training Location</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">{loc.fullName}</h1>
          <p className="mt-4 text-slate-200 max-w-2xl">{loc.summary}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Courses available at {loc.name}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {courseObjs.map((c) => <CourseCard key={c.slug} course={c} />)}
            </div>
          </div>
          <aside className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="text-lg font-extrabold text-slate-900">Getting here</h3>
              <p className="text-sm text-slate-700 mt-2">{loc.address}</p>
              <p className="text-xs uppercase tracking-wider text-accent-600 font-semibold mt-4">Closest stations</p>
              <ul className="text-sm mt-2 space-y-1 text-slate-700">
                {loc.tubeNearby.map((s) => <li key={s}>• {s}</li>)}
              </ul>
            </div>
            <ContactForm compact />
          </aside>
        </div>
      </section>
    </>
  );
}
