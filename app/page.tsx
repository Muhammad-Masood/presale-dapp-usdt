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
import { Button } from "@/components/shared";

export default function Page() {
  return (
    <div>
      <div className="bg-bg-gradientHero ">
        <section className=" container   h-fit   ">
          <div className="bg-bg-hero bg-cover">
            <div className="grid p-12 grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
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
                <Card className="flex rounded-2xl bg-bg-card text-white  flex-col items-center">
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
      <section className="bg-bg-gradientHero3  body-font">
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
            <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
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
            <Button className="" size={"md"} color={"primary"}>
              $ Buy WID
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-bg-gradientHero3  body-font">
        <div className="container mx-auto  p-16 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
          <div className="  flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font font-bold sm:text-4xl text-white font-poppins text-3xl mb-4  ">
              Presale and Community Governance :
              <span className="text-secondary">
                Charting a Decentralized Future
              </span>
            </h1>
            <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
              The Widcoin presale marks a pivotal opportunity for enthusiasts to
              secure tokens at exclusive rates. Beyond this, our community plays
              a central role in governance.
            </p>

            <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
              Post-presale, token holders gain access to a sophisticated
              decentralized voting platform. Here, our community exercises
              collective decision-making power, evaluating, proposing, and
              voting on new projects.
            </p>

            <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
              This innovative approach fosters a sense of collective ownership
              and governance, driving Widcoin towards a future shaped by its
              dedicated community.
            </p>
            <Button className="" size={"md"} color={"primary"}>
              $ Buy WID
            </Button>
          </div>

          <div className=" w-3/4 mb-10 md:mb-0">
            <img
              className="object-cover  object-center rounded"
              alt="hero"
              src="/landing-page/hero3.png"
            />
          </div>
        </div>
      </section>

      <section className="bg-bg-gradientHero4  body-font">
        <div className="container mx-auto  p-16 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-12">
          <div className="  flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="relative title-font font-bold sm:text-4xl text-white font-poppins text-3xl mb-4  ">
              <img
                className="absolute z-0  w-2/6 -top-32"
                src="./landing-page/hero4-icon.png"
                alt=""
              />
              <div className="relative z-10">
                The Unique Value of Utility Tokens:
                <span className=" text-secondary">
                  {" "}
                  Widcoin's Multifaceted Purpose
                </span>
              </div>
            </h1>
            <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
              Widcoin goes beyond traditional digital currencies; it is a
              utility token, an asset with inherent value. Operating on a
              decentralized blockchain, secure smart contracts facilitate
              transparent transactions and data storage.
            </p>

            <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
              Similar to casino chips, Widcoin’s value is contextual, deriving
              significance within the platforms it empowers. It serves not just
              as a transactional tool but as a symbol of value, enabling
              meaningful participation in the digital economy.
            </p>

            <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
              Join us in embracing Widcoin, where value meets utility in the
              world of digital assets.
            </p>
            <Button className="" size={"md"} color={"primary"}>
              $ Buy WID
            </Button>
          </div>

          <div className=" w-3/4 pl-12 mb-10 md:mb-0">
            <img
              className="object-cover  object-center rounded"
              alt="hero"
              src="/landing-page/hero4.svg"
            />
          </div>
        </div>
      </section>

      <section className="bg-bg-gradientHero3  body-font">
        <div className="container mx-auto  p-16 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
          <div className="pl-12 w-3/5 mb-10 md:mb-0">
            <img
              className="object-cover  object-center rounded"
              alt="hero"
              src="/landing-page/hero5.png"
            />
          </div>
          <div className="  relative flex flex-col md:items-start md:text-left items-center text-center">
            <img
              className="absolute right-14 -top-32 w-1/5"
              src="/landing-page/hero5-icon.png"
              alt=""
            />
            <h1 className="title-font font-bold sm:text-4xl text-white font-poppins text-3xl mb-4  ">
              Investment Dynamics: Navigating Volatility and{" "}
              <span className="text-secondary">Seizing Opportunities</span>
            </h1>
            <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
              Widcoin Tokens, while not traditional financial products, present
              avenues for profit through strategic engagement. Their value
              showcases notable volatility, impacted by project success and
              broader market dynamics. For believers in the project’s potential,
              the path from acquiring Widcoins during the presale to engaging in
              the dynamic crypto market offers opportunities for substantial
              returns. Navigating this investment landscape requires a nuanced
              understanding and strategic approach.
            </p>
            <Button className="" size={"md"} color={"primary"}>
              $ Buy WID
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-bg-gradientHero4  body-font">
        <div className="container mx-auto  p-16 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-12">
          <div className="  flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="relative title-font font-bold sm:text-4xl text-white font-poppins text-3xl mb-4  ">
              <img
                className="absolute z-0  w-9/12 -top-28"
                src="./landing-page/hero6-icon.svg"
                alt=""
              />
              <div className="relative z-10">Ecosystem</div>
            </h1>
            <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
              The Widcoin Ecosystem stands out in decentralized finance (DeFi),
              offering innovative solutions across multiple platforms
              interconnected with the Widcoin network. Designed for user
              empowerment and security, Widcoin presents diverse DeFi products
              and services, enabling seamless crypto management, investment, and
              participation in the evolving DeFi landscape.
            </p>

            <Button className="" size={"md"} color={"primary"}>
              $ Buy WID
            </Button>
          </div>

          <div className=" w-3/4 pl-12 mb-10 md:mb-0">
            <img
              className="object-cover  object-center rounded"
              alt="hero"
              src="/landing-page/hero6.png"
            />
          </div>
        </div>
      </section>

      <section className="bg-bg-gradientHero3  body-font">
        <div className="container mx-auto  p-16 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
          <div className="pl-12 w-3/5 mb-10 md:mb-0">
            <img
              className="object-cover  object-center rounded"
              alt="hero"
              src="/landing-page/hero7.png"
            />
          </div>
          <div className="  relative flex flex-col md:items-start md:text-left items-center text-center">
            <img
              className="absolute right-14 -top-32 w-1/5"
              src="/landing-page/hero7-icon.png"
              alt=""
            />
            <h1 className="title-font font-bold sm:text-4xl text-white font-poppins text-3xl mb-4  ">
              Widcoin Network:
              <span className="text-secondary">
                A new era of digital entrepreneurship
              </span>
            </h1>
            <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
              With Widcoin, explore limitless possibilities. Create and launch
              your digital entrepreneurial projects within our network, garner
              community consensus, initiate fundraising campaigns, or engage in
              multiproperty projects using Blockchain technology. Integration of
              $WID tokens into the Widcoin network ensures a decentralized
              financial system with zero transaction fees.
            </p>
            <Button className="" size={"md"} color={"primary"}>
              $ Buy WID
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-bg-gradientHero3">
        <div className="grid px-12 py-24 md:grid-cols-3 gap-4 grid-cols-1">
          <Card className="bg-transparent border-[#6DD8D4] p-8 rounded-3xl">
            <div className="flex flex-col">
              <h1 className="text-[2rem] font-bold text-[#6DD8D4]">1.</h1>
              <h3 className="font-poppins space-y-6 font-bold text-[1.438rem] text-white">
                Unwavering Security
              </h3>
              <p className="font-poppins  text-xs text-white">
                Our Crypto Wallet App is engineered with cutting-edge security
                measures to safeguard your digital assets.
              </p>
            </div>
          </Card>

          <Card className="bg-transparent border-[#FFD178] p-8 rounded-3xl">
            <div className="flex flex-col">
              <h1 className="text-[2rem] font-bold text-[#FFD178]">2.</h1>
              <h3 className="font-poppins space-y-6 font-bold text-[1.438rem] text-white">
                Integration with Etherscan
              </h3>
              <p className="font-poppins  text-xs text-white">
                As a testament to our commitment to transparency, our Crypto
                Wallet App seamlessly integrates with Etherscan.
              </p>
            </div>
          </Card>

          <Card className="bg-transparent border-[#FF94FF] p-8 rounded-3xl">
            <div className="flex flex-col">
              <h1 className="text-[2rem] font-bold text-[#FF94FF]">1.</h1>
              <h3 className="font-poppins space-y-6 font-bold text-[1.438rem] text-white">
                Multi-Asset Support
              </h3>
              <p className="font-poppins  text-xs text-white">
                Our Crypto Wallet App is not limited to a single cryptocurrency.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-bg-gradientHero3  body-font">
        <h1 className="text-[3.125rem] font-bold font-albertSans text-center text-white">
          Presale Details and Onboarding:
        </h1>
        <div className="container mx-auto  p-16 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
          <div className="  flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font font-bold sm:text-4xl text-white font-poppins text-3xl mb-4  ">
              Presale and Community Governance : Seamless Participation in the
              <span className="text-secondary">$WID coin Revolution</span>
            </h1>
            <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
              Exclusive access to discounted Widcoins at {"{"}widcoin.net{"}"}.
              Easy transactions with USDC (BEP-20) or USDT (BEP-20) via a
              user-friendly form. Secure smart contract ensures token release
              post-presale. Newcomers benefit from MetaMask setup guidance.
              Start your journey into the Widcoin ecosystem today!
            </p>
            <Button className="" size={"md"} color={"primary"}>
              $ Buy WID
            </Button>
          </div>

          <div className=" w-4/5 mb-10 md:mb-0">
            <img
              className="object-cover  object-center rounded"
              alt="hero"
              src="/landing-page/hero8.png"
            />
          </div>
        </div>
      </section>

      <section className="bg-bg-gradientHero3">
        <div className="grid p-28 md:grid-cols-2 gap-4 grid-cols-1">
          <Card className="bg-transparent relative border-[#FFD178] px-12 py-20 rounded-3xl">
            <img
              className="w-1/4 -top-28 left-32  absolute"
              src="/landing-page/hero9-2.png"
              alt=""
            />
            <div className="flex justify-center items-center">
              <div className="flex  gap-4 flex-col">
                <h3 className="font-poppins text-[#FFD175] space-y-6 font-bold text-[1.75rem]">
                  Secure with BscScan
                </h3>
                <p className="font-poppins  text-[0.875rem] text-white">
                  BEP-20 tokens, built upon the Ethereum ERC-20 standard, boast
                  compatibility with numerous tools and platforms within the
                  blockchain ecosystem. This extends to wallets, exchanges, and
                  infrastructure supporting ERC-20 tokens.
                </p>
              </div>
              <div className="w-2/3 min-w-36">
                <img
                  className="object-cover self-center"
                  src="/landing-page/hero9.png"
                  alt=""
                />
              </div>
            </div>
          </Card>

          <Card className="bg-transparent border-[#FF94FF] px-12 py-20 rounded-3xl">
            <div className="flex justify-center items-center">
              <div className="flex  gap-4 flex-col">
                <h3 className="font-poppins text-[#FF94FF] space-y-6 font-bold text-[1.75rem]">
                  High Yield Potential
                </h3>
                <p className="font-poppins  text-[0.875rem] text-white">
                  While maintaining a strong focus on security, our platform
                  offers opportunities for users to explore high-yield
                  investments.
                </p>
              </div>
              <div className="w-2/3 min-w-36">
                <img
                  className="object-cover self-center"
                  src="/landing-page/hero9-1.png"
                  alt=""
                />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
