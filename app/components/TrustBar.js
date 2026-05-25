import { site } from "@/lib/site";

export default function TrustBar() {
  return (
    <section className="bg-ink-100 border-y border-ink-200">
      <div className="container-px mx-auto max-w-7xl py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 text-accent-500">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 6l7-3 7 3"/><path d="M4 10v11"/><path d="M20 10v11"/><path d="M8 14v4"/><path d="M12 14v4"/><path d="M16 14v4"/></svg>
            </div>
            <div>
              <div className="font-display text-[17px] font-bold text-ink-900 leading-tight">SIA Level 2 Courses</div>
              <div className="text-[13px] text-ink-600 mt-1">Required for SIA Licence</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 text-accent-500">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6"/><path d="M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>
            </div>
            <div>
              <div className="font-display text-[17px] font-bold text-ink-900 leading-tight">1000+ Students</div>
              <div className="text-[13px] text-ink-600 mt-1">Successfully Licenced</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 text-accent-500">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div>
              <div className="font-display text-[17px] font-bold text-ink-900 leading-tight">Weekly Courses</div>
              <div className="text-[13px] text-ink-600 mt-1">Start Dates Every Week</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 flex gap-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFB400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFB400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFB400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFB400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFB400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div>
              <div className="font-display text-[17px] font-bold text-ink-900 leading-tight">{site.rating}</div>
              <div className="text-[13px] text-ink-600 mt-1">{site.reviewCount}+ Verified Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
