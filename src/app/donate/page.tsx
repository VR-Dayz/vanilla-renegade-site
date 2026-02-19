export default function Donate() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-zinc-100">
      <h1 className="text-4xl font-bold">Support Vanilla Renegade</h1>

      <p className="mt-6 text-zinc-300">
        Running the Vanilla Renegade DayZ server requires continuous hosting,
        maintenance, and development work. If you enjoy playing here and would
        like to support the server, you can do so using the options below.
      </p>

      <p className="mt-4 text-zinc-300">
        Contributions help maintain stability, improve performance, and fund
        future improvements while keeping the experience fair for everyone.
        Support is completely optional and always appreciated.
      </p>

      <p className="mt-4 text-zinc-300">
        Thank you for being part of the community and helping keep the server online.
      </p>

      {/* Donation Options */}
      <div className="mt-12 space-y-6">

        {/* Buy Me a Coffee */}
        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">Buy Me a Coffee</h2>
          <p className="mt-2 text-zinc-300">
            A quick and simple way to support the server with a small contribution.
          </p>

          <a
            href="https://buymeacoffee.com/vanillarenegade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 rounded-full bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 font-semibold transition"
          >
            Support via Buy Me a Coffee
          </a>
        </div>

        {/* PayPal */}
        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">PayPal</h2>
          <p className="mt-2 text-zinc-300">
            Supports PayPal balance, debit, and credit card payments.
          </p>

          <a
            href="https://www.paypal.com/donate/?hosted_button_id=WAHEZG98JQP7G"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 rounded-full bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 font-semibold transition"
          >
            Donate via PayPal
          </a>
        </div>

      </div>

      {/* Fair Play Policy */}
      <div className="mt-12 bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
        <h2 className="text-xl font-semibold">Fair Play Policy</h2>
        <p className="mt-2 text-zinc-300">
          Vanilla Renegade will never be pay-to-win. Donations provide no gameplay
          advantages and do not affect progression, equipment, or player power.
        </p>
      </div>

      {/* Bohemia Disclaimer */}
      <div className="mt-12 text-sm text-zinc-400">
        <p>
          Vanilla Renegade is not affiliated with or endorsed by Bohemia Interactive.
          This server follows the Bohemia Interactive Monetization Rules.
          All payments are voluntary support contributions and grant no in-game advantage.
        </p>
      </div>
    </main>
  );
}
