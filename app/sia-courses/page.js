import Link from "next/link";
import CourseCard from "../components/CourseCard";
import { coursesByCategory } from "@/lib/courses";

export const metadata = {
  title: "SIA Courses",
  description: "Explore SIA courses including Door Supervisor, Security Guard, CCTV, Refresher and Trainer Instructor training."
};

const faqs = [
  { q: "Who can benefit from these courses?", a: "These SIA courses are perfect for anyone looking to start or grow a career in security - whether it is as a Door Supervisor, Security Guard, CCTV Operator, or even a Trainer." },
  { q: "What experience is required to enroll?", a: "Most SIA courses do not need any prior experience. You just need to be 18+, have the right to work in the UK, and a good level of English." },
  { q: "Are these courses available online?", a: "All SIA courses must be attended in person due to mandatory practical assessments." },
  { q: "How long does each course take?", a: "SIA Door Supervisor - 6 days. SIA Security Guard - 4 days. SIA CCTV - 3 days. SIA Refresher - 2 days. SIA Trainer - around 7 days." }
];

export default function SIACourses() {
  const list = coursesByCategory("SIA");
  return (
    <>
      <section className="hero-bg text-white py-20">
        <div className="container-px mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500 text-white text-[11px] uppercase tracking-[0.18em] font-bold rounded">SIA Licence</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-6 leading-tight max-w-3xl">Advance Your Career</h1>
          <p className="mt-5 text-ink-200 max-w-2xl text-[17px] leading-relaxed">Get certified for top security roles in the UK. Choose from SIA Door Supervisor, Security Guard, CCTV Operator and Trainer Instructor programmes.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#courses" className="btn-accent">View All Courses</Link>
            <Link href="/contact" className="btn-outline-white">Talk to an advisor</Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">SIA Licensing</span>
            <h2 className="section-heading mt-3">How to Get Your SIA Licence</h2>
            <p className="section-sub">A clear path to a career in UK security</p>
            <ul className="mt-7 space-y-4 text-[15px] text-ink-700">
              <li className="flex gap-3"><span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent-500 text-white text-[13px] font-bold flex items-center justify-center">1</span><span><strong className="text-ink-900">SIA Door Supervisor Licence</strong> - Qualify for security roles.</span></li>
              <li className="flex gap-3"><span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent-500 text-white text-[13px] font-bold flex items-center justify-center">2</span><span><strong className="text-ink-900">SIA Security Guard Licence</strong> - Get licensed for guard roles.</span></li>
              <li className="flex gap-3"><span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent-500 text-white text-[13px] font-bold flex items-center justify-center">3</span><span><strong className="text-ink-900">SIA CCTV Course Licence</strong> - Get licensed for surveillance roles.</span></li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <img src="https://bookcourse.co.uk/wp-content/uploads/2024/11/Obtain-SIA-licence-uk.webp" alt="How to obtain SIA licence in the UK" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <section id="courses" className="py-20 bg-ink-100 border-y border-ink-200">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">SIA Courses</span>
            <h2 className="section-heading mt-3">All SIA Training Courses</h2>
            <p className="section-sub">{list.length} courses available</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="eyebrow">Your Next Step</span>
          <h2 className="section-heading mt-3">Boost Your Security Career</h2>
          <p className="text-ink-600 mt-6 leading-[1.8] text-[16px] max-w-3xl mx-auto">Earn your SIA Licence with expert training courses, designed for roles like CCTV Operator, Door Supervisor and Security Guard.</p>
        </div>
      </section>
      <section className="py-20 bg-ink-100 border-t border-ink-200">
        <div className="container-px mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <span className="eyebrow">Common Questions</span>
            <h2 className="section-heading mt-3">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5 rounded-lg border border-ink-200 bg-white">
                <summary className="cursor-pointer font-semibold text-ink-900 flex justify-between items-center text-[15px]">
                  <span>{f.q}</span>
                  <span className="text-accent-500 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-ink-600 leading-relaxed text-[14px]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
