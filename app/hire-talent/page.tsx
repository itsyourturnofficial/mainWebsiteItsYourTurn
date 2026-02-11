"use client";

import { Navbar } from "@/components/placement/Navbar";
import { Footer } from "@/components/placement/Footer";
import { ArrowRight, CheckCircle, Download, Database, Server, Settings, Wifi } from "lucide-react";
import Link from "next/link";

export default function HireTalentPage() {
    return (
        <div className="bg-brand-base flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                {/* Hero Section */}
                <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-circuit opacity-10 pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
                                For Recruiters & Partners
                            </div>
                            <h1 className="font-sans text-5xl font-bold mb-6 leading-tight">
                                Zero Training Cost.<br />
                                <span className="text-brand-accent">Production Ready</span> Engineers.
                            </h1>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
                                We train pre-vetted engineers in Embedded Systems, IoT, and Full Stack development.
                                They don't just know theory; they build drivers, design PCBs, and deploy cloud clusters.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#hire-form"
                                    className="px-8 py-3 bg-brand-accent text-white font-bold rounded-full hover:bg-white hover:text-brand-accent transition-all"
                                >
                                    Start Hiring
                                </a>
                                <button className="px-8 py-3 bg-transparent border border-slate-600 text-white font-bold rounded-full hover:border-brand-accent hover:text-brand-accent transition-all flex items-center gap-2">
                                    <Download className="w-4 h-4" /> Placement Brochure
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-slate-800 rounded-2xl p-8 border border-white/10 shadow-2xl relative">
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl animate-pulse" />
                                <h3 className="font-bold text-xl mb-6">Our Graduates Can:</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Write optimized C/C++ firmware drivers",
                                        "Design 4-layer PCBs with EMI compliance",
                                        "Deploy AWS IoT Core pipelines",
                                        "Debug RTOS priority inversion issues",
                                        "Build specialized Linux Kernel modules"
                                    ].map((skill, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300">
                                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="py-16 bg-white border-b border-brand-border">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <p className="font-bold text-slate-500 uppercase tracking-widest text-sm mb-8">Trusted by Hiring Partners Using</p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Simple text placeholders for logos, or icons */}
                            <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><Settings className="w-6 h-6" /> STM32</div>
                            <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><Wifi className="w-6 h-6" /> ESP32</div>
                            <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><Server className="w-6 h-6" /> AWS IoT</div>
                            <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><Database className="w-6 h-6" /> Postgre</div>
                            <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><CheckCircle className="w-6 h-6" /> Altium</div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section id="hire-form" className="max-w-3xl mx-auto px-4 py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Partner with us</h2>
                        <p className="text-slate-600">Fill out the form below and our Placement Officer will reach out within 24 hours.</p>
                    </div>

                    <form className="bg-white p-8 md:p-12 rounded-2xl border border-brand-border shadow-lg space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Company Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all" placeholder="Acme Corp" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Contact Person</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all" placeholder="John Doe" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all" placeholder="hr@acme.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all" placeholder="+91 98765 43210" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Hiring Requirements</label>
                            <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all h-32 resize-none" placeholder="We are looking for 2 Embedded Engineers with RTOS experience..." />
                        </div>

                        <button type="button" className="w-full py-4 bg-brand-accent text-white font-bold rounded-lg hover:bg-brand-dark transition-all shadow-royal hover:shadow-royal-hover text-lg">
                            Submit Hiring Request
                        </button>

                        <p className="text-xs text-center text-slate-400 mt-4">
                            Or email us directly at <a href="mailto:placements@itsyourturn.com" className="text-brand-accent font-bold hover:underline">placements@itsyourturn.com</a>
                        </p>
                    </form>
                </section>
            </main>

            <Footer />
        </div>
    );
}
