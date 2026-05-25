import Link from "next/link";
import CourseCard from "../components/CourseCard";
import { coursesByCategory } from "@/lib/courses";

export const metadata = {
  title: "Construction Courses",
  description: "Forklift training, CPCS A73 traffic marshall, CSCS card preparation and online construction courses across London."
};

export default function ConstructionCourses() {
  const list = coursesByCategory("Construction");
  return (
    <>
      <section className="hero-bg text-white py-20">
        <div className="container-px mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500 text-white text-[11px] uppercase tracking-[0.18em] font-bold rounded">Construction Training</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-6 leading-tight max-w-3xl">Construction Training Courses</h1>
          <p className="mt-5 text-ink-200 max-w-2xl text-[17px] leading-relaxed">From CSCS card preparation to CPCS A73 and forklift training - everything you need to start or advance a UK construction career.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#courses" className="btn-accent">View All Courses</Link>
            <Link href="/contact" className="btn-outline-white">Talk to an advisor</Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Why Train With Us</span>
            <h2 className="section-heading mt-3">Recognised on every UK construction site</h2>
            <p className="section-sub">Industry-aligned certification that opens doors</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="card p-7 text-center">
              <div className="font-display font-bold text-[17px] text-ink-900">CITB and CPCS Aligned</div>
              <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">Our content matches the requirements set by CITB and CPCS standards.</p>
            </div>
            <div className="card p-7 text-center">
              <div className="font-display font-bold text-[17px] text-ink-900">Fast Certification</div>
              <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">Most courses complete in 1-2 days. CSCS card test can be done in a single day.</p>
            </div>
            <div className="card p-7 text-center">
              <div className="font-display font-bold text-[17px] text-ink-900">Real Job Pathways</div>
              <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">Tier 1 contractor sites, HS2, warehousing and logistics - your certificate gets you in.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="courses" className="py-20 bg-ink-100 border-y border-ink-200">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Construction Courses</span>
            <h2 className="section-heading mt-3">All Construction Training</h2>
            <p className="section-sub">{list.length} courses available</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="eyebrow">Need Help Choosing?</span>
          <h2 className="section-heading mt-3">Not sure which course suits you?</h2>
          <p className="text-ink-600 mt-5 max-w-2xl mx-auto text-[16px] leading-relaxed">Speak to our team and we will help match the right card and certification to the work you want to do.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-accent">Contact a Course Advisor</Link>
          </div>
        </div>
      </section>
    </>
  );
}
