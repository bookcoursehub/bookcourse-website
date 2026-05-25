import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "About BookCourse",
  description: "Learn about BookCourse, the platform offering interactive book-based learning experiences to help you grow and succeed."
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-bg text-white py-20">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500 text-white text-[11px] uppercase tracking-[0.18em] font-bold rounded">
            Welcome to BookCourse.co.uk
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-bold mt-6 leading-tight">Discover the Essence of BookCourse</h1>
          <p className="mt-5 text-ink-200 max-w-3xl mx-auto text-[17px] leading-relaxed">At BookCourse.co.uk we deliver accredited, expert-led training to help thousands of learners launch and advance careers in security, construction and first aid.</p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 bg-white">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-heading mt-3">Empowering learners across the UK</h2>
            <p className="text-ink-600 mt-6 leading-[1.8] text-[16px]">
              At BookCourse.co.uk, we are dedicated to empowering individuals with the skills and knowledge needed to excel in their careers. You'll discover a wide range of training programs that cater to various industries, from security to construction and beyond. Our programs focus on practical, hands-on learning and expert instruction.
            </p>
            <p className="text-ink-600 mt-4 leading-[1.8] text-[16px]">
              We aim to make education accessible and impactful for everyone. Join us on a journey of growth and success as you take the next step in your professional development.
            </p>
            <Link href="/sia-courses" className="btn-accent mt-7">View All SIA Courses</Link>
          </div>
          <div className="lg:col-span-6">
            <img
              src="https://bookcourse.co.uk/wp-content/uploads/2024/11/About-Bookcourse.webp"
              alt="About BookCourse"
              className="w-full rounded-lg shadow-lg"
      