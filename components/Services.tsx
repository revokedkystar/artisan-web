import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowRight } from "./icons";

const services = [
  {
    title: "Weddings",
    copy: "From candlelit barns to castle lawns, a wedding breakfast your guests will talk about for years.",
    img: "/welcome.png",
    alt: "Candlelit barn set for a wedding breakfast",
  },
  {
    title: "Private Dining",
    copy: "Restaurant-calibre tasting menus, cooked and plated in the comfort of your own home.",
    img: "/food1.png",
    alt: "Plated fine-dining main course",
  },
  {
    title: "Corporate Events",
    copy: "Polished, punctual catering that makes a lasting impression on clients and teams alike.",
    img: "/food6.png",
    alt: "Elegant plated dishes on a wooden table",
  },
  {
    title: "Grazing & Celebrations",
    copy: "Abundant grazing tables and sharing boards for birthdays, garden parties and gatherings.",
    img: "/food3.png",
    alt: "Grazing platters laid out on the grass",
  },
  {
    title: "Hog Roasts",
    copy: "Slow-roasted hog with crackling, homemade sauces and fresh rolls, perfect for feeding a crowd outdoors.",
    img: "/food5.png",
    alt: "Rustic outdoor table set for a relaxed gathering",
  },
  {
    title: "Pop-up Events",
    copy: "Pop-up dining experiences at your venue or event, available depending on circumstances. Get in touch to talk it through.",
    img: "/welcome2.png",
    alt: "Styled pop-up dining table with florals",
    note: "On request",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-linen py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">Occasions</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 max-w-2xl font-serif text-5xl font-light leading-[1.05] tracking-tight text-espresso md:text-7xl">
                Crafted for every <span className="italic text-brass">occasion</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="max-w-sm">
            <p className="text-lg font-light leading-relaxed text-stone">
              Every menu is designed from scratch around your guests, your venue and the season.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 110} variant="up">
              <a
                href="#contact"
                className="group relative flex aspect-[3/4] flex-col lg:aspect-[5/4] justify-end overflow-hidden rounded-[24px] bg-espresso p-7 text-cream"
              >
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-80 transition duration-[1.4s] ease-silk group-hover:scale-110 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />

                <span className="absolute left-7 top-7 font-serif text-sm italic text-cream/70">
                  0{i + 1}
                </span>
                {"note" in s && (
                  <span className="absolute right-7 top-6 rounded-full border border-brass-light/60 bg-espresso/40 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.25em] text-brass-light backdrop-blur-sm">
                    {s.note}
                  </span>
                )}

                <div className="relative">
                  <h3 className="font-serif text-3xl font-normal md:text-[2.1rem]">{s.title}</h3>
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-silk group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] max-lg:grid-rows-[1fr]">
                    <p className="overflow-hidden text-sm leading-relaxed text-cream/80">
                      <span className="block pt-3">{s.copy}</span>
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-brass-light">
                    Enquire
                    <ArrowRight className="transition-transform duration-500 ease-silk group-hover:translate-x-1.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
