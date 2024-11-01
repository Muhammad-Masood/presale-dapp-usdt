/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "../shared";
import { useSearchParams } from "next/navigation";

const Hero7: React.FC = () => {
  const searchParams = useSearchParams();
  const referral = searchParams.get("ref");
  return (
    <section className="bg-bg-gradientHero3  body-font">
      <div className="relative container mx-auto  p-16 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
        {/* <div className=" bg-bg-gradient absolute inset-0 bg-contain bg-no-repeat opacity-10 "></div> */}
        <div className="md:pl-12 w-3/5 mx-auto mb-10 md:mb-0">
          <img
            className="object-cover  object-center rounded"
            alt="hero"
            src="/landing-page/hero7.png"
          />
        </div>
        <div className="  relative flex flex-col md:items-start md:text-left items-center text-center">
          <img
            className="absolute hidden md:block right-14 -top-32 w-1/5"
            src="/landing-page/hero7-icon.png"
            alt=""
          />
          <h1 className="title-font font-bold sm:text-4xl text-white font-poppins text-3xl mb-4  ">
            Widcoin Network:
            <span className="text-secondary">
              {" "}
              A new era of digital entrepreneurship
            </span>
          </h1>
          <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
            With <span className="font-bold">Widcoin </span>, explore limitless
            possibilities. <span className="font-bold">Create and launch </span>
            your digital entrepreneurial projects within our network, garner
            community consensus, initiate fundraising campaigns, or engage in
            multiproperty projects using Blockchain technology. Integration of{" "}
            <span className="font-bold">$WID tokens </span>
            into the Widcoin network ensures a decentralized financial system
            with <span className="font-bold">zero transaction fees.</span>
          </p>
          <Button className="" size={"md"} color={"primary"}>
            <Link href={referral ? `/buy?ref=${referral}` : "/buy"}>$ Buy WID</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero7;
