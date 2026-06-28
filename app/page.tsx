import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Braces,
  BrainCircuit,
  Code2,
  DatabaseZap,
  Github,
  Layers3,
  Mail,
  Network,
  RadioTower,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  TerminalSquare,
  WalletCards,
  Workflow
} from "lucide-react";

const operatingModes = [
  ["01", "Product UI", "Interfaces, dashboards, landing pages, ecommerce flows, and frontend polish."],
  ["02", "Web3 systems", "Solana tools, wallet-aware UX, blockchain data, trading utilities, and contract context."],
  ["03", "AI tooling", "Context engines, automation, research helpers, scraping flows, and developer productivity."],
  ["04", "Codebase support", "Debugging, refactoring, implementation help, reviews, and handoff-friendly changes."]
];

const caseFiles = [
  {
    icon: BrainCircuit,
    title: "Awesome Context Engine",
    label: "AI tooling",
    href: "https://github.com/chefallan/awesome-context-engine",
    signal: "Turns scattered engineering context into a reusable resource for AI-assisted development.",
    role: "Curation, technical structure, developer-experience thinking",
    stack: ["AI workflows", "Docs", "Developer tools"]
  },
  {
    icon: Layers3,
    title: "OpenBean",
    label: "Open-source product",
    href: "https://github.com/openbean/openbean",
    signal: "Shows how I read product codebases, identify useful presentation angles, and connect implementation to UX.",
    role: "Codebase understanding, product framing, frontend judgment",
    stack: ["Open source", "Product UI", "Frontend"]
  },
  {
    icon: WalletCards,
    title: "CLI Solana Trading Bot",
    label: "Blockchain utility",
    href: "https://github.com/chefallan",
    signal: "Fast command-line workflow for Solana trading tasks, with Rust-focused performance improvements.",
    role: "Blockchain tooling, transaction flow thinking, implementation",
    stack: ["Solana", "Rust", "CLI"]
  },
  {
    icon: ShoppingBag,
    title: "Commerce Launch Surface",
    label: "Shopify and frontend",
    href: "https://shopify-landing-portfolio.vercel.app/",
    signal: "A live portfolio surface for conversion-focused pages, store sections, and responsive launch work.",
    role: "UX hierarchy, Next.js build, responsive presentation",
    stack: ["Next.js", "Shopify", "UX"]
  }
];

const capabilities = [
  {
    icon: Code2,
    title: "Build",
    items: ["React and Next.js interfaces", "API-connected product screens", "Responsive dashboards", "Clean component structure"]
  },
  {
    icon: Workflow,
    title: "Connect",
    items: ["Wallet and payment flows", "Third-party integrations", "Automation scripts", "Scraping and data tools"]
  },
  {
    icon: Braces,
    title: "Shape",
    items: ["Landing-page strategy", "Frontend QA", "Design-to-code handoff", "Existing codebase cleanup"]
  },
  {
    icon: ShieldCheck,
    title: "Stabilize",
    items: ["Bug investigation", "Practical refactors", "Performance-aware UI", "Reviewable Git changes"]
  }
];

const stackRows = [
  ["Frontend", "React", "Next.js", "Vue", "Vite", "TypeScript", "Tailwind"],
  ["Web3", "Solana", "Rust", "Solidity", "Move", "Ethers.js", "Web3.js"],
  ["Product ops", "Shopify", "WordPress", "GitHub", "Automation", "Scraping", "APIs"]
];

const availability = [
  "Remote",
  "Part-time",
  "Project-based",
  "Frontend polish",
  "Full-stack features",
  "Web3 prototypes",
  "AI tooling",
  "Shopify pages"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg border border-ink bg-ink text-sm font-black text-white shadow-[4px_4px_0_#e7a83b] transition group-hover:-translate-y-0.5">
              AC
            </span>
            <span>
              <span className="block text-sm font-black leading-none">Allan Catayoc</span>
              <span className="mt-1 block text-xs font-bold uppercase text-ink/50">builder / full-stack / web3</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            <Link href="#case-files" className="rounded-lg px-3 py-2 text-sm font-bold text-ink/68 hover:bg-white hover:text-ink">
              Case files
            </Link>
            <Link href="#capabilities" className="rounded-lg px-3 py-2 text-sm font-bold text-ink/68 hover:bg-white hover:text-ink">
              Capabilities
            </Link>
            <Link href="https://github.com/chefallan" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-ink/68 hover:bg-white hover:text-ink">
              <Github size={17} />
              GitHub
            </Link>
            <Link href="mailto:catayoc.allanbrando@gmail.com?subject=Remote%20portfolio%20project" className="inline-flex items-center gap-2 rounded-lg bg-clay px-4 py-2 text-sm font-black text-white shadow-[3px_3px_0_#17201d]">
              <Mail size={17} />
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative min-h-[88vh] overflow-hidden border-b border-ink/10">
        <Image
          src="/shopify/portfolio-hero.png"
          alt="Layered product interfaces for full-stack, AI, Web3, and ecommerce portfolio work"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#17201d_0%,rgba(23,32,29,0.9)_35%,rgba(23,32,29,0.45)_68%,rgba(23,32,29,0.08)_100%)]" />
        <div className="relative mx-auto grid min-h-[88vh] w-full max-w-7xl content-end gap-8 px-4 pb-10 pt-24 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,0.55fr)] lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-normal text-marigold backdrop-blur">
              <RadioTower size={16} />
              Available for remote product work
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[1.02] text-white sm:text-6xl">
              Senior builder for the strange middle between idea, interface, and working code.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              I help teams ship practical web products: full-stack features, Web3 flows, AI tooling,
              automation, ecommerce surfaces, and the UI polish that makes technical work feel usable.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#case-files"
                className="inline-flex items-center gap-2 rounded-lg bg-marigold px-5 py-3 text-sm font-black text-ink shadow-[5px_5px_0_rgba(255,255,255,0.22)] transition hover:-translate-y-0.5"
              >
                Open case files
                <ArrowRight size={18} />
              </Link>
              <Link
                href="mailto:catayoc.allanbrando@gmail.com?subject=Remote%20project%20inquiry"
                className="inline-flex items-center gap-2 rounded-lg border border-white/35 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white/16"
              >
                <Mail size={18} />
                Start a project
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-white/18 bg-ink/74 p-4 text-white shadow-soft backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/12 pb-3">
              <p className="text-xs font-black uppercase text-white/54">current signal</p>
              <span className="rounded bg-moss px-2 py-1 text-xs font-black text-white">online</span>
            </div>
            <div className="mt-4 grid gap-3">
              {[
                ["Role", "Senior full-stack developer"],
                ["Focus", "AI, Web3, ecommerce, automation"],
                ["Mode", "Remote / part-time / project"],
                ["GitHub", "github.com/chefallan"]
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[5rem_1fr] gap-3 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                  <span className="text-xs font-black uppercase text-marigold">{label}</span>
                  <span className="text-sm font-semibold leading-5 text-white/86">{value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-white">
        <div className="mx-auto grid w-full max-w-7xl px-4 py-3 sm:px-6 lg:grid-cols-4 lg:px-8">
          {operatingModes.map(([number, title, text]) => (
            <div key={number} className="border-ink/10 py-5 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0">
              <p className="text-xs font-black text-clay">{number}</p>
              <h2 className="mt-2 text-lg font-black">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/62">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="case-files" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <p className="inline-flex items-center gap-2 rounded-lg bg-field px-3 py-2 text-xs font-black uppercase text-clay">
              <TerminalSquare size={16} />
              Case files
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight sm:text-5xl">
              Proof without pretending every project is the same shape.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-ink/66">
              The point is range: some work is product-facing, some is infrastructure-adjacent, and
              some is developer tooling. I like the handoff zone where those overlap.
            </p>
          </div>

          <div className="grid gap-4">
            {caseFiles.map((project, index) => {
              const Icon = project.icon;

              return (
                <Link
                  key={project.title}
                  href={project.href}
                  className="group grid gap-5 rounded-lg border border-ink/12 bg-white p-5 shadow-[6px_6px_0_#f7f2ea] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#e7a83b] md:grid-cols-[4.5rem_1fr]"
                >
                  <div className="flex items-center justify-between md:block">
                    <div className="grid size-14 place-items-center rounded-lg bg-ink text-white">
                      <Icon size={26} />
                    </div>
                    <span className="text-xs font-black text-ink/35 md:mt-6 md:block">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-black uppercase text-lagoon">{project.label}</p>
                        <h3 className="mt-1 text-2xl font-black">{project.title}</h3>
                      </div>
                      <ArrowRight className="text-ink/36 transition group-hover:translate-x-1 group-hover:text-clay" size={22} />
                    </div>
                    <p className="mt-4 text-sm font-bold uppercase text-ink/45">Signal</p>
                    <p className="mt-1 text-sm leading-6 text-ink/70">{project.signal}</p>
                    <p className="mt-4 text-sm font-bold uppercase text-ink/45">Role</p>
                    <p className="mt-1 text-sm leading-6 text-ink/70">{project.role}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-lg border border-ink/10 bg-paper px-3 py-1 text-xs font-black text-ink/66">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-y border-ink/10 bg-ink py-14 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-lg border border-white/14 px-3 py-2 text-xs font-black uppercase text-marigold">
                <Network size={16} />
                Capability lanes
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                What I actually do when a project gets real.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <article key={capability.title} className="rounded-lg border border-white/12 bg-white/[0.07] p-5">
                    <Icon className="text-marigold" size={27} />
                    <h3 className="mt-4 text-xl font-black">{capability.title}</h3>
                    <ul className="mt-4 grid gap-2">
                      {capability.items.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-6 text-white/76">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-clay" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-black uppercase text-lagoon">
              <DatabaseZap size={16} />
              Stack map
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Familiar tools, used for practical outcomes.
            </h2>
          </div>
          <div className="rounded-lg border border-ink/12 bg-white p-4 shadow-[6px_6px_0_#e7a83b]">
            <div className="flex gap-2 border-b border-ink/10 pb-3">
              <span className="size-3 rounded-full bg-clay" />
              <span className="size-3 rounded-full bg-marigold" />
              <span className="size-3 rounded-full bg-moss" />
            </div>
            <div className="mt-4 grid gap-4 font-mono text-sm">
              {stackRows.map(([group, ...items]) => (
                <div key={group}>
                  <p className="text-xs font-black uppercase text-clay">./{group.toLowerCase().replace(" ", "-")}</p>
                  <p className="mt-2 leading-6 text-ink/74">
                    {items.map((item, index) => (
                      <span key={item}>
                        <span className="font-bold text-ink">{item}</span>
                        {index < items.length - 1 ? <span className="text-ink/30"> + </span> : null}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white py-14">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-lg bg-field px-3 py-2 text-xs font-black uppercase text-clay">
              <Bot size={16} />
              Fit
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Best when the task needs both speed and judgment.
            </h2>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              {availability.map((item) => (
                <span key={item} className="rounded-lg border border-ink/10 bg-paper px-3 py-2 text-sm font-black text-ink/72">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-base leading-7 text-ink/66">
              I am comfortable taking a rough brief, asking the right questions, shipping a first
              useful version, and tightening it until it feels like something a client or user can
              actually trust.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="mailto:catayoc.allanbrando@gmail.com?subject=Remote%20portfolio%20project"
                className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-black text-white shadow-[5px_5px_0_#e7a83b]"
              >
                Contact Allan
                <Rocket size={18} />
              </Link>
              <Link
                href="https://github.com/chefallan"
                className="inline-flex items-center gap-2 rounded-lg border border-ink/14 bg-white px-5 py-3 text-sm font-black text-ink"
              >
                <Github size={18} />
                View GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
