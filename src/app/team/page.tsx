"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, Linkedin } from "lucide-react";
import { TranslationKeys } from "@/lib/translations";

type TeamMember = {
    _id: string;
    name: string;
    role: string;
    bio: string;
    department: string;
    order?: number;
    image: SanityImageSource;
    linkedin?: string;
    instagram?: string;
};

// Department display config — order here controls section order on page
const DEPARTMENTS: { key: string; label_en: string; label_zh: string }[] = [
    { key: "leadership", label_en: "Main Leadership", label_zh: "核心領導層" },
    { key: "it", label_en: "IT & Tech", label_zh: "資訊技術組" },
    { key: "video", label_en: "Video & Media Production", label_zh: "影像製作組" },
    { key: "marketing", label_en: "Marketing & Social Media", label_zh: "行銷與社群媒體組" },
    { key: "design", label_en: "Design & Creative", label_zh: "設計與創意組" },
    { key: "research", label_en: "Research & Policy", label_zh: "研究與政策組" },
    { key: "events", label_en: "Events & Outreach", label_zh: "活動與推廣組" },
    { key: "finance", label_en: "Finance & Admin", label_zh: "財務與行政組" },
];

// Placeholder members used when CMS is empty
const PLACEHOLDER_DEPARTMENTS = [
    { key: "leadership", count: 3 },
    { key: "marketing", count: 4 },
    { key: "it", count: 3 },
    { key: "video", count: 3 },
];

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const item = {
    hidden: { y: 16, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

function MemberCard({ person, t }: { person: TeamMember; t: (key: keyof TranslationKeys) => string }) {
    return (
        <motion.div variants={item} className="group relative bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                {person.image ? (
                    <Image
                        src={urlForImage(person.image).url()}
                        alt={person.name}
                        width={400}
                        height={500}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="h-full w-full flex items-center justify-center text-muted-foreground/40 text-sm">
                        {t("team_image_na")}
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="font-bold text-foreground leading-snug">{person.name}</h3>
                <p className="text-xs font-medium text-primary mt-0.5">{person.role}</p>
                {person.bio && (
                    <p className="mt-2 text-xs leading-5 text-muted-foreground line-clamp-3">{person.bio}</p>
                )}
                {(person.linkedin || person.instagram) && (
                    <div className="mt-3 flex items-center gap-2">
                        {person.linkedin && (
                            <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                               className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-4 w-4" />
                            </a>
                        )}
                        {person.instagram && (
                            <a href={person.instagram} target="_blank" rel="noopener noreferrer"
                               className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-4 w-4" />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

function PlaceholderCard({ t }: { t: (key: keyof TranslationKeys) => string }) {
    return (
        <motion.div variants={item} className="group relative bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="aspect-[3/4] w-full bg-muted animate-pulse" />
            <div className="p-4 space-y-2">
                <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
                <div className="h-3 w-1/2 bg-muted animate-pulse rounded" />
                <div className="h-3 w-full bg-muted animate-pulse rounded mt-2" />
                <div className="h-3 w-5/6 bg-muted animate-pulse rounded" />
            </div>
        </motion.div>
    );
}

export default function TeamPage() {
    const { t, language } = useLanguage();
    const [members, setMembers] = useState<TeamMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "member"] | order(order asc, name asc)`;
        client.fetch(query).then((data: TeamMember[]) => {
            setMembers(data);
            setIsLoading(false);
        }).catch(() => setIsLoading(false));
    }, []);

    // Group members by department
    const grouped = DEPARTMENTS.map((dept) => ({
        ...dept,
        members: members.filter((m) => m.department === dept.key),
    })).filter((dept) => dept.members.length > 0);

    // If no members from CMS at all, show placeholder layout
    const isEmpty = !isLoading && members.length === 0;

    return (
        <div className="bg-background min-h-screen">
            {/* Header */}
            <div className="border-b border-border/40 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">{t("team_title")}</h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("team_description")}</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 space-y-20">
                {isLoading ? (
                    // Loading skeleton
                    PLACEHOLDER_DEPARTMENTS.map((dept) => {
                        const info = DEPARTMENTS.find((d) => d.key === dept.key)!;
                        return (
                            <section key={dept.key}>
                                <div className="flex items-center gap-4 mb-8">
                                    <h2 className="text-xl font-bold text-foreground">
                                        {language === "zh" ? info.label_zh : info.label_en}
                                    </h2>
                                    <div className="flex-1 h-px bg-border" />
                                </div>
                                <motion.div
                                    variants={container} initial="hidden" animate="show"
                                    className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                                >
                                    {Array.from({ length: dept.count }).map((_, i) => (
                                        <PlaceholderCard key={i} t={t} />
                                    ))}
                                </motion.div>
                            </section>
                        );
                    })
                ) : isEmpty ? (
                    // No CMS data — show placeholder by department group
                    PLACEHOLDER_DEPARTMENTS.map((dept) => {
                        const info = DEPARTMENTS.find((d) => d.key === dept.key)!;
                        return (
                            <section key={dept.key}>
                                <div className="flex items-center gap-4 mb-8">
                                    <h2 className="text-xl font-bold text-foreground">
                                        {language === "zh" ? info.label_zh : info.label_en}
                                    </h2>
                                    <div className="flex-1 h-px bg-border" />
                                    <span className="text-xs text-muted-foreground rounded-full bg-muted px-2.5 py-0.5">
                                        {dept.count}
                                    </span>
                                </div>
                                <motion.div
                                    variants={container} initial="hidden" animate="show"
                                    className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                                >
                                    {Array.from({ length: dept.count }).map((_, i) => (
                                        <PlaceholderCard key={i} t={t} />
                                    ))}
                                </motion.div>
                            </section>
                        );
                    })
                ) : (
                    // Real CMS data grouped by department
                    grouped.map((dept) => (
                        <section key={dept.key}>
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-xl font-bold text-foreground">
                                    {language === "zh" ? dept.label_zh : dept.label_en}
                                </h2>
                                <div className="flex-1 h-px bg-border" />
                                <span className="text-xs text-muted-foreground rounded-full bg-muted px-2.5 py-0.5">
                                    {dept.members.length}
                                </span>
                            </div>
                            <motion.div
                                variants={container} initial="hidden" animate="show"
                                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                            >
                                {dept.members.map((person) => (
                                    <MemberCard key={person._id} person={person} t={t} />
                                ))}
                            </motion.div>
                        </section>
                    ))
                )}
            </div>
        </div>
    );
}
