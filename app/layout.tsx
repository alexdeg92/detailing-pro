import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Détailing Pro Laurentides | Esthétique automobile à Blainville",
  description: "Service professionnel d'esthétique automobile dans les Laurentides. Détailing intérieur, extérieur, revêtement céramique. Résultats garantis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
