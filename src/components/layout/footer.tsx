import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-black">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-2xl font-bold tracking-tight text-cyan-600 mb-4">TTT</div>
                        <p className="text-sm text-zinc-500 leading-6">
                            Empowering students to create real-world impact through innovation and community service.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Organization</h3>
                        <ul role="list" className="mt-4 space-y-4">
                            <li>
                                <Link href="/about" className="text-sm text-zinc-600 hover:text-cyan-600">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="text-sm text-zinc-600 hover:text-cyan-600">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-sm text-zinc-600 hover:text-cyan-600">
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Community</h3>
                        <ul role="list" className="mt-4 space-y-4">
                            <li>
                                <Link href="/blog" className="text-sm text-zinc-600 hover:text-cyan-600">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-zinc-600 hover:text-cyan-600">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/donate" className="text-sm text-zinc-600 hover:text-cyan-600">
                                    Donate
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Social</h3>
                        <ul role="list" className="mt-4 space-y-4">
                            <li>
                                <a href="#" className="text-sm text-zinc-600 hover:text-cyan-600">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-zinc-600 hover:text-cyan-600">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@taiwanteentrust.org" className="text-sm text-zinc-600 hover:text-cyan-600">
                                    Email Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        &copy; {new Date().getFullYear()} Taiwan Teen Trust. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
