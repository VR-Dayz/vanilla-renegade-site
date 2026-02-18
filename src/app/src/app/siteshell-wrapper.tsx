"use client";

import { SiteShell } from "../components/siteshell";

export default function SiteShellWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell>{children}</SiteShell>;
}
