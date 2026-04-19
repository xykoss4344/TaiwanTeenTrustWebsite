"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language, TranslationKeys } from "@/lib/translations";

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: keyof TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("zh");

    useEffect(() => {
        const saved = localStorage.getItem("ttt-language") as Language | null;
        if (saved === "en" || saved === "zh") {
            setLanguage(saved);
        }
    }, []);

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const next = prev === "en" ? "zh" : "en";
            localStorage.setItem("ttt-language", next);
            return next;
        });
    };

    const t = (key: keyof TranslationKeys): string => {
        return translations[language][key] ?? translations["en"][key] ?? key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageContextType {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
