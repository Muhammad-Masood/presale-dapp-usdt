"use client";
import Faq from "react-faq-component";
const data = {
  title: "",
  rows: [
    {
      title: "How can I participate in the Widcoin presale?",
      content: `Visit widcoin.net: Go to our official website during the presale period.
      Click “Buy $WID” Button.
      Follow Instructions: Connect your e-wallet and purchase Widcoin with USDC (BEP-20) or USDT (BEP-20).
      Beware of Phishing: Ensure the URL is https://widcoin.net to avoid phishing scams.`,
    },
    {
      title: "What makes Widcoin unique as a utility token?",
      content: `Widcoin is a utility token built on the Binance Smart Chain, offering more than just a digital currency. Its value is contextual and derives significance from the platforms it supports. Widcoin empowers users within its ecosystem and serves as a digital asset on a decentralized blockchain.`,
    },
    {
      title: "How can I get involved in community governance?",
      content: `After the presale, Widcoin holders gain access to our community voting platform. Here, you can evaluate, propose, and vote on new projects, actively participating in the decision-making processes that shape the Widcoin ecosystem.`,
    },
    {
      title: "Where can I trade Widcoin after the presale?",
      content: `Following the presale, Widcoin will be listed on both centralized and decentralized crypto exchanges. You can trade, buy, and sell Widcoin on these platforms. Stay updated with exchange listings through our official website.`,
    },
    {
      title: "How can I secure my Widcoin tokens after purchase?",
      content: `Your Widcoin tokens are securely managed and protected by a smart contract mechanism. Upon the conclusion of the presale, the acquired tokens can be claimed from the presale dapp. We recommend ensuring the security of your electronic wallet, such as MetaMask, to guarantee a safe and reliable storage experience for your tokens.`,
    },
  ],
};
const styles = {
  // styles for the FAQ component
  bgColor: "bg-white",
  titleTextColor: "text-2xl font-bold text-gray-800",
  rowTitleColor: "text-xl font-semibold text-gray-700",
  rowContentColor: "text-base text-gray-600",
  arrowColor: "text-gray-500",
};

const config = {
  animate: true,
  expandIcon: "+",
  collapseIcon: "-",
  openOnload: 0,
};
const FaqSection: React.FC = () => {
  return (
    <section className=" bg-bg-gradientHero5 py-6   ">
      <div className="text-center py-3 px-14 text-white">
        <h2 className="font-poppins text-secondary font-bold text-[3.625rem]">
          <span className="text-[#B07BFE]">F</span>
          AQs
        </h2>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </section>
  );
};

export default FaqSection;
