import type { ComponentType, SVGProps } from "react";

import { profile } from "@/app/lib/portfolio";

import Reveal from "./Reveal";
import { ArrowUpRight, Dribbble, Github, Linkedin, Mail, XIcon } from "./icons";

const socialIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: XIcon,
  Dribbble: Dribbble,
};

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface px-8 py-14 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-muted">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {profile.availability}
              </span>

              <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
                Let&apos;s build something{" "}
                <span className="text-gradient">remarkable</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
                Have a project in mind, or just want to say hello? My inbox is
                always open.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={profile.resumeUrl}
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition-colors hover:bg-white/[0.08]"
                >
                  View résumé
                </a>
              </div>

              <ul className="mt-10 flex items-center justify-center gap-3">
                {profile.socials.map((social) => {
                  const Icon = socialIcons[social.label];
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="grid h-11 w-11 place-items-center rounded-full glass text-muted transition-colors hover:text-foreground"
                      >
                        {Icon ? <Icon className="h-5 w-5" /> : social.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
