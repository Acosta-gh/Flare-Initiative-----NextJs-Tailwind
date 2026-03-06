"use client";
import { Slide, Fade } from "react-awesome-reveal";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import firefighter from "@/assets/images/firefighter.png";
import trio from "@/assets/images/threepeople.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader title="Who We Are" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-12">
          {/* Imagen */}
          <div className="lg:col-span-5">
            <div className="relative w-full max-w-sm lg:max-w-none mx-auto">
              <Slide direction="left" triggerOnce duration={1200}>
                <Image
                  src={firefighter}
                  alt="Firefighter"
                  className="w-full lg:w-80 h-72 lg:h-96 object-cover border-4 border-white"
                />
              </Slide>
              <div className="absolute right-4 lg:right-[-28px] bottom-[-32px]">
                <Slide direction="left" triggerOnce duration={1350}>
                  <Image
                    src={trio}
                    alt="First responders team"
                    className="w-44 h-44 lg:w-52 lg:h-52 object-cover border-4 border-white"
                  />
                </Slide>
              </div>
              {/* Badge */}
              <div className="hidden lg:block absolute left-[-10px] bottom-[-68px]">
                <Fade triggerOnce duration={650}>
                  <div className="bg-brand-blue text-white px-5 py-3">
                    <p className="font-bold text-base leading-none font-brand-heading">National</p>
                    <p className="text-xs leading-snug mt-1 text-white/70 font-brand">
                      First Responder Suicide Data Initiative
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="lg:col-span-7 space-y-6 text-brand-dark/70 leading-relaxed text-base font-brand mt-8 lg:mt-0">
            <Fade triggerOnce duration={650}>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark font-brand-heading leading-snug">
                Breaking the silence on first responder suicide.
              </h2>
            </Fade>

            <Fade triggerOnce duration={650}>
              <p>
                The Flare Initiative was created in response to a critical gap
                in suicide tracking for first responders. Canada currently has
                no consistent system to track suicides among police, fire,
                EMS, corrections, or dispatch personnel.
              </p>
            </Fade>

            <Fade triggerOnce duration={650}>
              <p>
                Existing information is fragmented, inconsistent, and
                inaccessible, leaving first responder agencies and mental
                health organizations unable to fully understand the scope of
                the issue or evaluate prevention efforts.
              </p>
            </Fade>

            <Fade triggerOnce duration={650}>
              <div className="border-l-2 border-brand-orange pl-6 py-1">
                <p className="text-brand-dark font-semibold text-lg leading-snug font-brand">
                  We're building the first national database to track first
                  responder suicides in Canada — creating the visibility needed
                  to drive evidence-based prevention, inform policy changes,
                  and reduce stigma around mental health.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}