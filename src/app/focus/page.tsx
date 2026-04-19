"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, BookOpen, Leaf, HeartHandshake, GraduationCap, Globe, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import type { LucideIcon } from "lucide-react";

/* ── Icon map (Sanity iconName → Lucide component) ────────────── */
const ICON_MAP: Record<string, LucideIcon> = {
    hearthandshake: HeartHandshake,
    leaf:           Leaf,
    globe:          Globe,
    graduationcap:  GraduationCap,
    users:          Users,
    building:       Building,
    bookopen:       BookOpen,
};

/* ── Color map (Sanity colorScheme → Tailwind classes) ─────────── */
const COLOR_MAP: Record<string, string> = {
    violet:  "bg-violet-500/10 text-violet-600",
    emerald: "bg-emerald-500/10 text-emerald-600",
    amber:   "bg-amber-500/10  text-amber-600",
    blue:    "bg-blue-500/10   text-blue-600",
    rose:    "bg-rose-500/10   text-rose-600",
    cyan:    "bg-cyan-500/10   text-cyan-600",
};

/* ── Types ────────────────────────────────────────────────────── */
type FocusYear = {
    _id: string;
    year: number;
    isCurrent: boolean;
    issue_en: string;
    issue_zh: string;
    colorScheme: string;
    iconName: string;
    whyContext_en: string;
    whyContext_zh: string;
    ourResponse_en: string;
    ourResponse_zh: string;
    projectCount: number;
};

/* ── Hardcoded fallback (used when Sanity has no data yet) ────── */
const FALLBACK: FocusYear[] = [
    {
        _id: "f2026", year: 2026, isCurrent: true,
        issue_en: "Mental Health & Youth Wellbeing", issue_zh: "青少年心理健康與身心健康",
        colorScheme: "violet", iconName: "hearthandshake",
        whyContext_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        whyContext_zh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        ourResponse_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra.",
        ourResponse_zh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
        projectCount: 6,
    },
    {
        _id: "f2025", year: 2025, isCurrent: false,
        issue_en: "Urban Environment & Green Spaces", issue_zh: "城市環境與綠色空間",
        colorScheme: "emerald", iconName: "leaf",
        whyContext_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        whyContext_zh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ourResponse_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ourResponse_zh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        projectCount: 11,
    },
    {
        _id: "f2024", year: 2024, isCurrent: false,
        issue_en: "Elderly Care & Intergenerational Connection", issue_zh: "長者照護與代際連結",
        colorScheme: "amber", iconName: "globe",
        whyContext_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        whyContext_zh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ourResponse_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ourResponse_zh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        projectCount: 13,
    },
    {
        _id: "f2023", year: 2023, isCurrent: false,
        issue_en: "Education Equity & Access", issue_zh: "教育公平與資源取得",
        colorScheme: "blue", iconName: "graduationcap",
        whyContext_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        whyContext_zh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ourResponse_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ourResponse_zh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        projectCount: 9,
    },
];

export default function AnnualFocusPage() {
    const { t, language } = useLanguage();
    const [focusYears, setFocusYears] = useState<FocusYear[]>([]);

    useEffect(() => {
        const query = `*[_type == "focusYear"] | order(year desc) {
            _id, year, isCurrent,
            issue_en, issue_zh,
            colorScheme, iconName,
            whyContext_en, whyContext_zh,
            ourResponse_en, ourResponse_zh,
            projectCount
        }`;
        client
            .fetch(query)
            .then((data: FocusYear[]) => {
                setFocusYears(data && data.length > 0 ? data : FALLBACK);
            })
            .catch(() => setFocusYears(FALLBACK));
    }, []);

    const data = focusYears.length > 0 ? focusYears : FALLBACK;
    const current = data.find((f) => f.isCurrent) ?? data[0];
    const archive = data.filter((f) => !f.isCurrent);

    const CurrentIcon = ICON_MAP[current.iconName] ?? Leaf;
    const currentColor = COLOR_MAP[current.colorScheme] ?? COLOR_MAP.emerald;

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="relative isolate overflow-hidden border-b border-border/40">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10" aria-hidden="true" />
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <p className="text-base font-semibold uppercase leading-7 tracking-widest text-primary">
                            {t("focus_page_label")}
                        </p>
                        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
                            {t("focus_page_title")}
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-muted-foreground">
                            {t("focus_page_subtitle")}
                        </p>
                    </div>
                </div>
            </div>

            {/* Current Focus */}
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                    {t("focus_current_badge")} — {current.year}
                </div>

                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <div className={`mb-4 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold ${currentColor}`}>
                            <CurrentIcon className="h-4 w-4" />
                            {language === "zh" ? current.issue_zh : current.issue_en}
                        </div>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            {language === "zh" ? current.issue_zh : current.issue_en}
                        </h2>

                        <div className="mt-8 space-y-6">
                            <div>
                                <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
                                    {t("focus_issue_context")}
                                </h3>
                                <p className="leading-7 text-muted-foreground">
                                    {language === "zh" ? current.whyContext_zh : current.whyContext_en}
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
                                    {t("focus_our_response")}
                                </h3>
                                <p className="leading-7 text-muted-foreground">
                                    {language === "zh" ? current.ourResponse_zh : current.ourResponse_en}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Link href="/projects">
                                <Button className="rounded-full">
                                    {t("focus_view_projects")} <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Stats card */}
                    <div className="rounded-3xl border border-border bg-muted p-8 lg:p-10">
                        <div className="mb-6 flex items-center gap-3 border-b border-border pb-6">
                            <div className={`rounded-xl p-3 ${currentColor}`}>
                                <CurrentIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-widest text-muted-foreground">{current.year}</div>
                                <div className="font-bold text-foreground">
                                    {language === "zh" ? current.issue_zh : current.issue_en}
                                </div>
                            </div>
                        </div>
                        <div className="mb-1 text-5xl font-extrabold text-foreground">{current.projectCount}</div>
                        <div className="mb-8 text-sm text-muted-foreground">{t("focus_projects_this_year")}</div>
                        <Link href="/projects" className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                            {t("focus_see_all")} <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Archive */}
            {archive.length > 0 && (
                <div className="border-t border-border bg-muted/50 py-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                {t("focus_archive_title")}
                            </h2>
                            <p className="mt-3 text-muted-foreground">{t("focus_archive_subtitle")}</p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {archive.map((focus) => {
                                const Icon  = ICON_MAP[focus.iconName] ?? Leaf;
                                const color = COLOR_MAP[focus.colorScheme] ?? COLOR_MAP.emerald;
                                return (
                                    <div
                                        key={focus._id}
                                        className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
                                    >
                                        <div className={`mb-4 inline-flex items-center gap-2 rounded-lg px-3 py-1 text-xs font-semibold ${color}`}>
                                            <Icon className="h-3.5 w-3.5" />
                                            {focus.year}
                                        </div>
                                        <h3 className="mb-2 text-lg font-bold leading-snug text-foreground">
                                            {language === "zh" ? focus.issue_zh : focus.issue_en}
                                        </h3>
                                        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                                            {language === "zh" ? focus.whyContext_zh : focus.whyContext_en}
                                        </p>
                                        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                                            <span className="text-xs text-muted-foreground">
                                                {focus.projectCount} {t("focus_projects_this_year")}
                                            </span>
                                            <Link href="/projects" className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                                                {t("focus_see_all")} <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
