import { Inter } from "next/font/google";
import "./globals.css";

import HeroSection from "@/components/home/homeComponents/hero";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Optimenu",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favi.png',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeroSection />
        {children}
      </body>
    </html>
  );
}
