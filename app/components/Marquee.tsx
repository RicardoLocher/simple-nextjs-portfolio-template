import { marquee } from "@/app/lib/portfolio";

export default function Marquee() {
  return (
    <section
      aria-label="Technologies and disciplines"
      className="relative border-y border-line bg-white/[0.015] py-6"
    >
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="flex shrink-0 animate-marquee items-center">
          {[...marquee, ...marquee].map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="flex items-center whitespace-nowrap px-6 text-sm tracking-wide text-muted"
            >
              <span className="mr-6 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
