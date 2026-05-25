import { site } from "@/lib/site";

export default function TrustBar() {
  return (
    <section className="bg-ink-100 border-y border-ink-200">
      <div className="container-px mx-auto max-w-7xl py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">

          {/* SIA Level 2 Courses */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 text-accent-500">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18"/>
                <path d="M3 10h18"/>
                <path d="M5 6l7-3 7 3"/>
                <path d="M4 10v11"/>
                <path d="M20 10v11"/>
                <path d="M8 14v4"/>
                <path d="M12 14v4"/>
             