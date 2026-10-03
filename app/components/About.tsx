import { services, testimonials } from "@/app/lib/portfolio";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight, Sparkle } from "./icons";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                Developer with a designer&apos;s eye for{" "}
                <span className="text-gradient">detail and motion</span>
              </>
            }
            description="I partner with founders and product teams to turn ambitious ideas into polished, production-ready experiences. My sweet spot is where thoughtful design meets solid engineering."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="card-hover flex h-full flex-col justify-between rounded-3xl glass p-8 sm:p-10">
              <div className="space-y-5 text-base leading-relaxed text-muted">
                <p>
                  Over the past eight years I&apos;ve shipped everything from
                  data-heavy dashboards to immersive marketing sites. I care about
                  the details others skip — loading states, keyboard navigation,
                  the way a card lifts on hover.
                </p>
                <p>
                  Today I&apos;m focused on building design systems and interactive
                  product surfaces with React, TypeScript, and a healthy respect for
                  performance budgets. When I&apos;m not coding you&apos;ll find me
                  sketching interfaces or chasing a good cup of coffee.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-6">
                <div>
                  <p className="text-sm font-medium">Alex Rivera</p>
                  <p className="text-xs text-muted">
                    Creative Developer &amp; Product Designer
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs text-muted">
                  <Sparkle className="h-4 w-4" />
                  Currently building at Northwind Labs
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 90}>
                <div className="card-hover group h-full rounded-3xl glass p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-semibold">{service.title}</h3>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 120}>
              <figure className="card-hover h-full rounded-3xl glass p-8">
                <blockquote className="text-base leading-relaxed text-foreground/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-semibold text-white">
                    {testimonial.author.charAt(0)}
                  </span>
                  <span className="text-sm">
                    <span className="block font-medium">{testimonial.author}</span>
                    <span className="block text-xs text-muted">
                      {testimonial.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
