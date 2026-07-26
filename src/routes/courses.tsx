import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { courses } from "@/lib/courses";
import { Clock, IndianRupee, Layers } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Kaushal Bharat Vocational Institute" },
      { name: "description", content: "Explore 36 NCVET-aligned vocational courses across tailoring, automotive, IT, hospitality and construction trades." },
      { property: "og:title", content: "Vocational Courses — Kaushal Bharat" },
      { property: "og:description", content: "36 skill trades. Certification and placement support included." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const categories = Array.from(new Set(courses.map((c) => c.category)));
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="container-page pt-16 pb-10 md:pt-24 md:pb-14">
          <p className="eyebrow">Programmes</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl max-w-3xl">
            Job-ready courses across <span className="italic text-primary">36 skill trades.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Every programme is designed with employers, delivered on live
            equipment, and certified against the National Skills Qualifications
            Framework (NSQF).
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">All</span>
            {categories.map((c) => (
              <span key={c} className="px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground">{c}</span>
            ))}
          </div>
        </section>

        <section className="container-page pb-24 grid gap-10">
          {courses.map((c, idx) => (
            <article key={c.slug} className={`grid gap-8 lg:grid-cols-2 items-center ${idx % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img src={c.image} alt={c.title} loading="lazy" width={900} height={700} className="w-full h-full object-cover aspect-[4/3]" />
              </div>
              <div>
                <span className="eyebrow">{c.category}</span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">{c.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{c.summary}</p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary"><Clock size={14} /> {c.duration}</span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary"><Layers size={14} /> {c.level}</span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary"><IndianRupee size={14} /> {c.fee.replace("₹ ", "")}</span>
                </div>

                <ul className="mt-6 space-y-2">
                  {c.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link to="/admissions" className="btn-primary">Apply for this course</Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
