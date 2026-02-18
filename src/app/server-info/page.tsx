

export default function ServerInfo() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-bold">Server Info</h1>
        <p className="mt-3 text-zinc-200/80">
          Learn what Vanilla Renegade is about and how the server is managed.
        </p>

        {/* Philosophy */}
        <section className="mt-10 rounded-2xl bg-black/40 border border-white/10 p-6">
          <h2 className="text-2xl font-semibold">Server Philosophy</h2>
          <p className="mt-4 text-zinc-200/85 leading-relaxed">
            Vanilla Renegade aims to provide an experience very close to official
            DayZ servers, but with active moderation and support from our team.
            Our goal is a fair environment where players can enjoy survival
            without griefing, exploits, or administrative absence.
          </p>
          <p className="mt-4 text-zinc-200/85 leading-relaxed">
            We do <b>not</b> run gameplay altering features such as traders,
            helicopters, or unrealistic base systems. We keep the experience as
            close to vanilla DayZ as possible while ensuring stability and fair play.
          </p>
        </section>

        {/* Server Features */}
        <section className="mt-10 rounded-2xl bg-black/40 border border-white/10 p-6">
          <h2 className="text-2xl font-semibold">Server Features</h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-200/85">
            <li>Group limit: 6 players online at a time</li>
            <li>Weekend raiding only</li>
            <li>1PP only for immersive gameplay</li>
            <li>Regular hosted events</li>
            <li>Convenience focused quality of life mods</li>
          </ul>
        </section>

        {/* Wipe Policy */}
        <section className="mt-10 rounded-2xl bg-black/40 border border-white/10 p-6">
          <h2 className="text-2xl font-semibold">Wipe Policy</h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-200/85">
            <li>Wipes occur approximately every <b>6 weeks to 2 months</b></li>
            <li>If population declines or gameplay stagnates, an earlier wipe may be scheduled</li>
            <li>Major DayZ updates may also require a wipe</li>
            <li>All wipes are discussed and announced in advance via Discord</li>
          </ul>
        </section>

        {/* Performance */}
        <section className="mt-10 rounded-2xl bg-black/40 border border-white/10 p-6">
          <h2 className="text-2xl font-semibold">Performance & Stability</h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-200/85">
            <li>Dedicated hardware</li>
            <li>High-performance server provider</li>
            <li>Automatic restarts every 4 hours</li>
            <li>Actively monitored performance</li>
          </ul>
        </section>

        {/* Mods */}
        <section className="mt-14">
          <h2 className="text-3xl font-semibold">Mods & Gameplay Adjustments</h2>
          <p className="mt-3 text-zinc-300/80">
            Our modpack focuses on improving gameplay quality without changing
            the core DayZ survival experience.
          </p>

          <div className="mt-8 space-y-6">

            <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">VR Mod Pack</h3>
              <p className="mt-2 text-zinc-200/85">
                Builder items combined into one package so players don’t need to download multiple separate mods.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">CodeLock</h3>
              <p className="mt-2 text-zinc-200/85">
                Allows easier and safer base access for groups.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">AutoRun</h3>
              <p className="mt-2 text-zinc-200/85">
                Travel long distances without constantly holding movement keys.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Party / Group System</h3>
              <p className="mt-2 text-zinc-200/85">
                Create a group of up to 6 players and share map positions and pings.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Live Map Support</h3>
              <p className="mt-2 text-zinc-200/85">
                Press M to see your in-game position.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Bullet Stacking</h3>
              <p className="mt-2 text-zinc-200/85">
                Increased ammo stacks  50 for higher calibers and 100 for lower calibers.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Building Improvements</h3>
              <p className="mt-2 text-zinc-200/85">
                Smaller doors for bases and large gates for vehicles and trucks.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Bunker Access Improvements</h3>
              <p className="mt-2 text-zinc-200/85">
                Punch card bunker containing the highest tier loot.
              </p>
            </div>

            {/* World Events */}
            <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">World Event Mods</h3>
              <p className="mt-2 text-zinc-200/85">
                Adds activity while keeping the survival experience intact.
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-zinc-200/85">
                <li>
                  <b>Airdrops</b> Random locations with rotating loot crates including
                  weapons, medical supplies, and basebuilding materials.
                </li>
                <li>
                  <b>King of the Hill</b>  Capture the area and earn high tier loot
                  stored inside a sea chest.
                </li>
              </ul>
            </div>

          </div>
        </section>
      </main>
    </SiteShell>
  );
}
