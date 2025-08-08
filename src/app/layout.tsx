import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/components/providers";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "tech test ",
  description: "Prueba tecnica para la empresa HoyTrabajas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-gradient-to-r from-white to-gray-100 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300 md:p-1"
      >
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  );
}


