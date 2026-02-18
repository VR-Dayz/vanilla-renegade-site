export const revalidate = 60; // cache for 60 seconds

export async function GET() {
  try {
    // ⬇️ later this becomes your CFTools API URL
    const res = await fetch("https://vanillarenegade.com/mock-leaderboard.json", {
      next: { revalidate: 60 }
    });

    const data = await res.json();

    // sort by kills server-side
    data.result.entries.sort((a: any, b: any) => b.kills - a.kills);

    return Response.json(data);
  } catch (err) {
    return Response.json(
      { error: "Leaderboard unavailable" },
      { status: 500 }
    );
  }
}
