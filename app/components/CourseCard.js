import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <article className="card group flex flex-col h-full">
      <div className="relative overflow-hidden aspect-[16/10] bg-ink-100">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 inline-block px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider bg-brand-900 text-white">
          {course.category}
        </span>
        <span className="absolute top-3 right-3 inline-block px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider bg-white text-brand-900 border border-ink-200">
          {course.duration}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-[19px] font-bold text-brand-900 leading-snug">
          <Link href={`/courses/${course.slug}`} className="hover:text-accent-600 transition-colors">{course.title}</Link>
        </h3>
        <p className="text-[14.5px] text-ink-600 mt-3 leading-relaxed line-clamp-3 flex-1">{course.summary}</p>
        <div className="mt-5 flex items-center justify-between pt-5 border-t border-ink-200">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-ink-500 font-bold">From</div>
            <div className="font-display text-2xl font-extrabold text-brand-900">£{course.price.toFixed(0)}</div>
          </div>
          <Link href={`/courses/${course.slug}`} className="btn-outline !py-2 !px-4 text-[12px]">Learn more</Link>
        </div>
      </div>
    </article>
  );
}
