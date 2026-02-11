"use client";

import { Navbar } from "@/components/placement/Navbar";
import { Footer } from "@/components/placement/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-brand-base flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                {/* Header */}
                <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-circuit opacity-10 pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-brand-accent mr-2 animate-pulse" />
                            We run 24/7
                        </div>
                        <h1 className="font-sans text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            Have a project in mind or need expert training?
                            Our team of engineers is ready to help you build the future.
                        </p>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Left Column: Info & Map */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Contact Info Card */}
                            <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-brand-surface flex items-center justify-center text-brand-accent flex-shrink-0">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Headquarters</h4>
                                            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                                                123 Innovation Drive,<br />
                                                Tech Corridor, Sector 4,<br />
                                                Chennai, Tamil Nadu - 600001
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-brand-surface flex items-center justify-center text-brand-accent flex-shrink-0">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Email Us</h4>
                                            <a href="mailto:itsyourturnofficial@gmail.com" className="text-slate-600 text-sm mt-1 block hover:text-brand-accent transition-colors">
                                                itsyourturnofficial@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-brand-surface flex items-center justify-center text-brand-accent flex-shrink-0">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Call Us</h4>
                                            <a href="tel:+917530035770" className="text-slate-600 text-sm mt-1 block hover:text-brand-accent transition-colors">
                                                +91 7530035770
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-brand-surface flex items-center justify-center text-brand-accent flex-shrink-0">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Working Hours</h4>
                                            <p className="text-slate-600 text-sm mt-1">
                                                Mon - Sat: 9:00 AM - 8:00 PM<br />
                                                Sunday: By Appointment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Card */}
                            <div className="bg-white p-2 rounded-2xl border border-brand-border shadow-sm h-64 overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.897292429408!2d80.2089!3d13.0691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzA4LjgiTiA4MMKwMTInMzIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-xl w-full h-full"
                                    title="Office Location"
                                />
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:col-span-3">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
