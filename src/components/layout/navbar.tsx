import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-cyan-600">
                            TTT
                        </Link>
                        <div className="hidden md:block ml-10">
                            <div className="flex items-center space-x-8">
                                <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-cyan-600 transition-colors">
                                    About
                                </Link>
                                <Link href="/team" className="text-sm font-medium text-zinc-600 hover:text-cyan-600 transition-colors">
                                    Team
                                </Link>
                                <Link href="/projects" className="text-sm font-medium text-zinc-600 hover:text-cyan-600 transition-colors">
                                    Projects
                                </Link>
                                <Link href="/blog" className="text-sm font-medium text-zinc-600 hover:text-cyan-600 transition-colors">
                                    Blog
                                </Link>
                                <Link href="/contact" className="text-sm font-medium text-zinc-600 hover:text-cyan-600 transition-colors">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/contact" className="hidden sm:block">
                            <Button className="rounded-full bg-cyan-600 hover:bg-cyan-700 text-white">Join Us</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
