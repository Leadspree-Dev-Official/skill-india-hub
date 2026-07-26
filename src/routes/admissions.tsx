import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Kaushal Bharat" },
      { name: "description", content: "Apply for the July 2026 batch. Eligibility, fees, scholarships and the 4-step admission process explained." },
      { property: "og:title", content: "Admissions — Kaushal Bharat" },
      { property: "og:description", content: "Apply in 4 simple steps. Scholarships available." },
    ],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  const steps = [
    { t: "Apply online", b: "Fill the application form with your basic details and preferred trade." },
    { t: "Counselling call", b: "Our advisor will help you pick a course that matches your goals." },
    { t: "Aptitude & interview", b: "A short in-person interaction at your nearest centre." },
    { t: "Enrol & begin", b: "Pay fees (or apply for scholarship) and join the next monthly batch." },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="container-page pt-16 pb-14 md:pt-24 md:pb-20">
          <p className="eyebrow">Admissions 2026</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl max-w-3xl">
            Your application starts here.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Batches begin every month. Complete this short form and our
            admissions team will call within 48 hours.
          </p>
        </section>

        <section className="container-page pb-24 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-2xl mb-6">How admission works</h2>
            <ol className="space-y-6">
              {steps.map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-display">{i + 1}</span>
                  <div>
                    <h3 className="font-display text-lg">{s.t}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 card-warm p-6">
              <h3 className="font-display text-xl">Eligibility</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  "Class 8 pass for basic trades; Class 10 for advanced",
                  "Age between 16 and 40 years",
                  "Valid Aadhaar & one passport-size photo",
                  "Scholarship: household income proof (for SC/ST/OBC/EWS)",
                ].map((e) => (
                  <li key={e} className="flex gap-2"><CheckCircle2 size={16} className="text-forest mt-0.5 shrink-0" /> {e}</li>
                ))}
              </ul>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you! Our team will contact you shortly."); }}
            className="card-warm p-6 md:p-8 grid gap-4"
          >
            <h2 className="font-display text-2xl">Application form</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Mobile number" name="phone" type="tel" required />
            </div>
            <Field label="Email address" name="email" type="email" />
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="State" name="state" />
              <Field label="Age" name="age" type="number" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Course of interest</label>
              <select className="rounded-md border border-border bg-background px-3 py-2.5 text-sm">
                <option>Apparel Design & Tailoring</option>
                <option>Automotive Service Mechanic</option>
                <option>IT Support & Digital Skills</option>
                <option>Hospitality & Culinary Arts</option>
                <option>Not sure — please advise</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Message (optional)</label>
              <textarea rows={3} className="rounded-md border border-border bg-background px-3 py-2.5 text-sm" />
            </div>
            <button type="submit" className="btn-primary mt-2">Submit application</button>
            <p className="text-xs text-muted-foreground">
              By applying you agree to be contacted by our admissions team.
            </p>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
