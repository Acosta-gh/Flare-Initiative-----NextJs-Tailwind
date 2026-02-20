"use client";
import { useState, useEffect } from "react";
import { Accessibility, Type, ZoomIn, ZoomOut, Moon, Contrast, EyeOff, X } from "lucide-react";

export default function AccessibilityWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(() => {
        if (typeof window === "undefined") return 100;
        return parseInt(localStorage.getItem("accessibility-fontSize") || "100");
    });
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window === "undefined") return false;
        return localStorage.getItem("accessibility-darkMode") === "true";
    });
    const [highContrast, setHighContrast] = useState(() => {
        if (typeof window === "undefined") return false;
        return localStorage.getItem("accessibility-highContrast") === "true";
    });
    const [animationsDisabled, setAnimationsDisabled] = useState(() => {
        if (typeof window === "undefined") return false;
        return localStorage.getItem("accessibility-animationsDisabled") === "true";
    });
    const [dyslexicFont, setDyslexicFont] = useState(() => {
        if (typeof window === "undefined") return false;
        return localStorage.getItem("accessibility-dyslexicFont") === "true";
    });

    useEffect(() => {
        localStorage.setItem("accessibility-fontSize", fontSize.toString());
        localStorage.setItem("accessibility-darkMode", darkMode.toString());
        localStorage.setItem("accessibility-highContrast", highContrast.toString());
        localStorage.setItem("accessibility-animationsDisabled", animationsDisabled.toString());
        localStorage.setItem("accessibility-dyslexicFont", dyslexicFont.toString());
    }, [fontSize, darkMode, highContrast, animationsDisabled, dyslexicFont]);

    useEffect(() => {
        const root = document.documentElement;
        root.style.fontSize = `${fontSize}%`;
        root.classList.toggle("dark-mode", darkMode);
        document.body.style.backgroundColor = darkMode ? "#1a1a1a" : "";
        document.body.style.color = darkMode ? "#ffffff" : "";
        root.classList.toggle("high-contrast", highContrast);
        root.classList.toggle("no-animations", animationsDisabled);
        root.classList.toggle("dyslexic-font", dyslexicFont);
    }, [fontSize, darkMode, highContrast, animationsDisabled, dyslexicFont]);

    const resetAll = () => {
        setFontSize(100);
        setDarkMode(false);
        setHighContrast(false);
        setAnimationsDisabled(false);
        setDyslexicFont(false);
    };

    const toggles = [
        { label: "Dark Mode", icon: <Moon className="w-4 h-4" />, value: darkMode, setter: setDarkMode },
        { label: "High Contrast", icon: <Contrast className="w-4 h-4" />, value: highContrast, setter: setHighContrast },
        { label: "Disable Animations", icon: <EyeOff className="w-4 h-4" />, value: animationsDisabled, setter: setAnimationsDisabled },
        { label: "Dyslexia Font", icon: <Type className="w-4 h-4" />, value: dyslexicFont, setter: setDyslexicFont },
    ];

    return (
        <>
            <div className="fixed right-4 bottom-4 z-[9999]">
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-brand-blue hover:bg-brand-blue/90 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        aria-label="Open accessibility options"
                    >
                        <Accessibility className="w-6 h-6" />
                    </button>
                )}

                {isOpen && (
                    <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 border-2 border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                <Accessibility className="w-5 h-5 text-blue-600" />
                                Accessibility
                            </h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-gray-700 p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Close accessibility panel"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {/* Text Size */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <Type className="w-4 h-4" /> Text Size
                                </label>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setFontSize((p) => Math.max(80, p - 10))}
                                        disabled={fontSize <= 80}
                                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        aria-label="Decrease text size"
                                    >
                                        <ZoomOut className="w-4 h-4" />
                                    </button>
                                    <span className="text-sm font-medium text-gray-600 min-w-[3rem] text-center">{fontSize}%</span>
                                    <button
                                        onClick={() => setFontSize((p) => Math.min(150, p + 10))}
                                        disabled={fontSize >= 150}
                                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        aria-label="Increase text size"
                                    >
                                        <ZoomIn className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Toggles */}
                            {toggles.map(({ label, icon, value, setter }) => (
                                <div key={label} className="flex items-center justify-between">
                                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                        {icon} {label}
                                    </label>
                                    <button
                                        onClick={() => setter((v) => !v)}
                                        className={`relative w-12 h-6 rounded-full transition-colors ${value ? "bg-blue-600" : "bg-gray-300"}`}
                                        aria-label={`${value ? "Disable" : "Enable"} ${label}`}
                                    >
                                        <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${value ? "translate-x-6" : ""}`} />
                                    </button>
                                </div>
                            ))}

                            <button
                                onClick={resetAll}
                                className="w-full mt-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
                            >
                                Reset All
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
        .dark-mode section { background-color: #2d2d2d !important; }
        .dark-mode .bg-white { background-color: #2d2d2d !important; }
        .dark-mode .bg-gray-50 { background-color: #1a1a1a !important; }
        .dark-mode .text-gray-800, .dark-mode .text-gray-700,
        .dark-mode h1, .dark-mode h2, .dark-mode h3, .dark-mode p { color: #ffffff !important; }
        .high-contrast { filter: contrast(1.5) brightness(1.1); }
        .high-contrast * { text-shadow: 0 0 1px rgba(0,0,0,0.8); }
        .no-animations *, .no-animations *::before, .no-animations *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
        @import url('https://fonts.googleapis.com/css2?family=OpenDyslexic&display=swap');
        .dyslexic-font, .dyslexic-font * { font-family: 'OpenDyslexic', Arial, sans-serif !important; }
        .dark-mode .fixed.right-4.bottom-4 .bg-white { background-color: #2d2d2d !important; border-color: #404040 !important; }
        .dark-mode .fixed.right-4.bottom-4 .text-gray-800,
        .dark-mode .fixed.right-4.bottom-4 .text-gray-700 { color: #ffffff !important; }
        .dark-mode .fixed.right-4.bottom-4 .bg-gray-100 { background-color: #404040 !important; }
      `}</style>
        </>
    );
}