export default function CrisisSupportSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-yellow/20">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-brand-heading">
          Need immediate support?
        </h2>
        <p className="text-brand-dark/70 text-lg mb-8 font-brand">
          If you or someone you know is in crisis, help is available 24/7. You are not alone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <a href="tel:988" className="inline-block px-8 py-4 bg-brand-red text-white rounded-xl font-medium text-lg hover:bg-brand-red/90 transition-all shadow-sm">
            Call 9-8-8 (Canada)
          </a>
          <a href="tel:18334564566" className="inline-block px-8 py-4 border-2 border-brand-red text-brand-red rounded-xl font-medium text-lg hover:bg-brand-red hover:text-white transition-all">
            First Responders: 1-833-456-4566
          </a>
        </div>
      </div>
    </section>
  );
}