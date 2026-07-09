import { MessageCircle, ShoppingBag } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://glovoapp.com"
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper pl-5 pr-2 py-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] hover:bg-brand-red transition-colors"
        aria-label="Order online"
      >
        <span className="font-display text-xs uppercase tracking-widest">Order</span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-yellow text-ink">
          <ShoppingBag size={16} />
        </span>
      </a>
      <a
        href="https://wa.me/2347072466058"
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 rounded-full bg-brand-green text-white pl-5 pr-2 py-2 shadow-[0_20px_50px_-20px_rgba(78,128,23,0.6)] hover:bg-ink transition-colors"
        aria-label="WhatsApp us"
      >
        <span className="font-display text-xs uppercase tracking-widest">WhatsApp</span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand-green">
          <MessageCircle size={16} />
        </span>
      </a>
    </div>
  );
}
