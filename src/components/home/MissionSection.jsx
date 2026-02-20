"use client";
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import gear from "@/assets/images/gear.png";
import trio2 from "@/assets/images/threepeople2.png";

export default function MissionSection() {
  return (
    <section id="mission" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader title="Our Mission" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Texto */}
          <div className="mt-12 lg:mt-0 font-brand lg:col-span-7 text-center lg:text-left space-y-6 text-brand-dark/80 leading-relaxed text-lg order-2 lg:order-1">
            <Fade triggerOnce duration={650} distance="30px">
              <p className="text-brand-dark font-bold text-2xl md:text-3xl leading-snug">
                To reduce first responder suicides through data-driven prevention.
              </p>
            </Fade>

            <Fade triggerOnce duration={650} distance="30px">
              <p>
                By creating visibility on the true scale of first responder
                suicides, the Flare Initiative will provide the evidence base
                for effective prevention programs, inform policy changes, and
                reduce stigma around first responder mental health.
              </p>
            </Fade>

            <Fade triggerOnce duration={650} distance="30px">
              <p>
                Our goal is to establish a sustainable, national tracking
                system that enables organizations, governments, and mental
                health professionals to understand trends, measure the
                effectiveness of interventions, and ultimately save lives.
              </p>
            </Fade>

            <Fade triggerOnce duration={650} distance="30px">
              <p className="text-brand-dark font-semibold text-xl">
                Through transparency, collaboration, and evidence-based
                action, we can break the silence and create lasting change for
                those who protect our communities.
              </p>
            </Fade>
          </div>

          {/* Imagen */}
          <div className="lg:col-span-5 flex justify-center lg:relative lg:top-6 order-1 lg:order-2">
            <div className="relative w-full max-w-sm lg:max-w-none lg:w-fit mx-auto">
              <Slide direction="right" triggerOnce duration={1350} distance="30px">
                <Image
                  src={gear}
                  alt="First responders team"
                  className="w-full lg:w-80 h-64 lg:h-80 object-cover rounded-2xl"
                />
              </Slide>

              <div className="absolute right-4 lg:right-[-30px] bottom-[-40px] lg:top-[-100px]">
                <Slide direction="right" triggerOnce duration={1350} distance="30px">
                  <Image
                    src={trio2}
                    alt="Firefighter portrait"
                    className="w-48 h-48 lg:w-60 lg:h-60 object-cover border-4 lg:border-5 border-white rounded-2xl shadow-lg"
                  />
                </Slide>
              </div>

              <div className="hidden lg:block absolute lg:left-[8rem] bottom-[-50px] lg:top-[15rem]">
                <Fade triggerOnce duration={650} distance="20px">
                  <div className="h-14 w-64 px-4 py-2 bg-brand-red text-brand-white rounded-xl shadow-lg">
                    <p className="font-bold text-xl leading-none">Evidence-Based</p>
                    <p className="text-xs leading-tight mt-0.5">Prevention & Policy Change</p>
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