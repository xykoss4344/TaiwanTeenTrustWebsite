"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
    const { t } = useLanguage();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setSubmitted(true);
        }, 500);
    };

    return (
        <div className="bg-background py-24 sm:py-32 min-h-screen border-t border-border/40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">{t("contact_title")}</h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        {t("contact_description")}
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-xl lg:mx-0 lg:max-w-none">
                    {submitted ? (
                        <div className="rounded-2xl bg-muted p-10 text-center border border-border shadow-sm">
                            <h3 className="text-2xl font-bold text-foreground">{t("contact_success_title")}</h3>
                            <p className="mt-4 text-muted-foreground">{t("contact_success_desc")}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                            <div>
                                <Label htmlFor="name">{t("contact_label_name")}</Label>
                                <Input type="text" id="name" required placeholder={t("contact_placeholder_name")} className="mt-2" />
                            </div>
                            <div>
                                <Label htmlFor="email">{t("contact_label_email")}</Label>
                                <Input type="email" id="email" required placeholder={t("contact_placeholder_email")} className="mt-2" />
                            </div>
                            <div>
                                <Label htmlFor="message">{t("contact_label_message")}</Label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    placeholder={t("contact_placeholder_message")}
                                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mt-2 resize-y"
                                />
                            </div>
                            <Button type="submit" className="w-full sm:w-auto mt-2">
                                {t("contact_submit")}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
