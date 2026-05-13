"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import firefighter from "@/assets/images/firefighter.webp";
import trio from "@/assets/images/threepeople.webp";
import trio2 from "@/assets/images/threepeople2.webp";
import gear from "@/assets/images/gear.webp";
import gavin from "@/assets/images/team/gavin.webp";

const teamMembers = [
  {
    name: "Gavin Flewelling",
    role: "President/Founder",
    image: gavin,
  },
  {
    name: "TBD",
    role: "Coming Soon",
  },
  {
    name: "TBD",
    role: "Coming Soon",
  },
  {
    name: "TBD",
    role: "Coming Soon",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-[#f8f7f5] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Fade triggerOnce direction="up">
            <div className="max-w-xl text-left">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">Our People</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-brand-heading leading-tight">
                Driven by experience,<br />led by evidence.
              </h2>
            </div>
          </Fade>
          <Fade triggerOnce delay={200}>
            <div className="w-24 h-1.5 bg-brand-orange rounded-full hidden md:block mb-4"></div>
          </Fade>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {teamMembers.map((member, index) => (
            <Fade key={index} triggerOnce delay={index * 100} direction="up">
              <div className="group">
                <div className={`relative h-[400px] w-full rounded-2xl overflow-hidden mb-6 shadow-lg transform transition-transform duration-500 ${index > 0 ? 'group-hover:scale-[1.02]' : 'group-hover:scale-[1.02]'}`}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover ${index > 0 ? 'grayscale opacity-30' : 'grayscale group-hover:grayscale-0 transition-all duration-700'}`}
                  />
                  {index > 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-brand-dark/20">?</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="px-2">
                  <h3 className="text-xl font-bold text-brand-dark font-brand-heading group-hover:text-brand-blue transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-brand-orange font-semibold uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}