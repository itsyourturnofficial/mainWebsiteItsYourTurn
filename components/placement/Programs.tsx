"use client";

import { NetworkCanvas } from "./NetworkCanvas";
import { Cpu, FlaskConical, Code2, Wifi, Server, Cloud, ArrowRight } from "lucide-react";
import Link from "next/link";

/* ═══════════════ Learning Tracks ═══════════════ */
export function TracksSection() {
    return (
        <section id="tracks" className="py-32 bg-brand-base relative">
            <div className="absolute inset-0 bg-grid-glow opacity-20 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-wide text-slate-900 mb-6 uppercase">
                        <span className="text-brand-accent">///</span> Specialized Learning Tracks
                    </h2>
                    <p className="text-slate-600 font-light max-w-xl mx-auto">
                        Select your specialization. Each track simulates a real-world engineering environment.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Track 1: Embedded */}
                    <div className="group relative bg-white border border-slate-200 p-1 hover:border-brand-accent/50 hover:shadow-lg transition-all duration-300">
                        <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-brand-accent/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-brand-accent/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="h-full bg-slate-50 p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Cpu className="w-16 h-16 text-brand-accent" strokeWidth={1} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-accent transition-colors">Embedded Systems Engineering</h3>
                            <p className="text-xs font-mono text-brand-accent mb-6">FIRMWARE // RTOS // DRIVERS</p>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Master bare-metal C programming, FreeRTOS, and driver development for ARM Cortex-M microcontrollers.
                            </p>
                            <ul className="space-y-2 mb-8">
                                <li className="flex items-center text-xs text-slate-500"><span className="w-1 h-1 bg-brand-accent mr-2" /> STM32 CubeIDE &amp; HAL</li>
                                <li className="flex items-center text-xs text-slate-500"><span className="w-1 h-1 bg-brand-accent mr-2" /> I2C, SPI, UART, DMA</li>
                                <li className="flex items-center text-xs text-slate-500"><span className="w-1 h-1 bg-brand-accent mr-2" /> Real-Time Operating Systems</li>
                            </ul>
                            <Link href="/contact" className="inline-flex items-center text-xs font-bold text-slate-900 uppercase tracking-wider group-hover:text-brand-accent transition-colors">
                                Initialize Track <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>

                    {/* Track 2: IIoT */}
                    <div className="group relative bg-white border border-slate-200 p-1 hover:border-brand-cyan/50 hover:shadow-lg transition-all duration-300">
                        <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-brand-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-brand-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="h-full bg-slate-50 p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <FlaskConical className="w-16 h-16 text-brand-cyan" strokeWidth={1} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-cyan transition-colors">Industrial IoT Architecture</h3>
                            <p className="text-xs font-mono text-brand-cyan mb-6">MQTT // AWS // EDGE</p>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Connect sensors to the cloud. Build scalable data pipelines using AWS IoT Core, Node-RED, and TimeScaleDB.
                            </p>
                            <ul className="space-y-2 mb-8">
                                <li className="flex items-center text-xs text-slate-500"><span className="w-1 h-1 bg-brand-cyan mr-2" /> ESP32 &amp; WiFi/BLE Stack</li>
                                <li className="flex items-center text-xs text-slate-500"><span className="w-1 h-1 bg-brand-cyan mr-2" /> Docker &amp; Kubernetes on Pi</li>
                                <li className="flex items-center text-xs text-slate-500"><span className="w-1 h-1 bg-brand-cyan mr-2" /> Grafana Dashboards</li>
                            </ul>
                            <Link href="/contact" className="inline-flex items-center text-xs font-bold text-slate-900 uppercase tracking-wider group-hover:text-brand-cyan transition-colors">
                                Initialize Track <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>

                    {/* Track 3: Hardware Design & PCB */}
                    <div className="group relative bg-white border border-slate-200 p-1 hover:border-purple-500/50 hover:shadow-lg transition-all duration-300">
                        <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="h-full bg-slate-50 p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Code2 className="w-16 h-16 text-purple-500" strokeWidth={1} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-400 transition-colors">Hardware Design &amp; PCB</h3>
                            <p className="text-xs font-mono text-purple-400 mb-6">ALTIUM // KICAD // MANUFACTURING</p>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Go from schematic to production. Design multi-layer PCBs, handle high-speed signals, and prepare BOMs.
                            </p>
                            <ul className="space-y-2 mb-8">
                                <li className="flex items-center text-xs text-slate-500"><span className="w-1 h-1 bg-purple-400 mr-2" /> Schematic Capture</li>
                                <li className="flex items-center text-xs text-slate-500"><span className="w-1 h-1 bg-purple-400 mr-2" /> EMI/EMC Considerations</li>
                                <li className="flex items-center text-xs text-slate-500"><span className="w-1 h-1 bg-purple-400 mr-2" /> 3D Component Modeling</li>
                            </ul>
                            <Link href="/contact" className="inline-flex items-center text-xs font-bold text-slate-900 uppercase tracking-wider group-hover:text-purple-400 transition-colors">
                                Initialize Track <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════ Architecture & Stats Section ═══════════════ */
export function ArchitectureSection() {
    return (
        <section id="architecture" className="py-24 bg-brand-dark border-y border-brand-dark text-white overflow-hidden relative">
            <NetworkCanvas />
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Diagram Visual */}
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute inset-0 bg-brand-accent/5 blur-3xl" />
                        <div className="relative p-8 border border-white/10 bg-brand-surface/10 backdrop-blur-sm rounded-xl">
                            <div className="flex flex-col gap-8">
                                {/* Layer 1: Edge */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded bg-white/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                                        <Wifi className="w-6 h-6" />
                                    </div>
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-brand-accent/50 to-transparent" />
                                    <div className="text-xs font-mono text-brand-accent">EDGE_SENSORS</div>
                                </div>
                                {/* Layer 2: Gateway */}
                                <div className="flex items-center pl-12 gap-4">
                                    <div className="w-12 h-12 rounded bg-white/10 border border-white/20 flex items-center justify-center text-white">
                                        <Server className="w-6 h-6" />
                                    </div>
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-white/20 to-brand-cyan/50" />
                                    <div className="text-xs font-mono text-white">IOT_GATEWAY</div>
                                </div>
                                {/* Layer 3: Cloud */}
                                <div className="flex items-center pl-24 gap-4">
                                    <div className="w-12 h-12 rounded bg-white/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan" style={{ boxShadow: "0 0 15px rgba(6,182,212,0.2)" }}>
                                        <Cloud className="w-6 h-6" />
                                    </div>
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-brand-cyan/50 to-transparent" />
                                    <div className="text-xs font-mono text-brand-cyan">O_CLOUD_ENGINE</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="font-sans text-3xl font-bold text-white mb-6 tracking-wide">
                            Not Just Concepts.<br /><span className="text-brand-cyan">Full-Stack Architecture.</span>
                        </h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Most courses stop at blinking an LED. We teach you how to architect resilient systems that scale.
                            Understand the entire data flow from silicon to serverless.
                        </p>

                        <div className="grid grid-cols-2 gap-8" id="stats">
                            <div>
                                <div className="text-4xl font-bold text-white mb-2">95<span className="text-brand-accent text-lg">%</span></div>
                                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Hands-On Time</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-2">100<span className="text-brand-accent text-lg">+</span></div>
                                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Hardware Kits</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-2">50<span className="text-brand-accent text-lg">+</span></div>
                                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Case Studies</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-2">24<span className="text-brand-accent text-lg">/7</span></div>
                                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Lab Access</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════ Industry Applications ═══════════════ */
export function IndustrySection() {
    return (
        <section className="py-24 bg-brand-base relative border-t border-brand-border">
            <div className="absolute inset-0 bg-circuit opacity-10 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="mb-16">
                    <h2 className="font-sans text-4xl font-bold tracking-wide text-slate-900 mb-4">Deployed in the Field.</h2>
                    <p className="text-slate-600">See where our students are deploying their code.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* App 1 */}
                    <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                            alt="Smart automated factory floor with robotic arms" loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-brand-base/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <div className="text-brand-accent text-xs font-mono mb-2">INDUSTRY_4.0</div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">Smart Manufacturing</h3>
                            <p className="text-slate-400 text-sm mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                Predictive maintenance using vibration analysis and edge ML.
                            </p>
                        </div>
                    </div>
                    {/* App 2 */}
                    <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
                            alt="Smart agriculture field with IoT sensors" loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-brand-base/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <div className="text-brand-cyan text-xs font-mono mb-2">AGRITECH</div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">Precision Agriculture</h3>
                            <p className="text-slate-400 text-sm mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                LoRaWAN networks for soil moisture and environmental monitoring.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
