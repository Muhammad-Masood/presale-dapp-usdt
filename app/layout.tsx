"use client";
import { ThirdwebProvider } from "thirdweb/react";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Sticky from "react-sticky-el";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>WidCoin Presale</title>
      </head>
      <ThirdwebProvider>
        <body className="w-full">
          <main className=" banner bg-gradient-to-r from-gray-900 to-purple-900">
            <Sticky
              stickyStyle={{
                zIndex: 1000,
              }}
            >
              <Suspense>
                <Navbar />
              </Suspense>
            </Sticky>
            {children}
            <Footer />
            <Toaster />
          </main>
        </body>
      </ThirdwebProvider>
    </html>
  );
}
