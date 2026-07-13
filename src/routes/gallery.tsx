import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Instagram, Play } from "lucide-react";

import hero from "@/assets/hero-grilled-fish.jpg";
import royale from "@/assets/royale-platter.jpg";
import pepper from "@/assets/pepper-soup.jpg";
import prawns from "@/assets/grilled-prawns.jpg";
import cocktail from "@/assets/cocktail.jpg";
import interior from "@/assets/restaurant-interior.jpg";
import family from "@/assets/family-dining.jpg";
import chef from "@/assets/chef-grilling.jpg";
import chops from "@/assets/small-chops.jpg";
import jollof from "@/assets/jollof-plate.jpg";
import celebration from "@/assets/celebration.jpg";
import sauce from "@/assets/pepper-sauce.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Ejanla Foods — Grilled Fish, Platters & Events Lagos" },
      { name: "description", content: "Step inside Ejanla Foods — food photography, restaurant ambience, celebrations, and highlights from our Instagram and TikTok." },
      { property: "og:title", content: "Gallery | Ejanla Foods — Grilled Fish, Platters & Events Lagos" },
      { property: "og:description", content: "Food, ambience and moments from Ejanla Foods." },
      { property: "og:image", content: interior },
    ],
  }),
  component: GalleryPage,
});


const items: { src: string; alt: string; span: string; tag?: string }[] = [
  { src: hero, alt: "Grilled croaker fish", span: "md:col-span-2 md:row-span-2", tag: "Grill" },
  { src: interior, alt: "Restaurant interior", span: "md:col-span-2" },
  { src: chef, alt: "Chef grilling", span: "" },
  { src: royale, alt: "Royale Platter", span: "md:row-span-2", tag: "Platter" },
  { src: family, alt: "Family dining", span: "" },
  { src: chops, alt: "Small chops", span: "" },
  { src: pepper, alt: "Pepper soup", span: "" },
  { src: cocktail, alt: "Cocktail", span: "md:row-span-2" },
  { src: prawns, alt: "Grilled prawns", span: "" },
  { src: sauce, alt: "House pepper sauce", span: "md:col-span-2" },
  { src: celebration, alt: "Celebration", span: "" },
  { src: jollof, alt: "Jollof plate", span: "" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <section className="container-x pt-10 pb-16">
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">Gallery</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
            The <span className="italic text-brand-green">room</span>, the <span className="italic text-brand-red">plate</span>, the moment.
          </h1>
          <p className="mt-6 text-lg text-ink-soft max-w-xl">
            A window into Ejanla — from the charcoal grill to the family table.
            Fresh media drops weekly on Instagram and TikTok.
          </p>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <figure key={i} className={`group relative img-zoom rounded-2xl overflow-hidden bg-paper-warm ${it.span}`}>
              <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover" />
              {it.tag && (
                <figcaption className="absolute top-3 left-3 bg-white/90 backdrop-blur font-mono-tag px-3 py-1 rounded-full">
                  {it.tag}
                </figcaption>
              )}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all bg-gradient-to-t from-black/70 to-transparent">
                <div className="text-white font-display text-sm">{it.alt}</div>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Video / TikTok placeholder */}
      <section className="bg-ink text-paper py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
          <div>
            <div className="eyebrow mb-4 text-white/70 [&::before]:bg-brand-yellow">Watch us cook</div>
            <h2 className="font-display text-4xl md:text-5xl">
              Live from <span className="italic text-brand-yellow">@ejanlang</span> on TikTok.
            </h2>
            <p className="mt-4 text-white/70 max-w-md">
              Sizzling grill sessions, behind-the-scenes and guest highlights. Full videos
              will stream here as we integrate our socials.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="https://www.tiktok.com/@ejanlang" target="_blank" rel="noreferrer" className="btn-accent">Open TikTok</a>
              <a href="https://instagram.com/ejanla.ng" target="_blank" rel="noreferrer" className="border border-white/40 text-paper px-6 py-3 rounded-full font-display text-xs uppercase tracking-widest hover:bg-white hover:text-ink transition-all inline-flex items-center gap-2">
                <Instagram size={14} /> Instagram
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[chef, prawns, cocktail].map((src, i) => (
              <a
                key={i}
                href="https://www.tiktok.com/@ejanlang"
                target="_blank"
                rel="noreferrer"
                className="relative group aspect-[9/16] rounded-2xl overflow-hidden bg-black"
              >
                <img src={src} alt="TikTok placeholder" loading="lazy" className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-14 w-14 rounded-full bg-white/90 grid place-items-center">
                    <Play size={22} className="text-ink translate-x-[2px]" fill="currentColor" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
