import { User } from "lucide-react";

/* ═══════════════ Team Section ═══════════════ */
export function TeamSection() {
    return (
        <section id="team" className="py-24 bg-brand-surface border-y border-brand-border">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-sans text-4xl font-bold tracking-wide text-slate-900">Our Team</h2>
                    <p className="text-slate-600 mt-4">Visionaries and Architects driving the future of IoT.</p>
                </div>

                {/* Executive Leadership */}
                <div className="mb-20">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-8 border-b border-brand-border pb-4">
                        Executive Leadership
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8 items-stretch">
                        {/* CEO */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:border-brand-accent/30 hover:shadow-[var(--shadow-royal-hover)] transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-accent/10 transition-colors" />
                            <div className="flex items-center gap-5 mb-6 relative z-10">
                                <div className="w-20 h-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-brand-accent transition-colors shadow-sm relative">
                                    <div className="absolute inset-0 bg-brand-accent/10 animate-pulse hidden group-hover:block" />
                                    <img src="/images/ceo.jpg" alt="Yuvasankar Rajan P V" loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand-accent transition-colors font-sans leading-tight">Yuvasankar Rajan P V</h4>
                                    <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mt-1">CEO By Title</div>
                                </div>
                            </div>
                            <div className="mb-4 pl-3 border-l-2 border-brand-accent/20 italic text-xs text-slate-500 font-mono">
                                {'>_ "Started this. Regrets nothing." 😎'}
                            </div>
                        </div>

                        {/* Software Lead */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:border-brand-cyan/30 hover:shadow-[var(--shadow-royal-hover)] transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-cyan/10 transition-colors" />
                            <div className="flex items-center gap-5 mb-6 relative z-10">
                                <div className="w-20 h-20 flex-shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 font-sans font-bold text-2xl group-hover:text-brand-cyan transition-colors border-2 border-slate-100 group-hover:border-brand-cyan shadow-sm">
                                    SG
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand-cyan transition-colors font-sans leading-tight">Shyam Ganesh E</h4>
                                    <div className="text-xs font-bold uppercase tracking-widest text-brand-cyan mt-1">So Called Software Guy</div>
                                </div>
                            </div>
                            <div className="mb-4 pl-3 border-l-2 border-brand-cyan/20 italic text-xs text-slate-500 font-mono">
                                {'>_ "If it\'s down, blame him." 👾'}
                            </div>
                        </div>

                        {/* Hardware Lead */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:border-purple-500/30 hover:shadow-[var(--shadow-royal-hover)] transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/10 transition-colors" />
                            <div className="flex items-center gap-5 mb-6 relative z-10">
                                <div className="w-20 h-20 flex-shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 font-sans font-bold text-2xl group-hover:text-purple-400 transition-colors border-2 border-slate-100 group-hover:border-purple-400 shadow-sm">
                                    MV
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-purple-400 transition-colors font-sans leading-tight">Manimaran V</h4>
                                    <div className="text-xs font-bold uppercase tracking-widest text-purple-500 mt-1">Takes Care Of Hardware</div>
                                </div>
                            </div>
                            <div className="mb-4 pl-3 border-l-2 border-purple-500/20 italic text-xs text-slate-500 font-mono">
                                {'>_ "Hardware has feelings. He ignores them" 🔧'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Experts */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-8 border-b border-brand-border pb-4">
                        Technical Experts
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: "Embedded Systems Lead", code: ">_ RTOS" },
                            { name: "IoT Architect", code: ">_ MQTT" },
                            { name: "Hardware Engineer", code: ">_ PCB" },
                            { name: "Full Stack Developer", code: ">_ API" },
                        ].map((role) => (
                            <div key={role.name} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-brand-accent/20 transition-all text-center group">
                                <div className="w-12 h-12 mx-auto rounded-full bg-slate-50 flex items-center justify-center text-slate-300 mb-4 group-hover:text-brand-accent transition-colors">
                                    <User className="w-6 h-6" />
                                </div>
                                <p className="font-semibold text-sm text-slate-900">{role.name}</p>
                                <p className="text-xs text-brand-accent font-mono mt-1">{role.code}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════ Testimonials Section ═══════════════ */
export function TestimonialsSection() {
    return (
        <section className="py-24 bg-brand-base relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="font-sans text-4xl font-bold tracking-wide text-slate-900 mb-6">System Verification.</h2>
                        <p className="text-slate-600 mb-8">Don&apos;t just take our word for it. Review the logs from our deployed engineers.</p>
                    </div>

                    {/* Terminal Box */}
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-6 font-mono text-xs overflow-hidden shadow-2xl relative">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="space-y-4 text-slate-300">
                            <div><span className="text-brand-accent">user@IOT-LAB:~$</span> cat testimonials.log</div>
                            <div className="pl-4 border-l border-white/10">
                                <span className="text-slate-500">[INFO] 2025-10-12 09:42:11</span><br />
                                &quot;The Industrial IoT track gave me the exact skills to land a job at Bosch. The hands-on with MQTT and AWS was a game changer.&quot;
                                <br /><span className="text-brand-cyan">-- Priya S. (Embedded Engineer)</span>
                            </div>
                            <div className="pl-4 border-l border-white/10">
                                <span className="text-slate-500">[INFO] 2025-11-05 14:20:00</span><br />
                                &quot;Built a complete Home Automation system from scratch. Best learning experience ever.&quot;
                                <br /><span className="text-brand-cyan">-- Rahul K. (Student)</span>
                            </div>
                            <div className="animate-pulse">
                                <span className="text-brand-accent">user@IOT-LAB:~$</span>{" "}
                                <span className="w-2 h-4 bg-brand-accent inline-block align-middle" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
