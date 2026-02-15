"use client";

import { SiteShell } from "@/components/SiteShell";

function PackageCard({
  title,
  price,
  children,
}: {
  title: string;
  price: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-black/40 border border-[rgba(var(--vr-accent),0.25)] p-6 hover:border-[rgba(var(--vr-accent),0.8)] transition">
      <h2 className="text-2xl font-semibold text-orange-300">{title}</h2>
      <div className="mt-2 text-lg font-bold">{price}</div>
      <ul className="mt-4 space-y-2 text-zinc-200/85 list-disc pl-6">
        {children}
      </ul>
    </div>
  );
}

export default function Store() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-4xl font-bold">Supporter Store</h1>
        <p className="mt-4 text-zinc-200/85">
          Support the server while keeping gameplay fair and balanced.
        </p>

        {/* Packages */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <PackageCard title="Bronze Package" price="€8.99 / Month">
            <li>Priority Queue</li>
            <li>Join the server ahead of others</li>
            <li>Stand out with priority access</li>
          </PackageCard>

          <PackageCard title="Silver Package" price="€12.99">
            <li>Priority Queue</li>
            <li>National Flag + Armband</li>
          </PackageCard>

          <PackageCard title="Gold Package" price="€14.99">
            <li>Priority Queue</li>
            <li>National Flag + Armband</li>
            <li>Custom Vehicle (must already own a vehicle)</li>
          </PackageCard>

        </div>

        {/* Extras */}
        <h2 className="text-3xl font-semibold mt-14">Extras</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-orange-300">
              Lifetime National Flag + Armband – €8.99
            </h3>
            <p className="mt-2 text-zinc-200/85">
              Represent your nation in style.
            </p>
          </div>

          <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-orange-300">
              Custom Vehicle – €9.99
            </h3>
            <p className="mt-2 text-zinc-200/85">
              Custom appearance applied to a vehicle you already own.
            </p>
          </div>

        </div>

        {/* Policy */}
        <section className="mt-12 rounded-2xl bg-black/40 border border-white/10 p-6 text-sm text-zinc-300/80">
          <h2 className="text-lg font-semibold text-zinc-200">Monetization Policy</h2>

          <p className="mt-3">
            Vanilla Renegade is an independent community server and is not affiliated
            with or endorsed by Bohemia Interactive.
          </p>

          <p className="mt-3">
            All contributions are voluntary and are used only to support server hosting,
            maintenance, and community events. Donations do not provide gameplay
            advantages, competitive benefits, exclusive weapons, items, character stats,
            priority access to high-tier gear, or any pay-to-win mechanics.
          </p>

          <p className="mt-3">
            Any supporter perks provided are cosmetic or convenience based only and do
            not impact fairness, balance, or progression within the server.
          </p>

          <p className="mt-3">
            DayZ is a registered trademark of Bohemia Interactive a.s. All game content,
            assets, and trademarks belong to their respective owners.
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
