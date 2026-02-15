import { SiteShell } from "@/components/SiteShell";

export default function HowToJoin() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-bold">How to Join</h1>
        <p className="mt-3 text-zinc-200/80">
          Joining Vanilla Renegade is simple. You can connect using the official
          DayZ launcher or DZSA Launcher.
        </p>

        {/* OFFICIAL LAUNCHER */}
        <section className="mt-10 rounded-2xl bg-black/40 border border-white/10 p-6">
          <h2 className="text-2xl font-semibold">Join via Steam / Official Launcher</h2>

          <ol className="mt-4 list-decimal pl-6 space-y-3 text-zinc-200/85">
            <li>Open Steam</li>
            <li>Launch <b>DayZ</b></li>
            <li>Go to the <b>Servers</b> tab</li>
            <li>Select <b>Community</b></li>
            <li>Search: <b>Vanilla Renegade</b></li>
            <li>Add to Favorites</li>
            <li>Click Join</li>
            <li>Allow required mods to download</li>
            <li>Spawn and survive</li>
          </ol>

          <div className="mt-6 text-sm text-zinc-300/80">
            Direct connect: <span className="font-semibold">37.156.35.85:2302</span>
          </div>
        </section>

        {/* DZSA LAUNCHER */}
        <section className="mt-10 rounded-2xl bg-black/40 border border-white/10 p-6">
          <h2 className="text-2xl font-semibold">Join via DZSA Launcher</h2>

          <ol className="mt-4 list-decimal pl-6 space-y-3 text-zinc-200/85">
            <li>Install DZSA Launcher</li>
            <li>Open DZSA Launcher</li>
            <li>Search: <b>Vanilla Renegade</b></li>
            <li>Click Add Server to Favorites</li>
            <li>Click Join</li>
            <li>Launcher installs all required mods automatically</li>
            <li>Game launches and connects</li>
          </ol>

          <a
            href="https://dayzsalauncher.com/"
            target="_blank"
            className="inline-block mt-6 text-orange-400 hover:text-orange-300"
          >
            Download DZSA Launcher
          </a>
        </section>

        <div className="mt-10 text-sm text-zinc-400/80">
          If you have trouble joining, visit our Discord for support.
        </div>
      </main>
    </SiteShell>
  );
}
