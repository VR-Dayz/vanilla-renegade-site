export default function RulesPage() {
  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <section className="bg-black/60 border border-orange-500/25 backdrop-blur-md rounded-2xl p-7 space-y-4 shadow-xl">
      <h2 className="text-2xl font-semibold text-orange-400">{title}</h2>
      <ul className="list-disc pl-6 space-y-2 text-zinc-300 leading-relaxed">
        {children}
      </ul>
    </section>
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-20 space-y-10 text-zinc-100">

      <h1 className="text-4xl md:text-5xl font-bold text-orange-400 text-center">
        Vanilla Renegade Rules
      </h1>

      <Section title="Discord Rules">
        <li>No family insults, harassment, or hate speech</li>
        <li>No politics, religion, or extremist ideology discussion</li>
        <li>No meta gaming or posting in-game activity</li>
        <li>No base or stash locations</li>
        <li>No meet-up requests in public channels</li>
      </Section>

      <Section title="General Server Rules">
        <li>Respect staff and players</li>
        <li>No racism, harassment, or doxxing</li>
        <li>No cheating, scripting, or exploiting bugs</li>
        <li>Group size limit: 6 online players</li>
        <li>No alt accounts or account sharing</li>
        <li>Staff decisions are final</li>
      </Section>

      <Section title="Base Building">
        <li>1 base per group</li>
        <li>Maximum 15 locked doors</li>
        <li>No building in military, police, medical, or coastal zones</li>
        <li>Flag required within 5 days</li>
        <li>No clipping, overlapping, or unraidable loot rooms</li>
      </Section>

      <Section title="Raid Rules">
        <li>Weekend raiding only (Fri 16:00 → Sun 23:59 CET)</li>
        <li>Gate-only raiding</li>
        <li>No base takeovers</li>
        <li>No glitching or logging out inside bases</li>
        <li>48 hour cooldown after successful raid</li>
      </Section>

      <Section title="Vehicles">
        <li>Max 2 vehicles per team</li>
        <li>No refunds for bugged vehicles</li>
        <li>Vehicles are never protected</li>
      </Section>

      <Section title="Combat Logging">
        <li>5 minute timer after last contact</li>
        <li>Logging during raid = death</li>
        <li>Ghosting is forbidden</li>
      </Section>

      <Section title="Compensation & Support">
        <li>Video proof required</li>
        <li>No proof = no support</li>
        <li>No compensation for despawns, restarts, or dropped loot</li>
      </Section>

    </main>
  );
}
