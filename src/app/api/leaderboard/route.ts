import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const apiKey = process.env.CFTOOLS_API_KEY;
  const serverId = process.env.CFTOOLS_SERVER_ID;

  if (!apiKey || !serverId) {
    return NextResponse.json(
      { error: "Missing CF Tools environment variables" },
      { status: 500 }
    );
  }

  const url = `https://api.cftools.cloud/v1/server/${serverId}/leaderboard`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
        "User-Agent": "VanillaRenegadeLeaderboard/1.0",
      },
      next: { revalidate: 60 }, // ✅ cache for 60 seconds
    });

    const text = await res.text();

    if (!res.ok) {
      console.error("CF Tools error:", res.status, text);

      return NextResponse.json(
        {
          error: "CF Tools request failed",
          upstreamStatus: res.status,
          upstreamBody: text,
        },
        { status: 500 }
      );
    }

    const data = JSON.parse(text);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Leaderboard route crashed:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Leaderboard unavailable",
      },
      { status: 500 }
    );
  }
}
