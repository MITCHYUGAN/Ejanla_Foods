import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Clock, Utensils, Car, Music, Cake } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export type BranchData = {
  city: string;
  address: string;
  phones: string[];
  hours: string;
  map: string;
  directions: string;
  whatsapp: string;
  neighbourhoods: string[];
  intro: string;
  heroImg: string;
  amenities: string[];
};

export function BranchPage({ b }: { b: BranchData }) {
  const amenityIcon = (a: string) => {
    if (/park/i.test(a)) return <Car size={14} />;
    if (/music|karaoke|live/i.test(a)) return <Music size={14} />;
    if (/birthday|celebrat/i.test(a)) return <Cake size={14} />;
    return <Utensils size={14} />;
  };

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={b.heroImg} alt={`Ejanla Foods ${b.city}`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30" />
        </div>
        <div className="relative container-x py-24 lg:py-36 text-paper">
          <div className="eyebrow mb-4 text-white/70 [&::before]:bg-brand-yellow">Ejanla · {b.city}</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            Grilled fish & seafood in{" "}
            <span className="italic text-brand-yellow">{b.city}</span>.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">{b.intro}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/reservations" className="btn-accent">Book a Table</Link>
            <a href={`https://wa.me/${b.whatsapp}`} target="_blank" rel="noreferrer" className="btn-primary">WhatsApp {b.city}</a>
            <a href={b.directions} target="_blank" rel="noreferrer" className="border border-white/40 text-paper px-6 py-3 rounded-full font-display text-xs uppercase tracking-widest hover:bg-white hover:text-ink transition-all">
              Get directions
            </a>
          </div>
        </div>
      </section>

      {/* Info + Map */}
      <section className="container-x py-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="p-8 md:p-10 rounded-3xl bg-paper-warm border border-line">
            <div className="font-mono-tag text-brand-red">Visit us</div>
            <h2 className="font-display text-3xl md:text-4xl mt-2">{b.city} branch</h2>

            <div className="mt-8 space-y-6">
              <InfoRow icon={<MapPin size={16} />} label="Address" value={b.address} />
              <InfoRow icon={<Clock size={16} />} label="Hours" value={b.hours} />
              <InfoRow
                icon={<Phone size={16} />}
                label="Call"
                value={
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {b.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-brand-red">
                        {p}
                      </a>
                    ))}
                  </div>
                }
              />
              <InfoRow
                icon={<MessageCircle size={16} />}
                label="WhatsApp"
                value={
                  <a href={`https://wa.me/${b.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-brand-green">
                    Chat with {b.city}
                  </a>
                }
              />
            </div>

            <div className="mt-8">
              <div className="font-mono-tag text-ink-soft mb-3">We serve</div>
              <div className="flex flex-wrap gap-2">
                {b.neighbourhoods.map((n) => (
                  <span key={n} className="px-3 py-1 rounded-full bg-white border border-line text-xs font-mono-tag">
                    {n}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="font-mono-tag text-ink-soft mb-3">Amenities</div>
              <div className="flex flex-wrap gap-2">
                {b.amenities.map((a) => (
                  <span key={a} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-line text-xs">
                    {amenityIcon(a)} {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-line min-h-[420px] bg-paper-warm">
            <iframe
              src={b.map}
              className="h-full w-full border-0"
              loading="lazy"
              title={`Ejanla ${b.city} map`}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Popular at this branch */}
      <section className="bg-paper-warm py-24">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow mb-4">Most ordered</div>
            <h2 className="font-display text-4xl md:text-5xl">
              What {b.city} <span className="italic text-brand-red">loves</span>.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Grilled Croaker Fish", note: "Our signature. Charcoal grilled to order.", price: "₦18,000" },
              { name: "Ejanla Royale Platter", note: "The full feast — perfect for birthdays.", price: "₦150,000" },
              { name: "Catfish Pepper Soup", note: "Hot, spicy, served with yam or plantain.", price: "₦14,000" },
            ].map((it) => (
              <div key={it.name} className="p-8 rounded-3xl bg-white border border-line card-lift">
                <div className="font-mono-tag text-brand-red">★ Most Ordered</div>
                <h3 className="font-display text-2xl mt-3">{it.name}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{it.note}</p>
                <div className="font-display text-lg mt-6">{it.price}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/menu" className="btn-ghost">See full menu →</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
      <div className="h-9 w-9 grid place-items-center rounded-full bg-white text-ink shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="font-mono-tag text-ink-soft">{label}</div>
        <div className="font-display text-lg mt-1">{value}</div>
      </div>
    </div>
  );
}

export function branchJsonLd(b: BranchData, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: `Ejanla Foods ${b.city}`,
    description: b.intro,
    url,
    telephone: `+234${b.phones[0].replace(/\D/g, "").replace(/^0/, "")}`,
    priceRange: "₦₦₦",
    servesCuisine: ["Nigerian", "Seafood", "African"],
    address: { "@type": "PostalAddress", streetAddress: b.address, addressCountry: "NG" },
    openingHours: "Mo-Su 10:00-00:00",
    areaServed: b.neighbourhoods,
    hasMenu: "https://ejanla.ng/menu",
  };
}
