"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Define the shape of the data
type TeamMember = {
    _id: string;
    name: string;
    role: string;
    bio: string;
    image: SanityImageSource;
};

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

export default function TeamPage() {
    const [team, setTeam] = useState<TeamMember[]>([]);

    useEffect(() => {
        // Fetch data from Sanity
        const query = `*[_type == "member"]`;
        client.fetch(query).then((data) => {
            setTeam(data);
        });
    }, []);

    // Fallback if no content in Sanity yet
    if (team.length === 0) {
        return (
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center text-zinc-600">
                    <p>Loading team members from Sanity CMS...</p>
                    <p className="text-sm mt-2">If you see this for too long, make sure you have published content in the Studio.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Meet the Board</h2>
                    <p className="mt-4 text-lg leading-8 text-zinc-600">
                        The dedicated students working behind the scenes to make it all happen.
                    </p>
                </div>
                <motion.ul
                    role="list"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
                >
                    {team.map((person) => (
                        <motion.li key={person._id} variants={item}>
                            <div className="group relative">
                                <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-zinc-100">
                                    {person.image && (
                                        <Image
                                            src={urlForImage(person.image).url()}
                                            alt={person.name}
                                            width={400}
                                            height={500}
                                            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                    )}
                                </div>
                                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-zinc-900">{person.name}</h3>
                                <p className="text-base leading-7 text-cyan-600">{person.role}</p>
                                <p className="mt-2 text-sm leading-6 text-zinc-600">{person.bio}</p>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
}
