import Image from "next/image";
import Reveal from "./Reveal";

const pillars = [
  { value: "24+", label: "Years of culinary experience" },
  { value: "100%", label: "Bespoke, never off-the-shelf" },
  { value: "Devon", label: "Rooted here, serving the South West" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-5 md:px-10 lg:grid-cols-12 lg:gap-20">
        {/* Portrait */}
        <div className="relative lg:col-span-5">
          <Reveal variant="mask" className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-linen">
            <Image
              src="/chef1.jpg"
              alt="Chef Jordan Hatfield, founder of Artisan Catering"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover grayscale-[15%] transition-transform duration-[1.6s] ease-silk hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-4 rounded-[20px] border border-white/25" />
          </Reveal>

          <Reveal
            variant="up"
            delay={300}
            className="absolute -bottom-8 right-4 w-56 rounded-2xl bg-espresso p-6 text-cream shadow-2xl shadow-espresso/30 md:-right-8 md:w-64"
          >
            <p className="font-script text-4xl leading-none text-brass-light">Jordan</p>
            <p className="mt-3 text-[0.65rem] uppercase tracking-[0.3em] text-cream/60">
              Founder &amp; Executive Chef
            </p>
          </Reveal>

          <div aria-hidden className="absolute -left-10 -top-10 -z-0 hidden h-40 w-40 rounded-full border border-brass/30 lg:block" />
        </div>

        {/* Copy */}
        <div className="lg:col-span-7 lg:pl-6">
          <Reveal>
            <span className="eyebrow">The Maker</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-serif text-5xl font-light leading-[1.02] tracking-tight text-espresso md:text-7xl">
              Jordan <span className="italic text-brass">Hatfield</span>
            </h2>
          </Reveal>

          <div className="mt-10 max-w-2xl space-y-6 text-lg font-light leading-relaxed text-stone">
            <Reveal delay={150}>
              <p>
                With over twenty-four years in kitchens across the South West, Jordan has proven that
                with his dedication and skill, he can create exceptional dishes that bring joy to
                those who taste them.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                While he is a hands-on creator who spends his mornings working out why the front of
                house are&hellip; less than ideal, he ensures every plate meets his rigorous
                standards. The kitchen is his sanctuary of precision.
              </p>
            </Reveal>
          </div>

          <Reveal delay={250}>
            <blockquote className="relative mt-12 max-w-2xl border-l border-brass pl-8">
              <p className="font-serif text-3xl font-light italic leading-snug text-espresso md:text-4xl">
                &ldquo;For me, it&rsquo;s simple if you care about the craft!&rdquo;
              </p>
            </blockquote>
          </Reveal>

          <dl className="mt-16 grid gap-8 border-t border-sand pt-10 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.label} delay={300 + i * 100}>
                <dt className="font-serif text-4xl text-espresso md:text-5xl">{p.value}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-stone">{p.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
