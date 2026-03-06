"use client";
import { Phone } from "lucide-react";

export default function CrisisBanner() {
  return (
    <div
      id="crisis-banner"
      className="fixed top-0 w-full bg-brand-red text-brand-white z-[1000] border-b border-brand-orange/20"
    >
      <div className="flex justify-center items-center gap-2 px-4 py-2 text-center">
        <Phone className="w-3 h-3 shrink-0" />
        <span className="text-md font-medium leading-snug">
          {/* Desktop */}
          <span className="hidden sm:inline">
            In crisis? Call{" "}
            <a href="tel:988" className="font-bold underline">9-8-8</a>
            {" "}— Canada Suicide &amp; Crisis Lifeline
          </span>
          {/* Mobile: una sola línea siempre */}
          <span className="sm:hidden">
            Crisis line:{" "}
            <a href="tel:988" className="font-bold underline">call 9-8-8</a>
          </span>
        </span>
      </div>
    </div>
  );
}