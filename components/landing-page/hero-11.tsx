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
        <img
          src="https://presale.widcoin.net/wp-content/uploads/2023/11/crypto_deily.svg"
          alt=""
        />
        <img
          src="https://presale.widcoin.net/wp-content/uploads/2023/11/crypto_news.svg"
          alt=""
        />

        <img
          src="https://presale.widcoin.net/wp-content/uploads/2023/11/crypto_deily.svg"
          alt=""
        />
        <img
          src="https://presale.widcoin.net/wp-content/uploads/2023/11/yahoo.svg"
          alt=""
        />

        <img
          src="https://presale.widcoin.net/wp-content/uploads/2023/11/yahoo.svg"
          alt=""
        />
      </Marquee>
    </section>
  );
};
export default Hero11;
