"use client";

import { Navbar } from "@/components/placement/Navbar";
import { Footer } from "@/components/placement/Footer";
import { ArrowRight, Brain, Rocket, Users, Target } from "lucide-react";
import Link from "next/link";

const benefits = [
    {
        icon: Brain,
        title: "Complex Challenges",
        description: "Work on cutting-edge IoT, Embedded Systems, and AI problems that matter."
    },
    {
        icon: Rocket,
        title: "Rapid Growth",
        description: "Join at the ground floor and grow with a company that values ownership and speed."
    },
    {
        icon: Users,
        title: "Great Culture",
        description: "A collaborative environment where the best idea wins, regardless of title."
    }
];

const positions = [
    {
        title: "Senior IoT Firmware Engineer",
        department: "Engineering",
        location: "Chennai / Remote",
        type: "Full-Time",
        description: "Lead the development of robust firmware for our next-gen industrial IoT sensors."
    },
    {
        title: "Full Stack Developer (Next.js)",
        department: "Product",
        location: "Chennai",
        type: "Full-Time",
        description: "Build intuitive dashboards and platforms for real-time device management."
    },
    {
        title: "Embedded Systems Trainer",
        department: "Education",
        location: "On-Site",
        type: "Contract / Full-Time",
        description: "Mentor the next generation of engineers through our intensive bootcamp programs."
    },
    {
        title: "Technical Content Writer",
        department: "Marketing",
        location: "Remote",
        type: "Part-Time",
        description: "Create high-quality technical blogs, whitepapers, and documentation."
    }
];

export default function CareersPage() {
    return (
        <div className="bg-brand-base flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-circuit opacity-10 pointer-events-none" />
                    <div className="max-w-4xl mx-auto px-4 relative z-10">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-surface border border-brand-border text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-accent mr-2 animate-pulse" />
                            We are Hiring
                        </div>
                        <h1 className="font-sans text-5xl md:text-7xl font-bold mb-6 text-slate-900">
                            Engineer the <span className="text-brand-accent">Future</span>
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Join a team of builders, hackers, and problem solvers dedicated to transforming industrial IoT and technical education.
                        </p>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-brand-surface rounded-xl flex items-center justify-center text-brand-accent mb-6">
                                    <benefit.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">{benefit.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Open Positions Section */}
                <section className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Open Positions</h2>
                    <div className="space-y-4">
                        {positions.map((job, index) => (
                            <div key={index} className="group bg-white p-6 md:p-8 rounded-2xl border border-brand-border shadow-sm hover:border-brand-accent/50 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-brand-accent transition-colors">
                                            {job.title}
                                        </h3>
                                        {job.type === "Full-Time" && (
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 uppercase tracking-wide">
                                                Full Time
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-slate-600 text-sm mb-3">{job.description}</p>
                                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
                                        <span className="flex items-center gap-1"><Target className="w-3 h-3" /> {job.department}</span>
                                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {job.location}</span>
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <a
                                        href={`mailto:careers@itsyourturn.com?subject=Application for ${job.title}`}
                                        className="inline-flex items-center justify-center px-6 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-accent transition-colors"
                                    >
                                        Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center p-8 bg-brand-surface/50 rounded-2xl border border-brand-border/50">
                        <p className="text-slate-600 mb-4">
                            Don't see a role that fits? We are always looking for talent.
                        </p>
                        <a
                            href="mailto:careers@itsyourturn.com?subject=General Application"
                            className="text-brand-accent font-bold hover:underline"
                        >
                            Send us your resume anyway &rarr;
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
