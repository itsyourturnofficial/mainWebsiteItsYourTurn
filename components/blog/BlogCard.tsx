import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/blog";

export function BlogCard({ post }: { post: PostMeta }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group">
            <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-brand-accent/30 hover:shadow-[var(--shadow-royal)] transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {/* Cover Image */}
                {post.coverImage && (
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-brand-accent/5 text-brand-accent rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-accent transition-colors leading-snug">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-4 text-xs text-slate-400">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {post.readingTime} min read
                            </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                    </div>
                </div>
            </article>
        </Link>
    );
}
