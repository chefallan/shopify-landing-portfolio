import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  FileCode2,
  FolderGit2,
  Github,
  GitPullRequestArrow,
  Mail,
  ShoppingBag,
  TerminalSquare,
  WalletCards
} from "lucide-react";

const fileTree = [
  ["portfolio/", "root"],
  ["app/full-stack.tsx", "active"],
  ["lib/web3.sol", "file"],
  ["tools/ai-context.md", "file"],
  ["commerce/shopify.liquid", "file"],
  ["scripts/automation.ts", "file"]
];

const codeLines = [
  ["01", "const developer = {"],
  ["02", "  name: 'Allan Catayoc',"],
  ["03", "  role: 'Senior Full-Stack Developer',"],
  ["04", "  focus: ['React', 'Next.js', 'Web3', 'AI tools', 'Shopify'],"],
  ["05", "  mode: ['remote', 'part-time', 'project-based'],"],
  ["06", "  ships: 'usable products, not just screens'"],
  ["07", "};"]
];

const modules = [
  {
    icon: Code2,
    name: "Frontend work",
    summary: "I build React, Next.js, and Vue interfaces for dashboards, landing pages, and product screens.",
    calls: ["React / Next.js", "Responsive UI", "Bug fixes"]
  },
  {
    icon: WalletCards,
    name: "Web3 work",
    summary: "I can help with Solana tools, wallet flows, blockchain data, and simple trading utilities.",
    calls: ["Solana", "Wallet flows", "Rust / smart contracts"]
  },
  {
    icon: BrainCircuit,
    name: "AI and automation",
    summary: "I build small tools that organize information, automate research, or remove repeated manual work.",
    calls: ["AI workflows", "Scraping", "Internal tools"]
  },
  {
    icon: ShoppingBag,
    name: "Shopify and ecommerce",
    summary: "I build and improve Shopify pages, product sections, mobile layouts, and launch pages.",
    calls: ["Shopify", "Landing pages", "Mobile polish"]
  }
];

const repos = [
  {
    name: "awesome-context-engine",
    href: "https://github.com/chefallan/awesome-context-engine",
    type: "AI developer tooling",
    description: "A developer resource about organizing useful context for AI-assisted coding and technical work.",
    stack: ["AI", "Developer tools", "Docs"],
    status: "public"
  },
  {
    name: "openbean",
    href: "https://github.com/openbean/openbean",
    type: "Open-source product",
    description: "Open-source product work that shows how I read an existing codebase and explain what matters.",
    stack: ["Open source", "Product", "Frontend"],
    status: "showcase"
  },
  {
    name: "solana-cli-bot",
    href: "https://github.com/chefallan",
    type: "Blockchain utility",
    description: "A command-line trading tool for Solana tasks, with Rust work for faster execution.",
    stack: ["Solana", "Rust", "CLI"],
    status: "project"
  },
  {
    name: "portfolio-site",
    href: "https://shopify-landing-portfolio.vercel.app/",
    type: "Live portfolio",
    description: "This site, built with Next.js and Tailwind, to show my frontend style and project range.",
    stack: ["Next.js", "Tailwind", "Vercel"],
    status: "live"
  }
];

const stackGroups = [
  ["frontend", ["React", "Next.js", "Vue", "Vite", "TypeScript", "Tailwind"]],
  ["blockchain", ["Solana", "Rust", "Solidity", "Move", "Ethers.js", "Web3.js"]],
  ["delivery", ["Node.js", "APIs", "GitHub", "Automation", "Scraping", "Vercel"]],
  ["commerce", ["Shopify", "WordPress", "Landing pages", "UX QA", "Responsive polish"]]
];

const workflow = [
  ["read", "I read the brief, repo, product flow, or bug report before changing code."],
  ["plan", "I turn the request into a small, clear plan and start with the most useful version."],
  ["build", "I write the code, test the path, and clean up the UI so it feels ready to use."],
  ["handoff", "I leave clear notes and next steps so the work is easy to continue."]
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080d0f] text-[#e8f2ed]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080d0f]/88 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md border border-emerald-300/30 bg-emerald-300/10 font-mono text-sm font-black text-emerald-200">
              ./ac
            </span>
            <span>
              <span className="block font-mono text-sm font-black leading-none text-white">allan.catayoc</span>
              <span className="mt-1 block font-mono text-xs text-emerald-200/62">full-stack developer</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            <Link href="#modules" className="rounded-md px-3 py-2 font-mono text-xs font-bold text-white/62 hover:bg-white/8 hover:text-white">
              modules
            </Link>
            <Link href="#repos" className="rounded-md px-3 py-2 font-mono text-xs font-bold text-white/62 hover:bg-white/8 hover:text-white">
              repos
            </Link>
            <Link href="#stack" className="rounded-md px-3 py-2 font-mono text-xs font-bold text-white/62 hover:bg-white/8 hover:text-white">
              stack
            </Link>
            <Link href="https://github.com/chefallan" className="inline-flex items-center gap-2 rounded-md px-3 py-2 font-mono text-xs font-bold text-white/62 hover:bg-white/8 hover:text-white">
              <Github size={16} />
              github
            </Link>
            <Link href="mailto:catayoc.allanbrando@gmail.com?subject=Remote%20developer%20project" className="inline-flex items-center gap-2 rounded-md bg-emerald-300 px-4 py-2 font-mono text-xs font-black text-[#08100d]">
              <Mail size={16} />
              hire
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/shopify/portfolio-hero.png"
            alt="Layered product interfaces for full-stack, AI, Web3, and ecommerce portfolio work"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(231,168,59,0.18),transparent_31%),linear-gradient(90deg,#080d0f_0%,rgba(8,13,15,0.96)_45%,rgba(8,13,15,0.74)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-end gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[15rem_minmax(0,1fr)_24rem] lg:px-8">
          <aside className="hidden self-stretch rounded-md border border-white/10 bg-black/34 p-3 font-mono text-xs text-white/58 lg:block">
            <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3 text-white/74">
              <FolderGit2 size={16} />
              workspace
            </div>
            <div className="grid gap-2">
              {fileTree.map(([label, state]) => (
                <div
                  key={label}
                  className={`rounded px-2 py-1.5 ${
                    state === "active"
                      ? "bg-emerald-300/12 text-emerald-100"
                      : state === "root"
                        ? "text-white"
                        : "text-white/48"
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>
          </aside>

          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-md border border-emerald-300/24 bg-emerald-300/10 px-3 py-2 font-mono text-xs font-black uppercase text-emerald-200">
              <TerminalSquare size={16} />
              remote developer portfolio
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] text-white sm:text-6xl">
              I build web apps, tools, and Web3 features that are easy to use and maintain.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              I am a senior full-stack developer focused on React, Next.js, blockchain apps, AI tools,
              automation, Shopify pages, and project-based work.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#repos"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-300 px-5 py-3 font-mono text-sm font-black text-[#08100d] shadow-[6px_6px_0_rgba(231,168,59,0.55)] transition hover:-translate-y-0.5"
              >
                view projects
                <ArrowRight size={18} />
              </Link>
              <Link
                href="mailto:catayoc.allanbrando@gmail.com?subject=Remote%20developer%20project"
                className="inline-flex items-center gap-2 rounded-md border border-white/18 bg-white/8 px-5 py-3 font-mono text-sm font-black text-white hover:bg-white/12"
              >
                <Mail size={18} />
                contact me
              </Link>
            </div>
          </div>

          <aside className="rounded-md border border-white/12 bg-[#0d1518]/92 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-[#ff5f57]" />
                <span className="size-3 rounded-full bg-[#febc2e]" />
                <span className="size-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-white/38">developer.ts</span>
            </div>
            <div className="p-4 font-mono text-xs sm:text-sm">
              {codeLines.map(([number, code]) => (
                <div key={number} className="grid grid-cols-[2rem_1fr] gap-3 leading-7">
                  <span className="select-none text-white/24">{number}</span>
                  <code className="text-white/78">
                    {code.includes("const") ? <span className="text-[#7dd3fc]">{code}</span> : code}
                  </code>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="modules" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-xs font-black uppercase text-emerald-200">what I do</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">
              I write code for real product work.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/62">
              I help with frontend work, Web3 features, AI tools, automation, and Shopify pages.
              The goal is simple: useful code, clean UI, and work that another developer can continue.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <article key={module.name} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="text-emerald-200" size={26} />
                    <span className="rounded bg-black/34 px-2 py-1 font-mono text-xs text-white/42">export</span>
                  </div>
                  <h3 className="mt-4 font-mono text-lg font-black text-white">{module.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{module.summary}</p>
                  <div className="mt-4 grid gap-2">
                    {module.calls.map((call) => (
                      <code key={call} className="rounded border border-white/8 bg-black/24 px-3 py-2 font-mono text-xs text-[#facc15]">
                        {call}
                      </code>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="repos" className="border-y border-white/10 bg-[#0d1518] py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs font-black uppercase text-[#facc15]">projects</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">
                Selected projects.
              </h2>
            </div>
            <Link href="https://github.com/chefallan" className="inline-flex w-fit items-center gap-2 rounded-md border border-white/12 px-4 py-3 font-mono text-sm font-black text-white hover:bg-white/8">
              <Github size={18} />
              github.com/chefallan
            </Link>
          </div>

          <div className="mt-8 grid gap-4">
            {repos.map((repo) => (
              <Link
                key={repo.name}
                href={repo.href}
                className="group grid gap-4 rounded-md border border-white/10 bg-black/24 p-4 transition hover:border-emerald-300/36 hover:bg-black/34 lg:grid-cols-[1.1fr_1.5fr_0.65fr]"
              >
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-emerald-200">
                    <GitPullRequestArrow size={16} />
                    {repo.status}
                  </div>
                  <h3 className="mt-2 font-mono text-xl font-black text-white group-hover:text-emerald-100">
                    {repo.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase text-white/38">{repo.type}</p>
                </div>
                <p className="text-sm leading-6 text-white/66">{repo.description}</p>
                <div className="flex flex-wrap items-start gap-2 lg:justify-end">
                  {repo.stack.map((item) => (
                    <span key={item} className="rounded border border-white/10 bg-white/[0.055] px-2 py-1 font-mono text-xs text-white/62">
                      {item}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-xs font-black uppercase text-emerald-200">tech stack</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">
              Tools I use often.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/62">
              I work across frontend, blockchain, automation, and ecommerce. I use the tool that fits
              the job instead of forcing every project into one stack.
            </p>
          </div>
          <div className="rounded-md border border-white/10 bg-[#0d1518] p-4 font-mono shadow-[10px_10px_0_rgba(125,211,252,0.08)]">
            <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3 text-xs text-white/42">
              <FileCode2 size={16} />
              dependencies
            </div>
            <div className="grid gap-4">
              {stackGroups.map(([group, items]) => (
                <div key={group as string} className="grid gap-2 sm:grid-cols-[8rem_1fr]">
                  <p className="text-sm font-black text-[#facc15]">{`"${group}"`}</p>
                  <div className="flex flex-wrap gap-2">
                    {(items as string[]).map((item) => (
                      <span key={item} className="rounded bg-white/[0.055] px-2 py-1 text-xs text-white/72">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#10181b] py-14">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="font-mono text-xs font-black uppercase text-[#facc15]">how I work</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">
              How I handle a task.
            </h2>
          </div>
          <div className="grid gap-3">
            {workflow.map(([command, text], index) => (
              <div key={command} className="grid gap-3 rounded-md border border-white/10 bg-black/20 p-4 sm:grid-cols-[7rem_1fr]">
                <p className="font-mono text-sm font-black text-emerald-200">
                  {String(index + 1).padStart(2, "0")}:{command}
                </p>
                <p className="text-sm leading-6 text-white/66">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-md border border-emerald-300/20 bg-emerald-300/8 p-5 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs font-black uppercase text-emerald-200">available remotely</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">
                Need a developer for a focused build?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
                I am a good fit for full-stack features, frontend fixes, Web3 prototypes, AI tools,
                automation scripts, Shopify pages, and product demos.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:catayoc.allanbrando@gmail.com?subject=Remote%20developer%20project"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-300 px-5 py-3 font-mono text-sm font-black text-[#08100d]"
              >
                <Mail size={18} />
                email Allan
              </Link>
              <Link
                href="https://github.com/chefallan"
                className="inline-flex items-center gap-2 rounded-md border border-white/14 px-5 py-3 font-mono text-sm font-black text-white hover:bg-white/8"
              >
                <Github size={18} />
                view code
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
