import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/_components/nav/Navbar";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Movie Critical",
    template: "%s | Movie Critical",
  },
  description: "Movie Site!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-32"></div>
        {children}
      </body>
    </html>
  );
}
