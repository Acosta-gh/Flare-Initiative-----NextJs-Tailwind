"use client";
import { Slide, Fade } from "react-awesome-reveal";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import firefighter from "@/assets/images/firefighter.png";
import trio from "@/assets/images/threepeople.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader title="Who We Are" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Imagen */}
          <div className="lg:col-span-5 flex justify-center lg:relative lg:top-6">
            <div className="relative w-full max-w-sm lg:max-w-none lg:w-fit mx-auto">
              <Slide direction="left" triggerOnce duration={1350}>
                <Image
                  src={firefighter}
                  alt="Firefighter background"
                  className="w-full lg:w-80 h-64 lg:h-80 object-cover rounded-2xl"
                />
              </Slide>

              <div className="absolute right-4 lg:right-[-30px] bottom-[-40px] lg:top-[-100px]">
                <Slide direction="left" triggerOnce duration={1350}>
                  <Image
                    src={trio}
                    alt="Firefighter foreground"
                    className="w-48 h-48 lg:w-60 lg:h-60 object-cover border-4 lg:border-5 border-white rounded-2xl shadow-lg"
                  />
                </Slide>
              </div>

              <div className="hidden lg:block absolute lg:left-[8rem] bottom-[-50px] lg:top-[15rem]">
                <Fade triggerOnce duration={650} distance="20px">
                  <div className="h-14 w-64 px-4 py-2 bg-brand-blue text-brand-white rounded-xl shadow-lg">
                    <p className="font-bold text-xl leading-none">National</p>
                    <p className="text-xs leading-tight mt-0.5">
                      First Responder Suicide Data Initiative
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="font-brand lg:col-span-7 text-center lg:text-left space-y-6 text-brand-dark/80 leading-relaxed text-lg mt-12 lg:mt-0">
            <Fade triggerOnce duration={650} distance="30px">
              <p className="text-brand-dark font-bold text-2xl md:text-3xl leading-snug">
                Breaking the silence on first responder suicide.
              </p>
            </Fade>

            <Fade triggerOnce duration={650} distance="30px">
              <p>
                The Flare Initiative was created in response to a critical gap
                in suicide tracking for first responders. Canada currently has
                no consistent system to track suicides among police, fire,
                EMS, corrections, or dispatch personnel.
              </p>
            </Fade>

            <Fade triggerOnce duration={650} distance="30px">
              <p>
                Existing information is fragmented, inconsistent, and
                inaccessible, leaving first responder agencies and mental
                health organizations unable to fully understand the scope of
                the issue or evaluate prevention efforts.
              </p>
            </Fade>

            <Fade triggerOnce duration={650} distance="30px">
              <p className="text-brand-dark font-semibold text-xl">
                We're building the first national database to track first
                responder suicides in Canada—creating the visibility needed to
                drive evidence-based prevention, inform policy changes, and
                reduce stigma around mental health.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}