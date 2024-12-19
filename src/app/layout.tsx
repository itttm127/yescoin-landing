import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Yescoin",
  description: "Yescoin Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className="w-screen h-screen bg-black overflow-x-hidden"
      >
        <Header />
        <main className="w-full h-full ">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
