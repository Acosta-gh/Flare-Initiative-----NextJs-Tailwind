"use client";
import { useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { Fade } from "react-awesome-reveal";
import SectionHeader from "@/components/shared/SectionHeader";

const BRAND = {
  red: "#f58f80",
  orange: "#FAB571",
  blue: "#415b8a",
  dark: "#181818",
  divider: "rgba(24,24,24,0.07)",
};

const stats = [
  {
    display: 13,
    suffix: "",
    label: "Provinces & Territories",
    sublabel: "A unified national scope for\nvisibility and data collection.",
    color: "#c0483a",
    accent: BRAND.red,
  },
  {
    display: 100,
    suffix: "%",
    label: "Dedicated Focus",
    sublabel: "Committed entirely to first\nresponder suicide prevention.",
    color: "#243657",
    accent: BRAND.blue,
  },
  {
    display: 240,
    suffix: "~",
    label: "Suicides Reported",
    sublabel: "2014–2017, word of mouth.\nIncludes military; excl. 911 dispatch.",
    color: "#b06a10",
    accent: BRAND.orange,
    isApprox: true,
  },
];

function AnimatedNumber({ value, inView, isApprox }) {
  const spring = useSpring(0, { stiffness: 60, damping: 20, mass: 0.8 });
  const display = useTransform(spring, (v) => Math.round(v));

  if (inView) spring.set(value);

  return (
    <>
      {isApprox && <span style={{ fontSize: "0.55em", verticalAlign: "super", opacity: 0.7 }}>~</span>}
      <motion.span>{display}</motion.span>
    </>
  );
}

function StatCard({ stat, index, inView }) {
  const isLast = index === stats.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex-1 flex flex-col px-10 py-9 relative"
      style={{ borderRight: isLast ? "none" : `1px solid ${BRAND.divider}` }}
    >

      <div className="flex items-baseline gap-0.5 mt-2 mb-4">
        <span
          className="text-[80px] font-black leading-none tracking-[-3px] font-brand-heading"
          style={{ color: stat.color }}
        >
          <AnimatedNumber value={stat.display} inView={inView} isApprox={stat.isApprox} />
        </span>
        {!stat.isApprox && (
          <span
            className="text-[44px] font-extrabold leading-none ml-0.5 font-brand-heading"
            style={{ color: stat.accent }}
          >
            {stat.suffix}
          </span>
        )}
      </div>

      <p
        className="text-[13px] font-bold uppercase tracking-[0.1em] mb-2 "
        style={{ color: stat.color }}
      >
        {stat.label}
      </p>

      <p
        className="text-[13px] leading-relaxed whitespace-pre-line "
        style={{ color: BRAND.dark, opacity: 0.45 }}
      >
        {stat.sublabel}
      </p>
    </motion.div>
  );
}

function StatCardMobile({ stat, index, inView }) {
  const isLast = index === stats.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-row items-center gap-6 py-6 w-full"
      style={{ borderBottom: isLast ? "none" : `1px solid ${BRAND.divider}` }}
    >
      <div
        className="w-[3px] h-14 flex-shrink-0 rounded-sm"
        style={{ background: stat.accent }}
      />

      <div className="flex items-baseline gap-0.5 min-w-[90px]">
        <span
          className="text-[48px] font-black leading-none tracking-[-1.5px] font-brand-heading"
          style={{ color: stat.color }}
        >
          <AnimatedNumber value={stat.display} inView={inView} isApprox={stat.isApprox} />
        </span>
        {!stat.isApprox && (
          <span
            className="text-[26px] font-bold leading-none font-brand-heading"
            style={{ color: stat.accent }}
          >
            {stat.suffix}
          </span>
        )}
      </div>

      <div className="flex-1">
        <p
          className="text-[13px] font-bold uppercase tracking-[0.04em] mb-1 "
          style={{ color: stat.color }}
        >
          {stat.label}
        </p>
        <p
          className="text-[13px] leading-relaxed whitespace-pre-line"
          style={{ color: BRAND.dark, opacity: 0.45 }}
        >
          {stat.sublabel}
        </p>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 md:py-28 bg-[#f8f7f5]" id="stats">
      <Fade triggerOnce duration={800}>
        <div className="container mx-auto px-6 max-w-5xl mb-10">
          <SectionHeader title="A Crisis Hidden in Plain Sight" />
          <p className="mt-4 text-brand-dark/50 font-brand text-base max-w-xl leading-relaxed">
            The numbers tell a story that has   been largely invisible — until now.
          </p>
          <div className="w-10 h-[2px] bg-brand-red mt-6" />
        </div>
      </Fade>

      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        <div className="hidden sm:flex flex-row w-full">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        <div className="flex sm:hidden flex-col w-full px-2">
          {stats.map((stat, i) => (
            <StatCardMobile key={i} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>

      <Fade triggerOnce duration={700}>
        <div className="container mx-auto px-6 max-w-5xl mt-8">
          <p
            className="text-[11px] leading-relaxed font-brand"
            style={{ color: BRAND.dark, opacity: 0.35 }}
          >
            * ~240 suicides reported 2014–2017 via word of mouth to the Tema Foundation (no longer tracks suicides).
            Includes military personnel. Does not include 911 dispatchers.
          </p>
        </div>
      </Fade>

      {/* 
      <Fade triggerOnce duration={800}>
        <div className="container mx-auto px-6 max-w-5xl mb-10">
          <SectionHeader title="A Crisis Hidden in Plain Sight" />
          <p className="mt-4 text-brand-dark/50 font-brand text-base max-w-xl leading-relaxed">
            The numbers tell a story that has   been largely invisible — until now.
          </p>
          <div className="w-10 h-[2px] bg-brand-red mt-6" />
        </div>
      </Fade>

      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        <div className="hidden sm:flex flex-row w-full">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        <div className="flex sm:hidden flex-col w-full px-2">
          {stats.map((stat, i) => (
            <StatCardMobile key={i} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>

      <Fade triggerOnce duration={600}>
        <div className="container mx-auto px-6 max-w-5xl mt-4">
          <p className="text-xs text-brand-dark/30 font-brand text-right tracking-widest uppercase">
            National Data Initiative
          </p>
        </div>
      </Fade>
    */}
    </section>
  );
}