"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, Images, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/* ── Helper: mobile nav link ───────────────────────────────────── */
function MobileLink({
    href,
    onClick,
    sub = false,
    children,
}: {
    href: string;
    onClick: () => void;
    sub?: boolean;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${
                sub ? 'text-muted-foreground' : 'text-foreground'
            }`}
        >
            {children}
        </Link>
    );
}

export function Navbar() {
    const { t, language, toggleLanguage } = useLanguage();
    const pathname = usePathname();

    const [scrolled,          setScrolled]          = useState(false);
    const [mobileOpen,        setMobileOpen]        = useState(false);
    const [teamExpanded,      setTeamExpanded]      = useState(false);
    const [projectsExpanded,  setProjectsExpanded]  = useState(false);

    /* Scroll-shadow */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* Close mobile menu on route change */
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    /* Lock body scroll while mobile menu is open */
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const closeMobile = () => setMobileOpen(false);

    return (
        <>
            {/* ── Desktop / mobile bar ──────────────────────────────── */}
            <motion.nav
                className={`w-full z-40 border-b border-border bg-background/90 backdrop-blur-md transition-shadow duration-300 ${
                    scrolled ? 'shadow-md' : 'shadow-none'
                }`}
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">

                        {/* Logo + desktop links */}
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="text-2xl font-bold tracking-tight text-primary transition-opacity hover:opacity-80"
                            >
                                TTT
                            </Link>

                            {/* Desktop nav */}
                            <div className="hidden md:block ml-10">
                                <div className="flex items-center space-x-7">
                                    <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                        {t("nav_about")}
                                    </Link>

                                    {/* Team dropdown */}
                                    <div className="relative group">
                                        <div className="flex items-center gap-1 py-4">
                                            <Link href="/team" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                                {t("nav_team")}
                                            </Link>
                                            <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:rotate-180 group-hover:text-foreground" />
                                        </div>
                                        <div className="invisible absolute left-0 top-full z-50 w-56 origin-top-left -translate-y-2 rounded-md border border-border bg-popover opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                            <div className="py-1">
                                                <Link href="/team"           className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">{t("nav_team_current")}</Link>
                                                <Link href="/team/legacy-2025" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-colors">{t("nav_team_legacy_2025")}</Link>
                                                <Link href="/team/legacy-2024" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-colors">{t("nav_team_legacy_2024")}</Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Projects dropdown */}
                                    <div className="relative group">
                                        <div className="flex items-center gap-1 py-4">
                                            <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                                {t("nav_projects")}
                                            </Link>
                                            <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:rotate-180 group-hover:text-foreground" />
                                        </div>
                                        <div className="invisible absolute left-0 top-full z-50 w-52 origin-top-left -translate-y-2 rounded-md border border-border bg-popover opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                            <div className="py-1">
                                                <Link href="/projects" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">{t("nav_projects")}</Link>
                                                <Link href="/focus"    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-colors">{t("nav_focus")}</Link>
                                                <Link href="/events"   className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-colors">{t("nav_events")}</Link>
                                                <Link href="/projects" className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-colors">
                                                    <Images className="h-3.5 w-3.5" />
                                                    {language === "zh" ? "計畫相片集" : "Venture Galleries"}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/blog"    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t("nav_blog")}</Link>
                                    <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t("nav_contact")}</Link>
                                </div>
                            </div>
                        </div>

                        {/* Right-side actions */}
                        <div className="flex items-center space-x-3">
                            {/* Language toggle */}
                            <button
                                onClick={toggleLanguage}
                                aria-label="Toggle language"
                                className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                            >
                                <span className={language === "zh" ? "font-bold text-primary" : "text-muted-foreground"}>中文</span>
                                <span className="text-border">|</span>
                                <span className={language === "en" ? "font-bold text-primary" : "text-muted-foreground"}>EN</span>
                            </button>

                            {/* Desktop Join Us */}
                            <Link href="/join" className="hidden md:block">
                                <Button variant="primary" className="rounded-full transition-all duration-200 hover:scale-105 active:scale-95">
                                    {t("nav_join_us")}
                                </Button>
                            </Link>

                            {/* Mobile hamburger */}
                            <button
                                onClick={() => setMobileOpen((o) => !o)}
                                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                                className="md:hidden flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted transition-colors"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {mobileOpen ? (
                                        <motion.span
                                            key="x"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0,   opacity: 1 }}
                                            exit={{   rotate:  90, opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <X className="h-5 w-5" />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="menu"
                                            initial={{ rotate:  90, opacity: 0 }}
                                            animate={{ rotate: 0,   opacity: 1 }}
                                            exit={{   rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <Menu className="h-5 w-5" />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* ── Mobile slide-in panel ─────────────────────────────── */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            className="fixed inset-0 z-[60] bg-black/40 md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{   opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={closeMobile}
                        />

                        {/* Panel */}
                        <motion.div
                            key="panel"
                            className="fixed inset-y-0 right-0 z-[70] flex w-[min(320px,90vw)] flex-col bg-background shadow-2xl md:hidden border-l border-border"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{   x: "100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 240 }}
                        >
                            {/* Panel header */}
                            <div className="flex items-center justify-between border-b border-border px-5 py-4">
                                <Link href="/" onClick={closeMobile} className="text-xl font-bold tracking-tight text-primary">
                                    TTT
                                </Link>
                                <button
                                    onClick={closeMobile}
                                    className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Links */}
                            <div className="flex-1 overflow-y-auto px-3 py-5 space-y-1">
                                <MobileLink href="/about" onClick={closeMobile}>{t("nav_about")}</MobileLink>

                                {/* Team accordion */}
                                <div>
                                    <button
                                        onClick={() => setTeamExpanded((e) => !e)}
                                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                                    >
                                        {t("nav_team")}
                                        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${teamExpanded ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {teamExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{   height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pl-3 pt-1 space-y-0.5">
                                                    <MobileLink href="/team"             onClick={closeMobile} sub>{t("nav_team_current")}</MobileLink>
                                                    <MobileLink href="/team/legacy-2025" onClick={closeMobile} sub>{t("nav_team_legacy_2025")}</MobileLink>
                                                    <MobileLink href="/team/legacy-2024" onClick={closeMobile} sub>{t("nav_team_legacy_2024")}</MobileLink>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Projects accordion */}
                                <div>
                                    <button
                                        onClick={() => setProjectsExpanded((e) => !e)}
                                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                                    >
                                        {t("nav_projects")}
                                        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${projectsExpanded ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {projectsExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{   height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pl-3 pt-1 space-y-0.5">
                                                    <MobileLink href="/projects" onClick={closeMobile} sub>{t("nav_projects")}</MobileLink>
                                                    <MobileLink href="/focus"    onClick={closeMobile} sub>{t("nav_focus")}</MobileLink>
                                                    <MobileLink href="/events"   onClick={closeMobile} sub>{t("nav_events")}</MobileLink>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <MobileLink href="/blog"    onClick={closeMobile}>{t("nav_blog")}</MobileLink>
                                <MobileLink href="/contact" onClick={closeMobile}>{t("nav_contact")}</MobileLink>
                            </div>

                            {/* Bottom actions */}
                            <div className="space-y-3 border-t border-border px-4 py-4">
                                <button
                                    onClick={() => { toggleLanguage(); }}
                                    className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-all duration-200"
                                >
                                    <span className={language === "zh" ? "font-bold text-primary" : ""}>中文</span>
                                    <span className="text-border">|</span>
                                    <span className={language === "en" ? "font-bold text-primary" : ""}>EN</span>
                                </button>
                                <Link href="/join" onClick={closeMobile} className="block">
                                    <Button variant="primary" className="w-full rounded-full">
                                        {t("nav_join_us")}
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
