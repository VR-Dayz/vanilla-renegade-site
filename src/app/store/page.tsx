export default function Store() {
  return (
    <main className="section text-zinc-100">
      <h1 className="text-4xl font-bold title-glow">Server Store</h1>

      <p className="mt-6 text-zinc-300 max-w-3xl">
        Support Vanilla Renegade while receiving optional cosmetic perks and queue priority.
        All purchases are non-competitive and provide no gameplay advantage.
      </p>

      {/* Packages */}
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {/* Bronze */}
        <div className="glass p-6 border border-amber-700/40 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(180,83,9,0.15)]">
          <h2 className="text-2xl font-semibold text-amber-500">Bronze</h2>
          <p className="accent font-semibold mt-1">€8.99 / month</p>

          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>Priority Queue Access</li>
            <li>Join the server faster during peak times</li>
          </ul>
        </div>

        {/* Silver */}
        <div className="glass p-6 border border-zinc-400/40 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(200,200,200,0.15)]">
          <h2 className="text-2xl font-semibold text-zinc-300">Silver</h2>
          <p className="accent font-semibold mt-1">€12.99</p>

          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>Priority Queue Access</li>
            <li>National Flag + Armband</li>
          </ul>
        </div>

        {/* Gold */}
        <div className="glass relative p-6 border border-yellow-500/50 ring-1 ring-yellow-400/20 transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(250,204,21,0.22)]">
          <div className="absolute -top-3 right-4 rounded-full border border-yellow-300/40 bg-yellow-400 text-black text-xs font-bold px-3 py-1 shadow-lg">
            Most Popular
          </div>

          <h2 className="text-2xl font-semibold text-yellow-400">Gold</h2>
          <p className="accent font-semibold mt-1">€14.99</p>

          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>Priority Queue Access</li>
            <li>National Flag + Armband</li>
            <li>Custom Vehicle</li>
          </ul>
        </div>
      </div>

      {/* Extras */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold title-glow">Extras</h2>

        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {/* Flag */}
          <div className="glass p-6 transition duration-300 hover:shadow-[0_0_16px_rgba(255,255,255,0.06)]">
            <h3 className="text-xl font-semibold">Lifetime National Flag + Armband</h3>
            <p className="accent font-semibold mt-1">€8.99</p>
            <p className="mt-3 text-zinc-300">
              Represent your nation permanently across all wipes.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <img
                src="/armbands.png"
                alt="National flag armband examples"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Custom Clan Flag */}
          <div className="glass p-6 border border-[rgb(var(--vr-accent))]/30 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(0,255,150,0.15)]">
            <h3 className="text-xl font-semibold text-[rgb(var(--vr-accent))]">Custom Clan Flag</h3>
            <p className="accent font-semibold mt-1">£14.99</p>

            <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
              Get your custom flag today. Provide your own design or let us create one for you.
              Our team will bring your vision to life and ensure your flag stands out wherever it is displayed.
            </p>
          </div>

          {/* Custom Vehicle */}
          <div className="glass p-6 transition duration-300 hover:shadow-[0_0_16px_rgba(255,255,255,0.06)]">
            <h3 className="text-xl font-semibold">Custom Vehicle</h3>
            <p className="accent font-semibold mt-1">€9.99</p>
            <p className="mt-3 text-zinc-300">Must already own a vehicle.</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <img
                src="/Customveh.png"
                alt="Custom vehicle examples"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Payments */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold title-glow">Purchase / Payment</h2>
        <p className="mt-3 text-zinc-300">
          We accept PayPal, credit cards, and other supported payment methods.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=WAHEZG98JQP7G"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[rgb(var(--vr-accent))] hover:bg-[rgb(var(--vr-highlight))] text-black px-6 py-3 font-semibold transition"
          >
            Pay with PayPal
          </a>

          <a
            href="https://buymeacoffee.com/vanillarenegade"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[rgb(var(--vr-accent))] hover:bg-[rgb(var(--vr-highlight))] text-black px-6 py-3 font-semibold transition"
          >
            Other Payment Methods
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-16 glass p-6 text-sm text-zinc-300 max-w-3xl space-y-4">
        <h3 className="text-lg font-semibold title-glow">Monetisation Disclaimer</h3>

        <p>
          Vanilla Renegade participates in community monetisation under the Bohemia Interactive server monetisation guidelines.
        </p>

        <p>
          Any supporter packages, priority access, or cosmetic rewards are optional and exist only to help cover the running costs of the server.
          They do not provide competitive gameplay advantages.
        </p>

        <p>All players have equal access regardless of contribution.</p>

        <p>Vanilla Renegade is not affiliated with Bohemia Interactive.</p>
      </div>
    </main>
  );
}
