import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="pt-BR" className={cn("dark", "font-sans", geist.variable)}>
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
