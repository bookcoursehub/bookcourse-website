import Link from "next/link";
import CourseCard from "./components/CourseCard";
import ContactForm from "./components/ContactForm";
import TrustBar from "./components/TrustBar";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import { courses, featuredCourses, categories } from "@/lib/courses";
import { site } from "@/lib/site";

export const metadata = {
  title: "BookCourse | SIA, Construction, First Aid Training in the UK",
  description: site.description
};

export default function Home() {
  const featured = featuredCourses();
  return (
    <>
      <section className="hero-bg text-white relative">
        <div className="container-px mx-auto max-w-7xl relative grid lg:grid-cols-12 gap-12 items-center py-24 lg:py-32">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500 text-white text-[11px] uppercase tracking-[0.18em] font-bold rounded">Join Us Today - Boost Your Career</span>
            <h1 className="mt-7 font-display text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem] font-bold leading-[1.1] tracking-tight">Find Your Next Course</h1>
            <h2 className="font-display text-[18px] md:text-[20px] font-medium text-ink-200 mt-5 leading-relaxed">Certified online and in-person training in SIA, Construction and First Aid - delivered by expert trainers, designed for real UK jobs.</h2>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/courses" className="btn-accent">View All Courses</Link>
              <Link href="/about" className="btn-outline-white">About BookCourse</Link>
            </div>
            <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="font-display text-3xl font-bold text-white">1000+</div>
                <div className="text-[12px] uppercase tracking-wider text-ink-300 mt-1 font-semibold">Learners Licenced</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-white">{site.rating}<span className="text-accent-400">/5</span></div>
                <div className="text-[12px] uppercase tracking-wider text-ink-300 mt-1 font-semibold">Average Rating</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-white">100%</div>
                <div className="text-[12px] uppercase tracking-wider text-ink-300 mt-1 font-semibold">Pass Support</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border-2 border-accent-500 shadow-2xl">
              <img src="https://bookcourse.co.uk/wp-content/uploads/2024/11/Security-Courses-in-London.webp" alt="Security courses in London" className="w-full h-[450px] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-brand-900/85 backdrop-blur">
                <div className="text-[11px] uppercase tracking-[0.18em] text-accent-400 font-bold">Next Intake</div>
                <div className="text-white font-display font-bold text-[18px] mt-1">SIA Door Supervisor starts every Monday</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-24 bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Why Trust Us</span>
            <h2 className="section-heading mt-3">Why Study at BookCourse</h2>
            <p className="section-sub">Expert training, flexible learning, recognised certification.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-7 text-center">
              <div className="font-display font-bold text-[17px] text-ink-900">Certificate Guarantee</div>
              <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">Earn an accredited certificate upon course completion - guaranteed.</p>
            </div>
            <div className="card p-7 text-center">
              <div className="font-display font-bold text-[17px] text-ink-900">Flexible Learning</div>
              <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">Study at your own pace - weekday and weekend cohorts available.</p>
            </div>
            <div className="card p-7 text-center">
              <div className="font-display font-bold text-[17px] text-ink-900">Expert Trainers</div>
              <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">Industry professionals with real UK security and construction experience.</p>
            </div>
            <div className="card p-7 text-center">
              <div className="font-display font-bold text-[17px] text-ink-900">100% Pass Support</div>
              <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">We support you all the way - re-sit included if you need it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink-100 border-y border-ink-200">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Our Courses</span>
            <h2 className="section-heading mt-3">All the skills you need in one place</h2>
            <p className="section-sub">Discover a wide range of skills empowering your learning journey.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => {
              const count = courses.filter((c) => c.category === cat.key).length;
              return (
                <Link key={cat.key} href={cat.href} className="card p-7 group bg-white">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-accent-600 font-bold">{count} courses</div>
                  <h3 className="font-display text-[20px] font-bold text-ink-900 mt-3">{cat.label}</h3>
                  <p className="text-[14px] text-ink-600 mt-3 leading-relaxed">Explore our {cat.label.toLowerCase()} training pathway with accredited certification.</p>
                  <div className="mt-5 text-[13px] font-bold text-accent-600 group-hover:text-accent-700 transition-colors">Learn more →</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-xl">
              <span className="eyebrow">We Provide</span>
              <h2 className="section-heading mt-3">Most Popular Demanding Courses</h2>
              <p className="section-sub">Top qualifications booked this month</p>
            </div>
            <Link href="/courses" className="btn-outline self-start md:self-end">View All Courses</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink-100 border-y border-ink-200">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6">
            <img src="https://bookcourse.co.uk/wp-content/uploads/2024/11/Obtain-SIA-licence-uk.webp" alt="How to obtain SIA licence in the UK" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="lg:col-span-6">
            <span className="eyebrow">SIA Licensing</span>
            <h2 className="section-heading mt-3">How to Obtain an SIA Licence</h2>
            <p className="text-ink-600 mt-6 text-[16px] leading-[1.8]">To obtain an SIA licence in the UK, complete an approved training course, pass a criminal record check, and apply online via the SIA website with the required documents and fee.</p>
            <ul className="mt-6 space-y-3 text-[15px] text-ink-700">
              <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500 text-white text-[12px] font-bold flex items-center justify-center">1</span>Complete an approved SIA training course</li>
              <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500 text-white text-[12px] font-bold flex items-center justify-center">2</span>Pass the required exams (theory and practical)</li>
              <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500 text-white text-[12px] font-bold flex items-center justify-center">3</span>Submit your licence application on the SIA website</li>
              <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500 text-white text-[12px] font-bold flex items-center justify-center">4</span>Receive your 3-year SIA Licence by post</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/sia-courses" className="btn-accent">View SIA Courses</Link>
              <Link href="/contact" className="btn-ghost">Talk to an advisor</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">About BookCourse</span>
            <h2 className="section-heading mt-3">Your Pathway to Professional Success</h2>
            <p className="text-ink-600 mt-6 text-[16px] leading-[1.8]">At BookCourse.co.uk, we provide top-quality, accredited training to help you advance your career. With expert-led courses and flexible learning options, we equip you with the skills and certifications needed to excel in today competitive job market.</p>
            <ul className="mt-6 space-y-3 text-[15px] text-ink-700">
              <li className="flex items-center gap-3"><span className="text-accent-500 font-bold">✓</span>Globally Recognised Certifications</li>
              <li className="flex items-center gap-3"><span className="text-accent-500 font-bold">✓</span>Tailored Learning Schedules</li>
              <li className="flex items-center gap-3"><span className="text-accent-500 font-bold">✓</span>Expert-Led Training</li>
              <li className="flex items-center gap-3"><span className="text-accent-500 font-bold">✓</span>Seamless Online Registration</li>
              <li className="flex items-center gap-3"><span className="text-accent-500 font-bold">✓</span>Affordable, High-Value Courses</li>
            </ul>
            <Link href="/about" className="btn-primary mt-8">About BookCourse</Link>
          </div>
          <div className="lg:col-span-6">
            <img src="https://bookcourse.co.uk/wp-content/uploads/2024/11/About-Bookcourse.webp" alt="About BookCourse" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <Team />
      <Testimonials />

      <section className="py-20 bg-accent-500 text-white">
        <div className="container-px mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight text-white">Start your security career today</h2>
          <p className="text-white/95 mt-5 max-w-2xl mx-auto text-[16px] leading-relaxed">Earn your SIA Licence with expert training - designed for roles like Door Supervisor, Security Guard, CCTV Operator and more.</p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link href="/courses" className="bg-white text-accent-600 px-7 py-3.5 rounded-md font-semibold text-[14px] tracking-wide hover:bg-ink-100">Reserve Your Spot</Link>
            <a href={`tel:${site.phoneRaw}`} className="btn-outline-white">Call {site.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <span className="eyebrow">Get in Touch</span>
            <h2 className="section-heading mt-3">Fill out the form and we will get back to you shortly</h2>
            <p className="section-sub">We respond within 1-2 hours</p>
            <div className="mt-8 space-y-5">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-ink-500 font-bold">Phone</div>
                <a href={`tel:${site.phoneRaw}`} className="font-display font-bold text-[18px] text-ink-900 hover:text-accent-600">{site.phone}</a>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-ink-500 font-bold">Email</div>
                <a href={`mailto:${site.email}`} className="font-display font-bold text-[18px] text-ink-900 hover:text-accent-600 break-all">{site.email}</a>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-ink-500 font-bold">Office</div>
                <div className="font-display font-bold text-ink-900 text-[16px]">{site.address}</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
