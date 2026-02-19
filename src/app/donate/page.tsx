export default function Donate() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-zinc-100">
      <h1 className="text-4xl font-bold">Support Vanilla Renegade</h1>

      <p className="mt-6 text-zinc-300">
        Operating a DayZ server requires ongoing hosting, maintenance, and development work.
        If you enjoy your time on Vanilla Renegade and would like to help keep the world alive,
        you can support the server through an optional donation.
      </p>

      <p className="mt-4 text-zinc-300">
        Every contribution helps us maintain performance, improve stability, and continue
        expanding the experience for the community. Your support directly contributes to the
        longevity of the server and future improvements.
      </p>

      <p className="mt-4 text-zinc-300">
        Thank you for being part of the community, we genuinely appreciate it.
      </p>

      {/* Donation Options */}
      <div className="mt-12 space-y-6">

        {/* Buy Me a Coffee */}
        <div className="bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">Buy Me a Coffee</h2>
          <p className="mt-2 text-zinc-300">
            A quick and simple way to show support. Ideal for small contributions.
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
            Supports PayPal balance, credit cards, and other available payment methods.
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

      {/* Fairness Notice */}
      <div className="mt-12 bg-black/40 border border-orange-500/20 backdrop-blur-md p-6 rounded-2xl">
        <h2 className="text-xl font-semibold">Fair Play Policy</h2>
        <p className="mt-2 text-zinc-300">
          Donations never provide gameplay advantages. Vanilla Renegade is committed to a fair,
          balanced experience for all players. Contributions are voluntary and purely supportive.
        </p>
      </div>

      {/* Bohemia Disclaimer */}
      <div className="mt-12 text-sm text-zinc-400">
        <p>
          Vanilla Renegade is not affiliated with or endorsed by Bohemia Interactive.
          This server operates under the Bohemia Interactive Monetization Rules.
          All donations are optional and do not grant gameplay advantages or pay-to-win benefits.
        </p>
      </div>
    </main>
  );
}
