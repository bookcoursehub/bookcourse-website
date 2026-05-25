import Link from "next/link";
import CourseCard from "../components/CourseCard";
import { coursesByCategory } from "@/lib/courses";

export const metadata = {
  title: "SIA Refresher Training",
  description: "Renew your SIA Door Supervisor or Security Guard licence with our combined Refresher and First Aid courses."
};

const faqs = [
  { q: "Do I need a refresher to renew my SIA licence?", a: "Yes. Since 2021 the SIA requires a top-up qualification when renewing a Door Supervisor or Security Guard licence." },
  { q: "How long does the refresher take?", a: "Door Supervisor Refresher takes 2 days. Security Guard Refresher takes 1 day. Both include Emergency First Aid at Work." },
  { q: "When should I book my refresher?", a: "Book up to 4 months before your current SIA licence expires." }
];

export default function SIARefresher() {
  const list = coursesByCategory("SIA Refresher");
  return (
    <>
      <section className="hero-bg text-white py-20">
        <div className="container-px mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500 text-white text-[11px] uppercase tracking-[0.18em] font-bold rounded">Licence Renewal</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-6 leading-tight max-w-3xl">SIA Refresher Training</h1>
          <p className="mt-5 text-ink-200 max-w-2xl text-[17px] leading-relaxed">Renew your SIA Door Supervisor or Security Guard licence with our combined Refresher and Emergency First Aid at Work courses.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#courses" className="btn-accent">View Refresher Courses</Link>
            <Link href="/contact" className="btn-outline-white">Talk to an advisor</Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">Important</span>
            <h2 className="section-heading mt-3">Is your SIA licence near expiry?</h2>
            <p className="text-ink-600 mt-6 leading-[1.8] text-[16px]">The SIA requires a top-up qualification when renewing your Door Supervisor or Security Guard licence. Our courses include Emergency First Aid at Work.</p>
          </div>
          <div className="lg:col-span-6">
            <img src="https://bookcourse.co.uk/wp-content/uploads/2024/11/Obtain-SIA-licence-uk.webp" alt="SIA licence renewal" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <section id="courses" className="py-20 bg-ink-100 border-y border-ink-200">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Refresher Courses</span>
            <h2 className="section-heading mt-3">Choose Your Refresher</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {list.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container-px mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <span className="eyebrow">Common Questions</span>
            <h2 className="section-heading mt-3">Refresher FAQs</h2>
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
