"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, Briefcase, Users, Award } from "lucide-react";

export default function JoinPage() {
    const { t } = useLanguage();
    const [submitted,    setSubmitted]    = useState(false);
    const [availability, setAvailability] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate async submission — replace with real API call (Formspree / Resend)
        await new Promise((resolve) => setTimeout(resolve, 600));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    const perks = [
        { icon: Briefcase, title: t("join_perk1_title"), desc: t("join_perk1_desc") },
        { icon: Users,     title: t("join_perk2_title"), desc: t("join_perk2_desc") },
        { icon: Award,     title: t("join_perk3_title"), desc: t("join_perk3_desc") },
    ];

    const availabilityOptions = [
        { key: "parttime", label: t("join_availability_parttime") },
        { key: "fulltime", label: t("join_availability_fulltime") },
        { key: "events",   label: t("join_availability_events")   },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <div className="relative isolate overflow-hidden border-b border-border/40">
                <div
                    className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10"
                    aria-hidden="true"
                />
                <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                            {t("join_title")}
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-muted-foreground">
                            {t("join_description")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                {/*
                  Mobile: form first (order-first), perks below (order-last)
                  Desktop: perks on left (lg:order-first), form on right (lg:order-last)
                */}
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">

                    {/* ── Application form ──────────────────────────────── */}
                    <div className="order-first lg:order-last lg:col-span-3">
                        {submitted ? (
                            <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-muted p-10 text-center">
                                <CheckCircle2 className="h-16 w-16 text-primary" />
                                <h2 className="text-2xl font-bold text-foreground">{t("join_success_title")}</h2>
                                <p className="max-w-sm text-muted-foreground">{t("join_success_desc")}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Row 1: Name + Email */}
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <Label htmlFor="join_name">{t("join_label_name")}</Label>
                                        <Input id="join_name" name="name" type="text" required placeholder={t("join_placeholder_name")} className="mt-2" />
                                    </div>
                                    <div>
                                        <Label htmlFor="join_email">{t("join_label_email")}</Label>
                                        <Input id="join_email" name="email" type="email" required placeholder={t("join_placeholder_email")} className="mt-2" />
                                    </div>
                                </div>

                                {/* Row 2: School + Grade */}
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <Label htmlFor="join_school">{t("join_label_school")}</Label>
                                        <Input id="join_school" name="school" type="text" required placeholder={t("join_placeholder_school")} className="mt-2" />
                                    </div>
                                    <div>
                                        <Label htmlFor="join_grade">{t("join_label_grade")}</Label>
                                        <Input id="join_grade" name="grade" type="text" required placeholder={t("join_placeholder_grade")} className="mt-2" />
                                    </div>
                                </div>

                                {/* Row 3: Role + Skills */}
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <Label htmlFor="join_role">{t("join_label_role")}</Label>
                                        <Input id="join_role" name="role" type="text" placeholder={t("join_placeholder_role")} className="mt-2" />
                                    </div>
                                    <div>
                                        <Label htmlFor="join_skills">{t("join_label_skills")}</Label>
                                        <Input id="join_skills" name="skills" type="text" placeholder={t("join_placeholder_skills")} className="mt-2" />
                                    </div>
                                </div>

                                {/* Availability */}
                                <div>
                                    <Label>{t("join_label_availability")}</Label>
                                    <div className="mt-2 flex flex-wrap gap-3">
                                        {availabilityOptions.map((opt) => (
                                            <button
                                                key={opt.key}
                                                type="button"
                                                onClick={() => setAvailability(opt.key)}
                                                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                                                    availability === opt.key
                                                        ? "border-primary bg-primary text-primary-foreground"
                                                        : "border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground"
                                                }`}
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                    {/* Hidden input so availability is included in form data */}
                                    <input type="hidden" name="availability" value={availability} />
                                </div>

                                {/* Motivation */}
                                <div>
                                    <Label htmlFor="join_motivation">{t("join_label_motivation")}</Label>
                                    <textarea
                                        id="join_motivation"
                                        name="motivation"
                                        required
                                        rows={5}
                                        placeholder={t("join_placeholder_motivation")}
                                        className="mt-2 flex w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="w-full rounded-full sm:w-auto"
                                >
                                    {isSubmitting ? "Submitting…" : t("join_submit")}
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* ── Perks sidebar ────────────────────────────────── */}
                    <div className="order-last lg:order-first lg:col-span-2 space-y-4">
                        <h2 className="mb-6 text-lg font-bold text-foreground">{t("join_perks_title")}</h2>
                        {perks.map((perk) => (
                            <div
                                key={perk.title}
                                className="flex gap-4 rounded-2xl border border-border bg-muted/50 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-sm"
                            >
                                <div className="h-fit flex-shrink-0 rounded-lg bg-primary/10 p-2.5">
                                    <perk.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-foreground">{perk.title}</h3>
                                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{perk.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
