import Link from "next/link";

export const metadata = {
  title: "FAQs",
  description: "Frequently asked questions about BookCourse training, SIA licences, refresher courses, payments and certificates."
};

const faqs = [
  { q: "How do I obtain an SIA licence in the UK?", a: "Complete an approved training course (such as our SIA Door Supervisor course), pass the required exams, complete a criminal record check and apply online via the SIA website with your documents and fee." },
  { q: "Do I need a refresher to renew my SIA licence?", a: "Yes. Since 2021 the SIA requires a top-up qualification when renewing a Door Supervisor or Security Guard licence. We offer combined refresher courses that include Emergency First Aid at Work." },
  { q: "Who can apply?", a: "Most SIA courses do not need prior experience. You need to be 18 or older, have the right to work in the UK, and a good level of English." },
  { q: "Are courses online or in person?", a: "All SIA courses must be attended in person due to mandatory practical assessments." },
  { q: "How long does each course take?", a: "SIA Door Supervisor 6 days, Security Guard 4 days, CCTV 3 days, Refresher 2 days, Trainer Instructor around 7 days." },
  { q: "What identification do I need?", a: "Two passport-sized photos, original passport or UK photo driving licence, two proof of address documents dated within the last 3 months." },
  { q: "How long to get my certificate?", a: "Most exam results are available within 10-14 working days. You will be notified by email or SMS once your results are ready." },
  { q: "Are your courses accredited?", a: "Yes. SIA courses through Highfield-approved centres. Construction courses RTITB / CPCS aligned. First aid courses HSE / Ofqual recognised." },
  { q: "Do you offer weekend courses?", a: "Yes - many SIA and construction courses run weekday and weekend cohorts." },
  { q: "What payment methods do you accept?", a: "Card, bank transfer and instalment plans through our partners." },
  { q: "How do I book a course?", a: "Choose your preferred location (Canary Wharf, Whitechapel or Park Royal), select your date, click Book Now and fill in your billing details. Or call 020 8050 4108." },
  { q: "Can I get a refund?", a: "Yes - see our Refund Policy. Refunds are available up to 14 days before the course start date." }
];

export default function FAQs() {
  return (
    <>
      <section className="hero-bg text-white py-20">
        <div className="container-px mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500 text-white text-[11px] uppercase tracking-[0.18em] font-bold rounded">Help Centre</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-6 leading-tight max-w-3xl">Frequently Asked Questions</h1>
          <p className="mt-5 text-ink-200 max-w-2xl text-[17px] leading-relaxed">Quick answers to the questions our learners ask most. Can not find what you need? Contact our team.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container-px mx-auto max-w-3xl space-y-3">
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
      </section>
      <section className="py-16 bg-ink-100 border-t border-ink-200">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="eyebrow">Still have questions?</span>
          <h2 className="section-heading mt-3">We are here to help</h2>
          <p className="text-ink-600 mt-5 max-w-2xl mx-auto text-[16px] leading-relaxed">Call us on 020 8050 4108 or send a message - our team aims to respond within 1-2 hours.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-accent">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
