import { Button } from "../shared";

const Hero7: React.FC = () => {
  return (
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
  );
};

export default Hero7;
