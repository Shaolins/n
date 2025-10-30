import type { Metadata } from "next";
import { Alegreya, Belleza } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const fontBody = Alegreya({
  subsets: ["latin"],
  variable: "--font-body",
});

const fontHeadline = Belleza({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-headline",
});

export const metadata: Metadata = {
  title: "Navegador de Corte & Estilo",
  description: "Barbearia premium para o cavalheiro moderno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          fontBody.variable,
          fontHeadline.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
