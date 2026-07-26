import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display text-lg">
              K
            </span>
            <span className="font-display text-lg" data-brand-text="business-name">Kaushal Bharat</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            An NCVET-aligned vocational training institute preparing India's youth
            for skilled livelihoods across trades, technology, and hospitality.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/courses" className="hover:text-foreground">Courses</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About us</Link></li>
            <li><Link to="/admissions" className="hover:text-foreground">Admissions</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Reach us</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li data-brand-text="address">Plot 14, Sector 62, Noida, UP 201301</li>
            <li data-brand-text="phone">+91 120 4567 890</li>
            <li>admissions@kaushalbharat.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Kaushal Bharat Vocational Institute. All rights reserved.</p>
          <p>Recognised by NCVET · Affiliated to Skill India Mission</p>
        </div>
        <div className="container-page pb-5 text-center text-xs text-muted-foreground">
          Developer: Aniruddha Das | Developed by LeadSpree Business Solutions
        </div>
      </div>
    
          <div className="mt-8">
            <a href="/admin" className="text-sm hover:underline transition">🔑 Admin Console</a>
          </div>
    </footer>
  );
}
