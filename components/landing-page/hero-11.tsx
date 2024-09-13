import Marquee from "react-fast-marquee";

const Hero11: React.FunctionComponent = () => {
  return (
    <section className="  bg-[#222330]   ">
      <div className="text-center py-6 px-14 text-white">
        <h2 className="font-poppins text-secondary font-bold text-[2.5rem]">
          Backers and Partners
        </h2>
      </div>

      <Marquee className="py-6">
        <img src="landing-page/companies/binance.svg" alt="" />
        <img src="landing-page/companies/bitcoin_insider.svg" alt="" />

        <img src="landing-page/companies/buisness_news.svg" alt="" />
        <img src="landing-page/companies/crypto_deily.svg" alt="" />

        <img src="landing-page/companies/crypto_news.svg" alt="" />

        <img src="landing-page/companies/marketwatch.svg" alt="" />

        <img src="landing-page/companies/morningstar.svg" alt="" />

        <img src="landing-page/companies/news_btc.svg" alt="" />

        <img src="landing-page/companies/yahoo.svg" alt="" />
      </Marquee>
    </section>
  );
};
export default Hero11;
