import Link from "next/link";
import { Button } from "../shared";
import { useSearchParams } from "next/navigation";

const Hero9: React.FunctionComponent = () => {
  const searchParams = useSearchParams();
  const referral = searchParams.get("ref");
  return (
    <section className="bg-bg-gradientHero3  body-font">
      <h1 className="text-4xl md:text-[3.125rem] pt-4 md:pt-7 md:mt-0 font-bold font-albertSans text-center text-white">
        Presale Details and Onboarding:
      </h1>
      <div className="container mx-auto  p-16 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
        <div className="  flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font font-bold sm:text-4xl text-white font-poppins text-3xl mb-4  ">
            Presale and Community Governance : Seamless Participation in the{" "}
            <span className="text-secondary">$WID coin Revolution</span>
          </h1>
          <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
            Exclusive access to discounted Widcoins at{" "}
            <span className="text-pink-600 hover:text-gray-700">
              <Link
                href={referral ? `/buy?ref=${referral}` : "/buy"}
              >
                {"{"}widcoin.org{"}"}.
              </Link>
            </span>
            Easy transactions with BNB, USDC (BEP-20) or USDT (BEP-20) via a
            user-friendly form. Secure smart contract ensures token release
            post-presale. Newcomers benefit from MetaMask setup guidance. Start
            your journey into the Widcoin ecosystem today!
          </p>
          <Button className="" size={"md"} color={"primary"}>
            <Link href={referral ? `/buy?ref=${referral}` : "/buy"}>
              $ Buy WID
            </Link>
          </Button>
        </div>

        <div className=" mx-auto w-4/5 mb-10 md:mb-0">
          <img
            className="object-cover  object-center rounded"
            alt="hero"
            src="/landing-page/hero8.png"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero9;
