"use client";

const SERVER_IP = "YOUR.SERVER.IP:2302";
const SERVER_NAME = "Vanilla Renegade";
const DISCORD_URL = "https://discord.gg/y8CHBBtrvk";

export default function Home() {
  const copyServerIP = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      alert(`Server IP copied: ${SERVER_IP}`);
    } catch {
      alert(`Copy failed. Server IP: ${SERVER_IP}`);
    }
  };

  const copyDiscordLink = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_URL);
      alert("Discord invite copied!");
    } catch {
      alert(`Copy failed. Link: ${DISCORD_URL}`);
    }
  };

  return (
    <main className="text-white">
      {/* HERO */}
      <section className="px-6 py-32 md:py-40 bg-gradient-to-b from-black/90 via-black/75 to-black/30">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-orange-300/80">
              DayZ Community Server
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-wide text-orange-300 drop-shadow-lg">
              {SERVER_NAME}
            </h1>

            <p className="text-lg md:text-2xl text-zinc-200 tracking-wide">
              Vanilla+ • 1PP • EU • Weekend Raiding
            </p>

            <p className="max-w-2xl mx-auto text-base md:text-lg text-zinc-400 leading-relaxed">
              No safe zones. No handouts. Just DayZ, shaped by the people who
              survive it.
            </p>
          </div>

          {/* HERO BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={copyServerIP}
              className="w-full sm:w-auto rounded-2xl bg-orange-400 px-6 py-3 text-black font-semibold transition hover:bg-orange-300"
            >
              Copy Server IP
            </button>

            <a
              href="/how-to-join"
              className="w-full sm:w-auto rounded-2xl border border-zinc-600 bg-black/30 px-6 py-3 text-white font-medium transition hover:border-zinc-400 hover:bg-white/5"
            >
              How to Join
            </a>

            <button
              onClick={copyDiscordLink}
              className="w-full sm:w-auto rounded-2xl border border-zinc-600 bg-black/30 px-6 py-3 text-white font-medium transition hover:border-zinc-400 hover:bg-white/5"
            >
              Copy Discord Link
            </button>

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-2xl bg-indigo-500 px-6 py-3 text-white font-semibold transition hover:bg-indigo-400"
            >
              Open Discord
            </a>
          </div>

          <div className="pt-4 text-sm text-zinc-500">
            <p>
              Direct connect:{" "}
              <span className="font-medium text-zinc-300">{SERVER_IP}</span>
            </p>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="px-6 py-16 border-t border-white/5 border-b border-white/5 bg-black/30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Ready to Join?
          </h2>

          <p className="mt-4 text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Step into a server where your choices matter and every encounter has
            weight.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={copyServerIP}
              className="w-full sm:w-auto rounded-2xl bg-orange-400 px-6 py-3 text-black font-semibold transition hover:bg-orange-300"
            >
              Copy Server IP
            </button>

            <button
              onClick={copyDiscordLink}
              className="w-full sm:w-auto rounded-2xl border border-zinc-600 bg-black/30 px-6 py-3 text-white font-medium transition hover:border-zinc-400 hover:bg-white/5"
            >
              Copy Discord Link
            </button>

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-2xl bg-indigo-500 px-6 py-3 text-white font-semibold transition hover:bg-indigo-400"
            >
              Open Discord
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
