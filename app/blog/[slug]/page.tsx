import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogCard } from "@/components/blog/BlogCard";

export async function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} — Its Your Turn Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.coverImage ? [post.coverImage] : [],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) notFound();

    const related = getRelatedPosts(post.slug, post.tags, 3);

    return (
        <main className="min-h-screen bg-white">
            {/* Article */}
            <article className="max-w-3xl mx-auto px-4 pt-32 pb-16">
                <BlogHeader post={post} />
                <BlogContent html={post.contentHtml} />
            </article>

            {/* Related Posts */}
            {related.length > 0 && (
                <section className="bg-brand-surface border-t border-brand-border py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="font-sans text-2xl font-bold text-slate-900 mb-8 tracking-wide">
                            Related Articles
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {related.map((rPost) => (
                                <BlogCard key={rPost.slug} post={rPost} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
