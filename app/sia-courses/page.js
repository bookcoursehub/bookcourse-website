import Link from "next/link";
import CourseCard from "../components/CourseCard";
import { coursesByCategory } from "@/lib/courses";

export const metadata = {
  title: "SIA Courses",
  description: "Explore SIA courses including Door Supervisor, Security Guard, CCTV, Refresher & Trainer Instructor training. Book your course today."
};

const faqs = [
  { q: "Who can benefit from these courses?", a: "These SIA courses are perfect for anyone looking to start or grow a career in security - whether it's as a Door Supervisor, Security Guard, CCTV Operator, or even a Trainer." },
  { q: "What experience is required to enroll in these courses?", a: "Most SIA courses don't need any prior experience. You just need to be 18+, have the right to work in the UK, and a good level of English." },
  { q: "Are these courses available online, or do I need to attend in person?", a: "All SIA courses, including Door Supervisor, Security Guard, CCTV, and Trainer Instructor, must be attended in person due to mandatory practical assessments." },
  { q: "How long does it take to complete each course?", a: "SIA Door Supervisor - 6 days. SIA Security Guard - 4 days. SIA CCTV Course - 3 days. SIA Refresher Training - 2 days. SIA