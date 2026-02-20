import { Heart, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-brand-heading text-brand-orange">
              The Flare Initiative
            </h3>
            <p className="text-white/70 font-brand leading-relaxed">
              Shining a light on first responder suicides through data-driven prevention and national visibility.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold font-brand-heading">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[["#about","About Us"],["#mission","Our Mission"],["#help","How You Can Help"],["#contact","Contact"]].map(([href, label]) => (
                <a key={href} href={href} className="text-white/70 hover:text-brand-orange transition-colors font-brand">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold font-brand-heading">Crisis Support</h4>
            <div className="space-y-3">
              <a href="tel:+17803871883" className="flex items-center gap-2 text-white/70 hover:text-brand-orange transition-colors font-brand">
                <Phone className="w-4 h-4" />
                <span>+1 780 387 1883 <span className="text-white/50">(Canada)</span></span>
              </a>
              <a href="tel:18334564566" className="flex items-center gap-2 text-white/70 hover:text-brand-orange transition-colors font-brand">
                <Phone className="w-4 h-4" />
                First Responders: 1-833-456-4566
              </a>
              <p className="text-sm text-white/50 font-brand pt-2">
                If you or someone you know is in crisis, help is available 24/7.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm font-brand">
              © {new Date().getFullYear()} The Flare Initiative. All rights reserved.
            </p>
            <p className="text-white/60 text-sm font-brand flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-brand-orange fill-brand-orange" /> for first responders
            </p>
          </div>
        </div>
      </div>
      <div className="py-6 text-center">
        <a
          href="https://auroralabs.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/40 hover:text-white/70 transition-colors font-brand"
        >
          Website made by <span className="font-medium">Aurora Labs</span>
        </a>
      </div>
    </footer>
  );
}