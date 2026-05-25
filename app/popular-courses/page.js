import CourseCard from "../components/CourseCard";
import { courses } from "@/lib/courses";

export const metadata = {
  title: "Popular Courses",
  description: "Our most-booked training courses on BookCourse.co.uk."
};

export default function PopularCourses() {
  const list = [...courses].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  return (
    <>
      <section className="hero-gradient text-white py-16">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Trending Now</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Most Popular Courses</h1>
          <p className="mt-4 text-slate-200 max-w-2xl">SIA Door Supervisor, Forklift, Emergency First Aid and CSCS are the most-booked courses right now.</p>
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
