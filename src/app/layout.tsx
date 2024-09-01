import type { Metadata } from "next";
import { Montserrat, Aleo } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavigationBar from "@/components/navigation_bar";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const aleo = Aleo({ subsets: ["latin"], variable: "--font-aleo" });

export const metadata: Metadata = {
  title: "Tcbello",
  description: "Thom Carlo Bello's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${aleo.variable} font-montserrat`}
      >
        <Providers>
          <NavigationBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
