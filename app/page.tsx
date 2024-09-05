import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { TwitterIcon, XIcon } from "lucide-react";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="bg-bg-gradientHero ">
        <section className=" container   h-fit   ">
          <div className="bg-bg-hero bg-cover">
            <div className="grid p-12 grid-cols-2 grid-rows-1 gap-4">
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
                <h1 className="text-7xl mt-4 text-white font-alfaSlabOne">
                  Revolutionizing the Digital Landscape with{" "}
                  <span className="text-secondary">Widcoin</span>
                </h1>
                <div className="mt-4 text-white space-y-4">
                  <p className="text-lg  font-poppins">
                    Explore endless opportunities with Widcoin, your gateway to
                    a new era of digital entrepreneurship.
                  </p>
                  <p className="text-lg font-bold  font-poppins">
                    Join us in redefining online ventures, creating
                    profit-driven networks, and empowering visionary
                    communities.
                  </p>
                </div>

                <div className="flex gap-8 font-nunito mt-4 ml-4 text-white  p-4">
                  <button className="bg-bg-button p-2 rounded-xl">
                    White Paper
                  </button>
                  <button className="bg-bg-button p-2 rounded-xl">
                    Audit report
                  </button>
                </div>
              </div>
              <div className="px-12 ">
                <Card className="flex rounded-2xl bg-bg-card text-white bg-opacity-50 flex-col items-center">
                  <h2 className="font-poppins font-bold text-[2.5rem]">
                    Presale is Live
                  </h2>
                  <img
                    className="w-1/2"
                    src="/landing-page/hero-avatar.png"
                    alt=""
                  />
                  <h3 className="mt-4 bg-bg-gradientText px-8 rounded-md text-[1.188rem] font-poppins">
                    BUY BEFORE NEXT STAGE PRICE INCREASE
                  </h3>
                  <h3 className="text-2xl font-poppins font-bold">
                    ——— 1 $WID = $0.03 ———
                  </h3>
                  <button className="font-alfaSlabOne bg-bg-gradientText2 p-2 text-primary hover:text-secondary text-[1.625rem] rounded-xl">
                    BUY $WID
                  </button>
                  <ul className="text-[1.188rem] text-center font-poppins font-bold">
                    <li>+ Launch Price = $0.15</li>
                    <li>+ Join $1,500,000 Quest</li>
                    <li>+ Get 10% free tokens with Referral link</li>
                    <li className="bg-bg-gradientText3 rounded-xl px-4">
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
      <section className="text-gray-600 body-font">
        <div className="container mx-auto  p-16 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
          <div className=" w-3/4 mb-10 md:mb-0">
            <img
              className="object-cover  object-center rounded"
              alt="hero"
              src="/landing-page/16.svg"
            />
          </div>
          <div className="  flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font font-bold sm:text-4xl text-white font-poppins text-3xl mb-4  ">
              A Strategic Foundation for{" "}
              <span className="text-secondary">Sustainable Growt</span>
            </h1>
            <p className="mb-8 leading-relaxed font-poppins text-white text-[0.938rem]">
              Operating on the <span className="font-bold">BEP-20</span>{" "}
              standard, Widcoin (WID) symbolizes the future of digital
              economies. Initially priced at{" "}
              <span className="font-bold">$1 for 33.33 WID,</span>
              <span className="font-bold">total token supply</span>
              the stands at{" "}
              <span className="font-bold">8,000,000,000 WID,</span> with half
              allocated to the upcoming presale. This strategic allocation forms
              the bedrock of a robust, self-sustaining ecosystem, driving
              growth, community engagement, and seamless integration across
              diverse platforms.
            </p>
            <button>Buy WID</button>
          </div>
        </div>
      </section>
    </div>
  );
}
