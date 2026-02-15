"use client";

import { SiteShell } from "@/components/SiteShell";

export default function Donate() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-bold">Support the Server</h1>

        <p className="mt-4 text-zinc-200/85 leading-relaxed">
          Every contribution helps us maintain a stable and enjoyable environment
          for everyone, fund improvements, and ensure the server continues running
          long into the future.
        </p>

        <p className="mt-4 text-zinc-200/85 leading-relaxed">
          We genuinely appreciate every player who chooses to support us — whether
          you donate or simply spend your time playing here. You are what keeps the
          community alive, and we’re grateful to have you as part of Vanilla Renegade.
        </p>

        {/* Fair Play Notice */}
        <div className="mt-8 rounded-2xl bg-black/40 border border-[rgba(var(--vr-accent),0.25)] p-6">
          <h2 className="text-2xl font-semibold text-orange-300">Fair Play Commitment</h2>
          <p className="mt-3 text-zinc-200/85">
            Donations never provide gameplay advantages. No pay-to-win mechanics,
            no gear kits, and no stat boosts — supporting the server only helps
            keep it running and improving for everyone.
          </p>
        </div>

        {/* Donation Buttons */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">

          {/* PayPal */}
          <a
            href="https://www.paypal.com/paypalme/vanillarenegade"
            target="_blank"
            className="rounded-2xl bg-black/40 border border-[rgba(var(--vr-accent),0.25)] p-6 hover:border-[rgba(var(--vr-accent),0.8)] hover:shadow-[0_0_25px_rgba(255,140,60,0.25)] transition"
          >
            <h3 className="text-xl font-semibold text-orange-300">Donate via PayPal</h3>
            <p className="mt-2 text-zinc-200/85">
              A quick and direct way to support the server.
            </p>
            <div className="mt-5 inline-block px-6 py-2 rounded-full bg-[rgb(var(--vr-accent))] text-black font-semibold">
              Support with PayPal
            </div>
          </a>

          {/* Coffee */}
          <a
            href="https://buymeacoffee.com/vanillarenegade"
            target="_blank"
            className="rounded-2xl bg-black/40 border border-[rgba(var(--vr-accent),0.25)] p-6 hover:border-[rgba(var(--vr-accent),0.8)] hover:shadow-[0_0_25px_rgba(255,140,60,0.25)] transition"
          >
            <h3 className="text-xl font-semibold text-orange-300">Buy Me a Coffee</h3>
            <p className="mt-2 text-zinc-200/85">
              A simple way to show appreciation and help the community grow.
            </p>
            <div className="mt-5 inline-block px-6 py-2 rounded-full bg-[rgb(var(--vr-accent))] text-black font-semibold">
              Buy a Coffee
            </div>
          </a>

        </div>

        <p className="mt-12 text-sm text-zinc-400/80">
          Thank you for helping keep the adventure alive — we truly appreciate your support.
        </p>
      </main>
    </SiteShell>
  );
}
