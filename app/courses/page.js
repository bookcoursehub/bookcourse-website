import Link from "next/link";
import CourseCard from "../components/CourseCard";
import { courses, categories } from "@/lib/courses";

export const metadata = {
  title: "All Courses",
  description: "Browse every SIA, construction, forklift and first aid course available on BookCourse.co.uk."
};

export default function AllCourses() {
  return (
    <>
      <section className="hero-bg text-white py-20">
        <div className="container-px mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500 text-white text-[11px] uppercase tracking-[0.18em] font-bold rounded">Course Catalogue</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-6 leading-tight max-w-3xl">Every Course We Offer</h1>
          <p className="mt-5 text-ink-200 max-w-2xl text-[17px] leading-relaxed">SIA, construction, forklift, traffic marshall and first aid - all accredited, all delivered by expert trainers.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container-px mx-auto max-w-7xl space-y-16">
          {categories.map((cat) => {
            const list = courses.filter((c) => c.category === cat.key);
            if (list.length === 0) return null;
            return (
              <div key={cat.key}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
                  <div>
                    <span className="eyebrow">{cat.label}</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-900 mt-2 leading-tight">{cat.label}</h2>
                  </div>
                  <span className="text-[13px] uppercase tracking-wider text-ink-500 font-semibold">{list.length} courses</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {list.map((c) => <CourseCard key={c.slug} course={c} />)}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="py-20 bg-ink-100 border-t border-ink-200">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="eyebrow">Not sure where to start?</span>
          <h2 className="section-heading mt-3">Talk to a course advisor today</h2>
          <p className="text-ink-600 mt-5 max-w-2xl mx-auto text-[16px] leading-relaxed">Tell us about your goals and we will match you with the right qualification.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-accent">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
