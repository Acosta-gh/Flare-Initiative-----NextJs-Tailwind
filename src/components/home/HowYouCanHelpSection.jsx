"use client";
import { Fade } from "react-awesome-reveal";
import SectionHeader from "@/components/shared/SectionHeader";

const cards = [
  {
    badge: "Partner",
    badgeColor: "bg-brand-blue text-white",
    borderColor: "border-brand-blue",
    title: "Build With Us",
    description: "Collaborate on creating a secure, national suicide tracking system.",
  },
  {
    badge: "Donate",
    badgeColor: "bg-white text-brand-red",
    bgColor: "bg-brand-red",
    title: "Support Our Mission",
    description: "Fund the database that will drive evidence-based prevention.",
    textColor: "text-white",
  },
  {
    badge: "Support",
    badgeColor: "bg-brand-orange text-white",
    borderColor: "border-brand-orange",
    title: "Spread Awareness",
    description: "Help bring visibility to this critical mental health issue.",
  },
];

export default function HowYouCanHelpSection() {
  return (
    <section id="help" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <Fade triggerOnce duration={800}>
          <SectionHeader title="How You Can Help" className="mb-16" />
        </Fade>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Fade direction="up" cascade damping={0.15} triggerOnce duration={800}>
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor || "bg-white"} rounded-2xl p-8 ${card.borderColor ? `border-2 ${card.borderColor}` : ""} flex flex-col`}
              >
                <div className="mb-6">
                  <span className={`inline-block px-4 py-1.5 ${card.badgeColor} text-sm font-bold rounded-full uppercase tracking-wide`}>
                    {card.badge}
                  </span>
                </div>
                <h3 className={`text-3xl md:text-4xl font-bold ${card.textColor || "text-brand-dark"} mb-4 font-brand-heading leading-tight`}>
                  {card.title}
                </h3>
                <p className={`${card.textColor || "text-brand-dark/70"} font-brand text-lg mb-8 flex-grow`}>
                  {card.description}
                </p>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
}