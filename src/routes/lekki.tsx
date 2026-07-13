import { createFileRoute } from "@tanstack/react-router";
import { BranchPage, branchJsonLd, type BranchData } from "@/components/site/BranchPage";
import heroImg from "@/assets/hero-grilled-fish.jpg";

const b: BranchData = {
  city: "Lekki",
  address: "40 Fola Osibo Rd, Lekki Phase I, Lagos 106104",
  phones: ["0707 246 6058", "0705 677 8589"],
  hours: "Daily · 10am — 12am",
  map: "https://www.google.com/maps?q=40+Fola+Osibo+Rd,+Lekki+Phase+I,+Lagos&output=embed",
  directions: "https://www.google.com/maps/dir/?api=1&destination=40+Fola+Osibo+Rd,+Lekki+Phase+I,+Lagos",
  whatsapp: "2347072466058",
  neighbourhoods: ["Lekki Phase 1", "Ikate", "Lekki Phase 2", "Victoria Island", "Ikoyi", "Ajah"],
  intro:
    "Our flagship branch on Fola Osibo. Charcoal grilled croaker, seafood platters, cocktails and family-friendly dining — right in the heart of Lekki Phase 1.",
  heroImg,
  amenities: ["Free Parking", "Live Music Fridays", "Birthday Celebrations", "Private Dining", "Karaoke Nights", "Full Bar"],
};

export const Route = createFileRoute("/lekki")({
  head: () => ({
    meta: [
      { title: "Ejanla Foods Lekki | Grilled Fish Restaurant Fola Osibo Lekki Phase 1" },
      { name: "description", content: "Ejanla Foods Lekki — 40 Fola Osibo Rd, Lekki Phase 1. Charcoal grilled croaker, seafood platters, cocktails and birthday celebrations. Open daily 10am–12am." },
      { property: "og:title", content: "Ejanla Foods Lekki | Grilled Fish Restaurant Fola Osibo Lekki Phase 1" },
      { property: "og:description", content: "40 Fola Osibo Rd, Lekki Phase 1. Grilled fish, seafood, cocktails. Open daily 10am–12am." },
      { property: "og:image", content: heroImg },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(branchJsonLd(b, "https://ejanla.ng/lekki")) }],
  }),
  component: () => <BranchPage b={b} />,
});
