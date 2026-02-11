"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = (open: boolean) => {
        setIsMenuOpen(open);
        document.body.style.overflow = open ? "hidden" : "";
    };

    const navLinks = [
        { href: "/courses", label: "Courses" },
        { href: "/placements", label: "Placements" },
        { href: "/#tracks", label: "Tracks" },
        { href: "/#architecture", label: "Architecture" },
        { href: "/blog", label: "Blog" },
    ];

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
                <nav
                    className={`glass-nav max-w-7xl mx-auto rounded-none md:rounded-full px-6 py-4 flex items-center justify-between border border-brand-border border-b-brand-border/50 transition-all ${isScrolled ? "shadow-lg" : ""
                        }`}
                >
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            <div className="absolute inset-0 bg-brand-accent/20 blur-md rounded-full group-hover:bg-brand-accent/40 transition-all" />
                            <img className="relative h-6 w-auto" src="/images/logo.png" alt="Its Your Turn Logo" width={24} height={24} />
                        </div>
                        <span className="font-sans font-bold text-slate-900 tracking-widest text-sm uppercase group-hover:text-brand-accent transition-colors">
                            Its Your Turn
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}
                                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-brand-accent uppercase tracking-wider transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/contact"
                            className="hidden sm:inline-flex items-center justify-center px-6 py-2 border border-brand-accent text-xs font-bold text-white bg-brand-accent hover:bg-brand-accent/90 hover:shadow-[var(--shadow-royal)] transition-all uppercase tracking-widest rounded-full">
                            Contact
                        </Link>
                        <button onClick={() => toggleMenu(true)} className="md:hidden text-slate-600 hover:text-brand-accent transition-colors" aria-label="Open mobile menu">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu fixed inset-0 z-[60] bg-brand-base flex flex-col pt-32 px-8 space-y-6 ${isMenuOpen ? "open" : ""}`}>
                <div className="absolute inset-0 bg-circuit opacity-20 pointer-events-none" />
                <button onClick={() => toggleMenu(false)} className="absolute top-8 right-8 p-3 text-slate-400 hover:text-brand-accent" aria-label="Close mobile menu">
                    <X className="w-8 h-8" />
                </button>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => toggleMenu(false)}
                        className="mobile-link text-2xl font-bold tracking-widest text-slate-900 border-b border-brand-border pb-4 uppercase hover:text-brand-accent transition-colors">
                        {link.label}
                    </Link>
                ))}
            </div>
        </>
    );
}
