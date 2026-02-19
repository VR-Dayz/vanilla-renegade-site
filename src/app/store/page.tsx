export default function Store() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 text-zinc-100">
      <h1 className="text-4xl font-bold">Server Store</h1>

      <p className="mt-6 text-zinc-300 max-w-3xl">
        Support Vanilla Renegade while receiving optional cosmetic perks and queue priority.
        All purchases are non-competitive and provide no gameplay advantage.
      </p>

      {/* Packages */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">

        {/* Bronze */}
        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold">Bronze</h2>
          <p className="text-orange-400 font-semibold mt-1">€8.99 / month</p>

          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>Priority Queue Access</li>
            <li>Join the server faster during peak times</li>
          </ul>
        </div>

        {/* Silver */}
        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold">Silver</h2>
          <p className="text-orange-400 font-semibold mt-1">€12.99</p>

          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>Priority Queue Access</li>
            <li>National Flag + Armband</li>
          </ul>
        </div>

        {/* Gold */}
        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold">Gold</h2>
          <p className="text-orange-400 font-semibold mt-1">€14.99</p>

          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>Priority Queue Access</li>
            <li>National Flag + Armband</li>
            <li>Custom Vehicle Skin (requires owned vehicle)</li>
          </ul>
        </div>
      </div>

      {/* Extras */}
      <div className="mt-14">
        <h2 className="text-2xl font-semibold">Extras</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">Lifetime National Flag + Armband</h3>
            <p className="text-orange-400 font-semibold mt-1">€8.99</p>
            <p className="mt-3 text-zinc-300">
              Represent your nation permanently across all wipes.
            </p>
          </div>

          <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">Custom Vehicle Skin</h3>
            <p className="text-orange-400 font-semibold mt-1">€9.99</p>
            <p className="mt-3 text-zinc-300">
              Apply a custom cosmetic skin to a vehicle you already own.
            </p>
          </div>

        </div>
      </div>

      {/* Payments */}
      <div className="mt-14">
        <h2 className="text-2xl font-semibold">Purchase / Payment</h2>
        <p className="mt-3 text-zinc-300">
          We accept PayPal, credit cards, and other supported payment methods.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">

          <a
            href="https://www.paypal.com/donate/?hosted_button_id=WAHEZG98JQP7G"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 font-semibold transition"
          >
            Pay with PayPal
          </a>

          <a
            href="https://buymeacoffee.com/vanillarenegade"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 font-semibold transition"
          >
            Other Payment Methods
          </a>

        </div>
      </div>

      {/* Compliance */}
      <div className="mt-16 text-sm text-zinc-400 max-w-3xl">
        <p>
          Vanilla Renegade is not affiliated with or endorsed by Bohemia Interactive.
          All items are cosmetic or convenience based only and provide no gameplay advantage.
          Purchases are voluntary contributions supporting server operation and maintenance.
        </p>
      </div>
    </main>
  );
}
