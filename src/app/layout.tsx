import type { Metadata } from "next";
import SmoothScroll from "@/components/ScrollSmooth/ScrollSmooth";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghaytheri S | Portfolio",
  description: "Creative designer crafting meaningful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
