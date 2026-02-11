"use client";

import { useState } from "react";

const faqData = [
    { q: "Who is eligible for the placement program?", a: "Any engineering graduate (B.E/B.Tech) or final-year student in ECE, EEE, CSE, IT, or Mechanical can apply. No prior IoT or embedded experience is required — we start from fundamentals." },
    { q: "Is the placement guarantee 100%?", a: "We provide 100% placement support, meaning we actively refer you to our 120+ hiring partners, conduct mock interviews, optimize your resume, and coach you until you land an offer. 95% of our graduates get placed within 30 days." },
    { q: "What is the course duration and format?", a: "The core programs are 12–16 weeks of intensive, hands-on training. Classes are conducted in a hybrid format — lab sessions are in-person with real hardware kits, and theory sessions are available online." },
    { q: "What hardware do I need?", a: "All hardware kits (ESP32, STM32, sensors, PCB boards) are provided as part of the program fee. You just need a laptop with at least 8GB RAM." },
    { q: "What is the average salary after placement?", a: "Our graduates receive an average CTC of ₹6.5 LPA. The range is typically ₹4–8 LPA for freshers, with the highest package being ₹12 LPA. We also provide salary negotiation coaching." },
    { q: "Can I pay in installments?", a: "Yes, we offer flexible EMI options. You can also opt for our 'Pay After Placement' plan where you pay a reduced upfront fee and the remainder after getting placed." },
    { q: "What companies hire from this program?", a: "Our hiring partners include Bosch, Wipro, L&T, Honeywell, Siemens, TCS IoT Division, and 100+ startups in the IoT, embedded, and hardware space." },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-brand-surface border-t border-brand-border">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-sans text-4xl font-bold tracking-wide text-slate-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-600">Everything you need to know before enrolling.</p>
                </div>
                <div className="space-y-4">
                    {faqData.map((item, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-brand-accent/30 transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-slate-900 pr-4">{item.q}</span>
                                <svg
                                    className={`w-5 h-5 text-brand-accent flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`faq-content ${openIndex === i ? "open" : ""}`}>
                                <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">{item.a}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
