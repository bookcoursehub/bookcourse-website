import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "About BookCourse",
  description: "BookCourse.co.uk is a UK training provider for SIA security, construction and first aid courses."
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient text-white py-20">
        <div className="container-px mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold text-accent-500 uppercase tracking-wider">About us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Your pathway to professional success</h1>
          <p className="mt-5 text-slate-200 max-w-3xl mx-auto">At BookCourse.co.uk we deliver accredited, expert-led training to help thousands of learners launch and advance careers in security, construction and first aid.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-px mx-auto max-w-5xl prose-brand">
          <h2>Who we are</h2>
          <p>BookCourse is a London-based training provider working with industry-recognised awarding bodies (Highfield, CPCS, RTITB and HSE) to deliver practical, career-focused training. We run our SIA, construction and first aid courses from multiple centres across London and online.</p>
          <h2>What we believe</h2>
          <ul>
            <li>Training should lead to a real job, not just a certificate</li>
            <li>Schedules should fit around your life, not the other way around</li>
            <li>Trainers should come from the industry they're teaching</li>
            <li>Price shouldn't be a barrier to a better career</li>
          </ul>
          <h2>What we offer</h2>
          <ul>
            <li>SIA Door Supervisor, Security Guard, CCTV and Trainer courses</li>
            <li>SIA Refresher / Top-up courses with Emergency First Aid at Work</li>
            <li>Forklift, CPCS A73 traffic marshall, CSCS card preparation</li>
            <li>Emergency First Aid at Work (EFAW) certification</li>
            <li>Online and in-person delivery in Greenwich, East London and Park Royal</li>
          </ul>
          <h2>Get in touch</h2>
          <p>Want to talk to an advisor about which course is right for you? <Link className="text-brand-700 font-semibold underline" href="/contact">Contact us</Link> or call <a className="text-brand-700 font-semibold" href={`tel:${site.phoneRaw}`}>{site.phone}</a>.</p>
        </div>
      </section>
    </>
  );
}
