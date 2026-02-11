import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import type { PostMeta } from "@/lib/blog";

export function LatestInsights({ posts }: { posts: PostMeta[] }) {
    return (
        <section className="py-24 bg-white relative overflow-hidden border-t border-brand-border">
            <div className="absolute inset-0 bg-circuit opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider mb-4">
                            <Newspaper className="w-4 h-4" />
                            Engineering Blog
                        </div>
                        <h2 className="font-sans text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                            Latest Insights & <span className="text-brand-accent">Tutorials</span>
                        </h2>
                        <p className="mt-4 text-slate-600 max-w-2xl text-lg font-light">
                            Deep dives into IoT, embedded systems, and cloud architecture from our engineering team.
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-brand-accent hover:bg-brand-dark rounded-xl transition-all shadow-royal hover:shadow-royal-hover group whitespace-nowrap"
                    >
                        View All Articles
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
