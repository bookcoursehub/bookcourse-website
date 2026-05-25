export const metadata = {
  title: "FAQs",
  description: "Frequently asked questions about BookCourse training, SIA licences, refresher courses, payments and certificates."
};

const faqs = [
  { q: "How do I obtain an SIA licence in the UK?", a: "Complete an approved training course (such as our SIA Door Supervisor course), pass the required exams, complete a criminal record check and apply online via the SIA website with your documents and fee. Once approved, your licence allows you to work legally in UK security roles." },
  { q: "Do I need a refresher to renew my SIA licence?", a: "Yes. Since 2021 the SIA requires a top-up qualification when renewing a Door Supervisor or Security Guard licence. We offer combined refresher courses that include Emergency First Aid at Work." },
  { q: "What identification do I need to attend a course?", a: "Two forms of photo ID, proof of address dated within the last 3 months and your National Insurance number. Full requirements are emailed when you book." },
  { q: "How long does it take to get my certificate?", a: "Most certificates are issued within 5–10 working days of passing your assessment." },
  { q: "Are your courses accredited?", a: "Yes. Our SIA courses are delivered through Highfield-approved centres. Our construction courses are RTITB / ITSSAR / CPCS aligned, and our first aid courses are Ofqual-recognised." },
  { q: "Do you offer weekend courses?", a: "Yes - many of our SIA and construction courses run weekday and weekend cohorts. Check the booking page for upcoming dates." },
  { q: "What payment methods do you accept?", a: "Card, bank transfer and instalment plans through our partners. Contact us to discuss what suits you." },
  { q: "Can I get a refund?", a: "Yes - see our refund policy. Refunds are available up to 14 days before the course start date." }
];

export default function FAQs() {
  return (
    <>
      <section className="hero-gradient text-white py-16">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Help centre</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Frequently asked questions</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container-px mx-auto max-w-3xl space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 rounded-2xl border border-slate-200 bg-white open:bg-slate-50">
              <summary className="cursor-pointer font-semibold text-slate-900 flex justify-between items-center">
                <span>{f.q}</span>
                <span className="text-brand-700 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="mt-3 text-slate-700 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
