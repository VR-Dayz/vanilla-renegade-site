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
    });

    const text = await res.text();

    return NextResponse.json({
      ok: res.ok,
      status: res.status,
      body: text,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Fetch crashed before response",
        message: error?.message,
        causeMessage: error?.cause?.message,
        causeCode: error?.cause?.code,
        causeName: error?.cause?.name,
        cause: String(error?.cause),
        url,
      },
      { status: 500 }
    );
  }
}
