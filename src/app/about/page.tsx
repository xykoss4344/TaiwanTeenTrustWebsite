import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-zinc-50 py-24 sm:py-32">
                {/* Background decoration */}
                <div
                    className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-30"
                        style={{
                            clipPath:
                                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                        }}
                    />
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">Our Mission</h2>
                        <p className="mt-6 text-lg leading-8 text-zinc-600">
                            Taiwan Teen Trust acts as a bridge between student passion and real-world impact. We believe that age is not a barrier to making a difference.
                        </p>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
                        <div className="relative lg:order-last lg:col-span-5">
                            <figure className="border-l border-cyan-500 pl-8">
                                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-zinc-900">
                                    <p>
                                        "We started this organization because we saw a gap. Students wanted to help, but didn't know how. We provide the 'how'."
                                    </p>
                                </blockquote>
                                <figcaption className="mt-8 flex gap-x-4">
                                    <Image
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                        className="mt-1 h-10 w-10 flex-none rounded-full bg-zinc-50"
                                        width={40}
                                        height={40}
                                    />
                                    <div className="text-sm leading-6">
                                        <div className="font-semibold text-zinc-900">Sarah Chen</div>
                                        <div className="text-zinc-600">Founder, Class of &apos;24</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="max-w-xl text-base leading-7 text-zinc-700 lg:col-span-7">
                            <p>
                                Founded in 2023, Taiwan Teen Trust began as a small high school club in Taipei. It has since grown into a city-wide network of students committed to social justice, environmental sustainability, and elderly care.
                            </p>
                            <ul role="list" className="mt-8 max-w-xl space-y-8 text-zinc-600">
                                <li className="flex gap-x-3">
                                    <span className="font-semibold text-zinc-900">Student-Led.</span>
                                    Every decision, from project selection to budget usage, is made by the student board.
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="font-semibold text-zinc-900">Action-Oriented.</span>
                                    We don't just talk about change; we go out on weekends to clean beaches, visit nursing homes, and plant trees.
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="font-semibold text-zinc-900">Inclusive.</span>
                                    We welcome teens from all backgrounds and schools to join our yearly cohorts.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
