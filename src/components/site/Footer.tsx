import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="container-x py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-paper text-ink font-display">EJ</span>
              <span className="font-display text-lg">Ejanla<span className="text-brand-red">.</span></span>
            </div>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              The Big Fish Place. Premium seafood, family platters and vibrant Nigerian
              hospitality across Lagos and Abuja.
            </p>
            <div className="flex gap-3 mt-8">
              <a href="https://instagram.com/ejanla.ng" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 hover:bg-brand-yellow hover:text-ink hover:border-brand-yellow transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@ejanlang" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 hover:bg-brand-yellow hover:text-ink hover:border-brand-yellow transition-all font-display text-xs">
                TT
              </a>
              <a href="https://wa.me/2347072466058" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 hover:bg-brand-green hover:text-paper hover:border-brand-green transition-all">
                <Phone size={16} />
              </a>
            </div>
          </div>

          <div>
            <div className="font-mono-tag text-white/50 mb-5">Explore</div>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/menu", l: "Menu" },
                { to: "/gallery", l: "Gallery" },
                { to: "/reservations", l: "Reservations" },
                { to: "/about", l: "About" },
                { to: "/contact", l: "Contact" },
              ].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="hover:text-brand-yellow transition-colors">{i.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono-tag text-white/50 mb-5">Branches</div>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="font-display text-base text-brand-yellow">Lekki</div>
                <div className="text-white/70 mt-1 flex items-start gap-2">
                  <MapPin size={14} className="mt-1 shrink-0" />
                  <span>40 Fola Osibo Rd, Lekki Phase I, Lagos</span>
                </div>
              </li>
              <li>
                <div className="font-display text-base text-brand-yellow">Surulere</div>
                <div className="text-white/70 mt-1">07032418505 · 08058644466</div>
              </li>
              <li>
                <div className="font-display text-base text-brand-yellow">Abuja</div>
                <div className="text-white/70 mt-1">07054168090 · 09069345808</div>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono-tag text-white/50 mb-5">Say Hello</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+2347072466058" className="hover:text-brand-yellow">+234 707 246 6058</a>
              </li>
              <li>
                <a href="https://instagram.com/ejanla.ng" target="_blank" rel="noreferrer" className="hover:text-brand-yellow">@ejanla.ng</a>
              </li>
              <li>
                <a href="https://ejanla.ng" className="hover:text-brand-yellow">ejanla.ng</a>
              </li>
            </ul>
            <div className="mt-8 rounded-2xl bg-white/5 p-5">
              <div className="font-mono-tag text-brand-yellow">Hours</div>
              <p className="mt-2 text-sm text-white/80">Daily · Until 12am</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/50 font-display">
          <div>© {new Date().getFullYear()} Ejanla Foods. All rights reserved.</div>
          <div>The Big Fish Place · Lagos · Abuja</div>
        </div>
      </div>
    </footer>
  );
}
