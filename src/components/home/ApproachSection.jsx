"use client";
import { Database, Eye, TrendingUp, Heart } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    number: "01",
    icon: Database,
    accentColor: "text-brand-blue",
    bgAccent: "bg-brand-blue",
    title: "Collect Data",
    description: "Build a secure national database with historical and current information on first responder suicides across Canada.",
  },
  {
    number: "02",
    icon: Eye,
    accentColor: "text-brand-orange",
    bgAccent: "bg-brand-orange",
    title: "Make It Visible",
    description: "Share suicide trends through transparent, trauma-informed reporting that respects those affected.",
  },
  {
    number: "03",
    icon: TrendingUp,
    accentColor: "text-brand-orange",
    bgAccent: "bg-brand-orange",
    title: "Drive Change",
    description: "Equip organizations and governments with evidence to guide prevention programs and policy decisions.",
  },
  {
    number: "04",
    icon: Heart,
    accentColor: "text-brand-red",
    bgAccent: "bg-red-500",
    title: "Long-Term Impact",
    description: "Stronger prevention programs, national reporting standards, reduced stigma, and consistent support for families.",
    iconFill: true,
  },
];

export default function ApproachSection() {
  return (
    <section className="py-20 md:py-28 bg-white" id="approach">
      <div className="container mx-auto px-6 max-w-6xl">
        <Fade triggerOnce duration={800}>
          <SectionHeader title="Our Approach" />
          <p className="mt-4 text-brand-dark/50 font-brand text-base max-w-xl leading-relaxed">
            A structured path from invisible data to national-level change.
          </p>
          <div className="w-10 h-[2px] bg-brand-blue mt-6 mb-14" />
        </Fade>

        <div className="bg-brand-blue/[0.04] grid grid-cols-2 lg:grid-cols-4 gap-1">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Fade key={step.number} triggerOnce duration={800} delay={i * 150}>
                <div className="relative flex flex-col p-10 border border-brand-dark/[0.08] bg-gray-50 h-full">
                  {/* Step number — faint background text */}
                  <span
                    className="absolute top-4 right-5 text-6xl font-extrabold text-gray-500/20 font-brand-heading select-none pointer-events-none leading-none"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  {/* Icon badge */}
                  <div className={`w-10 h-10 flex items-center justify-center mb-6 ${step.bgAccent}/10`}>
                    <Icon
                      className={`w-5 h-5 ${step.accentColor} ${step.iconFill ? "fill-brand-red" : ""}`}
                      strokeWidth={1.75}
                    />
                  </div>

                  {/* Step label */}
                  <p className="text-xs font-bold text-brand-dark/25 font-brand tracking-[0.2em] uppercase mb-3">
                    Step {step.number}
                  </p>

                  <h3 className="text-2xl font-bold text-brand-dark font-brand-heading mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-brand-dark/55 font-brand text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {/* Bottom accent bar */}
                  <div className={`mt-8 h-[2px] w-8 ${step.bgAccent}`} />
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}