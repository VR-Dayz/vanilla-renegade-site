

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl bg-black/40 border border-white/10 p-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-3 text-zinc-200/85 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function RulesPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-5xl px-4 py-16 space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold">Server Rules</h1>
        <p className="text-zinc-300/80">
          These rules exist to keep the experience fair, immersive, and enjoyable
          for everyone. Staff decisions are final.
        </p>

        {/* DISCORD */}
        <Section title="Discord Conduct">
          <ul className="list-disc pl-6 space-y-2">
            <li>No family insults or excessive personal abuse.</li>
            <li>No hate speech, racism, extremist ideology, politics, or religion.</li>
            <li>Keep language respectful in public channels.</li>
            <li>No meta gaming or sharing in game locations.</li>
            <li>Do not post base or stash locations  even your own.</li>
            <li>Arrange meetups in DMs or voice channels only.</li>
          </ul>
        </Section>

        {/* GENERAL */}
        <Section title="General Community Rules">
          <ul className="list-disc pl-6 space-y-2">
            <li>Respect staff and other players.</li>
            <li>No stream sniping.</li>
            <li>Maximum 6 players online per group.</li>
            <li>No doxxing or sharing personal information.</li>
            <li>No server advertising.</li>
            <li>No cheats, hacks, or unfair software (filters allowed).</li>
            <li>No exploiting bugs  report them.</li>
            <li>No alternate accounts without approval.</li>
          </ul>
        </Section>

        {/* BASE BUILDING */}
        <Section title="Base Building">
          <ul className="list-disc pl-6 space-y-2">
            <li>Bases must have a flag within 5 days.</li>
            <li>No coastal bases or restricted zone building.</li>
            <li>Stay 200m away from military areas.</li>
            <li>Max 15 locked doors per base (1 garage door).</li>
            <li>No clipping, overlapping, or unraidable loot rooms.</li>
            <li>One base per group (one nearby garage allowed).</li>
            <li>Max two watchtower height.</li>
            <li>No stacked tents.</li>
          </ul>
        </Section>

        {/* RAIDING */}
        <Section title="Raiding">
          <ul className="list-disc pl-6 space-y-2">
            <li>Weekend raids only.</li>
            <li>Gate entry only,  no destroying structures.</li>
            <li>No base takeovers or recoding.</li>
            <li>No glitching into bases.</li>
            <li>No logging out inside bases.</li>
            <li>No dismantling bases.</li>
            <li>No destroying or despawning loot.</li>
            <li>48 hour cooldown after successful raid.</li>
          </ul>
        </Section>

        {/* VEHICLES */}
        <Section title="Vehicles">
          <ul className="list-disc pl-6 space-y-2">
            <li>Maximum 2 vehicles per group.</li>
            <li>Extra vehicles must remain usable for others.</li>
            <li>No refunds for bugged or lost vehicles.</li>
            <li>Vehicles are not protected assets.</li>
          </ul>
        </Section>

        {/* FAIR PLAY */}
        <Section title="Fair Play">
          <ul className="list-disc pl-6 space-y-2">
            <li>Recent VAC bans are not allowed.</li>
            <li>No ghosting or login advantage abuse.</li>
            <li>No abusing unintended mechanics.</li>
            <li>Report suspected cheaters privately.</li>
          </ul>
        </Section>

        {/* COMBAT LOGGING */}
        <Section title="Combat Logging">
          <ul className="list-disc pl-6 space-y-2">
            <li>You are in combat after shots fired or during a raid.</li>
            <li>Wait 5 minutes after last contact before logout.</li>
            <li>Logging out during raids counts as combat logging.</li>
          </ul>
        </Section>

        {/* SUPPORT */}
        <Section title="Support & Compensation">
          <ul className="list-disc pl-6 space-y-2">
            <li>Admins have final say in disputes.</li>
            <li>Video evidence required for compensation.</li>
            <li>No compensation for despawns or dropped items.</li>
            <li>Do not DM admins  use tickets.</li>
            <li>Provide evidence immediately when reporting.</li>
          </ul>
        </Section>

      </main>
    </SiteShell>
  );
}
