import { Card } from "../ui/card";

const Hero8: React.FC = () => {
  return (
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
  );
};
export default Hero8;
