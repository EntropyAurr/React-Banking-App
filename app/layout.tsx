import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Entropy",
  description: "Entropy is a modern banking platform for every one.",
  icons: { icon: "/icons/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
