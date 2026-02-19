export default function Join() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      <h1 className="text-3xl font-bold mb-10 text-center">
        How to Join the Server
      </h1>

      <div className="mt-8 space-y-6">

        {/* Server Info */}
        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">Server Address</h2>
          <p className="mt-2 text-zinc-300">
            Use this IP in either launcher to connect:
          </p>
          <p className="mt-3 font-mono text-orange-400 text-lg">
            37.156.35.85:2302
          </p>
        </div>

        {/* Steam Method */}
        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">Join Using Steam Launcher</h2>

          <ol className="mt-3 space-y-2 text-zinc-300 list-decimal list-inside">
            <li>Open Steam</li>
            <li>Go to Library</li>
            <li>Launch DayZ (this opens the official launcher)</li>
            <li>Go to the Servers tab</li>
            <li>Click Direct Connect</li>
            <li>Enter the server IP</li>
            <li>Press Join</li>
            <li>Allow mods to download</li>
            <li>Press Play when ready</li>
          </ol>

          <div className="mt-4 p-3 rounded-lg bg-black/50 border border-orange-500/30">
            <p className="font-mono text-orange-400">
              37.156.35.85:2302
            </p>
          </div>
        </div>

        {/* DZSA Method */}
        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">
            Join Using DZSA Launcher (Recommended)
          </h2>

          <p className="mt-2 text-zinc-300">
            DZSA automatically installs and loads all required mods and is the easiest way to connect.
          </p>

          <h3 className="mt-5 font-semibold">Download DZSA Launcher</h3>

          <a
            href="https://dayzsalauncher.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 rounded-full bg-orange-500 hover:bg-orange-400 text-black px-5 py-2 font-semibold transition"
          >
            Download DZSA Launcher
          </a>

          <h3 className="mt-6 font-semibold">Connect to the Server</h3>

          <ol className="mt-3 space-y-2 text-zinc-300 list-decimal list-inside">
            <li>Open DZSA Launcher</li>
            <li>Paste the server IP into the search bar</li>
            <li>Select the server</li>
            <li>Click Join</li>
            <li>Wait for mods to download</li>
            <li>The game will launch and connect automatically</li>
          </ol>

          <div className="mt-4 p-3 rounded-lg bg-black/50 border border-orange-500/30">
            <p className="font-mono text-orange-400">
              37.156.35.85:2302
            </p>
          </div>
        </div>

        {/* Discord */}
        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl text-center">
          <h2 className="text-xl font-semibold">Join the Community</h2>
          <p className="mt-2 text-zinc-300">
            Announcements, support, rules and events are posted in Discord.
          </p>

          <a
            href="https://discord.gg/D6JCuHnWTw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 rounded-full bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 font-semibold transition"
          >
            Join Discord
          </a>
        </div>

      </div>
    </main>
  );
}
