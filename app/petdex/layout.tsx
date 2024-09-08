import "../../styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Petdex",
  description:
    "Bem vindo ao petdex. Clique aqui para saber mais sobre os pets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-primary-gray max-h-screen`}>
        {children}
      </body>
    </html>
  );
}
