export default function ServerInfo() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-zinc-100 space-y-6">
      <h1 className="text-4xl font-bold">Server Information</h1>

      <section className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
        <h2 className="text-xl font-semibold">Connection</h2>
        <p className="mt-2 text-zinc-300">
          IP: <span className="font-mono text-orange-400">37.156.35.85:2302</span>
        </p>
        <p className="mt-1 text-zinc-300">Platform: PC</p>
        <p className="mt-1 text-zinc-300">Map: Chernarus</p>
      </section>

      <section className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
        <h2 className="text-xl font-semibold">Server Style</h2>
        <ul className="list-disc pl-6 mt-2 text-zinc-300 space-y-1">
          <li>Vanilla experience</li>
          <li>Light quality-of-life mods</li>
          <li>No pay-to-win features</li>
          <li>Active administration</li>
        </ul>
      </section>

      <section className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
        <h2 className="text-xl font-semibold">Community</h2>
        <p className="mt-2 text-zinc-300">
          Join the Discord for announcements, support and events.
        </p>
        <a
          href="https://discord.gg/D6JCuHnWTw"
          target="_blank"
          className="inline-block mt-3 rounded-full bg-orange-500 hover:bg-orange-400 text-black px-5 py-2 font-semibold transition"
        >
          Join Discord
        </a>
      </section>
    </main>
  );
}
