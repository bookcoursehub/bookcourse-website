import CourseCard from "../components/CourseCard";
import { coursesByCategory } from "@/lib/courses";

export const metadata = {
  title: "Construction Courses",
  description: "Forklift training, CPCS A73 traffic marshall, CSCS card preparation and online construction courses."
};

export default function ConstructionCourses() {
  const list = coursesByCategory("Construction");
  return (
    <>
      <section className="hero-gradient text-white py-16">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Construction Training</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Construction Courses</h1>
          <p className="mt-4 text-slate-200 max-w-2xl">From CSCS card preparation to CPCS A73 and forklift training - everything you need to start or advance a UK construction career.</p>
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
