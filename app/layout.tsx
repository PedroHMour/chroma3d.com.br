import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', 
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Chromatech - Pré-venda Tupana A1",
  description: "Garanta acesso antecipado à impressora 3D multicolorida que revoluciona a Amazônia.",
  icons: {
    icon: '/images/favicon.ico', // Substitua pelo caminho da sua imagem na pasta public
    // Se tiver um ícone específico para Apple:
    // apple: '/images/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-[#0a0a0a] text-gray-100 min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow w-full relative">
          {/* Background estático para performance */}
          <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
          <div className="relative z-10">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}