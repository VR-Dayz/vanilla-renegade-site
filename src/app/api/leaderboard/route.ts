import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type SortKey =
  | "playtime"
  | "kills"
  | "deaths"
  | "kdratio"
  | "longest_kill"
  | "longest_shot"
  | "suicides";

const ALLOWED_STATS: SortKey[] = [
  "playtime",
  "kills",
  "deaths",
  "kdratio",
  "longest_kill",
  "longest_shot",
  "suicides",
];

function isValidSortKey(value: string): value is SortKey {
  return ALLOWED_STATS.includes(value as SortKey);
}

async function getCFToolsToken() {
  const appId = process.env.CFTOOLS_APP_ID;
  const appSecret = process.env.CFTOOLS_APP_SECRET;

  if (!appId || !appSecret) {
    throw new Error("Missing CFTOOLS_APP_ID or CFTOOLS_APP_SECRET");
  }

  const authRes = await fetch("https://data.cftools.cloud/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": appId,
      Accept: "application/json",
    },
    body: JSON.stringify({
      application_id: appId,
      secret: appSecret,
    }),
    cache: "no-store",
  });

  const authText = await authRes.text();

  if (!authRes.ok) {
    throw new Error(`Auth failed: ${authText}`);
  }

  const authJson = JSON.parse(authText);

  const token =
    authJson?.token ??
    authJson?.data?.token ??
    authJson?.result?.token;

  if (!token) {
    throw new Error(`No token returned: ${authText}`);
  }

  return token;
}

export async function GET(req: NextRequest) {
  const appId = process.env.CFTOOLS_APP_ID;
  const serverId = process.env.CFTOOLS_SERVER_ID;

  if (!appId || !serverId) {
    return NextResponse.json(
      { error: "Missing CFTOOLS_APP_ID or CFTOOLS_SERVER_ID" },
      { status: 500 }
    );
  }

  const searchParams = req.nextUrl.searchParams;

  const statParam = searchParams.get("stat") ?? "playtime";
  const orderParam = searchParams.get("order") ?? "-1";
  const limitParam = searchParams.get("limit") ?? "100";

  const stat = isValidSortKey(statParam) ? statParam : "playtime";
  const order = orderParam === "1" ? "1" : "-1";

  let limit = Number(limitParam);
  if (!Number.isFinite(limit) || limit <= 0) {
    limit = 100;
  }
  limit = Math.min(limit, 100);

  try {
    const token = await getCFToolsToken();

    const url = new URL(
      `https://data.cftools.cloud/v1/server/${serverId}/leaderboard`
    );
    url.searchParams.set("stat", stat);
    url.searchParams.set("order", order);
    url.searchParams.set("limit", String(limit));

    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "User-Agent": appId,
      },
      next: { revalidate: 60 },
    });

    const text = await res.text();

    if (!res.ok) {
      return NextResponse.json(
        {
          error: "CF Tools request failed",
          upstreamStatus: res.status,
          upstreamBody: text,
          requested: {
            stat,
            order,
            limit,
          },
        },
        { status: 500 }
      );
    }

    return new NextResponse(text, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Leaderboard unavailable",
      },
      { status: 500 }
    );
  }
}
