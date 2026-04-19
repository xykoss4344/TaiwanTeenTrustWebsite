"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Calendar } from "lucide-react";

// ─────────────────────────────────────────────────────────────────
// TODO: Replace this URL with your Google Calendar embed link.
//
// Steps:
//  1. Open Google Calendar → Settings (⚙) → click your calendar name
//  2. Scroll to "Integrate calendar" → copy the "Embed code" <iframe src="...">
//  3. Paste only the URL string below (remove the rest of the <iframe> tag)
//
// Example:
//   "https://calendar.google.com/calendar/embed?src=abc123%40group.calendar.google.com&ctz=Asia%2FTaipei"
// ─────────────────────────────────────────────────────────────────
const GOOGLE_CALENDAR_EMBED_URL = "";

export default function EventsPage() {
    const { t } = useLanguage();
    const hasCalendar = GOOGLE_CALENDAR_EMBED_URL.trim().length > 0;

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="relative isolate overflow-hidden border-b border-border/40">
                <div
                    className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10"
                    aria-hidden="true"
                />
                <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                            {t("events_title")}
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-muted-foreground">
                            {t("events_description")}
                        </p>
                    </div>
                </div>
            </div>

            {/* Calendar embed */}
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    {t("events_calendar_label")}
                </h2>

                {hasCalendar ? (
                    <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                        <iframe
                            src={GOOGLE_CALENDAR_EMBED_URL}
                            title={t("events_calendar_label")}
                            className="w-full"
                            style={{ height: "clamp(480px, 70vh, 800px)", border: 0 }}
                            frameBorder="0"
                            scrolling="no"
                        />
                    </div>
                ) : (
                    /* Placeholder shown until the URL is configured */
                    <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-dashed border-border bg-muted/30 px-8 py-20 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            <Calendar className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-foreground">Calendar coming soon</p>
                            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                                {t("events_calendar_placeholder")}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
