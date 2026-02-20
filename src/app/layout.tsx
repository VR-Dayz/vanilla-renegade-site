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
      <body className="bg-black text-white antialiased">
        {/* forces page to always exceed viewport height */}
        <div className="min-h-[101svh]">
          <SiteShell>{children}</SiteShell>
        </div>
      </body>
    </html>
  );
}
