import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <article className="card group flex flex-col">
      <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-brand-800">
          {course.category}
        </span>
        <span className="absolute top-3 right-3 inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold bg-brand-900 text-white">
          {course.duration}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 leading-snug">
          <Link href={`/courses/${course.slug}`} className="hover:text-brand-700">{course.title}</Link>
        </h3>
        <p className="text-sm text-slate-600 mt-2 line-clamp-3 flex-1">{course.summary}</p>
        <div className="mt-4 flex items-center justify-between pt-4 border-t border-slate-100">
          <span className="text-2xl font-extrabold text-brand-900">£{course.price.toFixed(2)}</span>
          <Link href={`/courses/${course.slug}`} className="btn-primary !py-2 !px-4 text-sm">More info</Link>
        </div>
      </div>
    </article>
  );
}
