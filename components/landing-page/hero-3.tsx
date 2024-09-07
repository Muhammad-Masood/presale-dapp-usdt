import { Button } from "../shared";

const Hero3: React.FC = () => {
  return (
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
            secure tokens at exclusive rates. Beyond this, our community plays a
            central role in governance.
          </p>

          <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
            Post-presale, token holders gain access to a sophisticated
            decentralized voting platform. Here, our community exercises
            collective decision-making power, evaluating, proposing, and voting
            on new projects.
          </p>

          <p className="mb-8 leading-6 font-poppins text-white text-[0.938rem]">
            This innovative approach fosters a sense of collective ownership and
            governance, driving Widcoin towards a future shaped by its dedicated
            community.
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
  );
};
export default Hero3;
