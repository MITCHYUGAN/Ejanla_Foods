import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Flame, Fish, Users, Sparkles, Star, Instagram } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


import heroImg from "@/assets/hero-grilled-fish.jpg";
import royalePlatter from "@/assets/royale-platter.jpg";
import pepperSoup from "@/assets/pepper-soup.jpg";
import grilledPrawns from "@/assets/grilled-prawns.jpg";
import cocktailImg from "@/assets/cocktail.jpg";
import interiorImg from "@/assets/restaurant-interior.jpg";
import familyImg from "@/assets/family-dining.jpg";
import chefImg from "@/assets/chef-grilling.jpg";
import smallChops from "@/assets/small-chops.jpg";
import jollof from "@/assets/jollof-plate.jpg";
import celebration from "@/assets/celebration.jpg";
import pepperSauce from "@/assets/pepper-sauce.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ejanla Foods | Best Grilled Fish & Seafood Restaurant in Lekki Lagos" },
      { name: "description", content: "Premium charcoal grilled seafood restaurant in Lekki, Surulere and Abuja. Grilled croaker, catfish, pepper soup, family platters, cocktails and birthday dining. Open daily until 12am." },
      { property: "og:title", content: "Ejanla Foods | Best Grilled Fish & Seafood Restaurant in Lekki Lagos" },
      { property: "og:description", content: "Premium charcoal grilled seafood restaurant in Lekki, Surulere and Abuja. Open daily until 12am." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Ejanla Foods",
          description:
            "Premium charcoal grilled seafood restaurant in Lagos. Known for grilled croaker fish, catfish pepper soup, seafood platters, family dining and birthday celebrations.",
          url: "https://ejanla.ng",
          telephone: "+2347072466058",
          priceRange: "₦₦₦",
          servesCuisine: ["Nigerian", "Seafood", "African"],
          hasMenu: "https://ejanla.ng/menu",
          address: {
            "@type": "PostalAddress",
            streetAddress: "40 Fola Osibo Road",
            addressLocality: "Lekki Phase I",
            addressRegion: "Lagos",
            addressCountry: "NG",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 6.4281,
            longitude: 3.4219,
          },
          openingHours: "Mo-Su 10:00-00:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "76",
          },
          amenityFeature: [
            "Parking",
            "Live Music",
            "Birthday Celebrations",
            "Group Dining",
            "Catering",
          ],
        }),
      },
    ],
  }),
  component: Home,
});


function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <Featured />
      <Signature />
      <WhyEjanla />
      <Testimonials />
      <FAQ />
      <GalleryPreview />
      <Instafeed />
      <NewsEvents />
      <Branches />
      <ReserveCTA />
    </SiteLayout>
  );
}

/* -------------------------------------------------------------- Hero -- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x pt-10 pb-24 lg:pt-16 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-center">
          <div className="reveal">
            <div className="eyebrow mb-6">Est. Lagos · Seafood</div>
            <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-tight">
              The Big
              <br />
              <span className="italic text-brand-red">Fish</span> Place.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ink-soft leading-relaxed">
              Lagos' home of charcoal grilled croaker fish, catfish pepper soup and
              seafood platters. Family dining, birthday celebrations and catering —
              across Lekki, Surulere and Abuja. Open daily until midnight.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://glovoapp.com" target="_blank" rel="noreferrer" className="btn-primary">
                Order Online <ArrowUpRight size={16} />
              </a>
              <Link to="/menu" className="btn-accent">View Menu</Link>
              <Link to="/reservations" className="btn-ghost">Book a Table</Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "4.8★", v: "Google rating" },
                { k: "3", v: "Branches" },
                { k: "10+", v: "Years grilling" },
              ].map((s) => (
                <div key={s.v} className="border-t border-line pt-4">
                  <div className="font-display text-3xl">{s.k}</div>
                  <div className="font-mono-tag text-ink-soft mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative reveal reveal-delay-2">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-paper-warm">
              <img
                src={heroImg}
                alt="Charcoal grilled croaker fish served with fries and coleslaw"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] p-5 max-w-[240px]">
              <div className="flex items-center gap-2 text-brand-yellow">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
              </div>
              <p className="mt-2 text-sm leading-snug">
                "The best grilled fish in Lagos, hands down."
              </p>
              <div className="font-mono-tag text-ink-soft mt-2">— Dayan B., Local Guide</div>
            </div>
            <div className="absolute -top-4 -right-4 rounded-full bg-brand-red text-white h-24 w-24 grid place-items-center font-display text-xs uppercase tracking-widest text-center leading-tight rotate-12">
              Grilled<br/>Daily
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Marquee -- */
function Marquee() {
  const items = ["Grilled Croaker", "Ejanla Royale", "Catfish Pepper Soup", "Tiger Prawns", "Seafood Boil", "Chicken Suya", "Panla Pack", "Small Chops"];
  return (
    <section className="border-y border-line bg-paper-warm overflow-hidden py-6">
      <div className="ticker font-display text-xl md:text-2xl uppercase tracking-tight">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{it}</span>
            <span className="text-brand-red">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------- Featured Dishes -- */
function Featured() {
  const dishes = [
    { img: heroImg, name: "Grilled Croaker", tag: "Grills", price: "From ₦18,000" },
    { img: royalePlatter, name: "Ejanla Royale Platter", tag: "Feast", price: "₦150,000" },
    { img: pepperSoup, name: "Catfish Pepper Soup", tag: "Bowls", price: "₦14,000" },
    { img: grilledPrawns, name: "Grilled Tiger Prawns", tag: "Grills", price: "₦22,000" },
    { img: jollof, name: "Ejanla Rice Combo", tag: "Rice", price: "₦20,000" },
    { img: cocktailImg, name: "Signature Cocktails", tag: "Bar", price: "From ₦8,000" },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow mb-4">Featured</div>
            <h2 className="font-display text-4xl md:text-6xl max-w-2xl">
              Fresh from the <span className="text-brand-red italic">grill</span>.
            </h2>
          </div>
          <Link to="/menu" className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-widest hover:text-brand-red">
            Full menu <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((d) => (
            <article key={d.name} className="group card-lift bg-white rounded-3xl overflow-hidden border border-line">
              <div className="img-zoom aspect-[4/5] bg-paper-warm">
                <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono-tag text-brand-red">{d.tag}</div>
                  <h3 className="font-display text-xl mt-1">{d.name}</h3>
                </div>
                <div className="font-display text-sm text-ink-soft shrink-0 mt-1">{d.price}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------- Signature Board -- */
function Signature() {
  return (
    <section className="py-24 lg:py-32 bg-ink text-paper">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[5/6] rounded-[2rem] overflow-hidden">
              <img src={royalePlatter} alt="Ejanla Royale Platter" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="eyebrow mb-6 text-white/70 [&::before]:bg-brand-yellow">The Royale</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              A feast for the <span className="text-brand-yellow italic">whole family</span>.
            </h2>
            <p className="mt-6 text-white/70 max-w-lg text-lg leading-relaxed">
              Croaker, catfish, tilapia, prawns, chicken suya, turkey, samosas, spring rolls,
              puff puff, jollof, seafood fried rice, plantain, coleslaw, fruit and wine —
              on one board, built for the table.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="btn-accent">See the Platter</Link>
              <Link to="/reservations" className="border border-white/30 text-paper px-6 py-3 rounded-full font-display text-xs uppercase tracking-widest hover:bg-white hover:text-ink transition-all">
                Book for a group
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-white/60">
              <div>
                <div className="font-display text-3xl text-brand-yellow">₦150k</div>
                <div className="font-mono-tag mt-1">One price</div>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <div className="font-display text-3xl text-brand-yellow">8–12</div>
                <div className="font-mono-tag mt-1">Serves</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- Why Ejanla -- */
function WhyEjanla() {
  const items = [
    { icon: Flame, title: "Charcoal grilled", body: "Every fish kissed by open flame — never a shortcut." },
    { icon: Fish, title: "Premium seafood", body: "Croaker, catfish, tilapia, prawns — sourced fresh, daily." },
    { icon: Users, title: "Family first", body: "Cosy, family-friendly rooms built for groups and celebrations." },
    { icon: Sparkles, title: "Full bar", body: "Signature cocktails, mocktails, wine, cognac and Arabian tea." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow mb-4">Why Ejanla</div>
          <h2 className="font-display text-4xl md:text-6xl">
            Serious about <span className="italic text-brand-green">seafood</span>.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group p-8 rounded-3xl bg-paper-warm border border-line card-lift">
              <div className="h-12 w-12 grid place-items-center rounded-2xl bg-ink text-paper group-hover:bg-brand-red transition-colors">
                <Icon size={20} />
              </div>
              <h3 className="mt-6 font-display text-xl">{title}</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- Testimonials -- */
function Testimonials() {
  const reviews = [
    { name: "Opeoluwa Taylor", role: "Local Guide · 26 reviews", body: "My husband and I went to Ejanla for a date and it was great. The security welcomed us warmly, and we were ushered upstairs. We had a fantastic time." },
    { name: "Dayan Ben", role: "Local Guide · 86 reviews", body: "Amazing restaurant with great staff, serene atmosphere, child friendly — and the best part is their amazing grilled fishes. The best place in Lagos fr." },
    { name: "Ekundayo Olafare", role: "Local Guide · 95 reviews", body: "I really liked the place, the food was great, the ambiance was good. Oluchi was so nice and friendly. All the staff were very pleasant." },
  ];
  return (
    <section className="py-24 lg:py-32 bg-paper-warm">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <div className="eyebrow mb-4">Reviews</div>
            <h2 className="font-display text-4xl md:text-6xl max-w-2xl">
              What guests <span className="italic text-brand-red">say</span>.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex text-brand-yellow">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
            </div>
            <div className="font-display text-2xl">4.8</div>
            <div className="font-mono-tag text-ink-soft">76 Google reviews</div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.name} className="p-8 rounded-3xl bg-white border border-line card-lift flex flex-col">
              <div className="flex text-brand-yellow mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
              </div>
              <p className="text-lg leading-relaxed flex-1">"{r.body}"</p>
              <footer className="mt-6 pt-6 border-t border-line">
                <div className="font-display">{r.name}</div>
                <div className="font-mono-tag text-ink-soft mt-1">{r.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------- Gallery Preview -- */
function GalleryPreview() {
  const shots = [
    { src: interiorImg, span: "md:col-span-2 md:row-span-2 aspect-square" },
    { src: chefImg, span: "aspect-[4/5]" },
    { src: smallChops, span: "aspect-[4/5]" },
    { src: familyImg, span: "aspect-square md:col-span-2" },
    { src: pepperSauce, span: "aspect-[4/5]" },
    { src: celebration, span: "aspect-[4/5]" },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <div className="eyebrow mb-4">Inside Ejanla</div>
            <h2 className="font-display text-4xl md:text-6xl max-w-2xl">
              Vibes, plates & <span className="italic text-brand-green">people</span>.
            </h2>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-widest hover:text-brand-red">
            Open gallery <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {shots.map((s, i) => (
            <div key={i} className={`img-zoom rounded-2xl overflow-hidden bg-paper-warm ${s.span}`}>
              <img src={s.src} alt="Ejanla" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- Instafeed -- */
function Instafeed() {
  return (
    <section className="py-24 lg:py-32 bg-paper-warm">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-center">
          <div>
            <div className="eyebrow mb-4">@ejanla.ng</div>
            <h2 className="font-display text-4xl md:text-5xl">
              Live from our <span className="italic text-brand-red">kitchen</span>.
            </h2>
            <p className="mt-6 text-ink-soft max-w-md">
              We document almost everything on Instagram — the grill, the guests, the good times.
              Follow along and tag us when you visit.
            </p>
            <a href="https://instagram.com/ejanla.ng" target="_blank" rel="noreferrer" className="btn-primary mt-8 inline-flex">
              <Instagram size={16} /> Follow on Instagram
            </a>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {[grilledPrawns, pepperSoup, cocktailImg, chefImg, celebration, jollof].map((src, i) => (
              <a
                key={i}
                href="https://instagram.com/ejanla.ng"
                target="_blank"
                rel="noreferrer"
                className="img-zoom aspect-square rounded-xl overflow-hidden bg-white relative group"
              >
                <img src={src} alt="Instagram post placeholder" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors grid place-items-center">
                  <Instagram className="text-white opacity-0 group-hover:opacity-100 transition" size={22} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------- News/Events -- */
function NewsEvents() {
  const posts = [
    { tag: "Event", date: "Live · Fridays", title: "Karaoke Nights at Ejanla Lekki", body: "Grab the mic. We handle the fish, the drinks and the vibe until midnight." },
    { tag: "Menu", date: "New", title: "Seafood Boil is back", body: "Crab, prawns, sausage, boiled egg, Irish potatoes with jollof and seafood fried rice." },
    { tag: "Catering", date: "Book now", title: "Owambe season is here", body: "From intimate birthdays to full weddings — we cater platters, small chops and the bar." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <div className="eyebrow mb-4">Latest</div>
            <h2 className="font-display text-4xl md:text-6xl">News & events.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group p-8 rounded-3xl border border-line bg-white card-lift flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-brand-red">{p.tag}</span>
                <span className="font-mono-tag text-ink-soft">{p.date}</span>
              </div>
              <h3 className="font-display text-2xl mt-6">{p.title}</h3>
              <p className="mt-4 text-ink-soft leading-relaxed flex-1">{p.body}</p>
              <div className="mt-8 inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest text-ink group-hover:text-brand-red transition-colors">
                Learn more <ArrowUpRight size={14} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Branches -- */
function Branches() {
  const branches = [
    { city: "Lekki", address: "40 Fola Osibo Rd, Lekki Phase I, Lagos", phone: "0707 246 6058 · 0705 677 8589" },
    { city: "Surulere", address: "Surulere, Lagos", phone: "0703 241 8505 · 0805 864 4466" },
    { city: "Abuja", address: "FCT Abuja", phone: "0705 416 8090 · 0906 934 5808" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-paper-warm">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow mb-4">Find us</div>
          <h2 className="font-display text-4xl md:text-6xl">
            Three cities. <span className="italic text-brand-green">One fire.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {branches.map((b) => (
            <div key={b.city} className="p-8 rounded-3xl bg-white border border-line card-lift">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-3xl">{b.city}</h3>
                <span className="font-mono-tag text-brand-red">Open</span>
              </div>
              <p className="mt-6 text-ink-soft">{b.address}</p>
              <p className="mt-2 font-display text-sm">{b.phone}</p>
              <div className="mt-6 flex gap-2">
                <Link to="/contact" className="btn-ghost text-xs py-2 px-4">Directions</Link>
                <a href={`tel:${b.phone.split(" ")[0]}`} className="btn-primary text-xs py-2 px-4">Call</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- Reserve -- */
function ReserveCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-paper p-10 md:p-16 lg:p-24">
          <div className="absolute inset-0 opacity-30">
            <img src={interiorImg} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
          <div className="relative max-w-2xl">
            <div className="eyebrow mb-6 text-white/70 [&::before]:bg-brand-yellow">Reservations</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Save your <span className="italic text-brand-yellow">table</span>.
            </h2>
            <p className="mt-6 text-lg text-white/75 max-w-lg">
              Birthdays, dates, business dinners or the whole extended family — reserve
              your space and we'll do the rest.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/reservations" className="btn-accent">Book a Table</Link>
              <a href="https://wa.me/2347072466058" target="_blank" rel="noreferrer" className="border border-white/40 text-paper px-6 py-3 rounded-full font-display text-xs uppercase tracking-widest hover:bg-white hover:text-ink transition-all">
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
