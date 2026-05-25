const testimonials = [
  {
    name: "Daniel O.",
    role: "Door Supervisor, London",
    quote: "BookCourse made getting my SIA licence straightforward. Trainer knew his stuff, six days flew by, and I was on shifts at a Mayfair venue within two weeks of finishing.",
    rating: 5,
    course: "SIA Door Supervisor"
  },
  {
    name: "Aisha K.",
    role: "Site Operative, Birmingham",
    quote: "I needed my CSCS card fast for a contract. Booked the one-day course, passed first time, card landed within ten days. Honest pricing and good admin team.",
    rating: 5,
    course: "CSCS Card"
  },
  {
    name: "Marcus L.",
    role: "Security Officer, Croydon",
    quote: "Did my refresher and First Aid here. Professional setup, clean classroom, no time wasted. Would book again for any future top-ups.",
    rating: 5,
    course: "SIA Refresher"
  }
];

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 text-accent-500">
      {[...Array(n)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-ink-100">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Learner Stories</span>
          <h2 className="section-heading mt-3">What our learners say</h2>
          <p className="section-sub">Real reviews from real careers</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="card p-7 flex flex-col h-full bg-white">
              <Stars n={t.rating} />
              <blockquote className="mt-4 text-ink-700 leading-relaxed text-[15px] flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ink-200">
                <div className="font-display font-bold text-brand-900 text-[16px]">{t.name}</div>
                <div className="text-[12px] text-ink-500 mt-0.5">{t.role}</div>
                <div className="text-[11px] uppercase tracking-wider text-accent-600 mt-2 font-bold">{t.course}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
