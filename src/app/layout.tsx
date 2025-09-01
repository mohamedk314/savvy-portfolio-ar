/** @format */

import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer"; // ✅ import

export const metadata: Metadata = {
  title: "Savvy Portfolio",
  description: "Savvy Facility Services & Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ar' dir='rtl'>
      <body className='bg-surface text-[--color-text]'>
        <Nav />
        {children}
        <Footer /> {/* ✅ add footer here */}
      </body>
    </html>
  );
}
