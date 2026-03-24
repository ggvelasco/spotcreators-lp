import type { Metadata } from "next";
import "./globals.css";
import { Geist, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import ClickSpark from "@/components/ClickSpark.jsx";
import { ReactLenis, useLenis } from "lenis/react";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-main", // Essa variável conecta com o tailwind.config
});

export const metadata: Metadata = {
  title: "Spot Creators | Aceleradora de Creators",
  description: "Conectamos creators e marcas criativamente. Season 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={cn("dark", "font-sans", geist.variable, inter.variable)}
    >
      <body className="noise-overlay">
        <ClickSpark
          sparkColor="#ffe135"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
