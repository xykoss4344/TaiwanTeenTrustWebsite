"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { useLanguage } from "@/context/LanguageContext";

// Define the shape of the data
type Post = {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    excerpt: string;
};

export default function BlogPage() {
    const { t, language } = useLanguage();
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "post"] | order(publishedAt desc)`;
        client.fetch(query).then((data: Post[]) => {
            setPosts(data);
            setIsLoading(false);
        }).catch(() => setIsLoading(false));
    }, []);

    return (
        <div className="bg-background py-24 sm:py-32 min-h-screen border-t border-border/40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">{t("blog_title")}</h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        {t("blog_description")}
                    </p>
                </div>

                {isLoading ? (
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-border/40 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col animate-pulse">
                                <div className="h-4 w-32 bg-muted rounded mb-4" />
                                <div className="h-6 w-3/4 bg-muted rounded mb-3" />
                                <div className="h-16 w-full bg-muted rounded" />
                            </div>
                        ))}
                    </div>
                ) : posts.length === 0 ? (
                    <div className="mx-auto mt-20 text-center text-muted-foreground border-t border-border/40 pt-16">
                        <p className="text-xl">{t("blog_empty_title")}</p>
                        <p className="text-sm mt-2">{t("blog_empty_subtitle")}</p>
                    </div>
                ) : (
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-border/40 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post: Post) => (
                            <article key={post._id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.publishedAt} className="text-muted-foreground font-medium">
                                        {new Date(post.publishedAt).toLocaleDateString(
                                            language === "zh" ? "zh-TW" : "en-US",
                                            {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            }
                                        )}
                                    </time>
                                    <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                                        {t("blog_tag_news")}
                                    </span>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-4 text-xl font-bold leading-7 text-foreground group-hover:text-primary transition-colors">
                                        <Link href={`/blog/${post.slug.current}`}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-4 line-clamp-3 text-base leading-7 text-muted-foreground">{post.excerpt}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
