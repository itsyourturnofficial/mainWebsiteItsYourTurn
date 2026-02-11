"use client";

import { Navbar } from "@/components/placement/Navbar";
import { Footer } from "@/components/placement/Footer";
import { ArrowRight, Trophy, Briefcase, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const successStories = [
    {
        name: "Arjun Reddy",
        role: "Embedded Engineer",
        company: "Bosch",
        salary: "8.5 LPA",
        description: "From struggling with C pointers to debugging RTOS in real-time. The curriculum changed my career trajectory.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80"
    },
    {
        name: "Priya Sharma",
        role: "IoT Solutions Architect",
        company: "Zoho",
        salary: "12 LPA",
        description: "The hands-on projects with ESP32 and AWS IoT gave me the confidence to crack the system design interview.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80"
    },
    {
        name: "Karthik M",
        role: "Firmware Developer",
        company: "Qualcomm",
        salary: "14 LPA",
        description: "Its Your Turn focuses on fundamentals. That depth of knowledge is exactly what top tier product companies look for.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
    },
    {
        name: "Sneha G",
        role: "R&D Engineer",
        company: "Siemens",
        salary: "9 LPA",
        description: "The mentorship didn't stop at the classroom. They guided me through salary negotiation and onboarding.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80"
    },
    {
        name: "Rahul V",
        role: "IoT Junior Engineer",
        company: "HCL",
        salary: "6.5 LPA",
        description: "As a fresh graduate, I had zero practical skills. 6 months later, I'm deploying sensors in a smart factory.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80"
    },
    {
        name: "Ananya B",
        role: "System Engineer",
        company: "TCS Digital",
        salary: "7.5 LPA",
        description: "The interview prep sessions were brutal but effective. I walked into the interview wondering why it felt easy.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80"
    }
];

const stats = [
    { label: "Placement Rate", value: "98%", icon: Trophy, color: "text-amber-500" },
    { label: "Hiring Partners", value: "50+", icon: Briefcase, color: "text-blue-500" },
    { label: "Highest Package", value: "18 LPA", icon: TrendingUp, color: "text-green-500" },
    { label: "Average Hike", value: "120%", icon: TrendingUp, color: "text-purple-500" }
];

export default function PlacementsPage() {
    return (
        <div className="bg-brand-base flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-circuit opacity-10 pointer-events-none" />
                    <div className="max-w-4xl mx-auto px-4 relative z-10">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                            Proven Results
                        </div>
                        <h1 className="font-sans text-5xl md:text-7xl font-bold mb-6 text-slate-900">
                            Our <span className="text-brand-accent">Wall of Fame</span>
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            We don't just teach code; we launch careers. Join the league of engineers building the future at top-tier companies.
                        </p>
                    </div>
                </section>

                {/* Stats Grid */}
                <section className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm text-center">
                                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Success Stories Grid */}
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-3 gap-8">
                        {successStories.map((story, index) => (
                            <div key={index} className="bg-white rounded-2xl border border-brand-border overflow-hidden hover:shadow-lg transition-shadow group flex flex-col">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                                        <div className="text-white">
                                            <h3 className="font-bold text-lg">{story.name}</h3>
                                            <p className="text-slate-300 text-sm">{story.role} @ {story.company}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <p className="text-slate-600 text-sm italic mb-6 flex-grow">"{story.description}"</p>
                                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Package</p>
                                            <p className="text-brand-accent font-bold">{story.salary}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Company</p>
                                            <p className="font-bold text-slate-700">{story.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="bg-brand-dark rounded-3xl p-12 relative overflow-hidden text-white">
                        <div className="absolute inset-0 bg-circuit opacity-10 pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-4">Ready to be the next success story?</h2>
                            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                                The best time to start was yesterday. The second best time is now.
                                Secure your spot in our upcoming batch.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 bg-brand-accent text-white font-bold rounded-full hover:bg-white hover:text-brand-accent transition-all shadow-lg hover:shadow-xl"
                            >
                                Start Your Journey <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
