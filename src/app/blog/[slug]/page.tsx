"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { useLanguage } from "@/context/LanguageContext";

type Post = {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    excerpt: string;
    body: import("@portabletext/react").PortableTextBlock[];
    mainImage: Record<string, unknown>;
};

/* ── PortableText renderer components ─────────────────────────── */
const ptComponents: PortableTextComponents = {
    block: {
        normal:     ({ children }) => <p className="mb-6 leading-8 text-muted-foreground">{children}</p>,
        h1:         ({ children }) => <h1 className="mt-10 mb-4 text-3xl font-bold text-foreground">{children}</h1>,
        h2:         ({ children }) => <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">{children}</h2>,
        h3:         ({ children }) => <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">{children}</h3>,
        blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-4 border-primary pl-6 italic text-muted-foreground">
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
        em:     ({ children }) => <em className="italic">{children}</em>,
        link:   ({ value, children }) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:opacity-80"
            >
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }) => <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">{children}</ul>,
        number: ({ children }) => <ol className="mb-6 list-decimal space-y-2 pl-6 text-muted-foreground">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li className="leading-7">{children}</li>,
        number: ({ children }) => <li className="leading-7">{children}</li>,
    },
    types: {
        image: ({ value }: { value: Record<string, string | undefined> }) => {
            if (!value?.asset) return null;
            return (
                <div className="my-8">
                    <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16/9" }}>
                        <Image
                            src={urlForImage(value).width(900).url()}
                            alt={value.alt ?? ""}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {value.caption && (
                        <p className="mt-2 text-center text-sm text-muted-foreground">{value.caption}</p>
                    )}
                </div>
            );
        },
    },
};

export default function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const { language, t } = useLanguage();

    const [post,      setPost]      = useState<Post | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [notFound,  setNotFound]  = useState(false);

    useEffect(() => {
        if (!slug) return;
        const query = `*[_type == "post" && slug.current == $slug][0]{
            _id, title, slug, publishedAt, excerpt, body, mainImage
        }`;
        client
            .fetch(query, { slug })
            .then((data: Post | null) => {
                if (!data) setNotFound(true);
                else setPost(data);
                setIsLoading(false);
            })
            .catch(() => {
                setNotFound(true);
                setIsLoading(false);
            });
    }, [slug]);

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            </div>
        );
    }

    if (notFound || !post) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-muted-foreground">
                <p className="text-lg">Post not found.</p>
                <Link
                    href="/blog"
                    className="flex items-center gap-1 text-primary hover:underline"
                >
                    <ArrowLeft className="h-4 w-4" /> {t("blog_back")}
                </Link>
            </div>
        );
    }

    const dateStr = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString(
              language === "zh" ? "zh-TW" : "en-US",
              { year: "numeric", month: "long", day: "numeric" }
          )
        : "";

    return (
        <article className="min-h-screen bg-background">

            {/* Hero image */}
            {post.mainImage && (
                <div className="relative h-64 w-full overflow-hidden sm:h-96">
                    <Image
                        src={urlForImage(post.mainImage).width(1400).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
            )}

            {/* Article header */}
            <div className="border-b border-border/40">
                <div className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
                    <Link
                        href="/blog"
                        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {t("blog_back")}
                    </Link>

                    <div className="mt-2 flex items-center gap-3 text-sm">
                        {dateStr && (
                            <time dateTime={post.publishedAt} className="text-muted-foreground">
                                {dateStr}
                            </time>
                        )}
                        <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                            {t("blog_tag_news")}
                        </span>
                    </div>

                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                        {post.title}
                    </h1>

                    {post.excerpt && (
                        <p className="mt-4 text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
                    )}
                </div>
            </div>

            {/* Article body */}
            <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
                {post.body ? (
                    <PortableText value={post.body} components={ptComponents} />
                ) : (
                    <p className="text-muted-foreground">No content available.</p>
                )}

                <div className="mt-16 border-t border-border pt-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {t("blog_back")}
                    </Link>
                </div>
            </div>
        </article>
    );
}
