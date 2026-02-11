"use client";

import { useEffect } from "react";

export function ScrollProgress() {
    useEffect(() => {
        const handleScroll = () => {
            const bar = document.getElementById("scroll-progress");
            if (bar) {
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                bar.style.width = ((scrollTop / scrollHeight) * 100) + "%";
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="scroll-progress"
            className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-brand-accent to-brand-cyan z-[100] transition-all duration-100 ease-out w-0"
            style={{ boxShadow: "0 0 10px rgba(37,99,235,0.5)" }}
        />
    );
}
