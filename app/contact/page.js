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
      <section className="hero-bg text-white py-20">
        <div className="container-px mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500 text-white text-[11px] uppercase tracking-[0.18em] font-bold rounded">Get in Touch</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-6 leading-tight">Talk to a Course Advisor</h1>
          <p className="mt-5 text-ink-200 max-w-2xl text-[17px] leading-relaxed">Phone, email or web form - whichever works best for you. BookCourse aim to respond within 1-2 hours.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">How to reach us</span>
            <h2 className="section-heading mt-3">We are here to help</h2>
            <p className="section-sub">Choose what works for you</p>
            <div className="mt-8 space-y-5">
              <div className="card p-6">
                <div className="text-[11px] uppercase tracking-wider text-ink-500 font-bold">Call us</div>
                <a href={`tel:${site.phoneRaw}`} className="block mt-2 font-display font-bold text-[20px] text-ink-900 hover:text-accent-600 transition-colors">{site.phone}</a>
                <p className="text-[13px] text-ink-500 mt-1">Mon to Sat, 9am to 7pm</p>
              </div>
              <div className="card p-6">
                <div className="text-[11px] uppercase tracking-wider text-ink-500 font-bold">Email us</div>
                <a href={`mailto:${site.email}`} className="block mt-2 font-display font-bold text-[18px] text-ink-900 hover:text-accent-600 break-all transition-colors">{site.email}</a>
              </div>
              <div className="card p-6">
                <div className="text-[11px] uppercase tracking-wider text-ink-500 font-bold">Visit us</div>
                <p className="mt-2 font-display font-bold text-[16px] text-ink-900">{site.address}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="py-16 bg-ink-100 border-t border-ink-200">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="eyebrow">Training Locations</span>
          <h2 className="section-heading mt-3">Three London training centres</h2>
          <p className="section-sub">Canary Wharf, Whitechapel and Park Royal</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/locations/greenwich" className="btn-outline">Greenwich</Link>
            <Link href="/locations/east-london" className="btn-outline">East London</Link>
            <Link href="/locations/park-royal" className="btn-outline">Park Royal</Link>
          </div>
        </div>
      </section>
    </>
  );
}
