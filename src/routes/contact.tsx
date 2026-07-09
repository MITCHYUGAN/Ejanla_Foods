import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Phone, MessageCircle, MapPin, Clock, Mail, Instagram, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ejanla Foods | Lekki, Surulere & Abuja" },
      { name: "description", content: "Contact Ejanla Foods — call, WhatsApp or visit us in Lekki, Surulere or Abuja. Open daily until midnight." },
      { property: "og:title", content: "Contact Ejanla Foods" },
      { property: "og:description", content: "Call, WhatsApp or visit us in Lekki, Surulere and Abuja." },
    ],
  }),
  component: ContactPage,
});

const branches = [
  {
    city: "Lekki",
    address: "40 Fola Osibo Rd, Lekki Phase I, Lagos 106104",
    phones: ["0707 246 6058", "0705 677 8589"],
    hours: "Daily · 10am — 12am",
    map: "https://www.google.com/maps?q=40+Fola+Osibo+Rd,+Lekki+Phase+I,+Lagos&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=40+Fola+Osibo+Rd,+Lekki+Phase+I,+Lagos",
    whatsapp: "2347072466058",
  },
  {
    city: "Surulere",
    address: "Surulere, Lagos",
    phones: ["0703 241 8505", "0805 864 4466"],
    hours: "Daily · 10am — 12am",
    map: "https://www.google.com/maps?q=Ejanla+Surulere+Lagos&output=embed",
    directions: "https://www.google.com/maps/search/?api=1&query=Ejanla+Surulere+Lagos",
    whatsapp: "2347032418505",
  },
  {
    city: "Abuja",
    address: "FCT, Abuja",
    phones: ["0705 416 8090", "0906 934 5808"],
    hours: "Daily · 10am — 12am",
    map: "https://www.google.com/maps?q=Ejanla+Abuja&output=embed",
    directions: "https://www.google.com/maps/search/?api=1&query=Ejanla+Abuja",
    whatsapp: "2347054168090",
  },
];

function ContactPage() {
  const [active, setActive] = useState(0);
  const [sent, setSent] = useState(false);
  const b = branches[active];

  return (
    <SiteLayout>
      <section className="container-x pt-10 pb-16">
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">Get in touch</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Talk to <span className="italic text-brand-red">Ejanla</span>.
          </h1>
          <p className="mt-6 text-lg text-ink-soft max-w-xl">
            Three branches. One WhatsApp away. Reach out for orders, reservations,
            catering enquiries, feedback or a friendly hello.
          </p>
        </div>
      </section>

      {/* Branch tabs + map */}
      <section className="container-x pb-24">
        <div className="flex flex-wrap gap-2 mb-8">
          {branches.map((br, i) => (
            <button
              key={br.city}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full font-mono-tag transition-all ${
                i === active ? "bg-ink text-paper" : "bg-paper-warm text-ink-soft hover:bg-paper hover:text-ink border border-line"
              }`}
            >
              {br.city}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl overflow-hidden border border-line aspect-[4/3] lg:aspect-auto min-h-[400px] bg-paper-warm">
            <iframe
              key={b.map}
              src={b.map}
              className="h-full w-full border-0"
              loading="lazy"
              title={`Ejanla ${b.city} map`}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-paper-warm border border-line">
            <div className="font-mono-tag text-brand-red">Ejanla · {b.city}</div>
            <h2 className="font-display text-4xl mt-2">{b.city}</h2>

            <div className="mt-8 space-y-6">
              <Row icon={<MapPin size={16} />} label="Address" value={b.address} />
              <Row icon={<Clock size={16} />} label="Hours" value={b.hours} />
              <Row
                icon={<Phone size={16} />}
                label="Call"
                value={
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {b.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-brand-red">{p}</a>
                    ))}
                  </div>
                }
              />
              <Row
                icon={<MessageCircle size={16} />}
                label="WhatsApp"
                value={
                  <a href={`https://wa.me/${b.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-brand-green">
                    Chat with {b.city}
                  </a>
                }
              />
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              <a href={b.directions} target="_blank" rel="noreferrer" className="btn-primary">Get Directions</a>
              <a href={`https://wa.me/${b.whatsapp}`} target="_blank" rel="noreferrer" className="btn-accent">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Socials */}
      <section className="bg-ink text-paper py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="eyebrow mb-4 text-white/70 [&::before]:bg-brand-yellow">Message us</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Have a question? <span className="italic text-brand-yellow">Drop a note</span>.
            </h2>
            <p className="mt-4 text-white/70 max-w-md">
              We reply to every message. For orders and bookings, WhatsApp is fastest.
            </p>

            <div className="mt-10 space-y-4">
              <SocialRow href="https://instagram.com/ejanla.ng" icon={<Instagram size={16} />} label="Instagram" handle="@ejanla.ng" />
              <SocialRow href="https://www.tiktok.com/@ejanlang" icon={<span className="font-display text-xs">TT</span>} label="TikTok" handle="@ejanlang" />
              <SocialRow href="mailto:hello@ejanla.ng" icon={<Mail size={16} />} label="Email" handle="hello@ejanla.ng" />
            </div>
          </div>

          <div className="bg-white text-ink rounded-3xl p-8 md:p-10">
            {sent ? (
              <div className="text-center py-16">
                <div className="h-14 w-14 rounded-full bg-brand-green text-white grid place-items-center mx-auto">
                  <Check size={22} />
                </div>
                <h3 className="font-display text-2xl mt-6">Message sent.</h3>
                <p className="text-ink-soft mt-2">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input label="Name" name="name" required />
                  <Input label="Phone" name="phone" required />
                </div>
                <Input label="Email" name="email" type="email" />
                <Input label="Subject" name="subject" />
                <div>
                  <span className="font-mono-tag text-ink-soft">Message</span>
                  <textarea name="message" rows={5} className="mt-2 w-full px-4 py-3 rounded-xl border border-line bg-paper-warm focus:outline-none focus:border-ink focus:bg-white transition text-sm" required />
                </div>
                <button type="submit" className="btn-primary justify-center mt-2">Send message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
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

function SocialRow({ href, icon, label, handle }: { href: string; icon: React.ReactNode; label: string; handle: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="grid grid-cols-[auto_1fr_auto] gap-4 items-center border border-white/15 hover:border-brand-yellow rounded-2xl px-5 py-4 group transition-colors">
      <div className="h-10 w-10 grid place-items-center rounded-full bg-white/10 group-hover:bg-brand-yellow group-hover:text-ink transition-colors">{icon}</div>
      <div className="min-w-0">
        <div className="font-mono-tag text-white/60">{label}</div>
        <div className="font-display truncate">{handle}</div>
      </div>
      <span className="font-mono-tag opacity-0 group-hover:opacity-100 transition-opacity">Open →</span>
    </a>
  );
}

function Input({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="font-mono-tag text-ink-soft">{label}{required && " *"}</span>
      <input type={type} name={name} required={required} className="mt-2 w-full px-4 py-3 rounded-xl border border-line bg-paper-warm focus:outline-none focus:border-ink focus:bg-white transition text-sm" />
    </label>
  );
}
