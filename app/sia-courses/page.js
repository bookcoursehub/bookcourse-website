import CourseCard from "../components/CourseCard";
import { coursesByCategory } from "@/lib/courses";

export const metadata = {
  title: "SIA Courses",
  description: "Accredited SIA Door Supervisor, Security Guard, CCTV and Trainer courses across London."
};

export default function SIACourses() {
  const list = coursesByCategory("SIA");
  return (
    <>
      <section className="hero-gradient text-white py-16">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-accent-500 uppercase tracking-wider">SIA Approved</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">SIA Security Training Courses</h1>
          <p className="mt-4 text-slate-200 max-w-2xl">Get the SIA Door Supervisor, Security Guard or CCTV licence you need to work in UK security. Accredited courses, expert trainers, real jobs at the end.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        </div>
      </section>
    </>
  );
}
