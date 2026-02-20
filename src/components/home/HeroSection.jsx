"use client";
import { Fade } from "react-awesome-reveal";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import backgroundFirefighterImage from "@/assets/images/background.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(24, 24, 24, 0.55), rgba(38, 43, 53, 0.65)),
          url(${backgroundFirefighterImage.src})
        `,
        paddingTop: "112px",
      }}
    >
      <div className="container mx-auto px-6 relative bottom-9">
        <div className="max-w-4xl mx-auto text-center">
          <Fade triggerOnce duration={800}>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-wide text-brand-white leading-[1.05] font-brand-heading">
              The Flare Initiative
            </h1>
            <p className="text-lg md:text-xl text-brand-white/90 leading-relaxed max-w-2xl mx-auto mt-6 font-brand">
              Break the silence. Shining a light on first responder suicides
              through data-driven prevention and national visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
              <a className="group px-7 py-3 rounded-xl bg-brand-orange text-brand-white cursor-pointer transition-all font-semibold flex items-center justify-center gap-2 shadow-md">
                Join Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}