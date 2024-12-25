import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import Head from "next/head";

import "@/assets/styles/index.css";
// import Image from "next/image";

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
      <body className="w-screen h-screen bg-black overflow-x-hidden relative">
        {/* <Image
          src="/ref.jpg"
          alt="Ref"
          width={1440}
          height={7750}
          className="w-full max-w-[1440px] absolute top-0 left-1/2 -translate-x-1/2 opacity-60 z-10 hidden lg:block"
        />
        <Image
          src="/mobile-ref.png"
          alt="Ref"
          width={393}
          height={6885}
          className="w-full absolute top-0 left-1/2 -translate-x-1/2  opacity-60 z-10 block lg:hidden"
        /> */}
        <Header />
        <main className="w-full h-full ">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
