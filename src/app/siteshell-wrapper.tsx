"use client";

import { SiteShell } from "../components/SiteShell";

export default function SiteShellWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell>{children}</SiteShell>;
}
