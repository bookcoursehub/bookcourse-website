import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with BookCourse.co.uk - call, email or send us a message."
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-bg text-white py-20">
        <div className="container-px mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500 text-white text-[11px] uppercase tracking-[0.18em] font-bold rounded">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-bold mt-6 leading-tight max-w-3xl">Talk to a Course Advisor</h1>
          <p className="mt-5 text-ink-200 max-w-2xl text-[17px] leading-relaxed">Phone, email or web form — whichever works best for you. BookCourse aim to respond within 1-2 hours, Monday to Friday between 09:00 - 17:30.</p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20 bg-white">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">How to reach us</span>
            <h2 className="section-heading mt-3">We're here to help</h2>
            <p className="section-sub">Choose what works for you</p>
            <div className="mt-8 space-y-5">
              <div className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-accent-50 text-accent-600 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-ink-500 fon