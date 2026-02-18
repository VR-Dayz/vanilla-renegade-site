"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";

type Player = {
  name: string;
  kills: number;
  deaths: number;
};

export default function LeaderboardPage() {
  const [players, setPlayers] = useState<Player[]>([]);

  async function loadLeaderboard() {
    try {
      const res = await fetch("/api/leaderboard", { cache: "no-store" });
      const data = await res.json();

      if (!data?.result?.entries) return;

      const sorted = data.result.entries.sort(
        (a: Player, b: Player) => b.kills - a.kills
      );

      setPlayers(sorted);
    } catch (err) {
      console.error("Failed to load leaderboard:", err);
    }
  }

  useEffect(() => {
    loadLeaderboard();
  }, []);

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Vanilla Renegade Leaderboard</h1>

      <table
        style={{
          margin: "auto",
          width: "80%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Kills</th>
            <th>Deaths</th>
            <th>K/D</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p, i) => {
            const kd = (p.kills / Math.max(1, p.deaths)).toFixed(2);
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{p.name}</td>
                <td>{p.kills}</td>
                <td>{p.deaths}</td>
                <td>{kd}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
