import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

export function BlogHeader({ post }: { post: PostMeta }) {
    return (
        <header className="mb-12">
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-accent transition-colors mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-brand-accent/5 text-brand-accent rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Title */}
            <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-wide">
                {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                    <User className="w-4 h-4 text-brand-accent" />
                    {post.author}
                </span>
                <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-accent" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    })}
                </span>
                <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-accent" />
                    {post.readingTime} min read
                </span>
            </div>

            {/* Cover Image */}
            {post.coverImage && (
                <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-[300px] md:h-[400px] object-cover"
                    />
                </div>
            )}
        </header>
    );
}
