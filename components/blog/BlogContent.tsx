export function BlogContent({ html }: { html: string }) {
    return (
        <div className="blog-content-wrapper">
            <article
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
}
