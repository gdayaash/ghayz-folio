import type { Metadata } from "next";
import SmoothScroll from "@/components/ScrollSmooth/ScrollSmooth";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dayaash Portfolio",
  description: "Developed By Dayaash",
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
