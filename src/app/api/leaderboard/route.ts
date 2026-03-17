import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.CFTOOLS_API_KEY;
  const serverId = process.env.CFTOOLS_SERVER_ID;

  if (!apiKey || !serverId) {
    return NextResponse.json(
      { error: "Missing CF Tools environment variables" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://api.cftools.cloud/v1/server/${serverId}/leaderboard`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        next: { revalidate: 60 },
      }
    );

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

    const raw = JSON.parse(text);

    const entries =
      raw?.result?.entries ??
      raw?.entries ??
      raw?.players ??
      [];

    return NextResponse.json({
      result: {
        entries,
      },
    });
  } catch (error) {
    console.error("Leaderboard unavailable:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Leaderboard unavailable",
      },
      { status: 500 }
    );
  }
}
