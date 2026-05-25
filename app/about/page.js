import Link from "next/link";

export const metadata = {
  title: "About BookCourse",
  description: "Learn about BookCourse, offering interactive training to help you grow and succeed."
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-bg text-white py-20">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500 text-white text-[11px] uppercase tracking-[0.18em] font-bold rounded">Welcome to BookCourse</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-6 leading-tight">Discover the Essence of BookCourse</h1>
          <p className="mt-5 text-ink-200 max-w-3xl mx-auto text-[17px] leading-relaxed">At BookCourse.co.uk we deliver accredited, expert-led training to help thousands of learners launch and advance careers in security, construction and first aid.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-heading mt-3">Empowering learners across the UK</h2>
            <p className="text-ink-600 mt-6 leading-[1.8] text-[16px]">At BookCourse.co.uk, we are dedicated to empowering individuals with the skills and knowledge needed to excel in their careers. You will discover a wide range of training programs that cater to various industries, from security to construction and beyond. Our programs focus on practical, hands-on learning and expert instruction.</p>
            <Link href="/sia-courses" className="btn-accent mt-7">View All SIA Courses</Link>
          </div>
          <div className="lg:col-span-6">
            <img src="https://bookcourse.co.uk/wp-content/uploads/2024/11/About-Bookcourse.webp" alt="About BookCourse" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-ink-100 border-y border-ink-200">
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 gap-8">
          <div className="card p-8 bg-white">
            <h3 className="font-display text-[22px] font-bold text-ink-900">Our Mission</h3>
            <p className="text-ink-600 mt-3 leading-relaxed">Our mission is to deliver high-quality, accessible training that equips individuals with the skills they need to excel in their chosen fields.</p>
          </div>
          <div className="card p-8 bg-white">
            <h3 className="font-display text-[22px] font-bold text-ink-900">Our Vision</h3>
            <p className="text-ink-600 mt-3 leading-relaxed">To be a leading platform in professional education, inspiring lifelong learning and empowering individuals to reach their full potential.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Our Values</span>
            <h2 className="section-heading mt-3">Principles That Guide Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-7">
              <h3 className="font-display text-[17px] font-bold text-ink-900">Empowerment Through Education</h3>
              <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">Equipping learners with the tools and knowledge they need to thrive.</p>
            </div>
            <div className="card p-7">
              <h3 className="font-display text-[17px] font-bold text-ink-900">Commitment to Quality</h3>
              <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">Courses developed with the highest standards in mind.</p>
            </div>
            <div className="card p-7">
              <h3 className="font-display text-[17px] font-bold text-ink-900">Accessibility for All</h3>
              <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">Education accessible to everyone with flexible learning options.</p>
            </div>
            <div className="card p-7">
              <h3 className="font-display text-[17px] font-bold text-ink-900">Practical Hands-On Learning</h3>
              <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">Real-world skills through practical training.</p>
            </div>
            <div className="card p-7">
              <h3 className="font-display text-[17px] font-bold text-ink-900">Continuous Improvement</h3>
              <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">We constantly evolve our programs to stay current.</p>
            </div>
            <div className="card p-7">
              <h3 className="font-display text-[17px] font-bold text-ink-900">Student-Centered Approach</h3>
              <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">Learners are at the heart of what we do.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
