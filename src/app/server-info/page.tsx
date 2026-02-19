import React from "react";

const SectionBox: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="rounded-2xl border border-orange-400/30 bg-orange-500/5 p-6 space-y-5">
    <div className="border-b border-orange-400/40 pb-3">
      <h2 className="text-orange-400 font-semibold tracking-wide uppercase text-sm">
        {title}
      </h2>
    </div>
    <div className="space-y-4 text-base leading-relaxed">
      {children}
    </div>
  </div>
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
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-14">
      <header className="space-y-6">
        <h1 className="text-4xl font-bold text-orange-400">Vanilla Renegade</h1>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </header>

      <SectionBox title="Our Approach">
        <p>Vanilla Renegade exists for players who still enjoy DayZ for what originally made it special. Survival first. Player interaction second. Everything else comes after.</p>
        <p>We keep the game close to its core experience. Loot is adjusted but not excessive, quality of life mods are present but restrained, and progression still matters. You should feel tension when travelling, value your gear, and think twice before engaging another survivor.</p>
        <p>We are not trying to reinvent DayZ.</p>
        <p>We are trying to preserve it  while giving players a reason to keep coming back.</p>
        <p>Regular server events add variety without turning the server into an arcade. The goal is to create memorable moments, not constant chaos.</p>
      </SectionBox>

      <SectionBox title="Fair Gameplay">
        <p>Moderation is active and visible.</p>
        <p>We aim for a clean environment where fights are decided by decisions and skill, not exploits.</p>
        <p>Cheating and rule breaking are dealt with quickly.</p>
        <p>We also keep a strict stance against admin or owner abuse. No spawning gear for friends, no hidden advantages, and no interfering with legitimate gameplay.</p>
        <p>If we wouldn’t want it happening to us as players, it won’t happen here.</p>
      </SectionBox>

      <SectionBox title="Our Story">
        <p>We are two long time DayZ players who met through the game and ended up becoming good friends. Over the years we spent a lot of time on official servers dealing with cheaters, and on community servers dealing with biased admins or outright owner abuse.</p>
        <p>Eventually we realised the experience we were looking for didn’t really exist anymore.</p>
        <p>So we decided to build it ourselves.</p>
        <p>Vanilla Renegade is the server we always wanted to play on: fair, grounded, social, and survival focused. A place where the same players keep returning because they enjoy the atmosphere as much as the gameplay.</p>
        <p>We are not trying to be the biggest server.</p>
        <p>We want a consistent community of players who appreciate DayZ in the same way we do.</p>
      </SectionBox>
    </main>
  );
}
