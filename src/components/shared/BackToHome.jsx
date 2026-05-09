"use client";

import { useRouter } from "next/navigation";

export default function BackToHome() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="text-brand-dark/40 hover:text-brand-dark transition-colors cursor-pointeren"
      aria-label="Back to home"
    >

      <p className="text-xs font-medium font-brand text-brand-dark/40 hover:text-brand-dark transition-colors uppercase tracking-[0.15em]">← Back To Home</p>
    </button>
  );
}