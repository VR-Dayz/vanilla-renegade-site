"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
{/* HERO */}
<section className="text-center py-32 px-6 max-w-4xl mx-auto space-y-6">
  <h1 className="text-5xl md:text-6xl font-bold text-orange-400">
    Vanilla Renegade
  </h1>

  <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
    A grounded DayZ experience focused on survival, tension and meaningful player interaction.
    No chaos. No shortcuts. Just Chernarus as it was meant to be.
  </p>

  <div className="flex gap-4 justify-center pt-4 flex-wrap">
    <Link
      href="/how-to-join"
      className="bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 rounded-full font-semibold transition"
    >
      Join the Server
    </Link>

    <Link
      href="/server-info"
      className="border border-orange-400/40 hover:border-orange-400 px-6 py-3 rounded-full font-semibold transition"
    >
      Learn More
    </Link>
  </div>
</section>


{/* WELCOME */}
<section className="max-w-4xl mx-auto px-6 py-16 space-y-6 text-center">
  <h2 className="text-2xl font-semibold text-orange-400">
    Welcome to Vanilla Renegade
  </h2>

  <div className="space-y-5 text-zinc-300 leading-relaxed">
    <p>
      Vanilla Renegade is a DayZ server built around the idea that the best moments in the game come from the people you share it with. We wanted a place where players recognise each other over time, where encounters are not always predictable, and where the atmosphere matters as much as progression.
    </p>

    <p>
      There is no single way to play here. You can help a stranger, trade along the roads, travel alone, or take the risk of a fight on sight. Every choice is yours to make. What matters is that the world reacts to the decisions of the people living in it.
    </p>

    <p>
      Our focus is a steady, fair environment that encourages players to stay, return, and become familiar faces rather than passing traffic. Some days will be quiet, others tense, and occasionally unforgettable, shaped by players and not forced mechanics.
    </p>

    <p>
      Admins are present to keep things fair and consistent, not to interfere. Your journey is not scripted, and your reputation is earned.
    </p>

    <p>
      Whether you are new to DayZ or have thousands of hours, you are welcome here.  
      Find your path, live with the consequences, and make the story your own.
    </p>

    <p className="text-orange-400 font-medium">
      Welcome to Vanilla Renegade.
    </p>
  </div>
</section>
