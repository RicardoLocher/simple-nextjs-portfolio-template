import Image from "next/image";

import { profile, stats } from "@/app/lib/portfolio";

import Reveal from "./Reveal";
import { ArrowRight, Download, MapPin, Sparkle } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {profile.firstName}
              <br />
              <span className="text-gradient">{profile.lastName}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition-colors hover:bg-white/[0.08]"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkle className="h-4 w-4" />
                Open to remote roles
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 -z-10 animate-glow rounded-[2.5rem] bg-gradient-to-tr from-violet-500/30 via-transparent to-cyan-400/30 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-line bg-surface">
              <Image
                src="/avatar.svg"
                alt={`Portrait of ${profile.name}`}
                width={640}
                height={640}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="absolute -left-5 top-10 hidden animate-float rounded-2xl glass px-4 py-3 shadow-xl sm:block">
              <p className="text-xs text-muted">Experience</p>
              <p className="text-lg font-semibold">8+ years</p>
            </div>
            <div className="absolute -right-5 bottom-14 hidden animate-float-slow rounded-2xl glass px-4 py-3 shadow-xl sm:block">
              <p className="text-xs text-muted">Projects shipped</p>
              <p className="text-lg font-semibold">60+</p>
            </div>
          </div>
        </Reveal>
      </div>

      <dl className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto hidden max-w-6xl grid-cols-4 gap-6 px-6 pb-10 lg:grid">
        {stats.map((stat) => (
          <div key={stat.label} className="border-l border-line pl-4">
            <dt className="text-2xl font-semibold tracking-tight">{stat.value}</dt>
            <dd className="mt-1 text-xs text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
