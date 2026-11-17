import Image from "next/image";
import Reveal from "./Reveal";

export default function QuoteBand() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-espresso py-28 text-cream [clip-path:inset(0)]">
      {/* Fixed-position image gives a parallax window effect while the section is clipped */}
      <div className="fixed inset-0 -z-0">
        <Image src="/welcome3.png" alt="" fill sizes="100vw" className="object-cover opacity-45" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/60 to-espresso/30" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10">
        <Reveal className="max-w-4xl">
          <span className="font-script text-6xl text-brass-light md:text-7xl">From castles to barns</span>
          <p className="mt-6 font-serif text-4xl font-light leading-[1.15] md:text-6xl">
            Exceptional food, wherever you choose to celebrate across{" "}
            <span className="italic text-brass-light">Devon &amp; the South West.</span>
          </p>
          <a href="#contact" className="btn btn-light mt-12">
            Check Availability
          </a>
        </Reveal>
      </div>
    </section>
  );
}
