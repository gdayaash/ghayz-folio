import type { Metadata } from "next";
import SmoothScroll from "@/components/ScrollSmooth/ScrollSmooth";
import "./globals.css";
import Script from "next/script";

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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "zbfndg4auw");
          `}
      </Script>
      </body>
    </html>
  );
}
