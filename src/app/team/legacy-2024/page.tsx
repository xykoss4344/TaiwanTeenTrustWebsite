"use client";

import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

const sampleMembers = [1, 2, 3, 4];

export default function LegacyTeam2024Page() {
    return (
        <div className="bg-background py-24 sm:py-32 min-h-screen border-t border-border/40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Legacy Team Members (2024-2025)</h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit possible. Sed do eiusmod tempor incididunt ut labore.
                    </p>
                </div>

                <motion.ul
                    role="list"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
                >
                    {sampleMembers.map((memberId) => (
                        <motion.li key={memberId} variants={item}>
                            <div className="group relative bg-card rounded-2xl p-4 border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-muted ring-1 ring-inset ring-border flex items-center justify-center text-muted-foreground/50">
                                    [Image Placehoder]
                                </div>
                                <div className="mt-6 px-1">
                                    <h3 className="text-lg font-bold leading-8 tracking-tight text-foreground bg-muted h-6 w-3/4 animate-pulse rounded"></h3>
                                    <p className="mt-2 text-sm font-medium leading-7 text-primary bg-muted h-4 w-1/2 animate-pulse rounded"></p>
                                    <div className="mt-4 space-y-2">
                                        <div className="h-4 bg-muted animate-pulse rounded w-full"></div>
                                        <div className="h-4 bg-muted animate-pulse rounded w-5/6"></div>
                                        <div className="h-4 bg-muted animate-pulse rounded w-4/6"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
}
