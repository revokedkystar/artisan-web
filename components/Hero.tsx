"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

const slides = [
  { src: "/welcome.png", alt: "Candlelit barn wedding breakfast with long banquet tables" },
  { src: "/welcome2.png", alt: "Elegant table setting with florals and soft linen" },
  { src: "/welcome3.png", alt: "Historic Devon castle venue on a summer's day" },
];

const DURATION = 6500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), DURATION);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Artisan Catering highlights"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((s, i) => {
        const active = i === index;
        return (
          <div
            key={s.src}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-silk ${
              active ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
          >
            <Image
              key={active ? `${s.src}-on` : s.src}
              src={s.src}
              alt={s.alt}
              fill
              preload={i === 0}
              sizes="100vw"
              quality={75}
              className={`object-cover ${active ? "animate-kenburns" : ""}`}
            />
          </div>
        );
      })}

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-espresso/60 via-espresso/20 to-espresso/85" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgb(28_24_20/0.55)_100%)]" />

      {/* Copy */}
      <div className="relative z-[3] mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-28 md:px-10 md:pb-32">
        <div className="max-w-4xl text-white">
          <p className="eyebrow !text-brass-light opacity-0 [animation:hero-in_1.2s_var(--ease-silk)_0.2s_forwards]">
            Private Event Catering · Devon
          </p>
          <h1 className="mt-6 font-serif text-[clamp(3.4rem,10vw,9rem)] font-light leading-[0.9] tracking-[-0.02em]">
            <span className="block overflow-hidden pb-2">
              <span className="block [animation:hero-rise_1.4s_var(--ease-silk)_0.35s_both]">
                Artisan
              </span>
            </span>
            <span className="block overflow-hidden pb-3">
              <span className="block italic text-brass-light [animation:hero-rise_1.4s_var(--ease-silk)_0.5s_both]">
                Catering
              </span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/85 opacity-0 md:text-xl [animation:hero-in_1.2s_var(--ease-silk)_0.85s_forwards]">
            Devon&rsquo;s finest just got a whole lot finer. Bespoke menus for weddings,
            private dining and celebrations across the South West.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 opacity-0 [animation:hero-in_1.2s_var(--ease-silk)_1.05s_forwards]">
            <a href="#contact" className="btn btn-light">
              Enquire Now <ArrowRight />
            </a>
            <a href="#gallery" className="btn btn-ghost">
              View the Gallery
            </a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 z-[4]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 pb-8 md:px-10">
          <div className="flex flex-1 items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index}
                className="group relative h-6 w-full max-w-24 cursor-pointer"
              >
                <span className="absolute inset-x-0 top-1/2 h-px bg-white/30" />
                <span
                  key={i === index ? `p-${index}` : `i-${i}`}
                  className={`absolute inset-x-0 top-1/2 h-px origin-left bg-white ${
                    i === index
                      ? paused
                        ? "scale-x-100"
                        : "animate-progress"
                      : "scale-x-0"
                  }`}
                  style={{ ["--slide-duration" as string]: `${DURATION}ms` }}
                />
              </button>
            ))}
            <span className="ml-2 hidden font-serif text-sm italic text-white/70 sm:inline">
              0{index + 1} / 0{slides.length}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm transition duration-500 ease-silk hover:border-white hover:bg-white hover:text-espresso"
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm transition duration-500 ease-silk hover:border-white hover:bg-white hover:text-espresso"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-28 right-5 z-[4] hidden flex-col items-center gap-3 text-white/70 md:right-10 md:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.35em] [writing-mode:vertical-rl]">Scroll</span>
        <span className="relative h-16 w-px overflow-hidden bg-white/20">
          <span className="absolute inset-0 animate-scroll-cue bg-white" />
        </span>
      </a>
    </section>
  );
}
