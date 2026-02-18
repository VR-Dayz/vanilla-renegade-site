export default function Donate() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-zinc-100">
      <h1 className="text-4xl font-bold">Support the Server</h1>

      <p className="mt-6 text-zinc-300">
        Running Vanilla Renegade costs real money every month. Donations help
        keep the server online, improve performance, and fund future upgrades.
      </p>

      <div className="mt-10 space-y-4">
        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">Why donate?</h2>
          <p className="mt-2 text-zinc-300">
            Donations support hosting costs, maintenance, and development.
            They never provide gameplay advantages.
          </p>
        </div>

        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">Fair Play Policy</h2>
          <p className="mt-2 text-zinc-300">
            Vanilla Renegade will never be pay-to-win. All donations are
            cosmetic or supportive only.
          </p>
        </div>
      </div>
    </main>
  );
}
