import { Button } from "../shared";

const Hero2: React.FC = () => {
  return (
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
            Operating on the <span className="font-bold">BEP-20</span> standard,
            Widcoin (WID) symbolizes the future of digital economies. Initially
            priced at <span className="font-bold">$1 for 33.33 WID,</span>
            <span className="font-bold">total token supply</span>
            the stands at <span className="font-bold">
              8,000,000,000 WID,
            </span>{" "}
            with half allocated to the upcoming presale. This strategic
            allocation forms the bedrock of a robust, self-sustaining ecosystem,
            driving growth, community engagement, and seamless integration
            across diverse platforms.
          </p>
          <Button className="" size={"md"} color={"primary"}>
            $ Buy WID
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero2;
