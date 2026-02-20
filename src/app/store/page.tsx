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
        <div className="glass p-6">
          <h2 className="text-2xl font-semibold">Bronze</h2>
          <p className="accent font-semibold mt-1">€8.99 / month</p>

          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>Priority Queue Access</li>
            <li>Join the server faster during peak times</li>
          </ul>
        </div>

        {/* Silver */}
        <div className="glass p-6">
          <h2 className="text-2xl font-semibold">Silver</h2>
          <p className="accent font-semibold mt-1">€12.99</p>

          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>Priority Queue Access</li>
            <li>National Flag + Armband</li>
          </ul>
        </div>

        {/* Gold */}
        <div className="glass p-6">
          <h2 className="text-2xl font-semibold">Gold</h2>
          <p className="accent font-semibold mt-1">€14.99</p>

          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>Priority Queue Access</li>
            <li>National Flag + Armband</li>
            <li>Custom Vehicle Skin (requires owned vehicle)</li>
          </ul>
        </div>
      </div>

      {/* Extras */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold title-glow">Extras</h2>

        <div className="mt-6 grid gap-8 md:grid-cols-2">

          <div className="glass p-6">
            <h3 className="text-xl font-semibold">Lifetime National Flag + Armband</h3>
            <p className="accent font-semibold mt-1">€8.99</p>
            <p className="mt-3 text-zinc-300">
              Represent your nation permanently across all wipes.
            </p>
          </div>

          <div className="glass p-6">
            <h3 className="text-xl font-semibold">Custom Vehicle Skin</h3>
            <p className="accent font-semibold mt-1">€9.99</p>
            <p className="mt-3 text-zinc-300">
              Apply a custom cosmetic skin to a vehicle you already own.
            </p>
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

      {/* Monetisation Disclaimer */}
      <div className="mt-16 glass p-6 text-sm text-zinc-300 max-w-3xl space-y-4">
        <h3 className="text-lg font-semibold title-glow">Monetisation Disclaimer</h3>

        <p>
          Vanilla Renegade participates in community monetisation under the Bohemia Interactive server monetisation guidelines.
        </p>

        <p>
          Any supporter packages, priority access, or cosmetic rewards are optional and exist only to help cover the running costs of the server, including hosting, maintenance, and development. They do not provide competitive gameplay advantages and will never impact fairness, progression, or combat balance.
        </p>

        <p>
          All players have equal access to gameplay features regardless of financial contribution. Purchasing a package does not grant administrative power, special protection, or influence over moderation decisions.
        </p>

        <p>
          Vanilla Renegade is a community-run server and is not affiliated with, endorsed by, or sponsored by Bohemia Interactive.
        </p>

        <p>
          By supporting the server, you are helping maintain the world and community, not purchasing power within it.
        </p>
      </div>

    </main>
  );
}
