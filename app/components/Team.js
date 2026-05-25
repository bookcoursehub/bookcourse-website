const team = [
  {
    name: "Yusuf Ibrahim",
    role: "Founder & Principal",
    bio: "Industry veteran with two decades of UK security and training experience.",
    initials: "YI"
  },
  {
    name: "Sarah Mitchell",
    role: "Head of SIA Training",
    bio: "Highfield-qualified Door Supervisor trainer and conflict management specialist.",
    initials: "SM"
  },
  {
    name: "James Patel",
    role: "Construction Lead",
    bio: "CPCS and RTITB approved instructor for forklift, plant and traffic marshalling.",
    initials: "JP"
  },
  {
    name: "Emma Clarke",
    role: "Course Coordinator",
    bio: "Looks after every learner from enquiry to certification day.",
    initials: "EC"
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Our Team</span>
          <h2 className="section-heading mt-3">The BookCourse senior team</h2>
          <p className="section-sub">Exceeding your expectations</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((p) => (
            <div key={p.name} className="card text-center p-7">
              <div className="w-24 h-24 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center mx-auto font-display font-bold text-2xl mb-5 border-4 border-brand-50">
                {p.initials}
              </div>
              <div className="font-display text-[18px] font-bold text-brand-900">{p.name}</div>
              <div className="text-[12px] uppercase tracking-wider text-accent-600 font-bold mt-1">{p.role}</div>
              <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">{p.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
