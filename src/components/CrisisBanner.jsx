import { Phone } from "lucide-react";

export default function CrisisBanner() {
  return (
    <div className="fixed top-0 w-full bg-brand-red text-brand-white z-[1000] border-b border-brand-orange/20 shadow-sm">
      <div className="flex justify-center items-center gap-2 px-4 py-2.5 text-center min-h-[40px]">
        <Phone className="w-3.5 h-3.5 shrink-0" />
        <span className="text-sm font-medium leading-snug">
          <span className="hidden sm:inline">If you are in crisis or need help, please call </span>
          <span className="sm:hidden">In crisis? Call </span>
          <a href="tel:988" className="font-bold underline hover:text-brand-orange transition-colors">
            9-8-8 (Canada)
          </a>
          <span className="hidden sm:inline"> (Suicide &amp; Crisis Lifeline)</span>
          <span className="sm:hidden"> — Suicide &amp; Crisis Lifeline</span>
        </span>
      </div>
    </div>
  );
}