import Image from "next/image";

import { projects } from "@/app/lib/portfolio";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight } from "./icons";

export default function Work() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title={
                <>
                  Projects I&apos;m{" "}
                  <span className="text-gradient">proud of</span>
                </>
              }
              description="A mix of client and personal work spanning product, commerce, and creative tooling."
            />
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <a
            href={featured.href}
            className="card-hover group grid overflow-hidden rounded-3xl glass lg:grid-cols-2"
          >
            <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[26rem]">
              <Image
                src={featured.image}
                alt={`${featured.title} preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs font-medium">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-between p-8 sm:p-10">
              <div>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span>{featured.category}</span>
                  <span className="h-1 w-1 rounded-full bg-line" />
                  <span>{featured.year}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {featured.blurb}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <ul className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:bg-foreground group-hover:text-background">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </a>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {rest.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100}>
              <a
                href={project.href}
                className="card-hover group flex h-full flex-col overflow-hidden rounded-3xl glass"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span>{project.category}</span>
                    <span className="h-1 w-1 rounded-full bg-line" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-3 flex items-center gap-2 text-lg font-semibold tracking-tight">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.blurb}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
