import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-14">
        {/* Playful abstract shapes/blobs background */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#06b6d4] to-[#22d3ee] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold leading-6 text-cyan-700 ring-1 ring-inset ring-cyan-700/10">
                  Annual Report 2024
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
              Empowering Teens to Shape the Future.
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Taiwan Teen Trust is a student-led organization driving social and environmental impact through playful innovation and community action.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/projects">
                <Button size="lg" className="rounded-full bg-cyan-600 text-white hover:bg-cyan-700">
                  Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="rounded-full border-zinc-200 text-zinc-900 hover:bg-zinc-50">
                  Who We Are
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-zinc-900/5 p-2 ring-1 ring-inset ring-zinc-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="https://images.unsplash.com/photo-1529390003361-38516713efc7?q=80&w=2529&auto=format&fit=crop" /* Group of teens/students */
                  alt="Taiwan Teen Trust Team"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md shadow-2xl ring-1 ring-zinc-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-cyan-600">Why We Do It</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Values that drive our mission
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-zinc-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600">
                  <Sparkles className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Youth Innovation
              </dt>
              <dd className="mt-2 text-base leading-7 text-zinc-600">
                We believe young minds have the freshest solutions. We encourage out-of-the-box thinking for age-old problems.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-zinc-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 2 2 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                Inclusive Community
              </dt>
              <dd className="mt-2 text-base leading-7 text-zinc-600">
                Everyone has a place here. We bridge gaps between schools, backgrounds, and generations.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-zinc-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                Action Over Words
              </dt>
              <dd className="mt-2 text-base leading-7 text-zinc-600">
                Planning is important, but doing is essential. We measure our success by the footprint of positive change we leave behind.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-zinc-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3.001.519M15 5.567a9.02 9.02 0 00-6 0m6 0a9.02 9.02 0 016 0m-6 3a9.02 9.02 0 00-6 0m6 0a9.02 9.02 0 016 0m-6 3a9.02 9.02 0 00-6 0m6 0a9.02 9.02 0 016 0" />
                  </svg>
                </div>
                Sustainable Growth
              </dt>
              <dd className="mt-2 text-base leading-7 text-zinc-600">
                We build projects that last. Sustainability isn't just about the environment; it's about creating systems that endure.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Latest Project Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center p-2 mb-4 bg-yellow-100 rounded-full">
            <Sparkles className="h-6 w-6 text-yellow-600" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Latest Initiative</h2>
          <p className="mt-2 text-lg leading-8 text-zinc-600">
            Our spotlight project for this year focuses on sustainable urban living.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="relative isolate overflow-hidden bg-zinc-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 rounded-3xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:items-center">
              <div className="lg:pr-8 lg:pl-10">
                <h3 className="text-2xl font-bold tracking-tight text-white mb-6">Project Green Roof</h3>
                <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                  We are transforming unused rooftops in Taipei into vibrant community gardens. This project not only reduces urban heat islands but also provides fresh produce for local food banks.
                </p>
                <Link href="/projects/green-roof">
                  <Button className="bg-white text-zinc-900 hover:bg-zinc-100 rounded-full">
                    Read Full Story
                  </Button>
                </Link>
              </div>
              <div className="lg:pr-10 relative">
                <Image
                  src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e10?q=80&w=2574&auto=format&fit=crop"
                  alt="Green roof project"
                  className="rounded-xl shadow-xl ring-1 ring-white/10 w-full object-cover"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Partners / Schools Ticker */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
        <p className="text-center text-sm font-semibold leading-8 text-zinc-500">
          Trusted by students from top schools across Taiwan
        </p>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 text-center font-bold text-zinc-400 text-xl">TAS</div>
          <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 text-center font-bold text-zinc-400 text-xl">TES</div>
          <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 text-center font-bold text-zinc-400 text-xl">Kang Chiao</div>
          <div className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 text-center font-bold text-zinc-400 text-xl">Fuhsing</div>
          <div className="col-span-2 max-h-12 w-full object-contain col-start-2 sm:col-start-auto lg:col-span-1 text-center font-bold text-zinc-400 text-xl">CKHS</div>
        </div>
      </div>
    </div>
  );
}
