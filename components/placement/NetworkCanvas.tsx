"use client";

import { useEffect, useRef } from "react";

export function NetworkCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const container = canvas.parentElement;
        if (!container) return;

        let width: number = 0, height: number = 0;
        let animationId: number;
        const particleCount = window.innerWidth < 768 ? 60 : 130;
        const connectionDistance = 180;
        const mouseDistance = 250;
        const mouse = { x: null as number | null, y: null as number | null };

        class Particle {
            x: number; y: number; vx: number; vy: number; size: number; color: string;
            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.color = Math.random() > 0.5 ? "#2563EB" : "#0EA5E9";
            }
            update(w: number, h: number) {
                this.x += this.vx; this.y += this.vy;
                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < 0 || this.y > h) this.vy *= -1;
                if (mouse.x != null && mouse.y != null) {
                    const dx = mouse.x - this.x, dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouseDistance) {
                        const force = (mouseDistance - dist) / mouseDistance;
                        this.vx -= (dx / dist) * force * 0.6;
                        this.vy -= (dy / dist) * force * 0.6;
                    }
                }
            }
            draw(c: CanvasRenderingContext2D) {
                c.beginPath(); c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                c.fillStyle = this.color; c.fill();
            }
        }

        function resize() {
            width = canvas!.width = container!.offsetWidth;
            height = canvas!.height = container!.offsetHeight;
        }

        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas!.getBoundingClientRect();
            mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
        };
        const onMouseLeave = () => { mouse.x = null; mouse.y = null; };

        window.addEventListener("resize", resize);
        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseLeave);
        resize();

        const particles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) particles.push(new Particle(width, height));

        function animate() {
            ctx!.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.update(width, height); p.draw(ctx!);
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x, dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < connectionDistance) {
                        ctx!.beginPath();
                        ctx!.strokeStyle = `rgba(37, 99, 235, ${1 - dist / connectionDistance})`;
                        ctx!.lineWidth = 1;
                        ctx!.moveTo(p.x, p.y); ctx!.lineTo(p2.x, p2.y); ctx!.stroke();
                    }
                }
                if (mouse.x != null && mouse.y != null) {
                    const dx = p.x - mouse.x, dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouseDistance) {
                        ctx!.beginPath();
                        ctx!.strokeStyle = `rgba(6, 182, 212, ${1 - dist / mouseDistance})`;
                        ctx!.lineWidth = 1;
                        ctx!.moveTo(p.x, p.y); ctx!.lineTo(mouse.x, mouse.y); ctx!.stroke();
                    }
                }
            }
            animationId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            container.removeEventListener("mousemove", onMouseMove);
            container.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-10 opacity-60 pointer-events-none" />;
}
