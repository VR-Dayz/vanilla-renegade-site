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
      <body className="bg-black text-white antialiased min-h-[100svh] overflow-x-hidden">
        <SiteShell>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
