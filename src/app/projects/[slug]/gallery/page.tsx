"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Images } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

type ProjectGallery = {
    title: string;
    category: string;
    year: string;
    description: string;
    gallery: any[];
    image: any;
};

function GalleryGrid({ images, title }: { images: any[]; title: string }) {
    const [lightbox, setLightbox] = useState<number | null>(null);

    return (
        <>
            {/* Masonry-style grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl ring-1 ring-border shadow-sm hover:shadow-lg transition-all duration-300"
                        onClick={() => setLightbox(index)}
                    >
                        <Image
                            src={urlForImage(image).width(800).url()}
                            alt={`${title} — photo ${index + 1}`}
                            width={800}
                            height={600}
                            className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <Images className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-2xl font-bold z-10 hover:text-primary"
                        onClick={() => setLightbox(null)}
                    >
                        ✕
                    </button>
                    {/* Prev / Next */}
                    {lightbox > 0 && (
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-primary z-10"
                            onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
                        >
                            ‹
                        </button>
                    )}
                    {lightbox < images.length - 1 && (
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-primary z-10"
                            onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
                        >
                            ›
                        </button>
                    )}
                    <div className="relative max-h-[85vh] max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={urlForImage(images[lightbox]).width(1400).url()}
                            alt={`${title} — photo ${lightbox + 1}`}
                            width={1400}
                            height={900}
                            className="w-full h-full object-contain rounded-xl"
                        />
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/60 text-xs">
                            {lightbox + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default function ProjectGalleryPage() {
    const params = useParams();
    const slug = params.slug as string;
    const { language } = useLanguage();

    const [project, setProject] = useState<ProjectGallery | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;
        const query = `*[_type == "project" && slug.current == $slug][0] {
            title,
            category,
            year,
            description,
            gallery,
            image
        }`;
        client.fetch(query, { slug }).then((data) => {
            setProject(data);
            setIsLoading(false);
        }).catch(() => setIsLoading(false));
    }, [slug]);

    const heading = language === "zh" ? "計畫相片集" : "Venture Gallery";
    const backToProject = language === "zh" ? "返回計畫頁面" : "Back to Project";
    const backToProjects = language === "zh" ? "返回計畫列表" : "Back to Projects";
    const noPhotos = language === "zh" ? "尚無相片" : "No photos yet";
    const noPhotosDesc = language === "zh" ? "相片集尚在建置中，敬請期待。" : "The gallery for this project is being assembled. Check back soon.";
    const notFound = language === "zh" ? "找不到此計畫" : "Project Not Found";
    const notFoundDesc = language === "zh" ? "您查看的計畫不存在。" : "The project you are looking for does not exist.";
    const photoCount = (n: number) => language === "zh" ? `共 ${n} 張相片` : `${n} photos`;

    if (isLoading) {
        return (
            <div className="bg-background min-h-screen flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-muted rounded-full" />
                    <div className="h-4 w-32 bg-muted rounded" />
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="bg-background min-h-screen flex flex-col items-center justify-center py-24 gap-4">
                <h1 className="text-3xl font-bold text-foreground">{notFound}</h1>
                <p className="text-muted-foreground">{notFoundDesc}</p>
                <Link href="/projects"><Button variant="outline">{backToProjects}</Button></Link>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen">
            {/* Header */}
            <div className="border-b border-border/40">
                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                    <Link
                        href={`/projects/${slug}`}
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {backToProject}
                    </Link>
                    <div className="flex flex-wrap items-end gap-4 justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                    {project.category}
                                </span>
                                <span className="text-xs text-muted-foreground">{project.year}</span>
                            </div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                                {project.title}
                            </h1>
                            <p className="mt-1 text-sm text-muted-foreground">{heading}</p>
                        </div>
                        {project.gallery && (
                            <span className="text-sm text-muted-foreground">
                                {photoCount(project.gallery.length)}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Gallery content */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                {project.gallery && project.gallery.length > 0 ? (
                    <GalleryGrid images={project.gallery} title={project.title} />
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 text-center">
                        <Images className="h-16 w-16 text-muted-foreground/30 mb-4" />
                        <h2 className="text-xl font-bold text-foreground">{noPhotos}</h2>
                        <p className="text-muted-foreground mt-2 max-w-sm">{noPhotosDesc}</p>
                        <Link href={`/projects/${slug}`} className="mt-6">
                            <Button variant="outline" className="rounded-full">{backToProject}</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
