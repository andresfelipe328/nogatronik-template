import "./globals.css";

import MainNavbar from "@/components/global/navbar/MainNavbar";
import MainFooter from "@/components/global/footer/MainFooter";

import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Nogatronik",
  description: "E-commerce website for...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <main className="overflow-auto h-full">
          <MainNavbar />
          {children}
          <MainFooter />
        </main>
      </body>
    </html>
  );
}
