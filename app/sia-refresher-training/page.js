import Link from "next/link";
import CourseCard from "../components/CourseCard";
import { coursesByCategory } from "@/lib/courses";

export const metadata = {
  title: "SIA Refresher Training",
  description: "Renew your SIA Door Supervisor or Security Guard licence with our combined Refresher + First Aid courses across London."
};

const faqs = [
  { q: "Do I need a refresher to renew my SIA licence?", a: "Yes. Since 2021 the SIA requires a top-up qualification when renewing a Door Supervisor or Security Guard licence. We offer combined refresher courses that include Emergency First Aid at Work." },
  { q: "How long does the refresher course take?", a: "SIA Door Supervisor Refresher takes 2 days. SIA Security Guard Refresher takes 1 day. Both include Emergency First Aid at Work." },
  { q: "When should I book my refresher?", a: "Book your refresher up to 4 months before your current SIA licence expires. This gives you time to complete training and submit your renewal application before the licence expires." },
  { q: "What does the refresher cover?", a: "Top-up training on conflict management and physical intervention, the latest ACT (counter-terrorism) updates, plus Emergency First Aid at Work." }
];

export default function SIARefresher() {
 