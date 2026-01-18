"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

// Define the shape of the data
type Post = {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    excerpt: string;
};

export default function BlogPage() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const query = `*[_type == "post"] | order(publishedAt desc)`;
        client.fetch(query).then((data) => {
            setPosts(data);
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center text-zinc-500">
                    Loading posts from Sanity CMS...
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">From the Blog</h2>
                    <p className="mt-2 text-lg leading-8 text-zinc-600">
                        Updates, stories, and musings from our team.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-zinc-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post._id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.publishedAt} className="text-zinc-500">
                                    {new Date(post.publishedAt).toLocaleDateString()}
                                </time>
                                <Link
                                    href={`/blog/${post.slug.current}`}
                                    className="relative z-10 rounded-full bg-cyan-50 px-3 py-1.5 font-medium text-cyan-600 hover:bg-cyan-100"
                                >
                                    News
                                </Link>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-900 group-hover:text-zinc-600">
                                    <a href="#">
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-600">{post.excerpt}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
