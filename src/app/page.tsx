export default function Store() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 space-y-8 text-zinc-100">
      <h1 className="text-4xl font-bold">Supporter Store</h1>

      <p className="text-zinc-300">
        Donations help keep the Vanilla Renegade server running and improving.
        All perks are cosmetic or quality of life only. No pay-to-win features.
      </p>

      <section className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">Supporter Rank</h2>
          <p className="mt-2 text-zinc-300">
            Help support the server and receive supporter recognition in Discord.
          </p>
        </div>

        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">Future Perks</h2>
          <p className="mt-2 text-zinc-300">
            Cosmetic perks and quality of life features may be added later.
          </p>
        </div>

      </section>

      <div className="mt-8">
        <a
          href="https://discord.gg/D6JCuHnWTw"
          target="_blank"
          className="rounded-full bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 font-semibold transition"
        >
          Visit Discord Store Channel
        </a>
      </div>
    </main>
  );
}
