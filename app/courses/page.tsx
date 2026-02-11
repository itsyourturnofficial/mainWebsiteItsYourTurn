"use client";

import { Navbar } from "@/components/placement/Navbar";
import { Footer } from "@/components/placement/Footer";
import { ArrowRight, Cpu, Wifi, Code, Layers, FileText, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const tracks = [
    {
        id: "embedded",
        title: "Embedded Systems & Firmware",
        description: "Master C, C++, RTOS, and ARM Cortex Microcontrollers. Build drivers from scratch.",
        icon: Cpu,
        tools: ["C/C++", "STM32", "FreeRTOS", "Linux Device Drivers", "Altium"],
        modules: [
            { title: "C Programming & Data Structures", content: "Advanced pointers, memory management, linkers, makefiles." },
            { title: "Microcontroller Architecture", content: "ARM Cortex-M4 internals, Interrupts, DMA, GPIO, UART, SPI, I2C." },
            { title: "Real-Time Operating Systems", content: "Task scheduling, semaphores, mutexes, message queues in FreeRTOS." },
            { title: "Linux System Programming", content: "Process management, multi-threading, IPC, file operations." }
        ]
    },
    {
        id: "iot",
        title: "Industrial IoT & Cloud Computing",
        description: "End-to-end IoT development from sensor to cloud dashboard using ESP32 and AWS.",
        icon: Wifi,
        tools: ["ESP32", "AWS IoT Core", "MQTT", "Python", "Node.js", "Docker"],
        modules: [
            { title: "IoT Protocols", content: "Deep dive into MQTT, CoAP, HTTP, and WebSockets. Payload optimization." },
            { title: "Edge Computing with ESP32", content: "Sensor interfacing, Wi-Fi/BLE provisioning, OTA updates." },
            { title: "Cloud IoT Platforms", content: "AWS IoT Core, Lambda, DynamoDB, API Gateway integration." },
            { title: "IoT Security", content: "TLS/SSL, X.509 Certificates, device authentication patterns." }
        ]
    },
    {
        id: "pcb",
        title: "Hardware Design & PCB",
        description: "Design professional schematics and layout for manufacturable electronics.",
        icon: Layers,
        tools: ["KiCad", "Altium Designer", "Spice Simulation", "EMI/EMC"],
        modules: [
            { title: "Circuit Theory & Analysis", content: "Analog/Digital basics, OpAmps, Filters, Power Supply design." },
            { title: "Schematic Capture", content: "Component selection, symbol creation, netlist generation." },
            { title: "PCB Layout", content: "Routing guidelines, impedance matching, multiplayer stackup." },
            { title: "Manufacturing (DFM)", content: "Gerber generation, BOM management, assembly process." }
        ]
    }
];

export default function CoursesPage() {
    const [activeTrack, setActiveTrack] = useState(tracks[0].id);

    return (
        <div className="bg-brand-base flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                {/* Hero Section */}
                <section className="relative py-20 text-center px-4">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--brand-surface),_transparent_70%)] pointer-events-none" />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-surface border border-brand-border text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
                            Industry Aligned Curriculum
                        </div>
                        <h1 className="font-sans text-5xl md:text-7xl font-bold mb-6 text-slate-900">
                            Master the <span className="text-brand-accent">Full Stack</span>
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            A rigorous, deep-dive curriculum designed by industry experts to make you production-ready from Day 1.
                        </p>
                    </div>
                </section>

                {/* Track Navigation */}
                <section className="max-w-7xl mx-auto px-4 mb-12">
                    <div className="flex flex-wrap justify-center gap-4 border-b border-brand-border pb-1">
                        {tracks.map((track) => {
                            const isActive = activeTrack === track.id;
                            return (
                                <button
                                    key={track.id}
                                    onClick={() => setActiveTrack(track.id)}
                                    className={`px-6 py-4 rounded-t-lg font-bold text-sm uppercase tracking-wide transition-all border-b-2 ${isActive
                                            ? "border-brand-accent text-brand-accent bg-white"
                                            : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                                        }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <track.icon className={`w-5 h-5 ${isActive ? "text-brand-accent" : "text-slate-400"}`} />
                                        {track.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* Track Content */}
                <section className="max-w-7xl mx-auto px-4 min-h-[500px]">
                    {tracks.map((track) => (
                        activeTrack === track.id && (
                            <div key={track.id} className="grid md:grid-cols-12 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {/* Left: Overview */}
                                <div className="md:col-span-4 space-y-8">
                                    <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm">
                                        <h3 className="font-bold text-xl text-slate-900 mb-4">{track.title}</h3>
                                        <p className="text-slate-600 leading-relaxed mb-6">{track.description}</p>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-sm uppercase tracking-widest text-slate-500">Tools & Tech</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {track.tools.map((tool, i) => (
                                                    <span key={i} className="px-3 py-1 bg-brand-surface text-brand-accent text-xs font-bold rounded-full border border-brand-border/50">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-brand-dark rounded-2xl p-8 text-white relative overflow-hidden">
                                        <div className="absolute inset-0 bg-circuit opacity-10 pointer-events-none" />
                                        <div className="relative z-10">
                                            <h4 className="font-bold text-lg mb-2">Download Syllabus</h4>
                                            <p className="text-slate-400 text-sm mb-6">Get the detailed week-by-week breakdown sent to your email.</p>
                                            <button className="w-full py-3 bg-white text-brand-dark font-bold rounded-lg hover:bg-brand-accent hover:text-white transition-colors flex items-center justify-center gap-2">
                                                <FileText className="w-4 h-4" /> Download PDF
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Modules */}
                                <div className="md:col-span-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                        <span className="w-1.5 h-8 bg-brand-accent rounded-full" />
                                        Curriculum Modules
                                    </h3>
                                    <div className="grid gap-6">
                                        {track.modules.map((module, i) => (
                                            <div key={i} className="bg-white p-6 rounded-xl border border-brand-border hover:border-brand-accent/30 transition-colors group">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-brand-surface flex items-center justify-center text-brand-accent flex-shrink-0 font-mono font-bold text-sm border border-brand-border">
                                                        {i + 1}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-accent transition-colors">
                                                            {module.title}
                                                        </h4>
                                                        <p className="text-slate-600 text-sm leading-relaxed">
                                                            {module.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 text-center">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center justify-center px-8 py-3 bg-brand-accent text-white font-bold rounded-full hover:bg-brand-dark transition-all shadow-royal hover:shadow-royal-hover"
                                        >
                                            Enroll in this Track <ArrowRight className="w-5 h-5 ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </section>
            </main>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": tracks.map((track, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "Course",
                                "name": track.title,
                                "description": track.description,
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Its Your Turn",
                                    "sameAs": "https://www.itsyourturn.co.in"
                                }
                            }
                        }))
                    })
                }}
            />

            <Footer />
        </div>
    );
}
