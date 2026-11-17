const items = [
  "Weddings",
  "Private Dining",
  "Corporate Events",
  "Grazing Tables",
  "Celebrations",
  "Hog Roasts",
  "Pop-up Events",
  "Garden Parties",
];

export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-8 font-serif text-3xl font-light italic md:px-12 md:text-5xl">{item}</span>
          <span className="font-script text-3xl text-brass md:text-4xl">&amp;</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden border-y border-sand/70 bg-cream py-7 text-ink md:py-9">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
