import Link from "next/link";

export const metadata = {
  title: "FAQs",
  description: "Frequently asked questions about BookCourse training, SIA licences, refresher courses, payments and certificates."
};

const faqGroups = [
  {
    title: "About SIA Licensing",
    faqs: [
      { q: "How do I obtain an SIA licence in the UK?", a: "Complete an approved training course (such as our SIA Door Supervisor course), pass the required exams, complete a criminal record check and apply online via the SIA website with your documents and fee. Once approved, your licence allows you to work legally in UK security roles." },
      { q: "Do I need a refresher to renew my SIA licence?", a: "Yes. Since 2021 the SIA requires a top-up qualification when renewing a Door Supervisor or Security Guard licence. We offer combined refresher courses that include Emergency First Aid at Work." },
      { q: "Who can apply for these courses?", a: "Most SIA courses don't need any prior experience. You just need to be 18 or older, have the right to work in the UK, and a good level of English in reading, writing, speaking and listening." },
      { q: "Are these courses available online?", a: "All SIA courses including Door Supervisor, Security Guard, CCTV and Trainer Instructor must be attended in person due to mandatory practical assessments." }
    ]
  },
  {
    title: "Course Details",
    faqs: [
      { q: "How long does each course take?", a: "SIA Door Supervisor - 6 days. SIA Security Guard - 4 days. SIA CCTV Course - 3 days. SIA Refresher Training - 2 days. SIA Trainer Instructor - around 7 days. Each includes both theory and practical training." },
      { q: "What identification do I need to attend a course?", a: "Two passport-sized photos, original passport or UK photo driver's licence, two proof of address documents dated within the last 3 months, and your National Insurance number. Without the correct ID you cannot sit the exam." },
      { q: "How long does it take to get my certificate?", a: "Most exam results are available within 10-14 working days. You'll be notified by email or SMS once your results and certificate are ready." },
      { q: "Are your courses accredited?", a: "Yes. Our SIA courses are delivered through Highfield-approved centres. Our construction courses are RTITB / ITSSAR / CPCS aligned, and our first aid courses are HSE / Ofqual recognised." }
    ]
  },
  {
    title: "Booking and Payment",
    faqs: [
      { q: "Do you offer weekend courses?", a: "Yes - many of our SIA and construction courses run weekday and weekend cohorts. Check the booking page for upcoming dates." },
      { q: "What payment methods do you accept?", a: "Card, bank transfer and instalment plans through our partners. Contact us to discuss what suits you." },
      { q: "How do I book a course?", a: "Choose your preferred location (Canary Wharf, Whitechapel or Park Royal), select your course date, click