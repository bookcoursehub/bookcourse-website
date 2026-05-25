export const metadata = { title: "Refund Policy" };

export default function Refund() {
  return (
    <section className="py-16">
      <div className="container-px mx-auto max-w-3xl prose-brand">
        <h1 className="text-4xl font-extrabold text-slate-900">Refund Policy</h1>
        <p>We want you to be happy with the training you book. Refunds are governed by the following terms.</p>
        <h2>Eligibility</h2>
        <p>Full refunds are available where notice is given more than 14 days before the course start date.</p>
        <h2>Late cancellation</h2>
        <p>Cancellations within 14 days of the start date are eligible for a 50% refund or a free transfer to a future cohort.</p>
        <h2>No-shows</h2>
        <p>Learners who do not attend without notice are not eligible for a refund.</p>
        <h2>How to request a refund</h2>
        <p>Email info@bookcourse.co.uk with your booking reference. Approved refunds are issued within 14 working days to the original payment method.</p>
      </div>
    </section>
  );
}
