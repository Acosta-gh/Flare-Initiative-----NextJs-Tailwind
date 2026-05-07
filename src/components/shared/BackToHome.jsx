"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BackToHome() {
  const router = useRouter();
  const [hasHistory, setHasHistory] = useState(false);

  useEffect(() => {
    setHasHistory(window.history.length > 1);
  }, []);

  const handleBack = () => {
    if (hasHistory) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="cursor-pointer inline-flex items-center gap-2 text-brand-dark/60 hover:text-brand-dark transition-all duration-300 group px-4 py-2 rounded-full hover:bg-black/5"
    >
      <svg
        className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span className="text-sm font-medium font-brand">Back to Home</span>
    </button>
  );
}