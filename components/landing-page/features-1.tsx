import { Card } from "../ui/card";

const Features1: React.FC = () => {
  return (
    <section className="relative bg-bg-gradientHero5    bg-cover bg-no-repeat">
      <div className=" bg-bg-hero10 absolute inset-0 bg-contain bg-no-repeat opacity-50 "></div>
      <div className="backdrop-blur-sm ">
        <div className="text-center py-6 px-14 text-white">
          <h2 className="font-poppins font-bold text-[2.5rem]">
            Why <span className="text-secondary">WIDCOIN ?</span>
          </h2>
          <p className="font-poppins text-[0.875rem]">
            The choice of “Widcoin” as a cryptocurrency or token name could be
            driven by various factors, and without specific details about the
            project’s motivations, here are some general reasons why a project
            might choose a particular name:
          </p>
        </div>
        <div className="grid p-24 md:grid-cols-3 gap-4 grid-cols-1">
          <Card className="bg-transparent border-[#6DD8D4] px-8 pt-12 pb-20 rounded-3xl">
            <div className="flex flex-col">
              <div className="border-[#6DD8D4]  border-2 rounded-full p-2 size-10">
                <img src="/landing-page/hero10-1.svg" alt="" />
              </div>
              <h3 className="font-poppins space-y-8 font-bold text-[1.438rem] text-white">
                Unwavering Security
              </h3>
              <p className="font-poppins  text-xs text-white">
                Our Crypto Wallet App is engineered with cutting-edge security
                measures to safeguard your digital assets.
              </p>
            </div>
          </Card>

          <Card className="bg-transparent border-[#FFD178] px-8 pt-12 pb-20 rounded-3xl">
            <div className="flex flex-col">
              <div className="border-[#FFD178]  border-2 rounded-full p-2 size-10">
                <img src="/landing-page/hero10-2.svg" alt="" />
              </div>
              <h3 className="font-poppins space-y-8 font-bold text-[1.438rem] text-white">
                Integration with Etherscan
              </h3>
              <p className="font-poppins  text-xs text-white">
                As a testament to our commitment to transparency, our Crypto
                Wallet App seamlessly integrates with Etherscan.
              </p>
            </div>
          </Card>

          <Card className="bg-transparent border-[#FF94FF] px-8 pt-12 pb-20 rounded-3xl">
            <div className="flex flex-col">
              <div className="border-[#FF94FF]  border-2 rounded-full p-2 size-10">
                <img src="/landing-page/hero10-3.svg" alt="" />
              </div>
              <h3 className="font-poppins space-y-8 font-bold text-[1.438rem] text-white">
                Multi-Asset Support
              </h3>
              <p className="font-poppins  text-xs text-white">
                Our Crypto Wallet App is not limited to a single cryptocurrency.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default Features1;
