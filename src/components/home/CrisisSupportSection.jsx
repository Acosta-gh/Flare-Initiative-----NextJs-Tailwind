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
              Call 988
            </a>
            <a
              href="tel:18336672866"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-brand-dark font-semibold text-sm uppercase tracking-widest min-w-[220px]"
            >
              1-833-677-BOOT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}