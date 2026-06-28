import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Code2,
  Github,
  LayoutDashboard,
  LineChart,
  Mail,
  Smartphone,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "Storefront design",
    text: "Responsive Shopify home pages, collection pages, landing pages, and product-detail flows shaped for clear buying decisions."
  },
  {
    icon: LineChart,
    title: "Conversion UX",
    text: "Above-the-fold hierarchy, offer sections, trust blocks, bundles, reviews, and mobile checkout paths designed for fewer drop-offs."
  },
  {
    icon: Code2,
    title: "Frontend implementation",
    text: "Clean HTML/CSS, React, Next.js, Vue, Shopify theme constraints, app integrations, and handoff-friendly component structure."
  }
];

const demos = [
  {
    brand: "Wellness launch",
    title: "Supplement landing page built around trust and repeat purchase.",
    details: ["Hero offer and subscription CTA", "Ingredient proof section", "Review and guarantee blocks"],
    accent: "bg-emerald-600"
  },
  {
    brand: "Apparel drop",
    title: "Mobile-first collection launch for limited inventory products.",
    details: ["Drop timer and size guide", "Editorial product grid", "Sticky add-to-cart patterns"],
    accent: "bg-clay"
  },
  {
    brand: "Coffee bundle",
    title: "Premium bundle page with stronger visual storytelling.",
    details: ["Bundle comparison", "Flavor finder module", "Wholesale inquiry path"],
    accent: "bg-amber-600"
  }
];

const proof = [
  "Shopify, WordPress, React, Next.js, Vite, Vue.js",
  "Responsive UX/UI, landing pages, design systems, Figma handoff",
  "Web3 and AI product background for complex technical storefronts",
  "GitHub: github.com/chefallan"
];

export default function Home() {
  return (
    <main className="bg-[#fbfaf7] text-ink">
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-[#fffaf2]/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-black text-ink">
            <span className="grid size-9 place-items-center rounded-lg bg-clay text-sm text-white">AC</span>
            Allan Shopify Portfolio
          </Link>
          <nav className="hidden items-center gap-3 md:flex">
            <Link href="#work" className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ink/75 hover:bg-field hover:text-ink">
              <LayoutDashboard size={17} />
              Portfolio
            </Link>
            <Link href="https://github.com/chefallan" className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ink/75 hover:bg-field hover:text-ink">
              <Github size={17} />
              GitHub
            </Link>
            <Link href="mailto:catayoc.allanbrando@gmail.com?subject=Shopify%20Designer%20Role" className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ink/75 hover:bg-field hover:text-ink">
              <Mail size={17} />
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative min-h-[86vh] overflow-hidden">
        <Image
          src="/shopify/ecommerce-hero.png"
          alt="Premium ecommerce storefront mockups with product packaging and responsive Shopify screens"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/15" />
        <div className="relative mx-auto flex min-h-[86vh] w-full max-w-6xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase text-marigold">
            Shopify landing pages and ecommerce frontend
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">
            Conversion-focused Shopify pages built by a senior full-stack developer.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
            I design and implement storefront sections that feel polished, load fast, and make
            product value clear on mobile and desktop.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="mailto:catayoc.allanbrando@gmail.com?subject=Shopify%20landing%20page%20project"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-ink shadow-soft"
            >
              Start a project
              <ArrowRight size={18} />
            </Link>
            <Link
              href="https://github.com/chefallan"
              className="inline-flex items-center gap-2 rounded-lg border border-white/35 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur"
            >
              <Github size={18} />
              GitHub profile
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article key={service.title} className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
              <Icon className="text-lagoon" size={26} />
              <h2 className="mt-4 text-xl font-black">{service.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/68">{service.text}</p>
            </article>
          );
        })}
      </section>

      <section id="work" className="bg-white py-12">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase text-clay">Demo landing page systems</p>
            <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
              Three Shopify-ready directions I can adapt to real stores.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {demos.map((demo) => (
              <article key={demo.brand} className="rounded-lg border border-ink/10 bg-[#fbfaf7] p-5">
                <div className={`h-2 w-16 rounded-full ${demo.accent}`} />
                <p className="mt-5 text-sm font-black uppercase text-ink/55">{demo.brand}</p>
                <h3 className="mt-2 text-xl font-black leading-snug">{demo.title}</h3>
                <ul className="mt-5 space-y-3">
                  {demo.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm leading-6 text-ink/70">
                      <BadgeCheck className="mt-0.5 shrink-0 text-moss" size={18} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase text-lagoon">How I work</p>
          <h2 className="mt-3 text-3xl font-black">From Figma or rough brief to launchable page.</h2>
          <p className="mt-4 text-base leading-7 text-ink/68">
            My background spans frontend development, Web3 products, automation, and technical
            research. That makes me useful when a Shopify project needs more than surface styling.
          </p>
        </div>
        <div className="grid gap-3">
          {[
            ["Audit", "Map the offer, audience, product objections, mobile hierarchy, and current theme constraints."],
            ["Design", "Shape section flow, wireframe high-converting blocks, and prepare responsive implementation details."],
            ["Build", "Implement clean frontend components, integrate required apps, and test on mobile-first breakpoints."],
            ["Polish", "Review spacing, copy hierarchy, page speed risks, visual consistency, and client handoff notes."]
          ].map(([title, text]) => (
            <div key={title} className="grid gap-2 rounded-lg border border-ink/10 bg-white p-4 sm:grid-cols-[7rem_1fr]">
              <p className="font-black text-ink">{title}</p>
              <p className="text-sm leading-6 text-ink/68">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-ink py-12 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <Sparkles className="text-marigold" size={28} />
            <h2 className="mt-4 text-3xl font-black">Relevant proof for Shopify agencies.</h2>
            <p className="mt-4 text-sm leading-6 text-white/72">
              I can help with storefront design support, custom section implementation, ecommerce
              UX cleanup, product launch pages, and frontend fixes inside existing codebases.
            </p>
          </div>
          <div className="grid gap-3">
            {proof.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-white/12 bg-white/[0.07] p-3">
                <Boxes className="mt-0.5 shrink-0 text-marigold" size={18} />
                <p className="text-sm leading-6 text-white/82">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="flex items-center gap-2 text-sm font-black uppercase text-clay">
            <Smartphone size={18} />
            Remote, part-time, contract
          </p>
          <h2 className="mt-2 text-3xl font-black">Available for Shopify landing page work.</h2>
        </div>
        <Link
          href="mailto:catayoc.allanbrando@gmail.com?subject=Shopify%20Designer%20Role"
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-black text-white"
        >
          Contact Allan
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
