"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to send message. Please try again.");
    }
  };

  const isSuccess = status === "success";

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f8f7f5]">
      <Fade triggerOnce duration={800}>
        <div className="container mx-auto px-6 max-w-2xl">
          <SectionHeader title="Contact Us" />

          {isSuccess ? (
            <div className="mt-10 text-center py-12 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
              <p className="text-green-700">
                Thank you for reaching out. We'll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-green-600 underline hover:text-green-800"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 mt-10" aria-label="Contact form">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-sm font-semibold text-brand-dark uppercase tracking-widest font-brand">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="E.g. John Doe"
                  required
                  disabled={status === "loading"}
                  className="w-full px-0 py-3 border-0 border-b border-brand-dark/20 bg-transparent text-brand-dark placeholder:text-brand-dark/30 outline-none focus:border-brand-dark font-brand text-base transition-colors duration-200 disabled:opacity-50"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm font-semibold text-brand-dark uppercase tracking-widest font-brand">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E.g. johndoe@mail.com"
                  required
                  disabled={status === "loading"}
                  className="w-full px-0 py-3 border-0 border-b border-brand-dark/20 bg-transparent text-brand-dark placeholder:text-brand-dark/30 outline-none focus:border-brand-dark font-brand text-base transition-colors duration-200 disabled:opacity-50"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-sm font-semibold text-brand-dark uppercase tracking-widest font-brand">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Hello, I would like to know more about your initiative..."
                  required
                  disabled={status === "loading"}
                  className="w-full px-0 py-3 border-0 border-b border-brand-dark/20 bg-transparent text-brand-dark placeholder:text-brand-dark/30 outline-none focus:border-brand-dark font-brand text-base resize-none transition-colors duration-200 disabled:opacity-50"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 text-sm py-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-8 py-4 bg-brand-dark text-white font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-brand-dark/40 text-center font-brand pt-2 leading-relaxed">
                Your message and email address are received to respond to your inquiry.
                Not stored or shared with third parties.
              </p>
            </form>
          )}
        </div>
      </Fade>
    </section>
  );
}