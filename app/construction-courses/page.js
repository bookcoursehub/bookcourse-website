import Link from "next/link";
import CourseCard from "../components/CourseCard";
import { coursesByCategory } from "@/lib/courses";

export const metadata = {
  title: "Construction Courses",
  description: "Forklift training, CPCS A73 traffic marshall, CSCS card preparation and online construction courses across London."
};

export default function ConstructionCourses() {
  const list = coursesByCategory("Construction");
  return (
    <>
      {/* HERO */}
      <section className="hero-bg text-white py-20">
        <div className="container-px mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500 text-white text-[11px] uppercase tracking-[0.18em] font-bold rounded">
            Construction Training
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-bold mt-6 leading-tight max-w-3xl">Construction Training Courses</h1>
          <p className="mt-5 text-ink-200 max-w-2xl text-[17px] leading-relaxed">From CSCS card preparation to CPCS A73 and forklift training — everything you need to start or advance a UK construction career.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#courses" cl