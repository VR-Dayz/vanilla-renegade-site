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
        {/* Atmospheric depth layer */}
        <div className="relative min-h-screen">
          
          {/* Content layer (above background overlay) */}
          <div className="relative z-10">
            <SiteShell>{children}</SiteShell>
          </div>

        </div>
      </body>
    </html>
  );
}
