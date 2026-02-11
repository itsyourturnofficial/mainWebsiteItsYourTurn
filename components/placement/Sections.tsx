import { Eye, Zap, FlaskConical, BookOpen, Lightbulb, Radio, Cpu, CircuitBoard, Monitor, Check } from "lucide-react";
import Link from "next/link";

/* ═══════════════ Section 1: Company Overview ═══════════════ */
export function OverviewSection() {
    return (
        <section id="overview" className="py-24 bg-white border-b border-brand-border">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/5 text-xs text-brand-accent font-bold tracking-wider uppercase mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                        Who We Are
                    </div>
                    <h2 className="font-sans text-4xl lg:text-5xl font-bold tracking-wide text-slate-900 mb-6 leading-tight">
                        Bridging the Gap Between <span className="text-brand-accent">Theory</span> &amp; <span className="text-brand-cyan">Reality</span>.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6 font-light">
                        <strong className="text-slate-900 font-semibold">Its Your Turn</strong> delivers advanced project solutions and
                        hands-on training in Internet of Things (IoT),
                        Embedded Systems, Electronics Design &amp; Development, and Software Technology.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                        We provide industry-oriented, hands-on training and project development support for students and
                        professionals, transforming ideas into market-ready products by combining engineering expertise with
                        real-world problem solving.
                    </p>
                </div>

                {/* Vision & Mission Cards */}
                <div className="grid gap-6">
                    {/* Vision */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-brand-accent/30 hover:shadow-[var(--shadow-royal)] transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 text-brand-accent shadow-sm group-hover:scale-110 transition-transform">
                            <Eye className="w-6 h-6" />
                        </div>
                        <h3 className="font-sans text-2xl font-bold text-slate-900 mb-3">Vision</h3>
                        <p className="text-slate-600 leading-relaxed">
                            To empower the next generation of innovators by turning ideas into impactful technologies.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-brand-cyan/30 hover:shadow-[var(--shadow-royal)] transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 text-brand-cyan shadow-sm group-hover:scale-110 transition-transform">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="font-sans text-2xl font-bold text-slate-900 mb-3">Mission</h3>
                        <ul className="text-slate-600 space-y-2 text-sm list-disc list-inside marker:text-brand-cyan">
                            <li>Industry-oriented, hands-on training.</li>
                            <li>Design &amp; deliver innovative, scalable tech solutions.</li>
                            <li>Nurture creativity &amp; entrepreneurial thinking.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════ Section 2: Core Expertise ═══════════════ */
export function ExpertiseSection() {
    const cards = [
        { icon: Radio, title: "IoT Systems", desc: "Smart devices, sensors, connectivity, cloud integration." },
        { icon: Cpu, title: "Embedded Systems", desc: "Microcontrollers, firmware development, real-time systems." },
        { icon: CircuitBoard, title: "Electronics Design", desc: "PCB design, prototyping, testing and development." },
        { icon: Monitor, title: "Software Tech", desc: "Application development, system integration, automation." },
    ];
    return (
        <section id="expertise" className="py-24 bg-brand-surface border-b border-brand-border">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-sans text-4xl font-bold tracking-wide text-slate-900 mb-4">Core Expertise</h2>
                    <p className="text-slate-600">Deep technical capabilities across the entire hardware-software spectrum.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((c) => (
                        <div key={c.title} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-accent shadow-sm hover:shadow-[var(--shadow-royal)] transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-brand-accent/5 flex items-center justify-center text-brand-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                                <c.icon className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-accent transition-colors">{c.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════ Section 3: Services Offered ═══════════════ */
export function ServicesSection() {
    const services = [
        {
            icon: FlaskConical,
            title: "Project Development",
            color: "brand-accent",
            items: ["Academic & Industrial Projects", "Proof-of-Concept Design", "Product Deployment Support"],
        },
        {
            icon: BookOpen,
            title: "Hands-On Training",
            color: "brand-cyan",
            items: ["IoT & Embedded Systems", "Electronics Workshops", "Software Integration"],
        },
        {
            icon: Lightbulb,
            title: "Innovation & Mentorship",
            color: "purple-500",
            items: ["Idea Validation", "Technical Mentoring", "Startup Guidance"],
        },
    ];

    const borderColors: Record<string, string> = {
        "brand-accent": "hover:border-brand-accent",
        "brand-cyan": "hover:border-brand-cyan",
        "purple-500": "hover:border-purple-500",
    };
    const textColors: Record<string, string> = {
        "brand-accent": "text-brand-accent",
        "brand-cyan": "text-brand-cyan",
        "purple-500": "text-purple-500",
    };
    const hoverTextColors: Record<string, string> = {
        "brand-accent": "group-hover:text-brand-accent",
        "brand-cyan": "group-hover:text-brand-cyan",
        "purple-500": "group-hover:text-purple-500",
    };

    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-circuit opacity-5 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="font-sans text-4xl font-bold tracking-wide text-slate-900 mb-4">Services Offered</h2>
                        <p className="text-slate-600 max-w-xl">Comprehensive engineering solutions for academia and industry.</p>
                    </div>
                    <Link href="/contact" className="px-6 py-3 bg-brand-accent text-white font-bold rounded-full hover:bg-brand-accent/90 transition-colors text-sm uppercase tracking-wider" style={{ boxShadow: "var(--shadow-royal)" }}>
                        Partner With Us
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s) => (
                        <div key={s.title} className={`p-8 bg-slate-50 rounded-2xl border border-slate-200 ${borderColors[s.color]} transition-all duration-300 group hover:shadow-[var(--shadow-royal)] hover:-translate-y-1`}>
                            <div className={`w-14 h-14 rounded-xl bg-white flex items-center justify-center ${textColors[s.color]} mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                                <s.icon className="w-7 h-7" />
                            </div>
                            <h4 className={`font-bold text-xl text-slate-900 mb-4 ${hoverTextColors[s.color]} transition-colors`}>{s.title}</h4>
                            <ul className="space-y-3">
                                {s.items.map((item) => (
                                    <li key={item} className="flex items-start text-sm text-slate-600">
                                        <Check className={`w-4 h-4 ${textColors[s.color]} mr-2 mt-0.5 flex-shrink-0`} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════ Tech Stack Marquee ═══════════════ */
export function TechMarquee() {
    const techs = ["ESP32", "STM32", "RASPBERRY_PI", "MQTT", "AWS_IOT_CORE", "TENSORFLOW_LITE", "ALTIUM_DESIGNER", "DOCKER", "KUBERNETES", "ZIGBEE", "LORAWAN"];
    return (
        <section className="py-10 bg-brand-surface border-y border-brand-border overflow-hidden">
            <div className="relative w-full max-w-7xl mx-auto px-4">
                <div className="flex whitespace-nowrap animate-marquee gap-16 items-center font-mono text-sm text-brand-accent/70 tracking-widest uppercase">
                    {[...techs, ...techs].map((t, i) => (
                        <span key={`${t}-${i}`}>{`>_ ${t}`}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
