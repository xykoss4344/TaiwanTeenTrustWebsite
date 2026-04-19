"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Leaf, Users, Target, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

type SanityImpactStat = { number: string; label_en: string; label_zh: string };
type SiteSettings = { impactStats?: SanityImpactStat[] };

/* ── Shared animation variants ───────────────────────────────────── */

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const staggerDelayed: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } },
};

const scaleIn: Variants = {
  hidden:  { opacity: 0, y: 20, scale: 0.94 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* ── Partner names (placeholder) ────────────────────────────────── */
const PARTNERS = ["LOREM", "IPSUM", "DOLOR", "SIT", "AMET"];

/* ── Value card data ─────────────────────────────────────────────── */
const VALUES = [
  { icon: Leaf,       titleKey: "home_value1_title", descKey: "home_value1_desc" },
  { icon: Users,      titleKey: "home_value2_title", descKey: "home_value2_desc" },
  { icon: ShieldCheck,titleKey: "home_value3_title", descKey: "home_value3_desc" },
  { icon: Target,     titleKey: "home_value4_title", descKey: "home_value4_desc" },
] as const;

export default function Home() {
  const { t, language } = useLanguage();

  /* Sanity site settings (impact stats) */
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  useEffect(() => {
    client
      .fetch(`*[_type == "siteSettings"][0]{ impactStats }`)
      .then((data: SiteSettings | null) => setSiteSettings(data))
      .catch(() => {});
  }, []);

  /* Scroll-reveal refs */
  const valuesRef     = useRef(null);
  const valuesInView  = useInView(valuesRef,     { once: true, margin: "-80px" });
  const impactRef     = useRef(null);
  const impactInView  = useInView(impactRef,     { once: true, margin: "-80px" });
  const initRef       = useRef(null);
  const initInView    = useInView(initRef,       { once: true, margin: "-80px" });

  return (
    <div className="bg-background">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100">

        {/* Animated background blobs */}
        <div className="pointer-events-none absolute -top-48 -right-40 h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -left-40 h-[400px] w-[400px] rounded-full bg-emerald-700/15 blur-3xl animate-float-alt" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.07),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">

            {/* Badge */}
            <motion.div
              className="hidden sm:mb-8 sm:flex"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-600 ring-1 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
                <Link href="/projects/sample-project" className="group font-semibold text-primary">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <span className="absolute inset-0 rounded-full bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="font-normal text-slate-600">{t("home_hero_badge")} </span>
                  {t("home_hero_badge_link")} <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-6xl"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {t("home_hero_title")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mt-6 text-lg leading-8 text-slate-700"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {t("home_hero_description")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex items-center gap-x-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/projects">
                <Button
                  size="lg"
                  className="rounded-full border-0 bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:scale-105 active:scale-95"
                >
                  {t("home_hero_cta_primary")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/30 bg-transparent text-white transition-all duration-200 hover:bg-white/10 hover:scale-105 active:scale-95"
                >
                  {t("home_hero_cta_secondary")}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade into next section */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/10 to-transparent" />
      </div>

      {/* ── Partners Ticker ──────────────────────────────────────── */}
      <div className="border-y border-border bg-muted/50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 text-center text-sm font-semibold uppercase leading-8 tracking-widest text-muted-foreground">
            {t("home_partners_heading")}
          </h2>
        </div>
        {/* Infinite marquee — duplicated for seamless loop */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((name, i) => (
              <div
                key={i}
                className="inline-flex w-44 select-none items-center justify-center text-xl font-bold tracking-widest text-foreground/35 transition-colors duration-200 hover:text-foreground/60"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Core Values ──────────────────────────────────────────── */}
      <div ref={valuesRef} className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">

        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-base font-semibold uppercase leading-7 tracking-wide text-primary">
            {t("home_values_label")}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("home_values_title")}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("home_values_description")}
          </motion.p>
        </motion.div>

        {/* Value cards */}
        <motion.dl
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 sm:mt-20 lg:mt-24 lg:max-w-4xl lg:grid-cols-2"
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
          variants={staggerDelayed}
        >
          {VALUES.map(({ icon: Icon, titleKey, descKey }) => (
            <motion.div
              key={titleKey}
              variants={fadeUp}
              className="group relative cursor-default rounded-2xl border border-transparent py-4 pl-16 pr-4 transition-all duration-300 hover:-translate-y-1 hover:border-border/60 hover:bg-muted/50 hover:shadow-md"
            >
              <dt className="text-base font-semibold leading-7 text-foreground">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                {t(titleKey)}
              </dt>
              <dd className="mt-2 text-base leading-7 text-muted-foreground">
                {t(descKey)}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      {/* ── Impact Dashboard ─────────────────────────────────────── */}
      <div ref={impactRef} className="border-y border-border bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            className="mx-auto mb-16 max-w-2xl text-center"
            initial="hidden"
            animate={impactInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-widest opacity-75">
              {t("impact_section_label")}
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {t("impact_section_title")}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg leading-8 opacity-80">
              {t("impact_section_subtitle")}
            </motion.p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-10 lg:grid-cols-4"
            initial="hidden"
            animate={impactInView ? "visible" : "hidden"}
            variants={staggerDelayed}
          >
            {(siteSettings?.impactStats && siteSettings.impactStats.length > 0
              ? siteSettings.impactStats.map((s) => ({
                  num:   s.number,
                  label: language === "zh" ? s.label_zh : s.label_en,
                }))
              : [
                  { num: t("impact_stat1_number"), label: t("impact_stat1_label") },
                  { num: t("impact_stat2_number"), label: t("impact_stat2_label") },
                  { num: t("impact_stat3_number"), label: t("impact_stat3_label") },
                  { num: t("impact_stat4_number"), label: t("impact_stat4_label") },
                ]
            ).map((stat) => (
              <motion.div key={stat.label} variants={scaleIn} className="text-center">
                <div className="text-5xl font-extrabold tracking-tight sm:text-6xl">{stat.num}</div>
                <div className="mt-3 text-sm font-medium uppercase tracking-widest opacity-75">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-14 text-center"
            initial={{ opacity: 0 }}
            animate={impactInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link href="/focus">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/30 bg-transparent text-white transition-all duration-200 hover:bg-white/10 hover:scale-105 active:scale-95 dark:bg-transparent dark:text-white dark:border-white/30 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {t("impact_cta")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Latest Initiative ────────────────────────────────────── */}
      <div ref={initRef} className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section heading */}
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0"
            initial="hidden"
            animate={initInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("home_initiative_heading")}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-8 text-muted-foreground">
              {t("home_initiative_subtitle")}
            </motion.p>
          </motion.div>

          {/* Feature card */}
          <motion.div
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            initial={{ opacity: 0, y: 36 }}
            animate={initInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="overflow-hidden rounded-3xl bg-background shadow-sm ring-1 ring-border transition-shadow duration-500 hover:shadow-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-center">

                {/* Text */}
                <div className="px-6 py-12 sm:px-12 lg:py-16">
                  <h3 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
                    {t("home_initiative_feature_title")}
                  </h3>
                  <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                    {t("home_initiative_feature_desc")}
                  </p>
                  <Link href="/projects/urban-canopy">
                    <Button variant="outline" className="rounded-full transition-all duration-200 hover:scale-105 active:scale-95">
                      {t("home_initiative_feature_btn")}
                    </Button>
                  </Link>
                </div>

                {/* Decorative image placeholder */}
                <div className="relative flex min-h-[280px] items-center justify-center bg-gradient-to-br from-primary/10 via-emerald-100/20 to-emerald-50/10 lg:h-full">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/10 animate-float">
                    <Leaf className="h-12 w-12 text-primary/50" />
                  </div>
                  {/* Subtle rings */}
                  <div className="pointer-events-none absolute h-48 w-48 rounded-full border border-primary/10 animate-float-alt" />
                  <div className="pointer-events-none absolute h-64 w-64 rounded-full border border-primary/5" />
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
