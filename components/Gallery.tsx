"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { ArrowLeft, ArrowRight, Close, Expand, Instagram } from "./icons";

const photos = [
  { src: "/food3.png", alt: "Summer grazing platters on the lawn", span: "col-span-2 row-span-2" },
  { src: "/food1.png", alt: "Plated main course with seasonal garnish", span: "" },
  { src: "/food4.png", alt: "Cured salmon wreath with edible flowers", span: "" },
  { src: "/food6.png", alt: "Sliced duck breast with figs and pomegranate", span: "" },
  { src: "/food2.png", alt: "Afternoon tea boxes with pastries and macarons", span: "" },
  { src: "/food7.png", alt: "Fine-dining plates served on blue ceramics", span: "col-span-2" },
  { src: "/food5.png", alt: "Rustic outdoor table styled with wildflowers", span: "col-span-2" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const step = useCallback((dir: number) => {
    setActive((i) => (i === null ? i : (i + dir + photos.length) % photos.length));
  }, []);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, step]);

  return (
    <section id="gallery" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">The Gallery</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tight text-espresso md:text-7xl">
                A taste of <span className="italic text-brass">our work</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <a
              href="https://instagram.com/artisancateringdevon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Instagram /> Explore Our Instagram
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid auto-rows-[240px] grid-cols-2 gap-3 md:auto-rows-[280px] md:grid-cols-4 md:gap-5">
          {photos.map((p, i) => (
            <Reveal
              key={p.src}
              variant="scale"
              delay={(i % 4) * 90}
              className={p.span}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open image: ${p.alt}`}
                className="group relative block h-full w-full cursor-zoom-in overflow-hidden rounded-[22px] bg-linen"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                  className="object-cover transition duration-[1.4s] ease-silk group-hover:scale-[1.07]"
                />
                <span className="absolute inset-0 bg-espresso/0 transition-colors duration-700 ease-silk group-hover:bg-espresso/25" />
                <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-cream text-espresso opacity-0 transition duration-500 ease-silk group-hover:translate-y-0 group-hover:opacity-100">
                  <Expand />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        aria-hidden={active === null}
        onClick={() => setActive(null)}
        className={`fixed inset-0 z-[70] flex items-center justify-center bg-espresso/95 p-4 backdrop-blur-md transition-opacity duration-500 ease-silk md:p-12 ${
          active === null ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        {active !== null && (
          <>
            <div
              key={active}
              className="relative h-full max-h-[82vh] w-full max-w-5xl [animation:hero-in_0.7s_var(--ease-silk)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                fill
                sizes="90vw"
                className="rounded-2xl object-contain"
              />
            </div>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center font-serif text-lg italic text-cream/75">
              {photos[active].alt}
            </p>
          </>
        )}
        <button
          type="button"
          onClick={() => setActive(null)}
          aria-label="Close image viewer"
          className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream transition hover:bg-cream hover:text-espresso"
        >
          <Close />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            step(-1);
          }}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 text-cream transition hover:bg-cream hover:text-espresso md:left-8"
        >
          <ArrowLeft />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            step(1);
          }}
          aria-label="Next image"
          className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 text-cream transition hover:bg-cream hover:text-espresso md:right-8"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
