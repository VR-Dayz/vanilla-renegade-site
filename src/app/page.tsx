"use client";

const SERVER_IP = "37.156.35.85:2302";
const SERVER_NAME = "Vanilla Renegade";
const DISCORD_URL = "https://discord.gg/y8CHBBtrvk";

export default function Home() {
  const copyToClipboard = async (text: string, successMessage: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(successMessage);
    } catch {
      alert(`Copy failed. ${text}`);
    }
  };

  return (
    <main className="text-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-black/90 via-black/75 to-black/30 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">
            DayZ Community Server
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-wide text-orange-300 drop-shadow-lg md:text-6xl">
            Welcome to {SERVER_NAME}
          </h1>

          <p className="mt-4 text-lg tracking-wide text-zinc-200 md:text-2xl">
            Vanilla+ • 1PP • EU • Weekend Raiding
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            A grounded DayZ experience with a strong community, balanced rules,
            and a server built for players who want survival to feel rewarding.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/how-to-join"
              className="w-full rounded-2xl bg-orange-400 px-6 py-3 text-center font-semibold text-black transition hover:bg-orange-300 sm:w-auto"
            >
              How to Join
            </a>

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-2xl border border-zinc-600 bg-black/30 px-6 py-3 text-center font-medium text-white transition hover:border-zinc-400 hover:bg-white/5 sm:w-auto"
            >
              Join Discord
            </a>
          </div>

          <div className="mx-auto mt-8 flex max-w-xl flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 sm:flex-row">
            <div className="text-sm text-zinc-400">
              Direct connect:{" "}
              <span className="font-medium text-zinc-200">{SERVER_IP}</span>
            </div>

            <button
              onClick={() =>
                copyToClipboard(SERVER_IP, `Server IP copied: ${SERVER_IP}`)
              }
              className="rounded-xl border border-zinc-600 px-4 py-2 text-sm font-medium text-white transition hover:border-zinc-400 hover:bg-white/5"
            >
              Copy IP
            </button>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="border-y border-white/5 bg-black/30 px-6 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Perspective", value: "1PP" },
            { label: "Style", value: "Vanilla+" },
            { label: "Region", value: "EU" },
            { label: "Raiding", value: "Weekends Only" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                {item.label}
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 pt-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Ready to get started?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Join the community, connect to the server, and build your story in a
            DayZ world that stays true to survival.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() =>
                copyToClipboard(SERVER_IP, `Server IP copied: ${SERVER_IP}`)
              }
              className="w-full rounded-2xl bg-orange-400 px-6 py-3 font-semibold text-black transition hover:bg-orange-300 sm:w-auto"
            >
              Copy Server IP
            </button>

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-2xl border border-zinc-600 bg-black/30 px-6 py-3 text-center font-medium text-white transition hover:border-zinc-400 hover:bg-white/5 sm:w-auto"
            >
              Open Discord
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
