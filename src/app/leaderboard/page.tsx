"use client";

import { useEffect, useState } from "react";

type Player = {
  rank: number;
  name: string;
  kills: number;
  deaths: number;
  kd: string;
};

type ApiEntry = {
  name?: string;
  kills?: number | string;
  deaths?: number | string;
};

export default function Page() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const res = await fetch("/api/leaderboard");
        const json = await res.json();

        const entries: ApiEntry[] = json?.result?.entries ?? [];

        const mapped: Player[] = entries
          .map((p) => {
            const kills = Number(p.kills ?? 0);
            const deaths = Number(p.deaths ?? 0);

            return {
              name: p.name ?? "Unknown",
              kills,
              deaths,
              kd: deaths === 0 ? kills.toFixed(2) : (kills / deaths).toFixed(2),
              rank: 0,
            };
          })
          .sort((a, b) => b.kills - a.kills)
          .map((p, index) => ({
            ...p,
            rank: index + 1,
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
    <div className="mx-auto max-w-6xl px-4 py-16 text-zinc-100">
      <h1 className="text-4xl font-bold text-orange-400 mb-10">
        Player Leaderboard
}
