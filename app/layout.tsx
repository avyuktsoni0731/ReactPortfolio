import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Favicon from "./favicon.ico";
import { ResumeProvider } from "@/components/ResumeContext";
import { ResumeModal } from "@/components/ResumeModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avyukt Soni | Portfolio",
  description: "Avyukt's Portfolio Website",
  // icons: {
  //   icon: "/AvyuktFavicon.png",
  // },
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="../public/AvyuktFavicon.png" />
      </Head>
      <body className={inter.className}>
        <ResumeProvider>
          {children}
          <ResumeModal />
        </ResumeProvider>
      </body>
    </html>
  );
}
