"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type Project = {
    _id: string;
    title: string;
    category: string;
    year: string;
    description: string;
    image: any;
};

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const query = `*[_type == "project"]`;
        client.fetch(query).then((data) => {
            setProjects(data);
        });
    }, []);

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Our Projects</h2>
                    <p className="mt-2 text-lg leading-8 text-zinc-600">
                        A archive of our impact over the years. Filter by year or category to explore our journey.
                    </p>
                </div>

                {/* Simple Filter */}
                <div className="mt-10 flex space-x-4 overflow-x-auto pb-4">
                    {['All', 'Environment', 'Elderly Care', 'Arts & Culture', 'Education'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${filter === cat
                                ? "bg-cyan-600 text-white"
                                : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {projects.length === 0 ? (
                    <div className="mt-16 text-zinc-500">
                        Loading projects from Sanity CMS...
                    </div>
                ) : (
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {filteredProjects.map((project) => (
                            <article key={project._id} className="flex flex-col items-start justify-between">
                                <div className="relative w-full">
                                    <div className="aspect-[16/9] w-full rounded-2xl bg-zinc-100 overflow-hidden sm:aspect-[2/1] lg:aspect-[3/2]">
                                        {project.image && (
                                            <Image
                                                src={urlForImage(project.image).url()}
                                                alt={project.title}
                                                className="absolute inset-0 h-full w-full object-cover"
                                                width={600}
                                                height={400}
                                            />
                                        )}
                                    </div>
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10" />
                                </div>
                                <div className="max-w-xl">
                                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                                        <time dateTime={project.year} className="text-zinc-500">
                                            {project.year}
                                        </time>
                                        <span className="relative z-10 rounded-full bg-cyan-50 px-3 py-1.5 font-medium text-cyan-700 hover:bg-cyan-100">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-900 group-hover:text-zinc-600">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                {project.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-600">{project.description}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
