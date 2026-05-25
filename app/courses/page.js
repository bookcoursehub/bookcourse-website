import CourseCard from "../components/CourseCard";
import { courses, categories } from "@/lib/courses";

export const metadata = {
  title: "All Courses",
  description: "Browse every SIA, construction, forklift and first aid course on BookCourse.co.uk."
};

export default function AllCourses() {
  return (
    <>
      <section className="bg-brand-900 text-white py-16">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Course catalogue</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Every course we offer</h1>
          <p className="mt-4 text-slate-200 max-w-2xl">SIA, construction, forklift, traffic marshall and first aid - all accredited, all delivered by expert trainers.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-px mx-auto max-w-7xl space-y-16">
          {categories.map((cat) => {
            const list = courses.filter((c) => c.category === cat.key);
            if (list.length === 0) return null;
            return (
              <div key={cat.key}>
                <div className="flex items-end justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">{cat.label}</h2>
                  <span className="text-sm text-slate-500">{list.length} course{list.length !== 1 && "s"}</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {list.map((c) => <CourseCard key={c.slug} course={c} />)}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
