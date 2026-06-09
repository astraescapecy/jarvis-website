import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
