import Link from "next/link";
import { Button } from "../shared";

const Hero5: React.FC = () => {
  return (
    <section className="bg-bg-gradientHero3  body-font">
      <div className="relative container mx-auto  p-16 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
        <div className=" bg-bg-gradient absolute inset-0 bg-contain bg-no-repeat opacity-10 "></div>
        <div className="md:pl-12 mx-auto w-3/5 mb-10 md:mb-0">
          <img
            className="object-cover  object-center rounded"
            alt="hero"
            src="/landing-page/hero5.png"
          />
        </div>
        <div className="  relative flex flex-col md:items-start md:text-left items-center text-center">
          <img
            className="absolute hidden md:block right-14 -top-32 w-1/5"
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
            <Link href="/buy">$ Buy WID</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
