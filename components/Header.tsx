"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Occasions" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-700 ease-silk ${
          solid
            ? "bg-cream/85 py-2 shadow-[0_1px_0_rgb(0_0_0/0.06)] backdrop-blur-xl"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#home" aria-label="Artisan Catering, back to top" className="relative block h-12 w-[92px] md:h-14 md:w-[108px]">
            <Image
              src="/logo.png"
              alt="Artisan Catering"
              fill
              preload
              sizes="110px"
              className={`object-contain transition-[filter] duration-700 ${
                solid ? "mix-blend-multiply" : "invert mix-blend-screen"
              }`}
            />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`link-line pb-1 text-[0.7rem] font-medium uppercase tracking-[0.28em] transition-colors duration-500 ${
                  solid ? "text-ink" : "text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`btn !px-6 !py-3 ${solid ? "btn-solid" : "btn-ghost"}`}
            >
              Enquire Now
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`relative z-[60] flex h-11 w-11 items-center justify-center md:hidden ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-silk ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-silk ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-espresso px-6 pb-10 pt-28 text-cream transition-[clip-path] duration-700 ease-silk md:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-2">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${150 + i * 70}ms` : "0ms" }}
              className={`font-serif text-5xl font-light transition-[opacity,transform] duration-700 ease-silk ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="space-y-6">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="btn btn-light w-full"
          >
            Start Your Enquiry
          </a>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-cream/50">
            Devon &amp; the South West
          </p>
        </div>
      </div>
    </>
  );
}
