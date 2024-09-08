import { Card } from "../ui/card";

const Hero10: React.FC = () => {
  return (
    <section className="bg-bg-gradientHero3">
      <div className="grid p-14 md:p-28 md:grid-cols-2 gap-4 grid-cols-1">
        <Card className="bg-transparent relative border-[#FFD178] px-12 py-20 rounded-3xl">
          <img
            className="w-1/4 -top-28 left-32 hidden md:block  absolute"
            src="/landing-page/hero9-2.png"
            alt=""
          />
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex  gap-4 flex-col">
              <h3 className="font-poppins text-[#FFD175] space-y-6 font-bold text-[1.75rem]">
                Secure with BscScan
              </h3>
              <p className="font-poppins  text-[0.875rem] text-white">
                BEP-20 tokens, built upon the Ethereum ERC-20 standard, boast
                compatibility with numerous tools and platforms within the
                blockchain ecosystem. This extends to wallets, exchanges, and
                infrastructure supporting ERC-20 tokens.
              </p>
            </div>
            <div className="w-2/3 min-w-36">
              <img
                className="object-cover self-center"
                src="/landing-page/hero9.png"
                alt=""
              />
            </div>
          </div>
        </Card>

        <Card className="bg-transparent border-[#FF94FF] px-12 py-20 rounded-3xl">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-col   gap-4 ">
              <h3 className="font-poppins text-[#FF94FF] space-y-6 font-bold text-[1.75rem]">
                High Yield Potential
              </h3>
              <p className="font-poppins  text-[0.875rem] text-white">
                While maintaining a strong focus on security, our platform
                offers opportunities for users to explore high-yield
                investments.
              </p>
            </div>
            <div className="w-2/3 min-w-36">
              <img
                className="object-cover self-center"
                src="/landing-page/hero9-1.png"
                alt=""
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
export default Hero10;
