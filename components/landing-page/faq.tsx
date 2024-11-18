"use client";
import { useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
const AccorditionExpanded = (text: string, expanded: boolean | undefined) => {
  switch (expanded) {
    case true:
      return (
        <div className="flex justify-between items-center">
          <span className="font-poppins text-[1.063rem] text-[#FFB85E]">
            {text}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 512 512"
          >
            <path
              fill="#FFF"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"
            ></path>
          </svg>
        </div>
      );
    case false:
      return (
        <div className="flex justify-between items-center">
          <span className="font-poppins text-[1.063rem] text-white">
            {text}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 512 512"
          >
            <path
              fill="#FFF"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
            ></path>
          </svg>
        </div>
      );
  }
};
const FaqSection: React.FC = () => {
  const searchParams = useSearchParams();
  const referral = searchParams.get("ref");
  return (
    <section className="relative bg-bg-gradientHero5 py-6   ">
      <div className="bg-bg-gradient2 absolute inset-0 bg-contain bg-no-repeat opacity-30  "></div>
      <div className="relative z-10 text-center py-3 px-2 md:px-14 text-white">
        <h2 className="font-poppins text-secondary font-bold text-[3.625rem]">
          <span className="text-[#B07BFE]">F</span>
          AQs
        </h2>
        <div className="md:p-6">
          <Accordion
            className=" text-white "
            allowZeroExpanded
            allowMultipleExpanded
          >
            <AccordionItem>
              <AccordionItemHeading className="border-b p-4  border-white">
                <AccordionItemButton>
                  <AccordionItemState>
                    {({ expanded }) =>
                      AccorditionExpanded(
                        "                How can I participate in the Widcoin presale?",
                        expanded
                      )
                    }
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel className="border-b border-white p-4 px-12 text-base text-white font-poppins">
                <p className="space-y-4  text-left">
                  <ul className="space-y-4 list-decimal">
                    <li>
                      <span className="font-bold">
                        Visit
                        <a
                          className="text-pink-700"
                          href={
                            referral
                              ? `http://widcoin.org/?ref=${referral}`
                              : "http://widcoin.org/"
                          }
                        >
                          {" "}
                          widcoin.org :
                        </a>
                      </span>
                      Go to our official website during the presale period.
                    </li>
                    <li className="font-bold">Click “Buy $WID” Button.</li>
                    <li>
                      <span className="font-bold">Follow Instructions:</span>
                      Connect your e-wallet and purchase Widcoin with BNB, USDC
                      (BEP-20) or USDT (BEP-20).
                    </li>
                    <li>
                      <span className="font-bold">Beware of Phishing:</span>
                      Ensure the URL is
                      <a
                        className="text-pink-700"
                        href={
                          referral
                            ? `http://widcoin.org/?ref=${referral}`
                            : "http://widcoin.org/"
                        }
                      >
                        {" "}
                        https://widcoin.org{" "}
                      </a>
                      to avoid phishing scams.
                    </li>
                  </ul>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading className="border-b  p-4  border-white">
                <AccordionItemButton>
                  <AccordionItemState>
                    {({ expanded }) =>
                      AccorditionExpanded(
                        "What makes Widcoin unique as a utility token?",
                        expanded
                      )
                    }
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel className="border-b border-white p-4 px-4 text-base text-white font-poppins">
                <p className="space-y-4  text-left">
                  <span className="font-bold">Widcoin </span>
                  is a<span className="font-bold"> utility token </span>
                  built on the
                  <span className="font-bold"> Binance Smart Chain, </span>
                  offering more than just a digital currency. Its value is
                  contextual and derives significance from the platforms it
                  supports.
                  <span className="font-bold"> Widcoin </span>
                  empowers users within its ecosystem and serves as a digital
                  asset on a decentralized blockchain.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading className="border-b  p-4  border-white">
                <AccordionItemButton>
                  <AccordionItemState>
                    {({ expanded }) =>
                      AccorditionExpanded(
                        "How can I get involved in community governance?",
                        expanded
                      )
                    }
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="border-b border-white p-4 px-4 text-base text-white font-poppins">
                <p className="space-y-4  text-left">
                  After the presale, Widcoin holders gain access to our
                  community voting platform. Here, you can evaluate, propose,
                  and vote on new projects, actively participating in the
                  decision-making processes that shape the Widcoin ecosystem.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading className="border-b p-4  border-white">
                <AccordionItemButton>
                  <AccordionItemState>
                    {({ expanded }) =>
                      AccorditionExpanded(
                        "Where can I trade Widcoin after the presale?",
                        expanded
                      )
                    }
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel className="border-b border-white p-4 px-4 text-base text-white font-poppins">
                <p className="space-y-4  text-left">
                  Following the presale, Widcoin will be listed on both
                  centralized and decentralized crypto exchanges. You can trade,
                  buy, and sell Widcoin on these platforms. Stay updated with
                  exchange listings through our official website.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading className="border-b  p-4  border-white">
                <AccordionItemButton>
                  <AccordionItemState>
                    {({ expanded }) =>
                      AccorditionExpanded(
                        "How can I secure my Widcoin tokens after purchase?",

                        expanded
                      )
                    }
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="border-b border-white p-4 px-4 text-base text-white font-poppins">
                <p className="space-y-4  text-left">
                  Your Widcoin tokens are securely managed and protected by a
                  smart contract mechanism. Upon the conclusion of the presale,
                  the acquired tokens can be claimed from the presale dapp. We
                  recommend ensuring the security of your electronic wallet,
                  such as MetaMask, to guarantee a safe and reliable storage
                  experience for your tokens.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
