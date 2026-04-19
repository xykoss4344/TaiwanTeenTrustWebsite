"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FoodmapDemo() {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen pt-4 pb-12 bg-background flex flex-col">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    {language === "zh" ? "浪浪援助地圖 (Stray Aid Map)" : "Stray Aid Map Interactive Demo"}
                </h1>
                <p className="mt-2 flex items-center text-sm text-muted-foreground gap-2">
                   {language === "zh" 
                        ? "這是我們用於推動環境永續的食物共享專案的即時動態展示。" 
                        : "This is a live interactive demo of our food-sharing initiative."}
                </p>
            </div>
            
            <div className="w-full h-[calc(100vh-140px)]">
                <iframe 
                    src="http://127.0.0.1:5248" 
                    title="Foodmap App Demo" 
                    className="w-full h-full border-none rounded-none sm:rounded-2xl shadow-xl"
                />
            </div>
        </div>
    );
}
