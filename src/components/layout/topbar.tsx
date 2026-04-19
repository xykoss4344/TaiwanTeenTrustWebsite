"use client";

import Link from "next/link";
import { Instagram, Linkedin, Mail, Facebook } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
    {
        label: "Instagram",
        href: "https://instagram.com/taiwanteentrust",
        icon: Instagram,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/company/taiwanteentrust",
        icon: Linkedin,
    },
    {
        label: "Facebook",
        href: "https://facebook.com/taiwanteentrust",
        icon: Facebook,
    },
    {
        label: "Email",
        href: "mailto:hello@taiwanteentrust.org",
        icon: Mail,
    },
];

export function TopBar() {
    const { t } = useLanguage();

    return (
        <div className="bg-primary text-primary-foreground py-2 px-4">
            <div className="mx-auto max-w-7xl flex items-center justify-between">
                {/* Left: tagline */}
                <p className="hidden sm:block text-xs font-medium opacity-90 tracking-wide">
                    {t("footer_tagline")}
                </p>

                {/* Right: social icons */}
                <div className="flex items-center gap-3 ml-auto">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("mailto") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="flex items-center justify-center rounded-full p-1 hover:bg-white/20 transition-colors duration-150"
                        >
                            <Icon className="h-3.5 w-3.5" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
