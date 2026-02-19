"use client";

import { useEffect, useState } from "react";

type Player = {
  rank: number;
  name: string;
  kills: number;
  deaths: number;
  kd: string;
};

export default function Leaderboard() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const res = await fetch("/api/leaderboard");
        const json = await res.json();

        const entries = json?.result?.entries || [];

        const mapped = entries
          .map((p: any) => ({
            name: p.name ?? "Unknown",
            kills: Number(p.kills ?? 0),
            deaths: Number(p.deaths ?? 0),
            kd:
              Number(p.deaths) === 0
                ? Number(p.kills).toFixed(2)
                : (Number(p.kills) / Number(p.deaths)).toFixed(2),
          }))
          .sort((a: any, b: any) => b.kills - a.kills)
          .map((p: any, index: number) => ({
            rank: index + 1,
            ...p,
          }));

        setPlayers(mapped);
      } catch (err) {
        console.error("Leaderboard load failed:", err);
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-zinc-100">
      <h1 className="text-4xl font-bold text-orange-400 mb-10">
        Player Leaderboard
      </h1>

      <div className="bg-black/50 border border-orange-500/20 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-black/70 text-orange-400">
            <tr>
              <th className="p-4">Rank</th>
              <th className="p-4">Player</th>
              <th className="p-4">Kills</th>
              <th className="p-4">Deaths</th>
              <th className="p-4">K/D</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-zinc-400">
                  Loading leaderboard...
                </td>
              </tr>
            )}

            {!loading && players.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-zinc-500">
                  No player statistics available yet.
                </td>
              </tr>
            )}

            {!loading &&
              players.map((p) => (
                <tr
                  key={p.rank}
                  className="border-t border-orange-500/10 hover:bg-white/5 transition"
                >
                  <td className="p-4 font-semibold text-orange-300">#{p.rank}</td>
                  <td className="p-4">{p.name}</td>
                  <td className="p-4">{p.kills}</td>
                  <td className="p-4">{p.deaths}</td>
                  <td className="p-4">{p.kd}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-zinc-500 mt-4">
        Statistics update periodically.
      </p>
    </main>
  );
}
