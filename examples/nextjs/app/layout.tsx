import "@3ba/styles";
import type { ReactNode } from "react";

export const metadata = {
  title: "Frutiger Aero · Next.js",
  description: "A glassy, sky-themed component pack.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
