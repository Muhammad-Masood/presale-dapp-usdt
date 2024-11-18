/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import { presale_address, widcoin_address } from "../contract/data";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Footer = () => {
  const controls = useAnimation();
  const searchParams = useSearchParams();
  const referral = searchParams.get("ref");

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  const animationsVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      transition: { duration: 3, type: "spring", stiffness: 100 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 3, type: "spring", stiffness: 100 },
    },
  };

  return (
    <footer ref={ref} className="bg-[#242834] text-white  shadow  ">
      <div className="w-full max-w-screen-xl mx-auto p-8 md:py-8">
        <hr className="my-6 border-black sm:mx-auto  lg:my-8" />
        <div className="grid grid-cols-1 gap-6 md:gap-0 items-center  md:grid-cols-3 justify-items-center3 ">
          <div className="space-y-4">
            <div className="flex gap-4">
              <button className="hover:bg-[#69B1D4] bg-[#91B1D4]  p-4 rounded-sm">
                <a href="https://x.com/xwidcoin" target="_blank">
                  <FaXTwitter size="20" color="white" />
                </a>
              </button>

              <button className="hover:bg-[#69B1D4] bg-[#91B1D4]  p-4 rounded-sm">
                <a href="https://t.me/widcointoken" target="_blank">
                  <FaTelegram size="20" color="white" />
                </a>
              </button>

              <button className="hover:bg-[#69B1D4] bg-[#91B1D4]  p-4 rounded-sm">
                <a href="http://www.youtube.com/@widcointoken" target="_blank">
                  <FaYoutube size="20" color="white" />
                </a>
              </button>
            </div>
            <ul className="font-roborto text-[#7A797A] text-[1.063rem]">
              <li>WIDCOIN Network LLC</li>
              <li>30 N Gould St Ste N</li>
              <li>Sheridan, WY 82801</li>
            </ul>
          </div>
          <motion.div
            variants={animationsVariants}
            initial="hidden"
            animate={controls}
            className="font-poppins md:text-left text-center  leading-5 text-[0.813rem]"
          >
            Embark on a journey of limitless possibilities with Widcoin, the
            driving force behind a new era of digital entrepreneurship. Beyond
            being a mere token, Widcoin is a gateway to unparalleled
            opportunities in the online realm. Join us as we redefine the
            boundaries of digital ventures, creating a dynamic network that not
            only generates profits but also empowers a community of visionaries.
          </motion.div>
          <div
            // href="https://widcoin.org/audit.pdf"
            // target="_blank"
            className="w-2/3   justify-self-center"
          >
            <img
              src="/winaudit.png"
              className="rounded-lg"
              alt="Certified Smart Contract"
            />
          </div>
        </div>
      </div>

      <div className="bg-white w-full">
        <ul className="flex md:flex-row  h-12 md:gap-4 font-roborto text-[#54595F] text-[0.875rem] justify-center items-center  flex-wrap gap-x-3.5 ">
          <li className="border-r border-[#54595F] pr-2 border-1">
            <Link href={referral?`terms-of-use?ref=${referral}`:'terms-of-use'}>Terms of Use</Link>
          </li>
          <li className="border-r border-[#54595F] pr-2 border-1">
            <Link href={referral?`privacy-policy?ref=${referral}`:'privacy-policy'}>Privacy Policy</Link>
          </li>
          <li className="border-r border-[#54595F] pr-2 border-1">
            <Link href={referral?`cookies-policy?ref=${referral}`:'cookies-policy'}>Cookies Policy</Link>
          </li>
          <li className="border-r border-[#54595F] pr-2 border-1">
            <Link href={referral?`contact-us?ref=${referral}`:'contact-us'}>Contact US</Link>
          </li>
        </ul>
      </div>

      <div className="md:text-base text-xs h-24   text-center px-6">
        <span className="pt-4 leading-6   font-poppins font-semibold text-gray-300  ">
          Copyright © 2024 All rights reserved WIDCOIN Network LLC –
          support@widcoin.org
        </span>
      </div>
    </footer>
  );
};

export default Footer;
