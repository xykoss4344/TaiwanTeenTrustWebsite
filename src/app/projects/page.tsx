"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { ArrowUpRight, Search, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
    _id: string;
    title: string;
    slug: { current: string };
    category: string;
    year: string;
    description: string;
    image: unknown;
};

export default function ProjectsPage() {
    const { t } = useLanguage();
    const [projects,   setProjects]   = useState<Project[]>([]);
    const [filter,     setFilter]     = useState("All");
    const [search,     setSearch]     = useState("");
    const [isLoading,  setIsLoading]  = useState(true);

    useEffect(() => {
        const query = `*[_type == "project"] | order(year desc) {
            _id, title, slug, category, year, description, image
        }`;

        const foodmapProject: Project = {
            _id: "foodmap-local",
            title: "Foodmap (食物平台)",
            slug: { current: "foodmap" },
            category: "Environment",
            year: "2026",
            description: "An interactive map platform built to connect leftover food with local communities, reducing food waste and tackling hunger.",
            image: null
        };

        client.fetch(query).then((data: Project[]) => {
            setProjects([foodmapProject, ...data]);
            setIsLoading(false);
        }).catch(() => {
            setProjects([foodmapProject]);
            setIsLoading(false);
        });
    }, []);

    const categories = [
        { key: "All",           label: t("projects_filter_all")         },
        { key: "Environment",   label: t("projects_filter_environment") },
        { key: "Elderly Care",  label: t("projects_filter_elderly")     },
        { key: "Arts & Culture",label: t("projects_filter_arts")        },
        { key: "Education",     label: t("projects_filter_education")   },
    ];

    const filtered = projects.filter((p) => {
        const matchesCategory = filter === "All" || p.category === filter;
        const q = search.trim().toLowerCase();
        const matchesSearch = !q
            || p.title.toLowerCase().includes(q)
            || p.description?.toLowerCase().includes(q)
            || p.category?.toLowerCase().includes(q);
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Page heading */}
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                        {t("projects_title")}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        {t("projects_description")}
                    </p>
                </div>

                {/* Search + filter bar */}
                <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                    {/* Search input */}
                    <div className="relative flex-1 max-w-sm">
                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={t("projects_search_placeholder")}
                            className="h-10 w-full rounded-full border border-border bg-background pl-9 pr-9 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X className="h-3.5 w-3.5" />
                            </button>
                        )}
                    </div>

                    {/* Category filters */}
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setFilter(cat.key)}
                                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                                    filter === cat.key
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                {isLoading ? (
                    <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex animate-pulse flex-col items-start">
                                <div className="aspect-[3/2] w-full rounded-2xl bg-muted" />
                                <div className="mt-5 h-4 w-1/3 rounded bg-muted" />
                                <div className="mt-3 h-6 w-3/4 rounded bg-muted" />
                                <div className="mt-4 h-16 w-full rounded bg-muted" />
                            </div>
                        ))}
                    </div>
                ) : projects.length === 0 ? (
                    /* No CMS data — show sample card */
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <SampleCard t={t} />
                    </div>
                ) : filtered.length === 0 ? (
                    /* Search / filter returned nothing */
                    <div className="mt-20 text-center">
                        <p className="text-muted-foreground">{t("projects_no_results")}</p>
                        <button
                            onClick={() => { setSearch(""); setFilter("All"); }}
                            className="mt-4 text-sm font-medium text-primary hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                    >
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project) => (
                                <motion.div
                                    key={project._id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{    opacity: 0, scale: 0.97 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <Link
                                        href={`/projects/${project.slug?.current || 'sample-project'}`}
                                        className="group flex flex-col items-start justify-between"
                                    >
                                        <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-border shadow-sm">
                                            <div className="aspect-[3/2] w-full overflow-hidden bg-muted">
                                                {project.image ? (
                                                    <Image
                                                        src={urlForImage(project.image).url()}
                                                        alt={project.title}
                                                        width={600}
                                                        height={400}
                                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 flex h-full w-full items-center justify-center text-sm text-slate-400">
                                                        {t("projects_no_image")}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
                                        </div>
                                        <div className="mt-8 w-full max-w-xl">
                                            <div className="flex items-center gap-x-2 text-xs">
                                                <time dateTime={project.year} className="font-medium text-muted-foreground">
                                                    {project.year}
                                                </time>
                                                <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <h3 className="mt-4 flex items-center text-xl font-bold leading-7 text-foreground transition-colors group-hover:text-primary">
                                                {project.title}
                                                <ArrowUpRight className="ml-2 h-5 w-5 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:-translate-y-0 group-hover:opacity-100" />
                                            </h3>
                                            <p className="mt-4 line-clamp-3 text-base leading-7 text-muted-foreground">
                                                {project.description}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

function SampleCard({ t }: { t: (key: keyof import("@/lib/translations").TranslationKeys) => string }) {
    return (
        <Link href="/projects/sample-project" className="group flex flex-col items-start justify-between">
            <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-border shadow-sm">
                <div className="aspect-[3/2] w-full overflow-hidden bg-muted">
                    <div className="absolute inset-0 flex h-full w-full items-center justify-center text-sm font-medium text-muted-foreground/50">
                        [Sample Image Placeholder]
                    </div>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
            </div>
            <div className="mt-8 w-full max-w-xl">
                <div className="flex items-center gap-x-2 text-xs">
                    <time dateTime="2026" className="font-medium text-muted-foreground">2026</time>
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                        {t("projects_sample_category")}
                    </span>
                </div>
                <h3 className="mt-4 flex items-center text-xl font-bold leading-7 text-foreground transition-colors group-hover:text-primary">
                    {t("projects_sample_title")}
                    <ArrowUpRight className="ml-2 h-5 w-5 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:-translate-y-0 group-hover:opacity-100" />
                </h3>
                <p className="mt-4 line-clamp-3 text-base leading-7 text-muted-foreground">
                    {t("projects_sample_desc")}
                </p>
            </div>
        </Link>
    );
}
