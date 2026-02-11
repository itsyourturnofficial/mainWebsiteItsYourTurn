"use client";

import { NetworkCanvas } from "./NetworkCanvas";
import { Linkedin, Twitter, Github, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer id="contact" className="bg-brand-dark text-white py-16 border-t border-brand-border relative overflow-hidden">
            <NetworkCanvas />
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 relative z-10">
                <div className="col-span-1">
                    <h3 className="font-sans text-2xl font-bold tracking-wide mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-brand-accent" />
                        Its Your Turn
                    </h3>
                    <p className="text-slate-400 font-light text-sm leading-relaxed">
                        Building the bridge between digital innovation and physical reality.
                        We are the architects of the connected world.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest text-brand-accent">Company</h4>
                    <div className="space-y-3 flex flex-col">
                        <a href="/" className="text-slate-400 text-sm hover:text-white transition-colors">Home</a>
                        <a href="/placements" className="text-slate-400 text-sm hover:text-white transition-colors">Placements</a>
                        <a href="/courses" className="text-slate-400 text-sm hover:text-white transition-colors">Courses</a>
                        <a href="/careers" className="text-slate-400 text-sm hover:text-white transition-colors">Careers</a>
                        <a href="/hire-talent" className="text-slate-400 text-sm hover:text-white transition-colors">Hire Talent</a>
                        <a href="/blog" className="text-slate-400 text-sm hover:text-white transition-colors">Blog</a>
                        <a href="/contact" className="text-slate-400 text-sm hover:text-white transition-colors">Contact</a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest text-brand-accent">Contact Channel</h4>
                    <div className="space-y-3">
                        <a href="mailto:itsyourturnofficial@gmail.com" className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors">
                            <Mail className="w-4 h-4" />
                            itsyourturnofficial@gmail.com
                        </a>
                        <a href="tel:+917530035770" className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors">
                            <Phone className="w-4 h-4" />
                            +91 7530035770
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest text-brand-accent">Social Link</h4>
                    <div className="flex gap-4">
                        <a href="https://linkedin.com/company/itsyourturn" className="text-slate-400 hover:text-brand-accent transition-colors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com/itsyourturn" className="text-slate-400 hover:text-brand-accent transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-brand-accent transition-colors" aria-label="GitHub">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-16 pt-8 border-t border-white/5 text-slate-600 text-sm font-mono relative z-10">
                &copy; 2026 Its Your Turn. SYSTEM_READY.
            </div>
        </footer>
    );
}
