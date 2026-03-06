export default function CrisisSupportSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="border-t border-white/10 pt-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 font-brand mb-6">
            Crisis Support
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-brand-heading leading-tight">
            Need immediate support?
          </h2>
          <p className="text-white/50 text-base mb-10 font-brand max-w-md mx-auto">
            If you or someone you know is in crisis, help is available 24/7.
            You are not alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="tel:988"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-red text-white font-semibold text-sm uppercase tracking-widest min-w-[220px]"
            >
              Call 9-8-8 — Canada
            </a>
            <a
              href="tel:18334564566"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white/70 font-semibold text-sm uppercase tracking-widest min-w-[220px]"
            >
              First Responders
            </a>
          </div>
          <p className="text-white/25 text-xs font-brand mt-6 tracking-wide">
            1-833-456-4566
          </p>
        </div>
      </div>
    </section>
  );
}