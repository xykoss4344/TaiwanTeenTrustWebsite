"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setSubmitted(true);
        }, 500);
    };

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Get In Touch</h2>
                    <p className="mt-2 text-lg leading-8 text-zinc-600">
                        Interested in joining, partnering, or just saying hi? We'd love to hear from you.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-xl lg:mx-0 lg:max-w-none">
                    {submitted ? (
                        <div className="rounded-2xl bg-cyan-50 p-10 text-center">
                            <h3 className="text-2xl font-bold text-cyan-800">Thank you!</h3>
                            <p className="mt-4 text-cyan-700">We've received your message and will get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" required placeholder="Your name" className="mt-2" />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" required placeholder="you@example.com" className="mt-2" />
                            </div>
                            <div>
                                <Label htmlFor="message">Message</Label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    placeholder="How can we help?"
                                    className="flex w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 mt-2"
                                />
                            </div>
                            <Button type="submit" className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white rounded-full">
                                Send Message
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
