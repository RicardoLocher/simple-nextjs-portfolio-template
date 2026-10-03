import { skillGroups } from "@/app/lib/portfolio";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Skills"
            title={
              <>
                Tools I reach for{" "}
                <span className="text-gradient">every day</span>
              </>
            }
            description="A flexible toolkit that scales from a quick prototype to a large production system."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 110}>
              <div className="card-hover h-full rounded-3xl glass p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 font-mono text-xs text-foreground">
                    0{index + 1}
                  </span>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-white/[0.02] px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
