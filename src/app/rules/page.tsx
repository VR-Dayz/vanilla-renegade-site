export default function RulesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-12 text-zinc-100">

      <h1 className="text-5xl font-bold">Vanilla Renegade Rules</h1>

      {/* Discord Rules */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Discord Rules</h2>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li>No family insults, harassment, or hate speech</li>
          <li>No politics, religion, or extremist ideology discussion</li>
          <li>No meta gaming or posting in-game activity</li>
          <li>No base or stash locations</li>
          <li>No meet-up requests in public channels</li>
        </ul>
      </section>

      {/* General Rules */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">General Server Rules</h2>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li>Respect staff and players</li>
          <li>No racism, harassment, or doxxing</li>
          <li>No cheating, scripting, or exploiting bugs</li>
          <li>Group size limit: 6 online players</li>
          <li>No alt accounts or account sharing</li>
          <li>Staff decisions are final</li>
        </ul>
      </section>

      {/* Base Building */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Base Building</h2>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li>1 base per group</li>
          <li>Maximum 15 locked doors</li>
          <li>No building in military, police, medical, or coastal zones</li>
          <li>Flag required within 5 days</li>
          <li>No clipping, overlapping, or unraidable loot rooms</li>
        </ul>
      </section>

      {/* Raid Rules */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Raid Rules</h2>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li>Weekend raiding only (Fri 16:00 → Sun 23:59 CET)</li>
          <li>Gate-only raiding</li>
          <li>No base takeovers</li>
          <li>No glitching or logging out inside bases</li>
          <li>48 hour cooldown after successful raid</li>
        </ul>
      </section>

      {/* Vehicles */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Vehicles</h2>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li>Max 2 vehicles per team</li>
          <li>No refunds for bugged vehicles</li>
          <li>Vehicles are never protected</li>
        </ul>
      </section>

      {/* Combat Logging */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Combat Logging</h2>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li>5 minute timer after last contact</li>
          <li>Logging during raid = death</li>
          <li>Ghosting is forbidden</li>
        </ul>
      </section>

      {/* Compensation */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Compensation & Support</h2>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li>Video proof required</li>
          <li>No proof = no support</li>
          <li>No compensation for despawns, restarts, or dropped loot</li>
        </ul>
      </section>

    </main>
  );
}
