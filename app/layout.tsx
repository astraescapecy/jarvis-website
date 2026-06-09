import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jarvis — Join the waitlist",
  description:
    "Filter AI-generated pins from your Pinterest feed. Join the Jarvis waitlist for early access on iOS.",
  openGraph: {
    title: "Jarvis — Join the waitlist",
    description:
      "Your Pinterest feed, without AI slop. Sign up for early access.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
