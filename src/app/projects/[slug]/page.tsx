"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, MousePointerClick, Activity, Play, Images } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { useParams } from "next/navigation";

// Internal Component to mock the interactive nature of a demo
function InteractiveDemoSimulator() {
    const [isActive, setIsActive] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleInteract = () => {
        setIsActive(true);
        setClickCount(prev => prev + 1);
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

type ProjectData = {
    title: string;
    category: string;
    year: string;
    description: string;
    gallery: any[];
};

export default function DynamicProjectPage() {
    const params = useParams();
    const slug = params.slug as string;
    
    const [project, setProject] = useState<ProjectData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;
        
        const query = `*[_type == "project" && slug.current == $slug][0] {
            title,
            category,
            year,
            description,
            gallery
        }`;
        
        client.fetch(query, { slug }).then((data) => {
            setProject(data);
            setIsLoading(false);
        }).catch(() => setIsLoading(false));
    }, [slug]);

    if (isLoading) {
        return (
            <div className="bg-background min-h-screen flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="w-12 h-12 bg-muted rounded-full mb-4"></div>
                    <div className="h-4 w-32 bg-muted rounded"></div>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="bg-background min-h-screen flex flex-col items-center justify-center py-24">
                <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
                <p className="text-muted-foreground mb-8">The project you are looking for does not exist.</p>
                <Link href="/projects">
                    <Button variant="outline">Back to Projects</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen">
            {/* Project Hero Header */}
            <div className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-border/40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <Link href="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Projects
                        </Link>
                        
                        <div className="flex items-center gap-x-4 text-sm mb-4">
                            <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                                {project.category || 'Category'}
                            </span>
                            <Link 
                                href={`/projects/${slug}/gallery`}
                                className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                                <Images className="h-3.5 w-3.5" />
                                Venture Gallery
                            </Link>
                        </div>
                        
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl mb-6">
                            {project.title}
                        </h1>
                        <p className="text-lg leading-8 text-muted-foreground">
                            {project.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit possible."}
                        </p>
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
                            <div className="prose prose-lg dark:prose-invert text-muted-foreground text-base leading-loose space-y-6 whitespace-pre-wrap">
                                {project.description ? project.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit possible. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor."}
                            </div>
                        </div>

                        {/* Project Album Gallery Section */}
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">Project Album</h3>
                            {project.gallery && project.gallery.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.gallery.map((image, index) => (
                                        <div key={index} className="aspect-[4/3] relative rounded-xl overflow-hidden ring-1 ring-border shadow-sm">
                                            <Image 
                                                src={urlForImage(image).url()} 
                                                alt={`${project.title} gallery image ${index + 1}`}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="aspect-[4/3] bg-muted/30 rounded-xl ring-1 ring-border flex flex-col items-center justify-center text-muted-foreground/50">
                                        <div className="w-12 h-12 rounded-full border border-dashed border-muted-foreground/30 flex items-center justify-center mb-2">
                                            <span className="text-xs">Image</span>
                                        </div>
                                        <span className="text-xs">Album Pending</span>
                                    </div>
                                    <div className="aspect-[4/3] bg-muted/30 rounded-xl ring-1 ring-border flex flex-col items-center justify-center text-muted-foreground/50">
                                        <div className="w-12 h-12 rounded-full border border-dashed border-muted-foreground/30 flex items-center justify-center mb-2">
                                            <span className="text-xs">Image</span>
                                        </div>
                                        <span className="text-xs">Album Pending</span>
                                    </div>
                                    <div className="aspect-[4/3] bg-muted/30 rounded-xl ring-1 ring-border flex flex-col items-center justify-center text-muted-foreground/50">
                                        <div className="w-12 h-12 rounded-full border border-dashed border-muted-foreground/30 flex items-center justify-center mb-2">
                                            <span className="text-xs">Image</span>
                                        </div>
                                        <span className="text-xs">Album Pending</span>
                                    </div>
                                    <div className="aspect-[4/3] bg-muted/30 rounded-xl ring-1 ring-border flex flex-col items-center justify-center text-muted-foreground/50">
                                        <div className="w-12 h-12 rounded-full border border-dashed border-muted-foreground/30 flex items-center justify-center mb-2">
                                            <span className="text-xs">Image</span>
                                        </div>
                                        <span className="text-xs">Album Pending</span>
                                    </div>
                                </div>
                            )}
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
                                            <dd className="text-muted-foreground mt-1">{project.year || "2026"} possible</dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                        <div>
                                            <dt className="font-medium text-foreground">Location</dt>
                                            <dd className="text-muted-foreground mt-1">Taiwan possible</dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>

                            <div>
                                <h3 className="font-bold text-foreground mb-4">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Lorem', 'Ipsum', 'Dolor'].map((tech) => (
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
