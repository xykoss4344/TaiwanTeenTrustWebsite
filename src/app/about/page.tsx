"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const pillarsStagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

export default function AboutPage() {
    const { t } = useLanguage();

    const heroRef    = useRef(null);
    const heroIn     = useInView(heroRef,    { once: true, margin: "-60px" });
    const pillarsRef = useRef(null);
    const pillarsIn  = useInView(pillarsRef, { once: true, margin: "-60px" });
    const quoteRef   = useRef(null);
    const quoteIn    = useInView(quoteRef,   { once: true, margin: "-60px" });

    return (
        <div className="bg-background min-h-screen">
            <div className="relative isolate overflow-hidden py-24 sm:py-32">
                {/* Subtle background pattern */}
                <div
                    className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10"
                    aria-hidden="true"
                />

                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    {/* Page title */}
                    <motion.div
                        ref={heroRef}
                        className="mx-auto max-w-2xl lg:mx-0"
                        initial="hidden"
                        animate={heroIn ? "visible" : "hidden"}
                        variants={stagger}
                    >
                        <motion.h2 variants={fadeUp} className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
                            {t("about_title")}
                        </motion.h2>
                        <motion.p variants={fadeUp} className="mt-6 text-xl leading-8 text-muted-foreground">
                            {t("about_description")}
                        </motion.p>
                    </motion.div>

                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-12">

                        {/* Pull quote */}
                        <motion.div
                            ref={quoteRef}
                            className="relative lg:order-last lg:col-span-5"
                            initial={{ opacity: 0, x: 32 }}
                            animate={quoteIn ? { opacity: 1, x: 0 } : { opacity: 0, x: 32 }}
                            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <figure className="border-l-4 border-primary pl-8 py-2">
                                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-foreground">
                                    <p>{t("about_quote")}</p>
                                </blockquote>
                                <figcaption className="mt-8 flex items-center gap-x-4">
                                    <div className="h-12 w-12 flex-none rounded-full bg-muted object-cover ring-1 ring-border" />
                                    <div className="text-sm leading-6">
                                        <div className="font-bold text-foreground">{t("about_quote_author")}</div>
                                        <div className="text-muted-foreground">{t("about_quote_role")}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </motion.div>

                        {/* Body + pillars */}
                        <motion.div
                            ref={pillarsRef}
                            className="max-w-xl text-base leading-7 text-muted-foreground lg:col-span-7"
                            initial="hidden"
                            animate={pillarsIn ? "visible" : "hidden"}
                            variants={stagger}
                        >
                            <motion.p variants={fadeUp} className="mb-6">
                                {t("about_body")}
                            </motion.p>

                            <motion.ul
                                role="list"
                                className="mt-8 max-w-xl space-y-6 text-muted-foreground"
                                variants={pillarsStagger}
                            >
                                {([
                                    { title: "about_pillar1_title", desc: "about_pillar1_desc" },
                                    { title: "about_pillar2_title", desc: "about_pillar2_desc" },
                                    { title: "about_pillar3_title", desc: "about_pillar3_desc" },
                                ] as const).map(({ title, desc }) => (
                                    <motion.li
                                        key={title}
                                        variants={fadeUp}
                                        className="flex gap-x-3 rounded-lg border border-border bg-muted/30 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-muted/60 hover:shadow-sm"
                                    >
                                        <div>
                                            <span className="mb-1 block font-bold text-foreground">{t(title)}</span>
                                            {t(desc)}
                                        </div>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
}
