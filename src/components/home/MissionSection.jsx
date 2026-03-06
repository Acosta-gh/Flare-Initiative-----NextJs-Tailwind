"use client";
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import gear from "@/assets/images/gear.png";
import trio2 from "@/assets/images/threepeople2.png";

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader title="Our Mission" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-12">
          {/* Texto */}
          <div className="lg:col-span-7 space-y-6 text-brand-dark/70 leading-relaxed text-base font-brand order-2 lg:order-1">
            <Fade triggerOnce duration={650}>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark font-brand-heading leading-snug">
                To reduce first responder suicides through data-driven prevention.
              </h2>
            </Fade>

            <Fade triggerOnce duration={650}>
              <p>
                By creating visibility on the true scale of first responder
                suicides, the Flare Initiative will provide the evidence base
                for effective prevention programs, inform policy changes, and
                reduce stigma around first responder mental health.
              </p>
            </Fade>

            <Fade triggerOnce duration={650}>
              <p>
                Our goal is to establish a sustainable, national tracking
                system that enables organizations, governments, and mental
                health professionals to understand trends, measure the
                effectiveness of interventions, and ultimately save lives.
              </p>
            </Fade>

            <Fade triggerOnce duration={650}>
              <div className="border-l-2 border-brand-red pl-6 py-1">
                <p className="text-brand-dark font-semibold text-lg leading-snug font-brand">
                  Through transparency, collaboration, and evidence-based
                  action, we can break the silence and create lasting change
                  for those who protect our communities.
                </p>
              </div>
            </Fade>
          </div>

          {/* Imagen */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative w-full max-w-sm lg:max-w-none mx-auto">
              <Slide direction="right" triggerOnce duration={1200}>
                <Image
                  src={gear}
                  alt="First responders team"
                  className="w-full lg:w-80 h-72 lg:h-96 object-cover border-4 border-white"
                />
              </Slide>
              <div className="absolute right-4 lg:right-[-28px] bottom-[-32px]">
                <Slide direction="right" triggerOnce duration={1350}>
                  <Image
                    src={trio2}
                    alt="Firefighter portrait"
                    className="w-44 h-44 lg:w-52 lg:h-52 object-cover border-4 border-white"
                  />
                </Slide>
              </div>
              {/* Badge */}
              <div className="hidden lg:block absolute left-[-10px] bottom-[-68px]">
                <Fade triggerOnce duration={650}>
                  <div className="bg-brand-red text-white px-5 py-3">
                    <p className="font-bold text-base leading-none font-brand-heading">Evidence-Based</p>
                    <p className="text-xs leading-snug mt-1 text-white/70 font-brand">
                      Prevention & Policy Change
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}