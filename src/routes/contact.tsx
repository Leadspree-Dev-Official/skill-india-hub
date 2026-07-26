import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kaushal Bharat Vocational Institute" },
      { name: "description", content: "Visit our Noida campus or call our admissions team. Regional centres across 14 Indian states." },
      { property: "og:title", content: "Contact Kaushal Bharat" },
      { property: "og:description", content: "We're here to help you pick the right skill." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { icon: MapPin, t: "Head office", b: "Plot 14, Sector 62, Noida, Uttar Pradesh 201301" },
    { icon: Phone, t: "Call us", b: "+91 120 4567 890 · +91 98111 22 334" },
    { icon: Mail, t: "Email", b: "admissions@kaushalbharat.in" },
    { icon: Clock, t: "Hours", b: "Mon–Sat · 9:00 AM – 6:30 PM IST" },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="container-page pt-16 pb-14 md:pt-24 md:pb-20">
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl max-w-3xl">
            We'd love to <span className="italic text-primary">hear from you.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Whether you're a prospective trainee, a hiring partner or a
            CSR sponsor — reach out and someone from our team will respond
            within one working day.
          </p>
        </section>

        <section className="container-page pb-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.t} className="card-warm p-6">
              <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <i.icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-xl">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.b}</p>
            </div>
          ))}
        </section>

        <section className="container-page pb-24">
          <div className="rounded-3xl overflow-hidden border border-border aspect-[16/7] bg-secondary">
            <iframe
              title="Kaushal Bharat Noida campus"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.35%2C28.60%2C77.40%2C28.64&layer=mapnik"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
