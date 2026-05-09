"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Clock, Music, Utensils, Users, Heart } from "lucide-react";

const STORAGE_KEY = "trevor-claydon-popup-closed";

export default function EventPopup() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasClosed = localStorage.getItem(STORAGE_KEY);
    if (!hasClosed) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
              onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-brand-white rounded-2xl shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-brand-dark/10 hover:bg-brand-dark/20 transition-colors z-10"
              aria-label="Close popup"
            >
              <X className="w-5 h-5 text-brand-dark" />
            </button>

            <div className="relative">
              <div className="bg-gradient-to-r from-brand-red to-brand-orange px-6 py-6 pb-8">
                <div className="w-8 h-[2px] bg-brand-white mb-3" />
                <h2 className="font-brand-heading text-xl md:text-2xl font-bold text-brand-white mb-1">
                  The Trevor Claydon Fundraiser
                </h2>
                <p className="text-brand-white/90 text-xs md:text-sm font-medium leading-snug">
                  In memory of Trevor Claydon, an Edmonton Police Officer lost to
                  suicide, and in support of first responders, their families, and
                  suicide prevention.
                </p>
              </div>

              <div className="p-5 md:p-6 space-y-4">
                <p className="text-brand-dark/80 text-sm leading-relaxed">
                  Join The Flare Initiative on June 14th for a day of remembrance,
                  conversation, and family fun in support of first responder mental
                  health.
                </p>

                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-brand-blue/10">
                      <Calendar className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-brand-dark">Sunday, June 14th</p>
                      <p className="text-xs text-brand-dark/60">Tickets on sale May 14th</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-brand-orange/10">
                      <Clock className="w-4 h-4 text-brand-orange" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-brand-dark">10:00 AM - 2:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-brand-red/10">
                      <MapPin className="w-4 h-4 text-brand-red" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-brand-dark">Blue Meadows</p>
                      <p className="text-xs text-brand-dark/60">4 Kuch Ct, Spruce Grove, AB T7Y 1A8</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-brand-dark/10 pt-4">
                  <h3 className="font-brand-heading text-base font-bold text-brand-dark mb-3">
                    What to Expect
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <Utensils className="w-3.5 h-3.5 text-brand-orange" />
                      <span className="text-xs text-brand-dark/80">Food Trucks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Music className="w-3.5 h-3.5 text-brand-orange" />
                      <span className="text-xs text-brand-dark/80">Live Music</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-brand-orange" />
                      <span className="text-xs text-brand-dark/80">Family Games</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-3.5 h-3.5 text-brand-red" />
                      <span className="text-xs text-brand-dark/80">Bouncy Castle</span>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-lg p-3">
                  <p className="font-semibold text-brand-dark text-xs">Live Music: Delta 88 & The Cabbies</p>
                </div>

                <div className="bg-brand-red/5 border border-brand-red/20 rounded-lg p-3">
                  <p className="font-brand-heading font-bold text-brand-dark text-sm text-center">
                    Help us to break the silence.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 justify-center items-center pt-2">
                  <a
                    href="https://www.zeffy.com/en-CA/ticketing/the-trevor-claydon-fundraiser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-brand-blue text-brand-white font-semibold text-sm rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-center"
                  >
                    Get Tickets
                  </a>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 bg-brand-dark/10 text-brand-dark font-semibold text-sm rounded-full hover:bg-brand-dark/20 transition-all duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
