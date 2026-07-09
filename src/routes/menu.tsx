import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-grilled-fish.jpg";
import royale from "@/assets/royale-platter.jpg";
import pepper from "@/assets/pepper-soup.jpg";
import prawns from "@/assets/grilled-prawns.jpg";
import cocktail from "@/assets/cocktail.jpg";
import chops from "@/assets/small-chops.jpg";
import jollof from "@/assets/jollof-plate.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Ejanla Foods | Grills, Pepper Soup, Platters & Cocktails" },
      { name: "description", content: "Explore Ejanla's full menu: charcoal grilled croaker, catfish and prawns, pepper soup, royale platters, small chops, cocktails and premium spirits." },
      { property: "og:title", content: "Ejanla Foods Menu" },
      { property: "og:description", content: "Grills, platters, pepper soup, cocktails and more." },
      { property: "og:image", content: royale },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc?: string; price: string };
type Section = { id: string; title: string; blurb?: string; hero?: string; items: Item[] };

const menu: Section[] = [
  {
    id: "grills",
    title: "Grills",
    blurb: "Charcoal grilled to order. Served with fries, coleslaw and our house pepper sauce.",
    hero: heroImg,
    items: [
      { name: "Grilled Croaker Fish", desc: "Charcoal grilled Croaker served with fries, coleslaw, pepper sauce", price: "₦18,000" },
      { name: "Tasty Grilled Catfish", desc: "Direct flame grilled catfish, fries, coleslaw, pepper sauce", price: "₦15,000" },
      { name: "Juicy Steamed Catfish", desc: "Steamed catfish in foil paper, fries, coleslaw, pepper sauce", price: "₦15,000" },
      { name: "Grilled Tilapia", desc: "Charcoal grilled Tilapia, fries, coleslaw, pepper sauce", price: "₦14,000" },
      { name: "Grilled Prawns", desc: "Charcoal grilled prawns, fries, coleslaw, pepper sauce", price: "₦22,000" },
    ],
  },
  {
    id: "platters",
    title: "Platters",
    blurb: "Feasts for the table — from date-night to the whole family.",
    hero: royale,
    items: [
      { name: "Ejanla Royale Platter", desc: "Croaker, catfish, tilapia, prawns, chicken suya, turkey, samosas, spring rolls, puff puff, jollof, seafood fried rice, plantain, coleslaw, fruit & wine", price: "₦150,000" },
      { name: "Seafood Boil", desc: "Crab, prawns, boiled egg, Irish potatoes and sausage with jollof & seafood fried rice", price: "₦50,000" },
      { name: "Ejanla Rice Combo", desc: "Seafood, fried, jollof, native rice with plantain, coleslaw, chicken, hake fish & turkey", price: "₦20,000" },
      { name: "Self-Love Platter", desc: "6 samosas, 2 spring rolls, 8 puffy, fries, coleslaw, chicken, hake fish, turkey", price: "₦20,000" },
      { name: "Chicken Pack", desc: "3 grilled chicken, coleslaw, pepper sauce, choice of any 2 fries", price: "₦20,000" },
      { name: "Panla Pack", desc: "3 grilled hake fish, coleslaw, pepper sauce, choice of any 2 fries", price: "₦16,000" },
      { name: "Chicken Suya", desc: "Grilled chicken skewers with suya spice, served with onions & pepper", price: "₦15,000" },
      { name: "Ejanla Small Chops", desc: "4 beef samosas, 1 chicken spring rolls, 4 puffy, 1 grilled chicken or hake", price: "₦8,000" },
    ],
  },
  {
    id: "pepper-soup",
    title: "Pepper Soup",
    blurb: "Spicy, tasty broth served hot with yam and plantain.",
    hero: pepper,
    items: [
      { name: "Catfish Pepper Soup", price: "₦14,000" },
      { name: "Croaker Fish Pepper Soup", price: "₦16,000" },
      { name: "Tilapia Fish Pepper Soup", price: "₦13,000" },
      { name: "Turkey Pepper Soup", price: "₦12,000" },
      { name: "Chicken Pepper Soup", price: "₦10,000" },
    ],
  },
  {
    id: "bowls",
    title: "Bowls",
    blurb: "3L bowls perfect for gatherings.",
    items: [
      { name: "Soup Bowl", desc: "Choice of Egusi, Oha, Ewedu, Vegetable, White Soup or Okro", price: "₦20,000" },
      { name: "Rice Bowl", desc: "Choice of Jollof, Fried or Native Rice", price: "₦20,000" },
    ],
  },
  {
    id: "sides",
    title: "Sides & Bites",
    hero: chops,
    items: [
      { name: "Irish Potatoes", price: "₦3,000" },
      { name: "Sweet Potatoes", price: "₦3,000" },
      { name: "Yam Fries", price: "₦3,000" },
      { name: "Plantain", price: "₦4,000" },
      { name: "Coleslaw", price: "₦500" },
      { name: "Pepper Sauce", price: "₦500" },
      { name: "Samosa", price: "₦400" },
      { name: "Spring Roll", price: "₦600" },
      { name: "Puff Puff", price: "₦600" },
      { name: "Spicy Kanda", price: "₦2,000" },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails",
    blurb: "Our full-service bar. Signature and classic — shaken to order.",
    hero: cocktail,
    items: [
      { name: "Long Island", desc: "Vodka, rum, gin, tequila, triple sec, lemon", price: "₦10,000" },
      { name: "Tequila Sunrise", desc: "Tequila, orange juice, grenadine", price: "₦10,000" },
      { name: "Blue Margarita", desc: "Tequila, orange liqueur, triple sec, lime, syrup", price: "₦10,000" },
      { name: "Devil May Cry", desc: "Peach schnapps, baileys, grenadine, blue curacao, melon", price: "₦10,000" },
      { name: "Sex on the Beach", desc: "Vodka, peach schnapps, orange, cranberry, grenadine", price: "₦10,000" },
      { name: "Mojito", desc: "Rum, lime, mint, soda water, syrup", price: "₦9,000" },
      { name: "Piña Colada", desc: "Rum, pineapple, orange, coconut cream", price: "₦10,000" },
      { name: "Wet Pussy", desc: "Vodka, peach schnapps, cranberry, lime", price: "₦12,000" },
      { name: "Zombie", desc: "White & dark rum, lime, pineapple", price: "₦10,000" },
    ],
  },
  {
    id: "mocktails",
    title: "Mocktails & Smoothies",
    items: [
      { name: "Ejanla Special Mocktail", price: "₦8,000" },
      { name: "Virgin Mojito", price: "₦8,000" },
      { name: "Chapman", price: "₦8,000" },
      { name: "Fruit Punch", price: "₦8,000" },
      { name: "Watermelon Daiquiri", price: "₦8,000" },
      { name: "Ejanla Special Smoothie", price: "₦12,000" },
      { name: "Oreos Milkshake", price: "₦15,000" },
      { name: "Vanilla Milkshake", price: "₦10,000" },
      { name: "Strawberry Smoothie", price: "₦10,000" },
    ],
  },
  {
    id: "rice",
    title: "Rice",
    hero: jollof,
    items: [
      { name: "Ejanla Rice Combo", desc: "Seafood, jollof, fried & native rice with plantain and proteins", price: "₦20,000" },
      { name: "Jollof Bowl (3L)", price: "₦20,000" },
      { name: "Fried Rice Bowl (3L)", price: "₦20,000" },
      { name: "Native Rice Bowl (3L)", price: "₦20,000" },
    ],
  },
  {
    id: "spirits",
    title: "Spirits & Wine",
    blurb: "Selected whiskey, cognac, wine and champagne.",
    items: [
      { name: "Jameson Whiskey", price: "₦40,000" },
      { name: "Jameson Black Barrel", price: "₦70,000" },
      { name: "Black Label", price: "₦70,000" },
      { name: "Monkey Shoulder", price: "₦100,000" },
      { name: "Glenfiddich 15 yrs", price: "₦150,000" },
      { name: "Hennessy V.S.O.P", price: "₦100,000" },
      { name: "Martell V.S", price: "₦100,000" },
      { name: "Casamigos", price: "₦250,000" },
      { name: "Absolut Vodka", price: "₦80,000" },
      { name: "Baileys Irish Cream", price: "₦50,000" },
      { name: "Jägermeister", price: "₦40,000" },
      { name: "Four Cousins", price: "₦30,000" },
      { name: "Fruit Wine", price: "₦15,000" },
    ],
  },
  {
    id: "drinks",
    title: "Soft Drinks & Juices",
    items: [
      { name: "Freshly Squeezed Juice", desc: "Orange, Pineapple, Apple or Watermelon", price: "₦5,000" },
      { name: "Arabian Tea", price: "₦4,000" },
      { name: "Regular Tea", price: "₦2,000" },
      { name: "Cranberry", price: "₦7,000" },
      { name: "Hollandia Yoghurt", price: "₦3,000" },
      { name: "Chivita / Chi Exotic", price: "₦3,000" },
      { name: "Red Bull", price: "₦3,000" },
      { name: "Coke / Fanta / Sprite", price: "₦1,000" },
      { name: "Big Water", price: "₦1,000" },
    ],
  },
];

function MenuPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("grills");

  const filtered = menu
    .map((s) => ({
      ...s,
      items: s.items.filter(
        (i) =>
          !query ||
          i.name.toLowerCase().includes(query.toLowerCase()) ||
          (i.desc?.toLowerCase().includes(query.toLowerCase()) ?? false)
      ),
    }))
    .filter((s) => s.items.length);

  return (
    <SiteLayout>
      {/* Header */}
      <section className="container-x pt-10 pb-16">
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">The Menu</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Grilled, spiced, <span className="italic text-brand-red">served fresh</span>.
          </h1>
          <p className="mt-6 text-lg text-ink-soft max-w-xl">
            Prices in Naira. All grills come with fries, coleslaw and our house pepper sauce.
            Availability may vary by branch.
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes, drinks…"
              className="w-full pl-11 pr-4 py-4 rounded-full bg-paper-warm border border-line focus:outline-none focus:border-ink font-sans text-sm"
            />
          </div>
          <div className="hidden md:flex overflow-x-auto gap-2">
            {menu.slice(0, 5).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setActive(s.id)}
                className={`px-4 py-2 rounded-full font-mono-tag border transition-colors ${
                  active === s.id ? "bg-ink text-paper border-ink" : "border-line hover:border-ink"
                }`}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="container-x pb-24 space-y-24">
        {filtered.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-32">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] items-start">
              <div className="lg:sticky lg:top-32">
                {section.hero && (
                  <div className="img-zoom aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-paper-warm">
                    <img src={section.hero} alt={section.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                )}
                <div className="font-mono-tag text-brand-red">{section.id.replace("-", " ")}</div>
                <h2 className="font-display text-4xl md:text-5xl mt-3">{section.title}</h2>
                {section.blurb && <p className="mt-4 text-ink-soft leading-relaxed">{section.blurb}</p>}
              </div>

              <ul className="divide-y divide-line border-t border-b border-line">
                {section.items.map((it) => (
                  <li key={it.name} className="py-6 grid grid-cols-[minmax(0,1fr)_auto] gap-6 items-start group hover:bg-paper-warm px-4 -mx-4 rounded-xl transition-colors">
                    <div className="min-w-0">
                      <div className="font-display text-lg md:text-xl">{it.name}</div>
                      {it.desc && <div className="mt-2 text-sm text-ink-soft leading-relaxed">{it.desc}</div>}
                    </div>
                    <div className="font-display text-base md:text-lg shrink-0 pt-1">{it.price}</div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <div className="font-display text-2xl">Nothing matched "{query}"</div>
            <p className="text-ink-soft mt-2">Try a different search term.</p>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
