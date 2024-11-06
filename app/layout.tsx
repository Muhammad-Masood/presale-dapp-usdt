"use client";
import { ThirdwebProvider } from "thirdweb/react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Suspense, useEffect, useState } from "react";
import Sticky from "react-sticky-el";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import final from "../public/final.png";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true, // this category is enabled by default
          readOnly: true, // this category cannot be disabled
        },
        analytics: {},
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description:
                "We are using cookies to give you the best experience on our website.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage Individual preferences",
            },
            preferencesModal: {
              title: "Manage cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Accept current selection",
              closeIconLabel: "Close modal",
              sections: [
                {
                  title: "Privacy Overview",
                  description:
                    "This website uses cookies so that we can provide you with the best user experience possible. Cookie information is stored in your browser and performs functions such as recognising you when you return to our website and helping our team to understand which sections of the website you find most interesting and useful.",
                },
                {
                  title: "Strictly Necessary cookies",
                  description:
                    "Strictly Necessary Cookie should be enabled at all times so that we can save your preferences for cookie settings.",

                  //this field will generate a toggle linked to the 'necessary' category
                  linkedCategory: "necessary",
                },
                {
                  title: "Cookie Policy",
                  description:
                    'More information about our <a href="/cookies-policy">Cookie Policy</a>',
                },
              ],
            },
          },
        },
      },
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom left",
          flipButtons: false,
          equalWeightButtons: true,
        },
        preferencesModal: {
          layout: "box",
          // position: 'left right',
          flipButtons: false,
          equalWeightButtons: true,
        },
      },
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <title>WidCoin Presale</title>
      </head>
      <ThirdwebProvider>
        <body className="w-full !top-0">
          {isLoading && (
            <div className="flex items-center justify-center h-screen bg-black">
              <Image
                src={"/final.png"}
                alt="Loading..."
                className="animate-spin"
                width={120}
                height={120}
              />{" "}
            </div>
          )}
          <Suspense fallback={null}>
            <main className=" banner bg-gradient-to-r from-gray-900 to-purple-900">
              <Sticky
                isIOSFixEnabled={false}
                stickyStyle={{
                  zIndex: 40,
                }}
              >
                <Navbar />
              </Sticky>
              {children}
              <Footer />
              <Toaster />
            </main>
          </Suspense>
          {/* </Suspense> */}
        </body>
      </ThirdwebProvider>
    </html>
  );
}
