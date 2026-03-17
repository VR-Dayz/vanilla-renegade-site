"use client";

import { useEffect, useState } from "react";

type Player = {
  rank: number;
  name: string;
  kills: number;
  deaths: number;
  kd: string;
  playTimeSeconds: number;
  longestLifeSeconds: number;
};

type ApiEntry = {
  name?: string;
  kills?: number | string;
  deaths?: number | string;
  playTimeSeconds?: number | string;
  longestLifeSeconds?: number | string;
};

function formatDuration(totalSeconds: number) {
  const seconds = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${remainingSeconds}s`;
  return `${remainingSeconds}s`;
}

export default function Page() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const res = await fetch("/api/leaderboard", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const json = await res.json();

        const entries: ApiEntry[] =
          json?.result?.entries ??
          json?.entries ??
          json?.players ??
          [];

        const mapped: Player[] = entries
          .map((p) => {
            const kills = Number(p.kills ?? 0);
            const deaths = Number(p.deaths ?? 0);
            const playTimeSeconds = Number(p.playTimeSeconds ?? 0);
            const longestLifeSeconds = Number(p.longestLifeSeconds ?? 0);

            return {
              rank: 0,
              name: p.name ?? "Unknown",
              kills,
              deaths,
              playTimeSeconds,
              longestLifeSeconds,
              kd: deaths === 0 ? kills.toFixed(2) : (kills / deaths).toFixed(2),
            };
          })
          .sort((a, b) => b.playTimeSeconds - a.playTimeSeconds)
          .map((player, index) => ({
            ...player,
            rank: index + 1,
          }));

        setPlayers(mapped);
      } catch (err) {
        console.error("Leaderboard load failed:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 text-zinc-100">
      <h1 className="mb-10 text-4xl font-bold text-orange-400">
        Player Leaderboard
      </h1>

      <div className="overflow-hidden rounded-2xl border border-orange-500/20 bg-black/50">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead className="bg-black/70 text-orange-400">
              <tr>
                <th className="p-4">Rank</th>
                <th className="p-4">Player</th>
                <th className="p-4">Time Played</th>
                <th className="p-4">Longest Life</th>
                <th className="p-4">Kills</th>
                <th className="p-4">Deaths</th>
                <th className="p-4">K/D</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-zinc-400">
                    Loading leaderboard...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-red-400">
                    Failed to load leaderboard: {error}
                  </td>
                </tr>
              ) : players.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-zinc-500">
                    No player statistics available yet.
                  </td>
                </tr>
              ) : (
                players.map((player) => (
                  <tr
                    key={`${player.name}-${player.rank}`}
                    className="border-t border-orange-500/10 transition hover:bg-white/5"
                  >
                    <td className="p-4 font-semibold text-orange-300">
                      #{player.rank}
                    </td>
                    <td className="p-4 font-medium">{player.name}</td>
                    <td className="p-4">
                      {formatDuration(player.playTimeSeconds)}
                    </td>
                    <td className="p-4">
                      {formatDuration(player.longestLifeSeconds)}
                    </td>
                    <td className="p-4">{player.kills}</td>
                    <td className="p-4">{player.deaths}</td>
                    <td className="p-4">{player.kd}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-4 text-sm text-zinc-500">
        Ranked by total time played in the server.
      </p>
    </div>
  );
}
