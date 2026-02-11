import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    author: string;
    tags: string[];
    coverImage: string;
    readingTime: number;
}

export interface Post extends PostMeta {
    contentHtml: string;
}

export interface PaginatedPosts {
    posts: PostMeta[];
    totalPages: number;
    currentPage: number;
}

function estimateReadingTime(content: string): number {
    const words = content.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
}

export function getAllPosts(): PostMeta[] {
    if (!fs.existsSync(POSTS_DIR)) return [];

    const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

    const posts = files.map((filename) => {
        const slug = filename.replace(/\.md$/, "");
        const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
        const { data, content } = matter(raw);

        return {
            slug,
            title: data.title ?? slug,
            date: data.date ?? "",
            excerpt: data.excerpt ?? "",
            author: data.author ?? "Unknown",
            tags: data.tags ?? [],
            coverImage: data.coverImage ?? "",
            readingTime: estimateReadingTime(content),
        } satisfies PostMeta;
    });

    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPaginatedPosts(page: number, perPage: number = 9): PaginatedPosts {
    const all = getAllPosts();
    const totalPages = Math.max(1, Math.ceil(all.length / perPage));
    const safePage = Math.max(1, Math.min(page, totalPages));
    const start = (safePage - 1) * perPage;
    const posts = all.slice(start, start + perPage);

    return { posts, totalPages, currentPage: safePage };
}

export function getRelatedPosts(currentSlug: string, tags: string[], count: number = 3): PostMeta[] {
    const all = getAllPosts().filter((p) => p.slug !== currentSlug);

    const scored = all.map((post) => {
        const sharedTags = post.tags.filter((t) => tags.includes(t)).length;
        return { post, score: sharedTags };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, count).map((s) => s.post);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    const processed = await remark().use(html).process(content);
    const contentHtml = processed.toString();

    return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        author: data.author ?? "Unknown",
        tags: data.tags ?? [],
        coverImage: data.coverImage ?? "",
        readingTime: estimateReadingTime(content),
        contentHtml,
    };
}

export function getAllSlugs(): string[] {
    if (!fs.existsSync(POSTS_DIR)) return [];
    return fs
        .readdirSync(POSTS_DIR)
        .filter((f) => f.endsWith(".md"))
        .map((f) => f.replace(/\.md$/, ""));
}
