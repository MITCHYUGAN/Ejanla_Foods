import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import chef from "@/assets/chef-grilling.jpg";
import interior from "@/assets/restaurant-interior.jpg";
import family from "@/assets/family-dining.jpg";
import royale from "@/assets/royale-platter.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | Ejanla Foods — The Big Fish Place Lagos" },
      { name: "description", content: "The story of Ejanla Foods — Nigeria's premium seafood restaurant. Charcoal grilling, family hospitality and three branches across Lagos and Abuja." },
      { property: "og:title", content: "Our Story | Ejanla Foods — The Big Fish Place Lagos" },
      { property: "og:description", content: "Our story, our craft, our people." },
      { property: "og:image", content: chef },
    ],
  }),
  component: AboutPage,
});


function AboutPage() {
  return (
    <SiteLayout>
      <section className="container-x pt-10 pb-16">
        <div className="max-w-4xl">
          <div className="eyebrow mb-4">Our Story</div>
          <h1 className="font-display text-5xl md:text-8xl leading-[0.9]">
            One fish. <span className="italic text-brand-red">One flame</span>. One family.
          </h1>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="img-zoom rounded-[2rem] overflow-hidden aspect-[4/3]">
            <img src={chef} alt="Chef grilling at Ejanla" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-2xl md:text-3xl font-display leading-tight text-ink">
              Ejanla Foods was born from one obsession: the perfect grilled fish, served
              in a room where every guest feels like family.
            </p>
            <p className="mt-6 text-ink-soft leading-relaxed">
              What began as a neighbourhood favourite in Lagos has grown into three
              destinations across Lekki, Surulere and Abuja — each carrying the same
              charcoal grill, the same generous hospitality, and the same commitment to
              premium seafood.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              We call ourselves <em>The Big Fish Place</em> because fish is our craft —
              croaker, catfish, tilapia, prawns — sourced fresh, seasoned properly,
              flame-grilled to order.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper-warm py-24">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { k: "01", t: "The Craft", b: "Charcoal. Timing. Marinade. No shortcuts, no microwaves. Every plate leaves the pass right." },
              { k: "02", t: "The Room", b: "Warm lighting, comfortable seating, live music on the right nights. Cosy for two, spacious for twenty." },
              { k: "03", t: "The People", b: "From the security who welcomes you to the chef behind the flame — our team makes Ejanla, Ejanla." },
            ].map((v) => (
              <div key={v.k}>
                <div className="font-display text-6xl text-brand-red">{v.k}</div>
                <h3 className="font-display text-2xl mt-4">{v.t}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media strip */}
      <section className="container-x py-24">
        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-16">
          <div className="img-zoom aspect-[4/5] rounded-2xl overflow-hidden col-span-2">
            <img src={family} alt="Family dining at Ejanla" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="grid gap-3 md:gap-6">
            <div className="img-zoom aspect-square rounded-2xl overflow-hidden">
              <img src={interior} alt="Restaurant interior" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="img-zoom aspect-square rounded-2xl overflow-hidden">
              <img src={royale} alt="Royale platter" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-ink text-paper p-10 md:p-16 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Come and see for <span className="italic text-brand-yellow">yourself</span>.
            </h2>
            <p className="mt-4 text-white/70 max-w-md">
              The best way to know Ejanla is to sit down at our table.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/reservations" className="btn-accent">Book a Table</Link>
            <Link to="/menu" className="border border-white/30 text-paper px-6 py-3 rounded-full font-display text-xs uppercase tracking-widest hover:bg-white hover:text-ink transition-all">
              See the Menu
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
