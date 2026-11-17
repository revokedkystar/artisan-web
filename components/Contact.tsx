"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { ArrowRight, Chat, Check, Instagram, MapPin } from "./icons";

const ENDPOINT = "https://formspree.io/f/mojnwyda";

type Status = "idle" | "sending" | "sent" | "error";

const fields = [
  { name: "name", label: "Client Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel" },
  { name: "event_date", label: "Date of Event", type: "date" },
  { name: "guests", label: "Number of Guests", type: "number", min: 1 },
  { name: "location", label: "Location of Venue", type: "text" },
] as const;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-linen py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid overflow-hidden rounded-[32px] bg-cream shadow-[0_40px_120px_-40px_rgb(28_24_20/0.35)] lg:grid-cols-12">
          {/* Info panel */}
          <div className="grain relative flex flex-col justify-between overflow-hidden bg-espresso p-8 text-cream md:p-14 lg:col-span-5">
            <Image src="/food7.png" alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 to-espresso" />

            <div className="relative">
              <Reveal>
                <span className="eyebrow !text-brass-light">Enquire</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] md:text-6xl">
                  Start the <span className="italic text-brass-light">conversation</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-sm text-lg font-light leading-relaxed text-cream/70">
                  Tell us about your event, and Jordan will be in touch.
                </p>
              </Reveal>
            </div>

            <Reveal delay={300} as="ul" className="relative mt-16 space-y-5 text-sm">
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-brass-light">
                  <MapPin />
                </span>
                Devon &amp; the South West
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-brass-light">
                  <Chat />
                </span>
                A personal reply from Jordan
              </li>
              <li>
                <a
                  href="https://instagram.com/artisancateringdevon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-brass-light transition group-hover:bg-brass-light group-hover:text-espresso">
                    <Instagram />
                  </span>
                  <span className="link-line">@artisancateringdevon</span>
                </a>
              </li>
            </Reveal>
          </div>

          {/* Form */}
          <div className="relative p-8 md:p-14 lg:col-span-7">
            {status === "sent" ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center [animation:hero-in_0.8s_var(--ease-silk)]">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-espresso text-brass-light">
                  <Check />
                </span>
                <h3 className="mt-8 font-serif text-4xl text-espresso">Thank you</h3>
                <p className="mt-4 max-w-sm leading-relaxed text-stone">
                  Your enquiry is on its way. Jordan will be in touch shortly to talk through your event.
                </p>
                <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-10">
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                action={ENDPOINT}
                method="POST"
                onSubmit={onSubmit}
                className="grid gap-x-10 gap-y-8 md:grid-cols-2"
              >
                {fields.map((f, i) => (
                  <Reveal key={f.name} delay={i * 60} className="field">
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required
                      placeholder=" "
                      autoComplete={"autoComplete" in f ? f.autoComplete : undefined}
                      min={"min" in f ? f.min : undefined}
                    />
                    <label htmlFor={f.name}>{f.label}</label>
                  </Reveal>
                ))}

                <Reveal delay={360} className="field md:col-span-2">
                  <textarea id="message" name="message" rows={4} placeholder=" " />
                  <label htmlFor="message">Tell us about the occasion&hellip;</label>
                </Reveal>

                <div className="flex flex-col items-start gap-5 md:col-span-2 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-stone" aria-live="polite">
                    {status === "error"
                      ? "Something went wrong. Please try again, or message us on Instagram."
                      : "We usually reply within a couple of days."}
                  </p>
                  <button type="submit" disabled={status === "sending"} className="btn btn-solid disabled:opacity-60">
                    {status === "sending" ? "Sending…" : "Send Enquiry"}
                    <ArrowRight />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
