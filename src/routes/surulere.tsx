import { createFileRoute } from "@tanstack/react-router";
import { BranchPage, branchJsonLd, type BranchData } from "@/components/site/BranchPage";
import heroImg from "@/assets/pepper-soup.jpg";

const b: BranchData = {
  city: "Surulere",
  address: "Surulere, Lagos",
  phones: ["0703 241 8505", "0805 864 4466"],
  hours: "Daily · 10am — 12am",
  map: "https://www.google.com/maps?q=Ejanla+Surulere+Lagos&output=embed",
  directions: "https://www.google.com/maps/search/?api=1&query=Ejanla+Surulere+Lagos",
  whatsapp: "2347032418505",
  neighbourhoods: ["Surulere", "Yaba", "Ojuelegba", "Aguda", "Mainland", "Ikeja"],
  intro:
    "Bringing our signature charcoal grilled seafood to the Mainland. Pepper soup, grilled fish, cocktails and family platters, served with Surulere energy.",
  heroImg,
  amenities: ["Family Dining", "Birthday Celebrations", "Full Bar", "Group Reservations", "Takeaway", "Delivery"],
};

export const Route = createFileRoute("/surulere")({
  head: () => ({
    meta: [
      { title: "Ejanla Foods Surulere | Grilled Fish & Seafood Restaurant Lagos Mainland" },
      { name: "description", content: "Ejanla Foods Surulere — grilled croaker, catfish pepper soup, platters and cocktails on the Lagos Mainland. Open daily 10am–12am." },
      { property: "og:title", content: "Ejanla Foods Surulere | Grilled Fish & Seafood Restaurant Lagos Mainland" },
      { property: "og:description", content: "Grilled fish, pepper soup and platters in Surulere. Open daily 10am–12am." },
      { property: "og:image", content: heroImg },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(branchJsonLd(b, "https://ejanla.ng/surulere")) }],
  }),
  component: () => <BranchPage b={b} />,
});
