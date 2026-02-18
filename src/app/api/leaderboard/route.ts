import { NextResponse } from "next/server";

export async function GET() {
  const mockData = {
    result: {
      entries: [
        { name: "FreshSpawnSlayer", kills: 48, deaths: 12 },
        { name: "BeanBandit", kills: 33, deaths: 4 },
        { name: "ColdCoast", kills: 21, deaths: 9 },
        { name: "PavlovoPatient", kills: 17, deaths: 17 },
        { name: "ProbablyFriendly", kills: 9, deaths: 22 }
      ]
    }
  };

  return NextResponse.json(mockData, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300"
    }
  });
}
