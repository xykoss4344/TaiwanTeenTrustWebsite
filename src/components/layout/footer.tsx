"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-border bg-muted">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-2xl font-bold tracking-tight text-primary mb-4">TTT</div>
                        <p className="text-sm text-muted-foreground leading-6 pr-4">
                            {t("footer_tagline")}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground">{t("footer_organization")}</h3>
                        <ul role="list" className="mt-4 space-y-4">
                            <li>
                                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {t("footer_about_us")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {t("footer_our_team")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/focus" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {t("nav_focus")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {t("footer_projects")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground">{t("footer_community")}</h3>
                        <ul role="list" className="mt-4 space-y-4">
                            <li>
                                <Link href="/join" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {t("nav_join_us")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {t("footer_blog")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {t("footer_contact")}
                                </Link>
                            </li>
                            <li>
                                {/* TODO: Replace "#" with your external donation platform URL */}
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {t("footer_donate")}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground">{t("footer_social")}</h3>
                        <ul role="list" className="mt-4 space-y-4">
                            <li>
                                <a href="https://instagram.com/taiwanteentrust" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/company/taiwanteentrust" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@taiwanteentrust.org" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {t("footer_email_us")}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-border pt-8 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} {t("footer_copyright")}
                    </p>
                </div>
            </div>
        </footer>
    );
}
