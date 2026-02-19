import Link from "next/link";

const SERVER = {
  name: "Vanilla Renegade",
  map: "Chernarus",
  discord: "https://discord.gg/D6JCuHnWTw",
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-sm text-zinc-200/90 hover:text-white transition"
  >
    {label}
  </Link>
);

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">

      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/35 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-2">
            <span className="font-semibold tracking-wide">{SERVER.name}</span>
            <span className="text-xs text-zinc-300/70">
              DayZ • {SERVER.map}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/server-info" label="Server Info" />
            <NavLink href="/how-to-join" label="How to Join" />
            <NavLink href="/rules" label="Rules" />
            <NavLink href="/donate" label="Donate" />
            <NavLink href="/store" label="Store" />
            <NavLink href="/leaderboard" label="Leaderboard" />
          </nav>

          <a
            href={SERVER.discord}
            target="_blank"
            rel="noreferrer"
            className="text-sm rounded-full px-3 py-1.5 border border-white/15 hover:border-white/30 transition"
          >
            Discord
          </a>

        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-300/80 flex flex-col gap-2">
          <div>
            © {new Date().getFullYear()} {SERVER.name}
          </div>
          <div className="text-zinc-400/70">
            DayZ is a trademark of Bohemia Interactive. This is a community server website.
          </div>
        </div>
      </footer>

    </div>
  );
}
