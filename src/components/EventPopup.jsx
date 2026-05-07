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
              <div className="bg-gradient-to-r from-brand-red to-brand-orange p-8 pb-12">
                <div className="w-12 h-[2px] bg-brand-white mb-4" />
                <h2 className="font-brand-heading text-2xl md:text-3xl font-bold text-brand-white mb-2">
                  The Trevor Claydon Fundraiser
                </h2>
                <p className="text-brand-white/90 text-sm md:text-base font-medium">
                  In memory of Trevor Claydon, an Edmonton Police Officer lost to
                  suicide, and in support of first responders, their families, and
                  suicide prevention.
                </p>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <p className="text-brand-dark/80 leading-relaxed">
                  Join The Flare Initiative on June 14th for a day of remembrance,
                  conversation, and family fun in support of first responder mental
                  health.
                </p>

                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-blue/10">
                      <Calendar className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">Sunday, June 14th</p>
                      <p className="text-sm text-brand-dark/60">Tickets on sale May 14th</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-orange/10">
                      <Clock className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">10:00 AM - 2:00 PM</p>
                      <p className="text-sm text-brand-dark/60">MT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-red/10">
                      <MapPin className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">Blue Meadows</p>
                      <p className="text-sm text-brand-dark/60">4 Kuch Ct, Spruce Grove, AB T7Y 1A8</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-brand-dark/10 pt-6">
                  <h3 className="font-brand-heading text-lg font-bold text-brand-dark mb-4">
                    What to Expect
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-brand-orange" />
                      <span className="text-sm text-brand-dark/80">Food Trucks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-brand-orange" />
                      <span className="text-sm text-brand-dark/80">Live Music</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-brand-orange" />
                      <span className="text-sm text-brand-dark/80">Family Games</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-brand-red" />
                      <span className="text-sm text-brand-dark/80">Bouncy Castle</span>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Music className="w-4 h-4 text-brand-blue" />
                    <p className="font-semibold text-brand-dark text-sm">Live Music By</p>
                  </div>
                  <p className="text-brand-dark/80 text-sm">
                    Delta 88 & The Cabbies
                  </p>
                </div>

                <div className="bg-brand-red/5 border border-brand-red/20 rounded-xl p-4">
                  <p className="font-brand-heading font-bold text-brand-dark text-center">
                    Help us to break the silence.
                  </p>
                </div>

                <div className="flex justify-center">
                <button
                  onClick={handleClose}
                  className="px-8 py-3 bg-gradient-to-r from-brand-red to-brand-orange text-brand-white font-semibold rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
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
