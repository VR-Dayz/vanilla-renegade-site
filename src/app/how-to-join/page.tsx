import React, { useState } from "react";

const SERVER_IP = "37.156.35.85:2302";

/* ---------------- Copy IP Component ---------------- */
function CopyIP() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      onClick={copy}
      className="mt-3 w-fit font-mono text-orange-400 text-lg bg-black/50 border border-orange-500/30 rounded-lg px-4 py-2 hover:border-orange-400 hover:text-orange-300 transition"
    >
      {copied ? "Copied!" : SERVER_IP}
    </button>
  );
}

/* ---------------- Page ---------------- */

export default function Join() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      <h1 className="text-3xl font-bold mb-10 text-center text-orange-400">
        How to Join the Server
      </h1>

      <div className="space-y-8">

        {/* Server Info */}
        <section className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold text-orange-400">
            Server Address
          </h2>
          <p className="mt-2 text-zinc-300">
            Click the IP below to copy it to your clipboard:
          </p>
          <CopyIP />
        </section>

        {/* Steam Method */}
        <section className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold text-orange-400">
            Join Using Steam Launcher
          </h2>

          <ol className="mt-4 space-y-2 text-zinc-300 list-decimal list-inside">
            <li>Open Steam</li>
            <li>Go to Library</li>
            <li>Launch DayZ (this opens the official launcher)</li>
            <li>Go to the Servers tab</li>
            <li>Click Direct Connect</li>
            <li>Enter the server IP</li>
            <li>Press Join</li>
            <li>Allow mods to download</li>
            <li>Favorite the server</li>
            <li>Press Play when ready</li>
          </ol>

          <CopyIP />
        </section>

        {/* DZSA Method */}
        <section className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold text-orange-400">
            Join Using DZSA Launcher (Recommended)
          </h2>

          <p className="mt-2 text-zinc-300">
            DZSA automatically installs and loads all required mods and is the easiest way to connect.
          </p>

          <h3 className="mt-6 font-semibold text-orange-400">
            Download DZSA Launcher
          </h3>

          <a
            href="https://dayzsalauncher.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 rounded-full bg-orange-500 hover:bg-orange-400 text-black px-5 py-2 font-semibold transition"
          >
            Download DZSA Launcher
          </a>

          <h3 className="mt-6 font-semibold text-orange-400">
            Connect to the Server
          </h3>

          <ol className="mt-3 space-y-2 text-zinc-300 list-decimal list-inside">
            <li>Open DZSA Launcher</li>
            <li>Paste the server IP into the search bar</li>
            <li>Select the server</li>
            <li>Click Join</li>
            <li>Wait for mods to download</li>
            <li>Favorite the server</li>
            <li>The game will launch and connect automatically</li>
          </ol>

          <CopyIP />
        </section>

      </div>
    </main>
  );
}

