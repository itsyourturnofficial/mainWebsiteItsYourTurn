import { getPaginatedPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Newspaper, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Blog — Its Your Turn | IoT & Embedded Systems Insights",
    description: "Technical articles, tutorials, and insights on IoT, Embedded Systems, PCB Design, and Cloud Architecture from the Its Your Turn team.",
};

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const { page: pageParam } = await searchParams;
    const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);
    const { posts, totalPages } = getPaginatedPosts(currentPage, 9);

    return (
        <main className="min-h-screen bg-brand-base">
            {/* Hero Banner */}
            <section className="pt-32 pb-16 bg-white border-b border-brand-border relative overflow-hidden">
                <div className="absolute inset-0 bg-circuit opacity-5 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-accent transition-colors mb-6">
                        ← Home
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-accent/5 flex items-center justify-center text-brand-accent">
                            <Newspaper className="w-6 h-6" />
                        </div>
                        <h1 className="font-sans text-4xl md:text-5xl font-bold tracking-wide text-slate-900">
                            Blog
                        </h1>
                    </div>
                    <p className="text-slate-600 max-w-2xl text-lg font-light">
                        Technical articles, tutorials, and insights from our engineering team.
                        Deep dives into IoT, embedded systems, PCB design, and cloud architecture.
                    </p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    {posts.length === 0 ? (
                        <div className="text-center py-24">
                            <p className="text-slate-400 font-mono text-sm">&gt;_ No posts found. Check back soon.</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post) => (
                                    <BlogCard key={post.slug} post={post} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <nav aria-label="Blog pagination" className="mt-16 flex items-center justify-center gap-2">
                                    {/* Previous */}
                                    {currentPage > 1 ? (
                                        <Link
                                            href={`/blog?page=${currentPage - 1}`}
                                            className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:border-brand-accent hover:text-brand-accent transition-all"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                            Prev
                                        </Link>
                                    ) : (
                                        <span className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-300 bg-slate-50 border border-slate-100 rounded-lg cursor-not-allowed">
                                            <ChevronLeft className="w-4 h-4" />
                                            Prev
                                        </span>
                                    )}

                                    {/* Page Numbers */}
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                                        <Link
                                            key={num}
                                            href={`/blog?page=${num}`}
                                            className={`w-10 h-10 flex items-center justify-center text-sm font-bold rounded-lg transition-all ${num === currentPage
                                                    ? "bg-brand-accent text-white shadow-md"
                                                    : "bg-white text-slate-600 border border-slate-200 hover:border-brand-accent hover:text-brand-accent"
                                                }`}
                                        >
                                            {num}
                                        </Link>
                                    ))}

                                    {/* Next */}
                                    {currentPage < totalPages ? (
                                        <Link
                                            href={`/blog?page=${currentPage + 1}`}
                                            className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:border-brand-accent hover:text-brand-accent transition-all"
                                        >
                                            Next
                                            <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    ) : (
                                        <span className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-300 bg-slate-50 border border-slate-100 rounded-lg cursor-not-allowed">
                                            Next
                                            <ChevronRight className="w-4 h-4" />
                                        </span>
                                    )}
                                </nav>
                            )}
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}
