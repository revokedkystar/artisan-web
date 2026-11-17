import Reveal from "./Reveal";

const steps = [
  {
    title: "Tell us about it",
    copy: "Share your date, venue and guest numbers through the enquiry form. Jordan will be in touch personally.",
  },
  {
    title: "We craft your menu",
    copy: "Together we shape a bespoke menu around your tastes, dietary needs and the very best of the season.",
  },
  {
    title: "You enjoy the day",
    copy: "We arrive, cook and serve with quiet precision, so you can be a guest at your own event.",
  },
];

export default function Process() {
  return (
    <section className="grain relative overflow-hidden bg-espresso py-24 text-cream md:py-36">
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow !text-brass-light">How it works</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
              Effortless, from <span className="italic text-brass-light">first hello</span> to final course
            </h2>
          </Reveal>
        </div>

        <ol className="mt-20 grid gap-px overflow-hidden rounded-[28px] bg-cream/10 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 140}
              className="group relative bg-espresso p-10 transition-colors duration-700 ease-silk hover:bg-ink md:p-12"
            >
              <span className="font-serif text-7xl font-light italic text-brass/80 transition-colors duration-700 group-hover:text-brass-light">
                0{i + 1}
              </span>
              <h3 className="mt-8 font-serif text-3xl">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-cream/65">{s.copy}</p>
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-brass transition-transform duration-700 ease-silk group-hover:scale-x-100" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
