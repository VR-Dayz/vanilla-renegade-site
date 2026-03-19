"use client";

import { useEffect, useState } from "react";

type SortKey =
  | "playtime"
  | "kills"
  | "deaths"
  | "kdratio"
  | "longest_kill"
  | "longest_shot"
  | "suicides";

type Player = {
  rank: number;
  name: string;
  kills: number;
  deaths: number;
  kd: string;
  kdValue: number;
  playTimeSeconds: number;
  longestKill: number;
  longestShot: number;
  suicides: number;
};

type ApiEntry = {
  latest_name?: string;
  kills?: number | string;
  deaths?: number | string;
  playtime?: number | string;
  rank?: number | string;
  kdratio?: number | string;
  longest_kill?: number | string;
  longest_shot?: number | string;
  suicides?: number | string;
};

const columns: {
  key: SortKey;
  label: string;
}[] = [
  { key: "playtime", label: "Time Played" },
  { key: "kills", label: "Kills" },
  { key: "deaths", label: "Deaths" },
  { key: "kdratio", label: "K/D" },
  { key: "longest_kill", label: "Longest Kill" },
  { key: "longest_shot", label: "Longest Shot" },
  { key: "suicides", label: "Suicides" },
];

function formatDuration(totalSeconds: number) {
  const seconds = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${remainingSeconds}s`;
  return `${remainingSeconds}s`;
}

function formatDistance(value: number) {
  return `${value.toFixed(2)}m`;
}

function getArrow(active: boolean, order: "1" | "-1") {
  if (!active) return "↕";
  return order === "-1" ? "↓" : "↑";
}

function getRowStyle(rank: number) {
  if (rank === 1) return "bg-amber-400/10 hover:bg-amber-400/15";
  if (rank === 2) return "bg-slate-300/10 hover:bg-slate-300/15";
  if (rank === 3) return "bg-orange-700/10 hover:bg-orange-700/15";
  return "hover:bg-white/5";
}

function getRankStyle(rank: number) {
  if (rank === 1) return "text-amber-300";
  if (rank === 2) return "text-slate-200";
  if (rank === 3) return "text-orange-400";
  return "text-orange-300";
}

function getMedal(rank: number) {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return null;
}

export default function Page() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("playtime");
  const [order, setOrder] = useState<"1" | "-1">("-1");

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `/api/leaderboard?stat=${sortBy}&order=${order}&limit=100`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const json = await res.json();
        const entries: ApiEntry[] = json?.leaderboard ?? [];

        const mapped: Player[] = entries.map((p, index) => {
          const kills = Number(p.kills ?? 0);
          const deaths = Number(p.deaths ?? 0);
          const playTimeSeconds = Number(p.playtime ?? 0);
          const longestKill = Number(p.longest_kill ?? 0);
          const longestShot = Number(p.longest_shot ?? 0);
          const suicides = Number(p.suicides ?? 0);

          const kdValue =
            typeof p.kdratio !== "undefined"
              ? Number(p.kdratio ?? 0)
              : deaths === 0
              ? kills
              : kills / deaths;

          return {
            rank: index + 1, // ✅ FIXED HERE
            name: p.latest_name ?? "Unknown",
            kills,
            deaths,
            kd: kdValue.toFixed(2),
            kdValue,
            playTimeSeconds,
            longestKill,
            longestShot,
            suicides,
          };
        });

        setPlayers(mapped);
      } catch (err) {
        console.error("Leaderboard load failed:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, [sortBy, order]);

  function handleSort(column: SortKey) {
    if (sortBy === column) {
      setOrder((prev) => (prev === "-1" ? "1" : "-1"));
      return;
    }

    setSortBy(column);
    setOrder("-1");
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 text-zinc-100">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-orange-400">
            Player Leaderboard
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Click a column heading to sort the leaderboard.
          </p>
        </div>

        <div className="text-sm text-zinc-400">
          Sorting by{" "}
          <span className="font-semibold text-orange-300">
            {columns.find((c) => c.key === sortBy)?.label}
          </span>{" "}
          ({order === "-1" ? "highest first" : "lowest first"})
        </div>
      </div>

      <div className="mb-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4">
          <div className="text-sm text-amber-200">1st Place</div>
          <div className="mt-1 text-lg font-bold text-white">
            {players[0]?.name ?? "-"}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-300/30 bg-slate-300/10 p-4">
          <div className="text-sm text-slate-200">2nd Place</div>
          <div className="mt-1 text-lg font-bold text-white">
            {players[1]?.name ?? "-"}
          </div>
        </div>
        <div className="rounded-2xl border border-orange-700/40 bg-orange-700/10 p-4">
          <div className="text-sm text-orange-300">3rd Place</div>
          <div className="mt-1 text-lg font-bold text-white">
            {players[2]?.name ?? "-"}
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-orange-500/20 bg-black/50">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-left">
            <thead className="bg-black/70 text-orange-400">
              <tr>
                <th className="p-4">Rank</th>
                <th className="p-4">Player</th>

                {columns.map((column) => {
                  const active = sortBy === column.key;
                  return (
                    <th key={column.key} className="p-4">
                      <button
                        type="button"
                        onClick={() => handleSort(column.key)}
                        className={`inline-flex items-center gap-2 transition ${
                          active
                            ? "font-semibold text-orange-300"
                            : "text-orange-400 hover:text-orange-300"
                        }`}
                      >
                        <span>{column.label}</span>
                        <span className="text-xs">
                          {getArrow(active, order)}
                        </span>
                      </button>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={9} className="p-6 text-center text-zinc-400">
                    Loading leaderboard...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={9} className="p-6 text-center text-red-400">
                    Failed to load leaderboard: {error}
                  </td>
                </tr>
              ) : players.length === 0 ? (
                <tr>
                  <td colSpan={9} className="p-6 text-center text-zinc-500">
                    No player statistics available yet.
                  </td>
                </tr>
              ) : (
                players.map((player) => {
                  const medal = getMedal(player.rank);

                  return (
                    <tr
                      key={`${player.name}-${player.rank}`}
                      className={`border-t border-orange-500/10 transition ${getRowStyle(
                        player.rank
                      )}`}
                    >
                      <td
                        className={`p-4 font-semibold ${getRankStyle(
                          player.rank
                        )}`}
                      >
                        <span className="inline-flex items-center gap-2">
                          {medal && <span>{medal}</span>}
                          <span>#{player.rank}</span>
                        </span>
                      </td>
                      <td className="p-4 font-medium">{player.name}</td>
                      <td className="p-4">
                        {formatDuration(player.playTimeSeconds)}
                      </td>
                      <td className="p-4">{player.kills}</td>
                      <td className="p-4">{player.deaths}</td>
                      <td className="p-4">{player.kd}</td>
                      <td className="p-4">
                        {formatDistance(player.longestKill)}
                      </td>
                      <td className="p-4">
                        {formatDistance(player.longestShot)}
                      </td>
                      <td className="p-4">{player.suicides}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
