import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ToasterProvider from "@/providers/ToasterProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Djerbatrips",
  description:
    "Djerbatrips is your ultimate destination for discovering and booking unforgettable trips and experiences in the beautiful island of Djerba. Explore diverse activities, from serene beach escapes to thrilling desert adventures, all curated to create lasting memories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToasterProvider />
        <Navbar />
        <div className="pt-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
