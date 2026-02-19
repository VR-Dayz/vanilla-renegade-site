import React from "react";

const Panel: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="rounded-xl border border-orange-500/25 bg-black/60 backdrop-blur-md shadow-2xl p-7 space-y-5">
    <h2 className="text-xl md:text-2xl font-semibold text-orange-400 tracking-wide">
      {title}
    </h2>
    <div className="space-y-4 text-zinc-200 leading-relaxed text-[15px] md:text-base">
      {children}
    </div>
  </section>
);

export default function Page() {
  const features = [
    "1PP Only",
    "Max Group Size: 6",
    "Restarts Every 4 Hours",
    "Weekend Only Raiding",
    "Regular Events",
    "Convenience Mods",
    "Active & Friendly Admins",
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-20 space-y-16 text-white">
      <header className="space-y-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-400">
          Vanilla Renegade
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 text-zinc-200 text-base max-w-2xl mx-auto">
          {features.map((f, i) => (
            <li key={i} className="before:content-['•'] before:text-orange-400 before:mr-2">
              {f}
            </li>
          ))}
        </ul>
      </header>

      <Panel title="Our Approach">
        <p>Vanilla Renegade exists for players who still enjoy DayZ for what originally made it special. Survival first. Player interaction second. Everything else comes after.</p>
        <p>We keep the game close to its core experience. Loot is adjusted but not excessive, quality of life mods are present but restrained, and progression still matters. You should feel tension when travelling, value your gear, and think twice before engaging another survivor.</p>
        <p>We are not trying to reinvent DayZ.</p>
        <p>We are trying to preserve it  while giving players a reason to keep coming back.</p>
        <p>Regular server events add variety without turning the server into an arcade. The goal is to create memorable moments, not constant chaos.</p>
      </Panel>

      <Panel title="Fair Gameplay">
        <p>Moderation is active and visible.</p>
        <p>We aim for a clean environment where fights are decided by decisions and skill, not exploits.</p>
        <p>Cheating and rule breaking are dealt with quickly.</p>
        <p>We also keep a strict stance against admin or owner abuse. No spawning gear for friends, no hidden advantages, and no interfering with legitimate gameplay.</p>
        <p>If we wouldn’t want it happening to us as players, it won’t happen here.</p>
      </Panel>

      <Panel title="Our Story">
        <p>We are two long time DayZ players who met through the game and ended up becoming good friends. Over the years we spent a lot of time on official servers dealing with cheaters, and on community servers dealing with biased admins or outright owner abuse.</p>
        <p>Eventually we realised the experience we were looking for didn’t really exist anymore.</p>
        <p>So we decided to build it ourselves.</p>
        <p>Vanilla Renegade is the server we always wanted to play on: fair, grounded, social, and survival focused. A place where the same players keep returning because they enjoy the atmosphere as much as the gameplay.</p>
        <p>We are not trying to be the biggest server.</p>
        <p>We want a consistent community of players who appreciate DayZ in the same way we do.</p>
      </Panel>
    </main>
  );
}
