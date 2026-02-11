"use client";

import { useEffect, useRef, useState } from "react";
import { NetworkCanvas } from "./NetworkCanvas";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    const phrases = ["IoT Systems", "Edge AI", "Embedded Firmware", "Cloud Architecture"];
    const [text, setText] = useState("");
    const phraseIndex = useRef(0);
    const charIndex = useRef(0);
    const isDeleting = useRef(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        function type() {
            const currentPhrase = phrases[phraseIndex.current];
            let speed = 150;
            if (isDeleting.current) {
                charIndex.current--;
                speed = 50;
            } else {
                charIndex.current++;
                speed = 150;
            }
            setText(currentPhrase.substring(0, charIndex.current));
            if (!isDeleting.current && charIndex.current === currentPhrase.length) {
                isDeleting.current = true;
                speed = 2000;
            } else if (isDeleting.current && charIndex.current === 0) {
                isDeleting.current = false;
                phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
                speed = 500;
            }
            timeout = setTimeout(type, speed);
        }
        timeout = setTimeout(type, 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-brand-base z-0" />
            <div className="absolute inset-0 bg-circuit opacity-20 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] z-0" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] animate-[float_6s_ease-in-out_infinite_2s]" />
            <NetworkCanvas />
            <div className="animate-scanline z-0" />

            <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/5 backdrop-blur-sm text-[10px] font-bold tracking-[0.2em] text-brand-accent mb-8 animate-[fadeInUp_0.8s_ease-out_forwards]">
                    <span className="w-2 h-2 rounded-full bg-brand-accent mr-3 animate-pulse" />
                    SYSTEM ONLINE: INDUSTRIAL IoT READY
                </div>

                <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-black tracking-wide text-slate-900 mb-8 leading-[0.9] animate-[fadeInUp_0.8s_ease-out_0.1s_forwards] opacity-0 uppercase">
                    Build Real-World <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-blue-500 to-brand-cyan text-glow">
                        {text}
                        <span className="inline-block w-0.5 h-[0.8em] bg-brand-accent animate-pulse align-middle ml-1" />
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0 leading-relaxed font-light">
                    Engineer the future with hands-on <strong className="text-slate-900 font-semibold">Embedded Systems</strong>,{" "}
                    <strong className="text-slate-900 font-semibold">Industrial IoT</strong>, and{" "}
                    <strong className="text-slate-900 font-semibold">Edge AI</strong>.
                    Bridge the gap between hardware sensors and cloud intelligence.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards] opacity-0">
                    <Link href="/#tracks"
                        className="group relative px-8 py-4 bg-brand-accent text-white font-bold text-sm tracking-widest uppercase overflow-hidden hover:scale-105 transition-all rounded-full"
                        style={{ boxShadow: "var(--shadow-royal-hover)" }}>
                        <span className="relative z-10">Start Building</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>
                    <Link href="/#architecture"
                        className="group px-8 py-4 bg-transparent border border-slate-300 text-slate-900 font-bold text-sm tracking-widest uppercase hover:bg-slate-50 hover:border-brand-accent hover:text-brand-accent transition-all rounded-full">
                        Explore Architecture
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
                <ArrowDown className="w-6 h-6" />
            </div>
        </section>
    );
}
