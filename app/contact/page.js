import ContactForm from "../components/ContactForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with BookCourse.co.uk - call, email or send us a message."
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient text-white py-16">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Contact</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Talk to a course advisor</h1>
          <p className="mt-4 text-slate-200 max-w-2xl">Phone, email or web form - whichever works best for you. We typically respond within a few hours.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">How to reach us</h2>
            <div className="mt-6 space-y-5">
              <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50">
                <div className="text-xs uppercase tracking-wider text-accent-600 font-semibold">Phone</div>
                <a href={`tel:${site.phoneRaw}`} className="block mt-1 text-2xl font-extrabold text-brand-900">{site.phone}</a>
                <p className="text-sm text-slate-500 mt-1">Mon–Sat, 9am – 7pm</p>
              </div>
              <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50">
                <div className="text-xs uppercase tracking-wider text-accent-600 font-semibold">Email</div>
                <a href={`mailto:${site.email}`} className="block mt-1 text-2xl font-extrabold text-brand-900 break-all">{site.email}</a>
              </div>
              <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50">
                <div className="text-xs uppercase tracking-wider text-accent-600 font-semibold">Office</div>
                <p className="mt-1 text-lg font-bold text-slate-900">{site.address}</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
