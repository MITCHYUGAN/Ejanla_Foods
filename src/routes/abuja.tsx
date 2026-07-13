import { createFileRoute } from "@tanstack/react-router";
import { BranchPage, branchJsonLd, type BranchData } from "@/components/site/BranchPage";
import heroImg from "@/assets/royale-platter.jpg";

const b: BranchData = {
  city: "Abuja",
  address: "FCT, Abuja",
  phones: ["0705 416 8090", "0906 934 5808"],
  hours: "Daily · 10am — 12am",
  map: "https://www.google.com/maps?q=Ejanla+Abuja&output=embed",
  directions: "https://www.google.com/maps/search/?api=1&query=Ejanla+Abuja",
  whatsapp: "2347054168090",
  neighbourhoods: ["Wuse", "Maitama", "Asokoro", "Garki", "Jabi", "Utako"],
  intro:
    "Ejanla in the capital. Premium grilled fish, seafood platters, pepper soup and a full bar — Abuja's home for celebrations and family dining.",
  heroImg,
  amenities: ["Private Dining", "Birthday Celebrations", "Full Bar", "Catering", "Group Reservations", "Live Music"],
};

export const Route = createFileRoute("/abuja")({
  head: () => ({
    meta: [
      { title: "Ejanla Foods Abuja | Grilled Fish & Seafood Restaurant FCT" },
      { name: "description", content: "Ejanla Foods Abuja — premium grilled croaker, pepper soup, platters and cocktails in the FCT. Family dining and birthday celebrations. Open daily 10am–12am." },
      { property: "og:title", content: "Ejanla Foods Abuja | Grilled Fish & Seafood Restaurant FCT" },
      { property: "og:description", content: "Grilled fish, platters and cocktails in Abuja. Open daily 10am–12am." },
      { property: "og:image", content: heroImg },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(branchJsonLd(b, "https://ejanla.ng/abuja")) }],
  }),
  component: () => <BranchPage b={b} />,
});
