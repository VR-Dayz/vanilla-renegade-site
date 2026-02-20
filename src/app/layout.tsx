import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Vanilla Renegade",
  description: "Vanilla Renegade DayZ Server",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white antialiased">

        {/* Background image layer */}
        <div className="fixed inset-0 -z-20 bg-[url('/vr_loadingscreen.png')] bg-cover bg-center bg-no-repeat" />

        {/* Cinematic readability overlay */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

        {/* Actual site content */}
        <div className="relative z-10 min-h-screen">
          <SiteShell>{children}</SiteShell>
        </div>

      </body>
    </html>
  );
}
