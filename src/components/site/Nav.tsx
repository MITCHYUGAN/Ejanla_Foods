import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservations", label: "Reserve" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/85 backdrop-blur-xl border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group z-10" onClick={() => setOpen(false)}>
          <img src="/src/assets/logo.jpg" alt="" className="w-[50px]" />
          <span className="font-display text-base font-extrabold tracking-tight text-[30px]">
            Ejanla<span className="text-brand-red">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-4 py-2 text-sm text-ink-soft hover:text-ink transition-colors relative"
              activeProps={{
                className: "px-4 py-2 text-sm text-ink font-medium relative",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://glovoapp.com"
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs px-5 py-3"
          >
            Order Online
          </a>
        </div>

        <button
          className="lg:hidden grid place-items-center h-10 w-10 rounded-full border border-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-line">
          <div className="container-x py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-display border-b border-line last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://glovoapp.com"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-4"
            >
              Order Online
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
