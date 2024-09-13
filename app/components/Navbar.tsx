"use client";
import React, { useState } from "react";
import { ConnectButton } from "thirdweb/react";
import { client, wallets } from "../lib/thirdweb";
import Link from "next/link";
import wclogo from "@/public/wclogo.png";
import { Button } from "@/components/ui/button";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const referral = searchParams.get("ref");

  return (
    <div>
      {/* <div className="header1 bg-[#040C18] text-[#f1f1f1] py-2" id="myHeader"> */}
      {/*   <p className="text-center text-xs lg:text-sm md:text-sm text-[#ec33bd]"> */}
      {/*     PHISHING WARNING: please make sure you&apos;re visiting */}
      {/*     https://widcoin.net/ - check the URL carefully. */}
      {/*   </p> */}
      {/* </div> */}

      <header className="bg-[#040C18] text-[#f1f1f1] ">
        <div className="container mx-auto py-4 px-7">
          <nav className="navbar flex justify-between items-center">
            <Link
              className="navbar-brand"
              href={`/${referral ? `?ref=${referral}` : ""}`}
            >
              <img
                src={"/wclogo.png"}
                height={60}
                width={60}
                alt="widcoin_logo"
              />
            </Link>
            <div className=" font-poppins hidden md:block font-semibold md:mr-48  p-1 px-2">
              <ul className="uppercase  flex gap-6">
                <li>
                  <Link href="/ecosystem">EcoSystem</Link>
                </li>
                <li>
                  <Link href="/winning-pool">Winning Pool</Link>
                </li>
                <li>
                  <Link href="/#road-map" shallow={true}>
                    RoadMap
                  </Link>
                </li>
                <li>
                  <Link href="/#tokenmics" shallow={true}>
                    Tokenomics
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex items-center space-x-7">
              <Link href="/buy">
                <Button className="bg-gradient-to-r to-white from-blue-500 text-black  shadow-lg hover:from-gray-300 hover:to-blue-600 transform hover:scale-105 transition-transform duration-300">
                  Buy $WID
                </Button>
              </Link>
              <Link href="/claim">
                <Button className="px-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold shadow-lg hover:from-red-500 hover:to-purple-400 transform hover:scale-105 transition-transform duration-300">
                  Claim
                </Button>
              </Link>
              <ConnectButton client={client} wallets={wallets} />
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  <XIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </div>
        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 sm:px-3">
              <div className=" font-poppins  font-semibold my-4  p-1 px-2">
                <ul className="uppercase  flex flex-col gap-6">
                  <li>
                    <Link href="/ecosystem">EcoSystem</Link>
                  </li>
                  <li>
                    <Link href="/winning-pool">Winning Pool</Link>
                  </li>
                  <li>
                    <Link href="/#road-map" shallow={true}>
                      RoadMap
                    </Link>
                  </li>
                  <li>
                    <Link href="/#tokenmics" shallow={true}>
                      Tokenomics
                    </Link>
                  </li>
                </ul>
              </div>

              <Link href="/buy">
                <Button className="mb-4 bg-gradient-to-r text-left to-white w-full from-blue-500 text-black  shadow-lg hover:from-gray-300 hover:to-blue-600 transform hover:scale-105 transition-transform duration-300">
                  Buy $WID
                </Button>
              </Link>
              <Link href={`'/claim'${referral ? `?ref=${referral}` : ""}`}>
                <Button className="block w-full px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-red-500 hover:to-purple-400 transform hover:scale-105 transition-transform duration-300">
                  Claim
                </Button>
              </Link>
              <div className="block  py-2 rounded-md text-base font-medium text-white">
                <ConnectButton client={client} wallets={wallets} />
              </div>
            </div>
          </div>
        </Transition>
      </header>
    </div>
  );
};

export default Navbar;
