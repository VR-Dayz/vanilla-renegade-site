"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white">

      {/* HERO */}
      <section className="text-center py-32 px-6 max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-orange-400">
          Vanilla Renegade
        </h1>

        <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          A grounded DayZ experience focused on survival, tension and meaningful player interaction.
          No chaos. No shortcuts. Just Chernarus as it was meant to be.
        </p>

        <div className="flex gap-4 justify-center pt-4 flex-wrap">
          <Link
            href="/how-to-join"
            className="bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 rounded-full font-semibold transition"
          >
            Join the Server
          </Link>

          <Link
            href="/server-info"
            className="border border-orange-400/40 hover:border-orange-400 px-6 py-3 rounded-full font-semibold transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
        <h2 className="text-2xl font-semibold text-orange-400">Our Approach</h2>
        <p className="text-zinc-300 leading-relaxed">
          Vanilla Renegade exists for players who enjoy DayZ for what originally made it special.
          Survival comes first. Player interaction second. Everything else after.
        </p>
      </section>

      {/* PILLARS */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

        <div className="bg-black/60 border border-orange-500/20 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-2">Fair Gameplay</h3>
          <p className="text-zinc-300">No pay-to-win mechanics or hidden advantages.</p>
        </div>

        <div className="bg-black/60 border border-orange-500/20 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-2">Active Moderation</h3>
          <p className="text-zinc-300">Cheaters and exploits are dealt with quickly.</p>
        </div>

        <div className="bg-black/60 border border-orange-500/20 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-2">Player Driven</h3>
          <p className="text-zinc-300">Encounters and stories come from players, not scripted events.</p>
        </div>

      </section>

      {/* JOIN QUICK */}
      <section className="text-center py-20 space-y-6">
        <h2 className="text-2xl font-semibold text-orange-400">Ready to Survive?</h2>

        <div className="inline-block font-mono text-orange-400 text-lg bg-black/60 border border-orange-500/30 rounded-lg px-5 py-3">
          37.156.35.85:2302
        </div>

        <div>
          <Link
            href="/how-to-join"
            className="inline-block mt-4 bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 rounded-full font-semibold transition"
          >
            View Join Guide
          </Link>
        </div>
      </section>

    </main>
  );
}
