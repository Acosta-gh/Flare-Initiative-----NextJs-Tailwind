import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-brand-dark text-brand-white px-6">
      <Link href="/" className="mb-12">
        <Image
          src="/tree_white.svg"
          alt="Flare Initiative"
          width={56}
          height={56}
          className="h-14 w-auto opacity-80"
          priority
        />
      </Link>

      <h1 className="font-brand-heading text-7xl md:text-9xl font-bold text-brand-red leading-none">
        404
      </h1>

      <div className="w-16 h-[2px] bg-brand-red/50 my-6" />

      <p className="font-brand text-lg md:text-xl text-white/70 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 px-8 py-3 bg-brand-red text-white font-brand font-semibold text-sm uppercase tracking-widest rounded hover:bg-brand-orange transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}
