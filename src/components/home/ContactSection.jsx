"use client";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 md:py-28  bg-[#f8f7f5]">
            <Fade triggerOnce duration={800}>
                <div className="container mx-auto px-6 max-w-2xl">
                    <SectionHeader title="Contact Us" />
                    <form
                        action="https://formsubmit.co/3246edf10c677cc651cd12e80cbee4f2"
                        method="POST"
                        className="space-y-5 mt-10"
                        aria-label="Contact form"
                    >
                        <input type="hidden" name="_captcha" value="true" />
                        <input type="hidden" name="_subject" value="New message from The Flare Initiative website" />

                        <div className="space-y-1.5">
                            <label htmlFor="name" className="block text-sm font-semibold text-brand-dark uppercase tracking-widest font-brand">
                                Name
                            </label>
                            <input
                                type="text" id="name" name="name"
                                placeholder="E.g. John Doe" required
                                className="w-full px-0 py-3 border-0 border-b border-brand-dark/20 bg-transparent text-brand-dark placeholder:text-brand-dark/30 outline-none focus:border-brand-dark font-brand text-base transition-colors duration-200"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="email" className="block text-sm font-semibold text-brand-dark uppercase tracking-widest font-brand">
                                Email
                            </label>
                            <input
                                type="email" id="email" name="email"
                                placeholder="E.g. johndoe@mail.com" required
                                className="w-full px-0 py-3 border-0 border-b border-brand-dark/20 bg-transparent text-brand-dark placeholder:text-brand-dark/30 outline-none focus:border-brand-dark font-brand text-base transition-colors duration-200"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="message" className="block text-sm font-semibold text-brand-dark uppercase tracking-widest font-brand">
                                Message
                            </label>
                            <textarea
                                id="message" name="message" rows={6}
                                placeholder="Hello, I would like to know more about your initiative..."
                                required
                                className="w-full px-0 py-3 border-0 border-b border-brand-dark/20 bg-transparent text-brand-dark placeholder:text-brand-dark/30 outline-none focus:border-brand-dark font-brand text-base resize-none transition-colors duration-200"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-brand-dark text-white font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-3 cursor-pointer"
                            >
                                Send Message
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        <p className="text-xs text-brand-dark/40 text-center font-brand pt-2 leading-relaxed">
                            Your message and email address are received to respond to your inquiry.
                            Not stored or shared with third parties.{" "}
                            <a
                                href="https://formsubmit.co/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-2 text-brand-dark/50"
                            >
                                About FormSubmit
                            </a>
                        </p>
                    </form>
                </div>
            </Fade>
        </section>
    );
}