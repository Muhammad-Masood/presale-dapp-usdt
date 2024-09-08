/* eslint-disable react/no-unescaped-entities */
import { Button } from "../shared";

const Hero4: React.FC = () => {
  return (
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
            Widcoin goes beyond traditional digital currencies; it is a utility
            token, an asset with inherent value. Operating on a decentralized
            blockchain, secure smart contracts facilitate transparent
            transactions and data storage.
          </p>

          <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
            Similar to casino chips, Widcoin’s value is contextual, deriving
            significance within the platforms it empowers. It serves not just as
            a transactional tool but as a symbol of value, enabling meaningful
            participation in the digital economy.
          </p>

          <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
            Join us in embracing Widcoin, where value meets utility in the world
            of digital assets.
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
  );
};

export default Hero4;
