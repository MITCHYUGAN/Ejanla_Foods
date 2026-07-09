import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Check, Users, Cake, Building2, Heart } from "lucide-react";
import interior from "@/assets/restaurant-interior.jpg";
import celebration from "@/assets/celebration.jpg";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations & Catering — Ejanla Foods" },
      { name: "description", content: "Book a table, plan a private event, or request catering for weddings, birthdays and corporate dinners at Ejanla Foods." },
      { property: "og:title", content: "Reserve & Cater with Ejanla" },
      { property: "og:description", content: "Table bookings, private events and full-service catering." },
      { property: "og:image", content: celebration },
    ],
  }),
  component: ReservationsPage,
});

const occasions = [
  { icon: Users, title: "Group Dining", body: "Big table, big fish, no stress." },
  { icon: Cake, title: "Birthdays", body: "Sparklers, cake and the royale platter." },
  { icon: Heart, title: "Weddings", body: "Full catering — platters, small chops, bar." },
  { icon: Building2, title: "Corporate", body: "Business dinners and private hires." },
];

function ReservationsPage() {
  const [mode, setMode] = useState<"reserve" | "cater">("reserve");
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="container-x pt-10 pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-end">
          <div>
            <div className="eyebrow mb-4">Reservations & Catering</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Save your <span className="italic text-brand-red">table</span>. Or bring us to your <span className="italic text-brand-green">event</span>.
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-xl">
              Whether it's date-night, a milestone birthday or a full-scale owambe — we've got
              you. Fill the form and our team responds within one business hour.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {occasions.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-5 rounded-2xl border border-line">
                <Icon size={20} className="text-brand-red" />
                <div className="font-display mt-3">{title}</div>
                <p className="text-xs text-ink-soft mt-1">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-[2rem] border border-line overflow-hidden grid lg:grid-cols-[1fr_1.1fr]">
          <div className="relative min-h-[280px] lg:min-h-0">
            <img src={mode === "reserve" ? interior : celebration} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/50 to-ink/80" />
            <div className="relative p-8 lg:p-12 h-full text-paper flex flex-col justify-end">
              <div className="font-mono-tag text-brand-yellow mb-3">
                {mode === "reserve" ? "Table reservation" : "Catering enquiry"}
              </div>
              <h2 className="font-display text-3xl lg:text-4xl leading-tight">
                {mode === "reserve" ? "We hold your seat. You bring the appetite." : "From 20 to 2000 — we cater it."}
              </h2>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
                {(mode === "reserve"
                  ? ["Instant confirmation via WhatsApp", "Groups up to 40 in-house", "Special-occasion set-ups on request"]
                  : ["Custom platters and small chops", "Full bar & mixology on-site", "Weddings, birthdays, corporate"]
                ).map((l) => (
                  <li key={l} className="flex items-start gap-2"><Check size={16} className="text-brand-yellow mt-1 shrink-0" />{l}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-8 lg:p-12 bg-white">
            <div className="inline-flex bg-paper-warm rounded-full p-1 mb-8">
              {(["reserve", "cater"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => { setMode(m); setSubmitted(false); }}
                  className={`px-5 py-2 rounded-full font-mono-tag transition-colors ${
                    mode === m ? "bg-ink text-paper" : "text-ink-soft"
                  }`}
                >
                  {m === "reserve" ? "Book Table" : "Catering"}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="h-14 w-14 rounded-full bg-brand-green text-white grid place-items-center mx-auto">
                  <Check size={22} />
                </div>
                <h3 className="font-display text-2xl mt-6">Request received.</h3>
                <p className="text-ink-soft mt-2">Our team will WhatsApp you shortly to confirm.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="grid gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone / WhatsApp" name="phone" required />
                </div>
                <Field label="Email" name="email" type="email" />
                {mode === "reserve" ? (
                  <div className="grid sm:grid-cols-3 gap-5">
                    <Field label="Branch" name="branch" as="select" options={["Lekki", "Surulere", "Abuja"]} />
                    <Field label="Date" name="date" type="date" />
                    <Field label="Time" name="time" type="time" />
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Event type" name="event" as="select" options={["Birthday", "Wedding", "Corporate", "Private dinner", "Other"]} />
                    <Field label="Event date" name="date" type="date" />
                  </div>
                )}
                <Field label={mode === "reserve" ? "Party size" : "Estimated guests"} name="size" type="number" />
                <Field label="Anything special?" name="notes" as="textarea" placeholder="Occasion, dietary notes, seating preferences…" />
                <button type="submit" className="btn-primary mt-2 justify-center">Send request</button>
                <p className="text-xs text-ink-soft text-center">Or WhatsApp us instantly on <a href="https://wa.me/2347072466058" className="underline">+234 707 246 6058</a></p>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  options,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "select" | "textarea";
  options?: string[];
  placeholder?: string;
  required?: boolean;
}) {
  const base = "w-full px-4 py-3 rounded-xl border border-line bg-paper-warm focus:outline-none focus:border-ink focus:bg-white transition text-sm";
  return (
    <label className="block">
      <span className="font-mono-tag text-ink-soft">{label}{required && " *"}</span>
      <div className="mt-2">
        {as === "select" ? (
          <select name={name} className={base} required={required} defaultValue="">
            <option value="" disabled>Select…</option>
            {options?.map((o) => <option key={o}>{o}</option>)}
          </select>
        ) : as === "textarea" ? (
          <textarea name={name} rows={4} placeholder={placeholder} className={base} />
        ) : (
          <input type={type} name={name} placeholder={placeholder} className={base} required={required} />
        )}
      </div>
    </label>
  );
}
