"use client";

const SERVER_IP = "YOUR.SERVER.IP:2302";
const SERVER_NAME = "Vanilla Renegade";

export default function Home() {
  const copyServerIP = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      alert(`Server IP copied: ${SERVER_IP}`);
    } catch {
      alert(`Copy failed. Server IP: ${SERVER_IP}`);
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

            <a
              href="/discord"
              className="w-full sm:w-auto rounded-2xl border border-zinc-600 bg-black/30 px-6 py-3 text-white font-medium transition hover:border-zinc-400 hover:bg-white/5"
            >
              Join Discord
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

      {/* QUICK INFO / SOCIAL PROOF */}
      <section className="px-6 py-16 border-t border-white/5 border-b border-white/5 bg-black/30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Perspective
            </p>
            <p className="mt-2 text-xl font-semibold text-white">1PP</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Style
            </p>
            <p className="mt-2 text-xl font-semibold text-white">Vanilla+</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Region
            </p>
            <p className="mt-2 text-xl font-semibold text-white">EU</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Raiding
            </p>
            <p className="mt-2 text-xl font-semibold text-white">
              Weekends Only
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-orange-300">
            What Makes Vanilla Renegade Different
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            Built for players who want the tension, pace, and unpredictability
            of DayZ without bloated systems getting in the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "True Vanilla+",
              text: "A familiar DayZ experience with light quality-of-life improvements, not a server buried under unnecessary features.",
            },
            {
              title: "Player-Driven Encounters",
              text: "Trade, betrayal, rivalry, alliances, and reputation all come from the players, not scripted gimmicks.",
            },
            {
              title: "Fair, Consistent Admining",
              text: "Admins are present to keep the server fair and stable, not to interfere with the stories players create.",
            },
            {
              title: "Community That Lasts",
              text: "A server designed for regulars, returning faces, and meaningful interactions instead of one-time traffic.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 text-left"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO JOIN */}
      <section className="px-6 py-24 bg-black/40 border-t border-white/5 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-orange-300">
              How to Join
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Keep it simple. Get in fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Step 1
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Open DayZ Launcher
              </h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                Launch DayZ through the official launcher and head to the server
                browser.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Step 2
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Search the Server
              </h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                Search for{" "}
                <span className="text-zinc-200 font-medium">{SERVER_NAME}</span>{" "}
                or connect directly using the IP below.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Step 3
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Survive Your Own Way
              </h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                Travel alone, make allies, take risks, and build your reputation
                over time.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-orange-400/20 bg-orange-400/10 p-6 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-300/80">
              Direct Connect
            </p>
            <p className="mt-2 text-xl md:text-2xl font-semibold text-white">
              {SERVER_IP}
            </p>
            <button
              onClick={copyServerIP}
              className="mt-5 rounded-2xl bg-orange-400 px-6 py-3 text-black font-semibold transition hover:bg-orange-300"
            >
              Copy Server IP
            </button>
          </div>
        </div>
      </section>

      {/* IMMERSIVE STORY / BRAND MESSAGE */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-orange-300">
            A Server Built Around Player Stories
          </h2>

          <div className="space-y-5 text-zinc-300 leading-relaxed text-base md:text-lg">
            <p>
              Vanilla Renegade is built around the idea that the best moments in
              DayZ come from the people you share them with. We wanted a place
              where players recognise each other over time, where encounters are
              not always predictable, and where atmosphere matters as much as
              progression.
            </p>

            <p>
              There is no single way to play here. You can help a stranger,
              trade along the roads, travel alone, or take the risk of a fight
              on sight. Every choice is yours to make. What matters is that the
              world reacts to the decisions of the people living in it.
            </p>

            <p>
              Our focus is a steady, fair environment that encourages players to
              stay, return, and become familiar faces rather than passing
              traffic. Some days will be quiet, others tense, and occasionally
              unforgettable, shaped by players and not forced mechanics.
            </p>

            <p>
              Admins are present to keep things fair and consistent, not to
              interfere. Your journey is not scripted, and your reputation is
              earned.
            </p>

            <p>
              Whether you are new to DayZ or have thousands of hours, you are
              welcome here. Find your path, live with the consequences, and make
              the story your own.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Ready to Join?
          </h2>
          <p className="mt-4 text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Step into a server where your choices matter, your name can mean
            something, and every encounter has weight.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={copyServerIP}
              className="w-full sm:w-auto rounded-2xl bg-orange-400 px-6 py-3 text-black font-semibold transition hover:bg-orange-300"
            >
              Copy Server IP
            </button>

            <a
              href="/discord"
              className="w-full sm:w-auto rounded-2xl border border-zinc-600 bg-black/30 px-6 py-3 text-white font-medium transition hover:border-zinc-400 hover:bg-white/5"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
