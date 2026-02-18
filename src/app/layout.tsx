import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteShellWrapper from "./siteshell-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-zinc-100`}>

        {/* Global Background */}
        <div className="fixed inset-0 -z-10">
          <div
            className="absolute inset-0 bg-center bg-cover opacity-80"
            style={{ backgroundImage: "url(/vr_loadingscreen.png)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75" />
          <div className="absolute inset-0 backdrop-saturate-125 backdrop-contrast-110" />
        </div>

        <SiteShellWrapper>
          {children}
        </SiteShellWrapper>

      </body>
    </html>
  );
}
