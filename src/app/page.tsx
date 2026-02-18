"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-[140vh] text-zinc-100">

      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/vr_loadingscreen.png"
          alt="Vanilla Renegade Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
          VANILLA RENEGADE
        </h1>

        <p className="mt-6 text-lg md:text-xl text-zinc-200/90">
          How official should feel. Sensible tweaks only
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="https://discord.gg/D6JCuHnWTw"
            target="_blank"
            className="rounded-full bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 font-semibold transition"
          >
            Join Discord
          </a>

          <button
            onClick={() => navigator.clipboard.writeText("37.156.35.85:2302")}
            className="rounded-full border border-orange-400 px-6 py-3 hover:border-orange-300 transition"
          >
            Copy IP
          </button>
        </div>

        <div className="mt-6 text-sm text-zinc-300">
          Direct connect: <b>37.156.35.85:2302</b>
        </div>
      </section>

      {/* Info Cards */}
      <section className="mx-auto max-w-6xl px-6 pb-24 grid md:grid-cols-3 gap-6">
        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="mt-3 text-zinc-300">
            A community-driven server focused on the vanilla DayZ feel, enhanced only by small convenience mods not shortcuts.
          </p>
        </div>

        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">Server</h2>
          <p className="mt-3 text-zinc-300">
            PC • Chernarus • Vanilla • Lightly Modded
          </p>
        </div>

        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">Community</h2>
          <p className="mt-3 text-zinc-300">
            Active admins, fair rules, no pay to win.
          </p>
        </div>
      </section>

    </main>
  );
}
