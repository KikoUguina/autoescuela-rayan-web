import "./globals.css";
import { Navbar } from "@components/_common/navbar/Navbar";
import { Footer } from "@components/_common/footer/Footer";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autoescuela Rayán",
  description:
    "Autoescuela en Madrid. Aprende a conducir con vehículos modernos, profesores expertos y un método personalizado.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className} suppressHydrationWarning>
        <Script
          src="https://cdn.lordicon.com/lordicon.js"
          strategy="beforeInteractive"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
