export default function HowToJoin() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-zinc-100">
      <h1 className="text-4xl font-bold">How to Join</h1>

      <p className="mt-4 text-zinc-300">
        Follow these steps to join the Vanilla Renegade DayZ server.
      </p>

      <div className="mt-8 space-y-6">

        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">1. Launch DayZ</h2>
          <p className="mt-2 text-zinc-300">
            Open the DayZ launcher from Steam and go to the Servers tab.
          </p>
        </div>

        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">2. Direct Connect</h2>
          <p className="mt-2 text-zinc-300">
            Use the Direct Connect option and enter the server IP:
          </p>
          <p className="mt-2 font-mono text-orange-400">
            37.156.35.85:2302
          </p>
        </div>

        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">3. Join Discord</h2>
          <p className="mt-2 text-zinc-300">
            Join our Discord for announcements, support, and community events.
          </p>
          <a
            href="https://discord.gg/D6JCuHnWTw"
            target="_blank"
            className="inline-block mt-3 rounded-full bg-orange-500 hover:bg-orange-400 text-black px-5 py-2 font-semibold transition"
          >
            Join Discord
          </a>
        </div>

      </div>
    </main>
  );
}
