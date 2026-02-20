"use client";
import { Database, Eye, TrendingUp, Heart } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    number: "01",
    icon: Database,
    iconColor: "text-brand-blue",
    bgColor: "bg-brand-blue/20",
    title: "Collect Data",
    description: "Build a secure national database with historical and current information.",
  },
  {
    number: "02",
    icon: Eye,
    iconColor: "text-brand-orange",
    bgColor: "bg-brand-yellow/30",
    title: "Make It Visible",
    description: "Share suicide trends through transparent, trauma-informed reporting.",
  },
  {
    number: "03",
    icon: TrendingUp,
    iconColor: "text-brand-orange",
    bgColor: "bg-brand-orange/25",
    title: "Drive Change",
    description: "Equip organizations and governments with evidence to guide prevention and policy.",
  },
  {
    number: "04",
    icon: Heart,
    iconColor: "text-brand-red",
    bgColor: "bg-brand-red/25",
    title: "Long-Term Impact",
    description: "Stronger prevention programs, national reporting standards, reduced stigma, and consistent support for families.",
    iconFill: true,
  },
];

export default function ApproachSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="approach">
      <div className="container mx-auto px-6">
        <Fade triggerOnce duration={800}>
          <SectionHeader title="Our Approach" className="mb-16" />
        </Fade>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Fade cascade damping={0.2} triggerOnce duration={800}>
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="text-center space-y-4">
                  <div className="relative w-16 h-16 mx-auto">
                    <div className={`absolute inset-0 ${step.bgColor} rounded-2xl`} />
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Icon
                        className={`w-7 h-7 ${step.iconColor} ${step.iconFill ? "fill-brand-red" : ""}`}
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-brand-dark/90 font-brand-heading">{step.number}</div>
                  <h3 className="text-xl font-bold text-brand-dark font-brand-heading">{step.title}</h3>
                  <p className="text-brand-dark/70 font-brand">{step.description}</p>
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
    </section>
  );
}