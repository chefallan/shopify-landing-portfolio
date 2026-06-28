import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Landing Pages | Allan Brando Catayoc",
  description:
    "Shopify storefront, ecommerce landing page, and conversion-focused frontend portfolio by Allan Brando Catayoc."
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
