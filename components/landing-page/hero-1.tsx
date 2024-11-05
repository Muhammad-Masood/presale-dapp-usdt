"use client";
import Marquee from "react-fast-marquee";
import { Card } from "../ui/card";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import JitterText from "../animation/jitter";
import { motion } from "framer-motion";

import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const OpenModalToken = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <li className="bg-bg-gradientText3 cursor-pointer mt-4  rounded-xl mx-4 py-2 md:py-4  px-4">
          + Double the tokens with the Airdrop (x2)
        </li>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow z-50 p-4 fixed top-[50%] left-[50%] max-h-[85vh]  max-w-[650px] translate-x-[-50%] translate-y-[-50%]  bg-white  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="grid-cols-1 gap-2 pt-4 md:gap-4 md:grid-cols-2 grid">
            <div>
              <img src="/landing-page/airdrop.png" alt="" />
            </div>
            <div>
              <h3 className="md:mt-4 mt-1 font-nunito text-xs md:text-[1.313rem] leading-none font-bold text-[#27283C]">
                Limited-time offers may be launched during the presale to double
                the $WID tokens during the purchase phase. Follow us on Telegram
                and X channels to find out when the Airdrop (x2) is active.
              </h3>
              <img
                className="w-2/5 mx-auto mt-4"
                src="/landing-page/glass.gif"
                alt=""
              />
            </div>
          </div>
          <Dialog.Close asChild>
            <button
              className=" absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center  "
              aria-label="Close"
            >
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Hero1 = () => {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");
  return (
    <div className="bg-bg-gradientHero">
      <section className="bg-bg-hero bg-top bg-cover container   h-fit   ">
        <div className="">
          <div className="grid p-0 md:p-6 pt-6 grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
            <div className="">
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
                  <a
                    href="http://www.youtube.com/@widcointoken"
                    target="_blank"
                  >
                    <FaYoutube size="20" color="white" />
                  </a>
                </button>
              </div>
              <h1 className="text-3xl md:text-7xl mt-4 text-white font-alfaSlabOne">
                Revolutionizing the Digital Landscape with{" "}
                <span className="text-secondary">Widcoin</span>
              </h1>
              <div className="mt-4 text-white space-y-4">
                <p className="text-lg  font-poppins">
                  Explore endless opportunities with Widcoin, your gateway to a
                  new era of digital entrepreneurship.
                </p>
                <p className="text-lg font-bold  font-poppins">
                  Join us in redefining online ventures, creating profit-driven
                  networks, and empowering visionary communities.
                </p>
              </div>

              <div className="flex gap-12 font-nunito mt-4 md:ml-8 text-white  p-4">
                <JitterText>
                  <button className="bg-bg-button text-primary hover:text-white py-2 px-4 rounded-xl">
                    <a
                      href="https://widcoin.net/whitepaper.pdf"
                      target="_blank"
                    >
                      White Paper
                    </a>
                  </button>
                </JitterText>

                <JitterText>
                  <button className="bg-bg-button text-primary hover:text-white py-2 px-4 rounded-xl">
                    <a href="https://widcoin.net/audit.pdf" target="_blank">
                      Audit report
                    </a>
                  </button>
                </JitterText>
              </div>
            </div>
            <div className="px-0 md:px-0 md:ml-24 ">
              <Card className="flex space-y-2 rounded-2xl bg-bg-card text-white  flex-col items-center">
                <h2 className="font-poppins pt-2 font-bold text-2xl md:text-[2.5rem]">
                  Presale is Live
                </h2>

                <img className="w-2/5" src="/landing-page/loading.gif" alt="" />
                <img
                  className="w-1/2"
                  src="/landing-page/hero-avatar.png"
                  alt=""
                />
                <h3 className="mt-4 text-center bg-bg-gradientText px-4 md:py-2  md:px-8 rounded-md text-xs md:text-[1.188rem] font-poppins">
                  BUY BEFORE NEXT STAGE PRICE INCREASE
                </h3>
                <h3 className=" text-base md:text-2xl font-poppins font-bold">
                  ——— 1 $WID = $0.03 ———
                </h3>
                <div className="relative inline-block">
                  <motion.div
                    className="absolute inset-0 bg-white rounded-lg filter blur-md"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.2, background: "#252639" }}
                    className="relative font-alfaSlabOne  shadow-sm  bg-bg-gradientText5 p-2 px-6  text-secondary hover:bg-white text-[1.625rem] rounded-xl"
                  >
                    <Link href={`${ref ? `buy?ref=${ref}` : "buy"}`}>
                      BUY $WID
                    </Link>
                  </motion.button>
                </div>
                <ul className="text-xs space-y-4 pt-2  md:text-[1.188rem] text-center pb-4 font-poppins font-bold">
                  <li>+ Launch Price = $0.15</li>
                  <li className="pb-4">+ Join $1,500,000 Quest</li>
                  <Link
                    href={
                      ref
                        ? `/winning-pool?highlight=referral?ref=${ref}`
                        : "/winning-pool?highlight=referral"
                    }
                    className="scale-110 hover:scale-110"
                  >
                    + Get 15% free tokens with Referral link
                  </Link>
                  <OpenModalToken />
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Marquee className="py-6">
        <img src="landing-page/companies/binance.svg" alt="" />
        <img src="landing-page/companies/bitcoin_insider.svg" alt="" />

        <img src="landing-page/companies/buisness_news.svg" alt="" />
        <img src="landing-page/companies/crypto_deily.svg" alt="" />

        <img src="landing-page/companies/crypto_news.svg" alt="" />

        <img src="landing-page/companies/marketwatch.svg" alt="" />

        <img src="landing-page/companies/morningstar.svg" alt="" />

        <img src="landing-page/companies/news_btc.svg" alt="" />

        <img src="landing-page/companies/yahoo.svg" alt="" />
      </Marquee>
    </div>
  );
};
export default Hero1;
