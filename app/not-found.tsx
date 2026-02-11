import Link from "next/link";
import { AlertTriangle, WifiOff, Home, ArrowRight } from "lucide-react";
import { NetworkCanvas } from "@/components/placement/NetworkCanvas"; // Reuse network bg if available or similar

export default function NotFound() {
    return (
        <div className="min-h-screen bg-brand-base flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-circuit opacity-10 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--brand-accent-rgb)_0%,_transparent_70%)] opacity-20 pointer-events-none" />

            {/* CRT Scanline Effect */}
            <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] animate-scanline" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-surface border border-brand-border mb-8 shadow-royal animate-float">
                    <WifiOff className="w-10 h-10 text-brand-accent animate-pulse" />
                </div>

                <h1 className="font-mono text-6xl md:text-8xl font-black text-slate-900 mb-4 tracking-tighter" style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.1)" }}>
                    404
                </h1>

                <div className="inline-block px-4 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-600 font-mono text-sm font-bold tracking-widest mb-8 animate-pulse">
                    SYSTEM ERROR: SIGNAL LOST
                </div>

                <p className="text-xl text-slate-600 mb-10 font-light leading-relaxed">
                    The requested module could not be found in the current sector.
                    It may have been deprecated, moved, or deleted.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/"
                        className="px-8 py-3 bg-brand-accent text-white font-bold rounded-full hover:bg-brand-dark transition-all shadow-royal hover:shadow-royal-hover flex items-center gap-2 group w-full sm:w-auto justify-center">
                        <Home className="w-4 h-4" />
                        Return to Base
                    </Link>

                    <Link href="/blog"
                        className="px-8 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-full hover:border-brand-accent hover:text-brand-accent transition-all flex items-center gap-2 group w-full sm:w-auto justify-center">
                        Check System Logs
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center text-slate-400 text-xs font-mono">
                Running safe-mode diagnostics...
            </div>
        </div>
    );
}
