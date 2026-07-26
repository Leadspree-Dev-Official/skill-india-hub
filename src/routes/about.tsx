import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kaushal Bharat Vocational Institute" },
      { name: "description", content: "Since 2011, Kaushal Bharat has trained 48,000+ Indian youth in job-ready vocational skills aligned with Skill India Mission." },
      { property: "og:title", content: "About Kaushal Bharat" },
      { property: "og:description", content: "Our mission, our team, and our commitment to India's skilled workforce." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="container-page pt-16 pb-14 md:pt-24 md:pb-20">
          <p className="eyebrow">Our story</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl max-w-3xl">
            Skilling India, <span className="italic text-primary">one trade at a time.</span>
          </h1>
          <div className="mt-10 grid gap-10 md:grid-cols-2 max-w-4xl">
            <p className="text-muted-foreground leading-relaxed">
              Kaushal Bharat was founded in 2011 by a group of ITI instructors
              and industrialists who saw a gap: young Indians finishing school
              with no clear pathway to skilled employment. Fifteen years later,
              we operate 22 training centres across 14 states.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work closely with the Ministry of Skill Development and
              Entrepreneurship, NSDC, and Sector Skill Councils to ensure every
              graduate leaves with a nationally-recognised qualification and a
              livelihood pathway.
            </p>
          </div>
        </section>

        <section className="bg-secondary/50 border-y border-border/60">
          <div className="container-page py-16 md:py-24 grid gap-10 md:grid-cols-3">
            {[
              { t: "Dignity of labour", b: "Every skilled trade — from welding to hairdressing — deserves respect and world-class training." },
              { t: "Employers-first curriculum", b: "Our courses are co-authored with the industry partners who eventually hire our graduates." },
              { t: "Equity of access", b: "60% of our seats are reserved for SC/ST, OBC, women, and rural youth on subsidised fees." },
            ].map((v) => (
              <div key={v.t}>
                <h3 className="font-display text-2xl">{v.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-page py-20 md:py-28">
          <p className="eyebrow">Leadership</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">The people behind Kaushal Bharat.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { n: "Dr. Anjali Deshmukh", r: "Founder & Director", b: "Former Principal, ITI Pune. 30 years in technical education." },
              { n: "Rajesh Iyer", r: "Head of Placements", b: "Ex-Manpower Group. Built our 80-partner hiring network." },
              { n: "Farah Qureshi", r: "Dean of Curriculum", b: "NSDC Certified Master Trainer. Leads faculty development." },
            ].map((p) => (
              <div key={p.n} className="card-warm p-6">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-accent to-primary" />
                <h3 className="mt-5 font-display text-xl">{p.n}</h3>
                <div className="text-sm text-primary mt-1">{p.r}</div>
                <p className="mt-3 text-sm text-muted-foreground">{p.b}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
