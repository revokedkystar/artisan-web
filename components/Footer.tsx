import Image from "next/image";
import { Instagram } from "./icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Occasions" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Enquire" },
];

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-espresso text-cream">
      <div className="relative mx-auto max-w-[1440px] px-5 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="relative h-20 w-36">
              <Image src="/logo.png" alt="Artisan Catering" fill sizes="150px" className="object-contain object-left invert mix-blend-screen" />
            </div>
            <p className="mt-6 max-w-sm font-serif text-2xl font-light italic leading-snug text-cream/80">
              Devon&rsquo;s finest just got a whole lot finer.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-brass-light">Explore</p>
            <ul className="mt-6 space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-line text-cream/75 transition-colors hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-brass-light">Follow</p>
            <a
              href="https://instagram.com/artisancateringdevon"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 text-cream/75 transition-colors hover:text-cream"
            >
              <Instagram />
              <span className="link-line">@artisancateringdevon</span>
            </a>
            <p className="mt-6 text-cream/50">Serving Devon &amp; the South West</p>
          </div>
        </div>

        <p
          aria-hidden
          className="pointer-events-none mt-20 select-none whitespace-nowrap text-center font-serif text-[18vw] font-light leading-[0.8] tracking-tight text-cream/[0.06] md:text-[15vw]"
        >
          Artisan
        </p>

        <div className="flex flex-col gap-3 border-t border-cream/10 py-8 text-xs text-cream/45 md:flex-row md:justify-between">
          <p>&copy; 2020&ndash;present Artisan Catering. All rights reserved.</p>
          <p>Developed by Joshua Hatfield.</p>
        </div>
      </div>
    </footer>
  );
}
