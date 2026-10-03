import { experience } from "@/app/lib/portfolio";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title={
              <>
                A track record of{" "}
                <span className="text-gradient">shipping</span>
              </>
            }
            description="Roles where I've grown, led, and left things a little better than I found them."
          />
        </Reveal>

        <ol className="relative mt-14 space-y-6 border-l border-line pl-8">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 90}>
              <li className="relative">
                <span className="absolute -left-[2.28rem] top-7 grid h-4 w-4 place-items-center rounded-full border border-line bg-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                </span>

                <div className="card-hover rounded-3xl glass p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {job.company} &middot; {job.location}
                      </p>
                    </div>
                    <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                      {job.period}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-muted">
                    {job.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-foreground/90"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
