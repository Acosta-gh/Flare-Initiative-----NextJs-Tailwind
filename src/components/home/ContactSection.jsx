"use client";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ContactSection() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-white">
            <Fade triggerOnce duration={800}>
                <div className="container mx-auto px-6 max-w-3xl">
                    <SectionHeader title="Contact Us" />
                    <form
                        action="https://formsubmit.co/3246edf10c677cc651cd12e80cbee4f2"
                        method="POST"
                        className="space-y-6"
                        aria-label="Contact form"
                    >
                        <input type="hidden" name="_captcha" value="true" />
                        <input type="hidden" name="_subject" value="New message from The Flare Initiative website" />

                        <div>
                            <label htmlFor="name" className="block text-brand-dark font-medium mb-2 font-brand">Name</label>
                            <input
                                type="text" id="name" name="name" placeholder="E.g. John Doe" required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange font-brand"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-brand-dark font-medium mb-2 font-brand">Email</label>
                            <input
                                type="email" id="email" name="email" placeholder="E.g. johndoe@mail.com" required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange font-brand"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-brand-dark font-medium mb-2 font-brand">Message</label>
                            <textarea
                                id="message" name="message" rows="6"
                                placeholder="E.g. Hello, I would like to know more about your initiative..."
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange font-brand resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-brand-orange text-white rounded-xl font-medium text-lg hover:bg-brand-orange/90 cursor-pointer transition-all flex items-center justify-center gap-2 shadow-sm"
                        >
                            Send Message
                            <ArrowRight className="w-5 h-5" />
                        </button>

                        <div className="text-sm text-brand-dark/60 text-center font-brand space-y-2">
                            <p>
                                FormSubmit will open in a new tab to complete the submission. The information I receive
                                is your message and your email address to respond to you. I do not store or share it with third parties.
                            </p>
                            <a
                                href="https://formsubmit.co/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-brand-orange hover:text-brand-dark transition-colors underline"
                            >
                                For more information, learn about FormSubmit
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </form>
                </div>
            </Fade>
        </section>
    );
}