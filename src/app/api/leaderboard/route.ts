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
    console.log("Calling CF Tools URL:", url);

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
        "User-Agent": "VanillaRenegadeLeaderboard/1.0",
      },
      next: { revalidate: 60 },
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

    return new NextResponse(text, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Leaderboard route crashed:", error);

    return NextResponse.json(
      {
        error: "Fetch crashed before response",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
