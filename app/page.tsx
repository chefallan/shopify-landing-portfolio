import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Code2,
  DatabaseZap,
  Github,
  Globe2,
  LayoutDashboard,
  Mail,
  Network,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TerminalSquare,
  WalletCards
} from "lucide-react";

const focusAreas = [
  {
    icon: Code2,
    title: "Full-stack product builds",
    text: "Frontend, backend, APIs, dashboards, data flows, integrations, and production-minded application structure."
  },
  {
    icon: WalletCards,
    title: "Blockchain and Web3",
    text: "Solana tools, wallet flows, smart-contract context, blockchain data, trading utilities, and web3 product interfaces."
  },
  {
    icon: BrainCircuit,
    title: "AI and automation",
    text: "AI-assisted workflows, context engines, scraping utilities, research automation, and developer productivity systems."
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce and Shopify",
    text: "Conversion-focused landing pages, storefront sections, responsive product pages, and theme-aware frontend implementation."
  }
];

const selectedProjects = [
  {
    title: "Awesome Context Engine",
    type: "AI developer tooling",
    href: "https://github.com/chefallan/awesome-context-engine",
    text: "A curated technical project around context engineering, useful AI workflows, and practical developer knowledge systems.",
    tags: ["AI", "Developer tools", "Context engineering"]
  },
  {
    title: "OpenBean",
    type: "Open-source product showcase",
    href: "https://github.com/openbean/openbean",
    text: "Open-source product work used to demonstrate codebase reading, product thinking, frontend clarity, and technical presentation.",
    tags: ["Open source", "Product", "Frontend"]
  },
  {
    title: "CLI Solana Trading Bot",
    type: "Blockchain utility",
    href: "https://github.com/chefallan",
    text: "A fast Solana trading utility with Rust improvements, transaction-focused workflows, and practical blockchain automation.",
    tags: ["Solana", "Rust", "CLI"]
  },
  {
    title: "Shopify Landing Portfolio",
    type: "Ecommerce frontend",
    href: "https://shopify-landing-portfolio.vercel.app/",
    text: "This portfolio began as a Shopify landing-page proof and now shows broader technical range for remote contract work.",
    tags: ["Next.js", "Shopify", "UX"]
  }
];

const stack = [
  "React",
  "Next.js",
  "Vue",
  "Vite",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "HTML/CSS",
  "Solidity",
  "Rust",
  "Move",
  "Solana",
  "Ethers.js",
  "Web3.js",
  "Shopify",
  "WordPress",
  "GitHub",
  "Automation"
];

const services = [
  ["Product landing pages", "Launch pages for SaaS, ecommerce, Web3, AI tools, and service offers."],
  ["Frontend implementation", "Responsive UI builds, component cleanup, app screens, dashboards, and design-to-code support."],
  ["Technical prototypes", "Fast MVPs, proof-of-concept tools, API integrations, blockchain flows, and automation scripts."],
  ["Codebase rescue", "Debugging, refactoring, performance cleanup, implementation support, and practical engineering handoff."]
];

const metrics = [
  ["Senior", "full-stack developer"],
  ["Web2/Web3", "product experience"],
  ["Remote", "part-time or project-based"],
  ["GitHub", "github.com/chefallan"]
];

export default function Home() {
  return (
    <main className="bg-paper text-ink">
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-paper/92 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-base font-black text-ink">
            <span className="grid size-9 place-items-center rounded-lg bg-lagoon text-sm text-white">AC</span>
            Allan Catayoc
          </Link>
          <nav className="hidden items-center gap-2 md:flex">
            <Link href="#work" className="rounded-lg px-3 py-2 text-sm font-bold text-ink/70 hover:bg-white hover:text-ink">
              Work
            </Link>
            <Link href="#services" className="rounded-lg px-3 py-2 text-sm font-bold text-ink/70 hover:bg-white hover:text-ink">
              Services
            </Link>
            <Link href="https://github.com/chefallan" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-ink/70 hover:bg-white hover:text-ink">
              <Github size={17} />
              GitHub
            </Link>
            <Link href="mailto:catayoc.allanbrando@gmail.com?subject=Portfolio%20project%20inquiry" className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-black text-white">
              <Mail size={17} />
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src="/shopify/portfolio-hero.png"
          alt="Layered product interfaces for full-stack, AI, Web3, and ecommerce portfolio work"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/72 to-ink/12" />
        <div className="relative mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 lg:px-8">
          <p className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-black uppercase text-marigold backdrop-blur">
            <Sparkles size={16} />
            Senior full-stack developer for remote projects
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">
            I build practical web products across full-stack, AI, Web3, and ecommerce.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
            I help teams turn rough ideas, technical briefs, or existing codebases into usable
            interfaces, working prototypes, launch pages, automations, and blockchain-aware product
            experiences.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-ink shadow-soft"
            >
              View selected work
              <ArrowRight size={18} />
            </Link>
            <Link
              href="mailto:catayoc.allanbrando@gmail.com?subject=Remote%20project%20inquiry"
              className="inline-flex items-center gap-2 rounded-lg border border-white/35 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur"
            >
              <Mail size={18} />
              Start a project
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-3 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {metrics.map(([label, text]) => (
            <div key={label} className="rounded-lg border border-ink/10 bg-paper p-4">
              <p className="text-xl font-black text-lagoon">{label}</p>
              <p className="mt-1 text-sm font-semibold text-ink/62">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase text-clay">What I can cover</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
            Broad enough for messy product work, focused enough to ship.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article key={area.title} className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
                <Icon className="text-lagoon" size={28} />
                <h3 className="mt-4 text-xl font-black">{area.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/68">{area.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="work" className="bg-ink py-12 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase text-marigold">Selected projects</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                A compact view of AI, Web3, open-source, and frontend work.
              </h2>
            </div>
            <Link href="https://github.com/chefallan" className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/18 px-4 py-3 text-sm font-black text-white">
              <Github size={18} />
              More on GitHub
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {selectedProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group rounded-lg border border-white/12 bg-white/[0.07] p-5 transition hover:bg-white/[0.11]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase text-marigold">{project.type}</p>
                    <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
                  </div>
                  <ArrowRight className="mt-1 shrink-0 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" size={22} />
                </div>
                <p className="mt-4 text-sm leading-6 text-white/72">{project.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-lg bg-white/10 px-3 py-1 text-xs font-bold text-white/78">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase text-lagoon">Project support</p>
          <h2 className="mt-3 text-3xl font-black">Useful for part-time, contract, and project-based work.</h2>
          <p className="mt-4 text-base leading-7 text-ink/68">
            I’m comfortable joining a project where requirements are still forming, the codebase is
            already moving, or the first goal is a polished proof that helps someone make a decision.
          </p>
        </div>
        <div className="grid gap-3">
          {services.map(([title, text], index) => (
            <div key={title} className="grid gap-3 rounded-lg border border-ink/10 bg-white p-4 sm:grid-cols-[3.5rem_1fr]">
              <div className="grid size-11 place-items-center rounded-lg bg-field text-sm font-black text-ink">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-black text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-ink/68">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white py-12">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase text-clay">Technical stack</p>
              <h2 className="mt-3 text-3xl font-black">Tools I use to move from idea to usable product.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="rounded-lg border border-ink/10 bg-paper px-3 py-2 text-sm font-bold text-ink/75">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          [TerminalSquare, "Implementation", "Clean components, stable layouts, practical integrations, and code that another developer can continue."],
          [DatabaseZap, "Automation", "Scrapers, data workflows, APIs, and internal tools that reduce repeated manual work."],
          [Network, "Systems thinking", "Enough product, research, and infrastructure context to connect UI choices to real technical constraints."],
          [LayoutDashboard, "Interface polish", "Responsive hierarchy, spacing, state handling, dashboards, storefronts, and launch-ready pages."],
          [Bot, "AI workflows", "Context organization, prompt-aware tooling, AI-assisted research, and practical productivity experiments."],
          [ShieldCheck, "Reliability", "Debugging discipline, Git hygiene, reviewable changes, and careful work inside existing projects."]
        ].map(([Icon, title, text]) => {
          const TypedIcon = Icon as typeof Code2;

          return (
            <article key={String(title)} className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
              <TypedIcon className="text-clay" size={26} />
              <h3 className="mt-4 text-lg font-black">{String(title)}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/68">{String(text)}</p>
            </article>
          );
        })}
      </section>

      <section className="bg-lagoon py-12 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-black uppercase text-marigold">
              <Globe2 size={18} />
              Remote collaboration
            </p>
            <h2 className="mt-3 text-3xl font-black">Available for remote part-time and project-based work.</h2>
            <p className="mt-3 text-sm leading-6 text-white/76">
              Best fit: full-stack features, frontend polish, Shopify/ecommerce pages, AI tooling,
              Web3 interfaces, automation, and fast product prototypes.
            </p>
          </div>
          <Link
            href="mailto:catayoc.allanbrando@gmail.com?subject=Remote%20portfolio%20project"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-ink"
          >
            Contact Allan
            <Rocket size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
