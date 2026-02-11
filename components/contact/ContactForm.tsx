"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsLoading(false);
        setStatus("success");
    }

    if (status === "success") {
        return (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-white rounded-2xl border border-brand-border shadow-sm animate-fadeIn">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-8 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-brand-accent font-semibold hover:text-brand-dark transition-colors"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-brand-accent rounded-full" />
                Send us a Message
            </h3>

            <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all placeholder:text-slate-400"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all placeholder:text-slate-400"
                            placeholder="john@company.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject</label>
                    <select
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all text-slate-600"
                    >
                        <option>General Inquiry</option>
                        <option>Project Consultation</option>
                        <option>Training Programs</option>
                        <option>Partnership</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                    <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all placeholder:text-slate-400 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-brand-accent text-white font-bold rounded-xl hover:bg-brand-dark transition-all shadow-royal hover:shadow-royal-hover disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Send Message
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
