import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Footer } from "@/components/footer";
import { BannerHomePage } from "@/components/banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nunes Sport manager",
  description:
    "Sistema para gerenciamento completo dos produtos da companhia, permitindo a exibição, criação, edição e exclusão de itens do portfólio de vendas. Com essa ferramenta, a empresa pode manter seu catálogo de produtos atualizado e organizado de maneira eficiente, garantindo controle total sobre as informações e disponibilidade dos produtos oferecidos aos clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Header />
        <BannerHomePage />
        {children}
        <Footer />
      </body>
    </html>
  );
}
