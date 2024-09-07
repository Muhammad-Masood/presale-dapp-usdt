import { Button } from "../shared";

const Hero6: React.FC = () => {
  return (
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
            empowerment and security, Widcoin presents diverse DeFi products and
            services, enabling seamless crypto management, investment, and
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
  );
};
export default Hero6;
