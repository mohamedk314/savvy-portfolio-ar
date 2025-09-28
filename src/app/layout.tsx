/** @format */
import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: { default: "Savvy Services", template: "%s | Savvy Services" },
  description: "Savvy Facility Services & Management",
  applicationName: "Savvy Services",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Savvy Services",
    siteName: "Savvy Services",
    description: "Savvy Facility Services & Management",
    images: ["/og.png"],
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savvy Services",
    description: "Savvy Facility Services & Management",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ar' dir='rtl'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      </head>
      <body className='bg-surface text-[--color-text] min-h-screen flex flex-col'>
        <Nav />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
