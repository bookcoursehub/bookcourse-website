import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Articles, news and guides on SIA training, construction certification and first aid in the UK."
};

const posts = [
  { slug: "how-to-get-your-sia-licence", title: "How to get your SIA licence in 2026", excerpt: "A step-by-step guide from training to receiving your card.", category: "SIA", date: "2026-04-12" },
  { slug: "cscs-vs-cpcs", title: "CSCS vs CPCS: what's the difference?", excerpt: "Two of the most-asked-about UK construction cards explained.", category: "Construction", date: "2026-03-22" },
  { slug: "first-aid-renewal", title: "When does your First Aid at Work certificate expire?", excerpt: "And how to renew it without losing your current certification.", category: "First Aid", date: "2026-02-09" },
  { slug: "door-supervisor-job", title: "How much can you earn as a Door Supervisor in London?", excerpt: "Pay rates, shift patterns and how to find your first role.", category: "SIA", date: "2026-01-30" }
];

export default function Blog() {
  return (
    <>
      <section className="hero-gradient text-white py-16">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Blog</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Career guides & training news</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container-px mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="card p-6">
              <span className="text-xs uppercase tracking-wider text-accent-600 font-semibold">{p.category}</span>
              <h2 className="text-xl font-bold text-slate-900 mt-2">{p.title}</h2>
              <p className="text-sm text-slate-600 mt-2">{p.excerpt}</p>
              <div className="mt-4 flex justify-between items-center text-xs text-slate-500">
                <span>{new Date(p.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</span>
                <Link href="#" className="font-semibold text-brand-700 hover:underline">Read more →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
