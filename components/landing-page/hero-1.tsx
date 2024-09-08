"use client";
import Marquee from "react-fast-marquee";
import { Card } from "../ui/card";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import JitterText from "../animation/jitter";
import { motion } from "framer-motion";

const Hero1 = () => {
  return (
    <div className="bg-bg-gradientHero ">
      <section className=" container   h-fit   ">
        <div className="md:bg-bg-hero bg-cover">
          <div className="grid p-6 md:p-12 grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
            <div className="">
              <div className="flex gap-4">
                <button className="hover:bg-[#69B1D4] bg-[#91B1D4]  p-4 rounded-sm">
                  <FaXTwitter size="20" color="white" />
                </button>

                <button className="hover:bg-[#69B1D4] bg-[#91B1D4]  p-4 rounded-sm">
                  <FaTelegram size="20" color="white" />
                </button>

                <button className="hover:bg-[#69B1D4] bg-[#91B1D4]  p-4 rounded-sm">
                  <FaYoutube size="20" color="white" />
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

              <div className="flex gap-8 font-nunito mt-4 md:ml-8 text-white  p-4">
                <JitterText>
                  <button className="bg-bg-button text-primary hover:text-white py-2 px-4 rounded-xl">
                    White Paper
                  </button>
                </JitterText>

                <JitterText>
                  <button className="bg-bg-button text-primary hover:text-white py-2 px-4 rounded-xl">
                    Audit report
                  </button>
                </JitterText>
              </div>
            </div>
            <div className="px-2 md:px-12 ">
              <Card className="flex rounded-2xl bg-bg-card text-white  flex-col items-center">
                <h2 className="font-poppins font-bold text-2xl md:text-[2.5rem]">
                  Presale is Live
                </h2>

                <img className="w-2/5" src="/landing-page/loading.gif" alt="" />
                <img
                  className="w-1/2"
                  src="/landing-page/hero-avatar.png"
                  alt=""
                />
                <h3 className="mt-4 text-center bg-bg-gradientText px-8 rounded-md text-[1.188rem] font-poppins">
                  BUY BEFORE NEXT STAGE PRICE INCREASE
                </h3>
                <h3 className="text-lg md:text-2xl font-poppins font-bold">
                  ——— 1 $WID = $0.03 ———
                </h3>
                <div className="relative inline-block">
                  <motion.div
                    className="absolute inset-0 bg-secondary rounded-lg filter blur-md"
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
                    whileHover={{ scale: 1.2 }}
                    className="relative font-alfaSlabOne  shadow-sm  bg-bg-gradientText2 p-2 px-6 text-primary hover:text-secondary text-[1.625rem] rounded-xl"
                  >
                    BUY $WID
                  </motion.button>
                </div>
                <ul className="text-[1.188rem] text-center pb-4 font-poppins font-bold">
                  <li>+ Launch Price = $0.15</li>
                  <li>+ Join $1,500,000 Quest</li>
                  <li>+ Get 10% free tokens with Referral link</li>
                  <li className="bg-bg-gradientText3  rounded-xl  px-4">
                    + Double the tokens with the Airdrop (x2)
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Marquee className="py-6">
        <img
          src="https://presale.widcoin.net/wp-content/uploads/2023/11/crypto_deily.svg"
          alt=""
        />
        <img
          src="https://presale.widcoin.net/wp-content/uploads/2023/11/crypto_news.svg"
          alt=""
        />

        <img
          src="https://presale.widcoin.net/wp-content/uploads/2023/11/crypto_deily.svg"
          alt=""
        />
        <img
          src="https://presale.widcoin.net/wp-content/uploads/2023/11/yahoo.svg"
          alt=""
        />

        <img
          src="https://presale.widcoin.net/wp-content/uploads/2023/11/yahoo.svg"
          alt=""
        />
      </Marquee>
    </div>
  );
};
export default Hero1;
