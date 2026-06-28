import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allan Brando Catayoc | Full-Stack, AI, Web3 Portfolio",
  description:
    "Senior full-stack developer portfolio covering AI tooling, Web3 products, ecommerce frontend, automation, and remote project work."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
