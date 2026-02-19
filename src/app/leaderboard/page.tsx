"use client";

import { useEffect, useState } from "react";

type Player = {
  name: string;
  kills: number;
  deaths: number;
  kd?: number;
  longestLife?: number;
  playtime?: number;
};

export default function Leaderboard() {
  const [players, setPlayers] = useState<Player[]>([]);

  // TEMP MOCK / CURRENT DATA FORMAT
  useEffect(() => {
    const mock: Player[] = [
      { name: "Kovacs", kills: 18, deaths: 7, kd: 2.57 },
      { name: "NorthRoad", kills: 15, deaths: 9, kd: 1.67 },
      { name: "Marauder", kills: 11, deaths: 5, kd: 2.2 },
      { name: "Wanderer", kills: 9, deaths: 8, kd: 1.12 },
      { name: "HeliCrash", kills: 7, deaths: 2, kd: 3.5 },
    ];

    setPlayers(mock);
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 py-20 text-zinc-100">
      <h1 className="text-4xl font-bold text-orange-400 mb-10">
        Player Leaderboard
      </h1>

      <div className="overflow-x-auto bg-black/40 border border-orange-500/20 backdrop-blur-md rounded-2xl">
        <table className="w-full text-left">
          <thead className="text-zinc-400 border-b border-orange-500/20">
            <tr>
              <th className="px-6 py-4">Rank</th>
              <th className="px-6 py-4">Player</th>
              <th className="px-6 py-4">Kills</th>
              <th className="px-6 py-4">Deaths</th>
              <th className="px-6 py-4">K/D</th>
              <th className="px-6 py-4">Longest Life</th>
              <th className="px-6 py-4">Playtime</th>
            </tr>
          </thead>

          <tbody>
            {players.map((p, i) => {
              const kd =
                p.kd !== undefined
                  ? p.kd.toFixed(2)
                  : (p.kills / Math.max(p.deaths, 1)).toFixed(2);

              return (
                <tr
                  key={i}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="px-6 py-4 text-orange-400 font-semibold">
                    #{i + 1}
                  </td>

                  <td className="px-6 py-4">{p.name}</td>

                  <td className="px-6 py-4">{p.kills}</td>

                  <td className="px-6 py-4">{p.deaths}</td>

                  <td className="px-6 py-4">{kd}</td>

                  <td className="px-6 py-4 text-zinc-500">
                    {p.longestLife ? `${p.longestLife}h` : "—"}
                  </td>

                  <td className="px-6 py-4 text-zinc-500">
                    {p.playtime ? `${p.playtime}h` : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-zinc-500 mt-4">
        Additional statistics will appear as they become available.
      </p>
    </main>
  );
}

