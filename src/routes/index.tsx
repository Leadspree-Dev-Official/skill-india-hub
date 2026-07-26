import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Users, Briefcase, GraduationCap, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { courses } from "@/lib/courses";
import hero from "@/assets/hero.jpg";
import tailoring from "@/assets/course-tailoring.jpg";
import automotive from "@/assets/course-automotive.jpg";
import it from "@/assets/course-it.jpg";
import hospitality from "@/assets/course-hospitality.jpg";

const heroSlides = [
  { src: hero, alt: "Young Indian apprentices training in a vocational workshop", caption: "Electrical & welding workshops" },
  { src: tailoring, alt: "Apparel and tailoring training", caption: "Apparel design & tailoring" },
  { src: automotive, alt: "Automotive mechanic training", caption: "Automotive service labs" },
  { src: it, alt: "IT and digital skills training", caption: "IT & digital skills" },
  { src: hospitality, alt: "Hospitality and culinary training", caption: "Hospitality & culinary arts" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaushal Bharat — Vocational Training Institute, India" },
      { name: "description", content: "Learn a trade in 4–12 months. NCVET-aligned skilling in tailoring, IT, automotive & hospitality with placement support across India." },
      { property: "og:title", content: "Kaushal Bharat — Skill India, Employed India" },
      { property: "og:description", content: "Job-ready vocational courses with certification and placement support." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Stats />
        <FeaturedCourses />
        <WhyUs />
        <Placements />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page pt-14 pb-20 md:pt-20 md:pb-28 grid gap-12 lg:grid-cols-[1.05fr_1fr] items-center">
        <div>
          <p className="eyebrow">Skill India · Est. 2011</p>
          <h1 className="mt-5 font-display text-[2.75rem] leading-[1.05] md:text-6xl">
            A trade in hand.
            <br />
            <span className="italic text-primary">A future secured.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Kaushal Bharat trains India's next generation of electricians,
            tailors, mechanics, chefs and IT professionals — with hands-on
            workshops, NCVET certification and direct placement pipelines to
            80+ industry partners.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/admissions" className="btn-accent">
              Apply for July 2026 batch <ArrowRight size={16} />
            </Link>
            <Link to="/courses" className="btn-ghost">Browse courses</Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-forest" /> NCVET Recognised</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-forest" /> PMKVY empanelled</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-forest" /> ISO 29993:2017</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/25 via-transparent to-primary/25 blur-2xl" />
          <HeroCarousel />
          <div className="absolute -bottom-6 -left-6 hidden md:flex flex-col rounded-2xl border border-border bg-card px-5 py-4 shadow-xl">
            <span className="text-2xl font-display text-primary">92%</span>
            <span className="text-xs text-muted-foreground max-w-[10rem] leading-snug">
              placement within 90 days of graduation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCarousel() {
  const [i, setI] = useState(0);
  const n = heroSlides.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % n), 4500);
    return () => clearInterval(id);
  }, [n]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_-40px_rgba(40,20,10,0.5)] bg-secondary">
      <div className="relative aspect-[16/11]">
        {heroSlides.map((s, idx) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1600}
            height={1100}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5">
          <p className="text-primary-foreground text-sm md:text-base font-medium">
            {heroSlides[i].caption}
          </p>
        </div>
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/85 backdrop-blur border border-border flex items-center justify-center hover:bg-background transition"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/85 backdrop-blur border border-border flex items-center justify-center hover:bg-background transition"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-4 right-4 flex gap-1.5">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-accent" : "w-1.5 bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const items = [
    { k: "48,000+", v: "Trainees graduated" },
    { k: "36", v: "Skill trades offered" },
    { k: "14", v: "States we operate in" },
    { k: "80+", v: "Hiring partners" },
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="container-page py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((i) => (
          <div key={i.v}>
            <div className="font-display text-3xl md:text-4xl text-primary">{i.k}</div>
            <div className="mt-1 text-xs md:text-sm text-muted-foreground">{i.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedCourses() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <p className="eyebrow">Programmes</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Courses that lead to jobs.</h2>
        </div>
        <Link to="/courses" className="text-sm font-medium text-primary hover:underline underline-offset-4">
          View all courses →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((c) => (
          <article key={c.slug} className="card-warm overflow-hidden flex flex-col">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={c.image} alt={c.title} loading="lazy" width={900} height={700}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent-foreground/70">{c.category}</span>
              <h3 className="mt-2 font-display text-xl leading-snug">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{c.summary}</p>
              <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                <span>{c.duration} · {c.level}</span>
                <span className="font-medium text-foreground">{c.fee}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: GraduationCap, title: "Industry-certified trainers", body: "Every instructor holds NSDC Trainer certification plus 8+ years of shop-floor experience." },
    { icon: Briefcase, title: "Placement guarantee", body: "Dedicated career cell arranges interviews with 80+ hiring partners across India." },
    { icon: Award, title: "NCVET certification", body: "Graduate with a nationally-recognised qualification aligned to the National Skills Framework." },
    { icon: Users, title: "Stipend during training", body: "PMKVY-supported courses come with a monthly stipend and free study material." },
  ];
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page py-20 md:py-28">
        <p className="eyebrow text-primary-foreground/70">Why Kaushal Bharat</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl max-w-2xl">
          Built for the ambitions of a new India.
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.title}>
              <div className="h-11 w-11 rounded-lg bg-accent/90 text-accent-foreground flex items-center justify-center">
                <i.icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-xl text-primary-foreground">{i.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Placements() {
  const partners = ["Maruti Suzuki", "Taj Hotels", "Bajaj Auto", "Tech Mahindra", "Lemon Tree", "Reliance Retail", "Larsen & Toubro", "Bharti Airtel"];
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
        <div>
          <p className="eyebrow">Placements</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Where our graduates work.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
            From service centres in Tier-2 towns to five-star kitchens in
            Bengaluru — our alumni are placed across India within 90 days of
            graduating.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {partners.map((p) => (
            <div key={p} className="bg-card px-4 py-8 text-center text-sm font-medium text-foreground/80">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-page pb-24">
      <div className="rounded-3xl bg-accent text-accent-foreground p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl md:text-4xl">Admissions open for July 2026.</h2>
          <p className="mt-3 text-sm md:text-base opacity-80">
            Limited seats across 36 trades. Scholarships available for SC/ST,
            OBC and women applicants.
          </p>
        </div>
        <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90">
          Start your application <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
