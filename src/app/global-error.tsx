"use client";

import NextLink from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="m-0 antialiased">
        <div className="flex flex-col items-center justify-center min-h-dvh bg-brand-dark text-brand-white px-6">
          <NextLink href="/" className="mb-12">
            <Image
              src="/tree_white.svg"
              alt="Flare Initiative"
              width={56}
              height={56}
              className="h-14 w-auto opacity-80"
              priority
            />
          </NextLink>

          <h1 className="font-brand-heading text-7xl md:text-9xl font-bold text-brand-red leading-none">
            500
          </h1>

          <div className="w-16 h-[2px] bg-brand-red/50 my-6" />

          <p className="font-brand text-lg md:text-xl text-white/70 text-center max-w-md">
            Something went wrong on our end. Please try again.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => reset()}
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-red text-white font-brand font-semibold text-sm uppercase tracking-widest rounded hover:bg-brand-orange transition-colors duration-200 cursor-pointer"
            >
              Try Again
            </button>

            <NextLink
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-brand font-semibold text-sm uppercase tracking-widest rounded hover:bg-white/5 transition-colors duration-200"
            >
              Back to Home
            </NextLink>
          </div>
        </div>
      </body>
    </html>
  );
}
