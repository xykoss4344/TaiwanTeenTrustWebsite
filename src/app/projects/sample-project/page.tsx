"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, ExternalLink, Calendar, Users, MapPin, MousePointerClick, Activity } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Internal Component to mock the interactive nature of a demo
function InteractiveDemoSimulator() {
    const [isActive, setIsActive] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleInteract = () => {
        setIsActive(true);
        setClickCount(prev => prev + 1);
        
        // Auto reset after 2 seconds to show it's reactive
        setTimeout(() => setIsActive(false), 2000);
    };

    return (
        <div 
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-colors duration-500"
            onClick={handleInteract}
        >
            <AnimatePresence mode="wait">
                {!isActive ? (
                    <motion.div 
                        key="idle"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="text-center group-hover:scale-105 transition-transform duration-500"
                    >
                        <div className="relative inline-block mb-6">
                            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                            <Play className="h-20 w-20 text-primary drop-shadow-lg relative z-10 mx-auto" fill="currentColor" />
                        </div>
                        <p className="text-2xl font-bold text-white tracking-tight">Click to Interact with Demo</p>
                        <p className="text-sm text-slate-400 mt-2 flex items-center justify-center gap-2">
                            <MousePointerClick className="w-4 h-4" /> Try clicking anywhere
                        </p>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="active"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center"
                    >
                        <Activity className="h-24 w-24 text-green-400 mx-auto mb-4 animate-bounce" />
                        <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                            Demo Reacting!
                        </h3>
                        <p className="text-slate-300 mt-2 font-mono bg-white/10 px-4 py-1 rounded-full border border-white/20">
                            Interactions registered: {clickCount}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}


export default function SampleProjectDemoPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Project Hero Header */}
            <div className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-border/40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Lorem ipsum dolor
                        </Link>
                        
                        <div className="flex items-center gap-x-4 text-sm mb-4">
                            <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                                Lorem Ipsum
                            </span>
                            <span className="text-muted-foreground">Sed do eiusmod</span>
                        </div>
                        
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl mb-6">
                            Lorem Ipsum Dolor Sit Amet Consectetur
                        </h1>
                        <p className="text-lg leading-8 text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                        
                        <div className="mt-10 flex items-center gap-x-6">
                            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                                <Play className="mr-2 h-4 w-4" /> Lorem Ipsum
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full">
                                <ExternalLink className="mr-2 h-4 w-4" /> Dolor Sit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Details Content */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Interactive Demo Component */}
                        <div className="w-full aspect-video bg-slate-900 rounded-2xl ring-1 ring-border shadow-lg flex flex-col relative overflow-hidden group">
                            {/* Toolbar/Header for Demo */}
                            <div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-black/40 backdrop-blur-sm z-10">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <span className="text-xs font-mono text-slate-400">interactive-demo.exe</span>
                                <div className="flex gap-3">
                                    <div className="w-4 h-4 rounded bg-white/10"></div>
                                </div>
                            </div>
                            
                            {/* Main Interactive Area */}
                            <div className="flex-1 relative flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
                                <InteractiveDemoSimulator />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">Project Overview</h2>
                            <div className="prose prose-lg dark:prose-invert text-muted-foreground text-base leading-loose space-y-6">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. 
                                </p>
                                <p>
                                    Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.
                                </p>
                                <p>
                                    Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu.
                                </p>
                            </div>
                        </div>
                        
                        {/* Gallery Placeholders */}
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">Gallery Demo</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-[4/3] bg-muted rounded-xl ring-1 ring-border flex items-center justify-center text-muted-foreground/50">
                                    [Image 1]
                                </div>
                                <div className="aspect-[4/3] bg-muted rounded-xl ring-1 ring-border flex items-center justify-center text-muted-foreground/50">
                                    [Image 2]
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Information */}
                    <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-border/40 pt-10 lg:pt-0 lg:pl-10">
                        <div className="sticky top-24 space-y-10">
                            <div>
                                <h3 className="font-bold text-foreground mb-4">Project Details</h3>
                                <dl className="space-y-6 text-sm">
                                    <div className="flex items-start gap-4">
                                        <Calendar className="h-5 w-5 text-primary mt-0.5" />
                                        <div>
                                            <dt className="font-medium text-foreground">Timeline</dt>
                                            <dd className="text-muted-foreground mt-1">Lorem ipsum dolor - Sit amet</dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Users className="h-5 w-5 text-primary mt-0.5" />
                                        <div>
                                            <dt className="font-medium text-foreground">Team Size</dt>
                                            <dd className="text-muted-foreground mt-1">12 Lorem ipsum</dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                        <div>
                                            <dt className="font-medium text-foreground">Location</dt>
                                            <dd className="text-muted-foreground mt-1">Consectetur adipiscing elit</dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>

                            <div>
                                <h3 className="font-bold text-foreground mb-4">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'].map((tech) => (
                                        <span key={tech} className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
