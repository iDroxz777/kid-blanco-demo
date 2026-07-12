import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kid Blanco | Descubra seu pedido ideal",
  description: "O atendente inteligente que ajuda você a escolher seu próximo pedido na Kid Blanco.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
