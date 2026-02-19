import { NextResponse } from "next/server";

const API_KEY = process.env.CFTOOLS_API_KEY!;
const SERVER_ID = process.env.CFTOOLS_SERVER_ID!;

export async function GET() {
  try {
    const res = await fetch(
      `https://api.cftools.cloud/v1/server/${SERVER_ID}/leaderboard`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        next: { revalidate: 60 }
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: "CF Tools request failed" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);

  } catch {
    return NextResponse.json({ error: "Leaderboard unavailable" }, { status: 500 });
  }
}
