/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { useInView } from "react-intersection-observer";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const stages = [
  { stage: "Stage 1", minParticipation: "$150", widwin: "$20,000" },
  { stage: "Stage 2", minParticipation: "$250", widwin: "$45,000" },
  { stage: "Stage 3", minParticipation: "$400", widwin: "$65,000" },
  { stage: "Stage 4", minParticipation: "$650", widwin: "$80,000" },
  { stage: "Stage 5", minParticipation: "$1,000", widwin: "$100,000" },
  { stage: "Stage 6", minParticipation: "$1,300", widwin: "$110,000" },
  { stage: "Stage 7", minParticipation: "$1,600", widwin: "$130,000" },
  { stage: "Stage 8", minParticipation: "$2,000", widwin: "$150,000" },
  { stage: "Stage 9", minParticipation: "$3,000", widwin: "$300,000" },
  { stage: "Stage 10", minParticipation: "$5,000", widwin: "$500,000" },
];

const Eligibility = (expanded: boolean | undefined) => {
  switch (expanded) {
    case true:
      return (
        <p className="text-[#61CE70] gap-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 448 512"
          >
            <path
              fill="#61CE70"
              d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg>
          Eligibility
        </p>
      );
    case false:
      return (
        <p className="flex items-center gap-2">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#61CE70"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg>
          Eligibility{" "}
        </p>
      );
  }
};

const HowItsWork = (expanded: boolean | undefined) => {
  switch (expanded) {
    case true:
      return (
        <p className="text-[#61CE70] gap-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 448 512"
          >
            <path
              fill="#6EC1E4"
              d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg>
          How it works
        </p>
      );
    case false:
      return (
        <p className="flex items-center gap-2">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#6EC1E4"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg>
          How it works
        </p>
      );
  }
};

export default function Page() {
  const referral = useSearchParams().get("ref");
  const isHighlighted = useSearchParams().get("highlight") === "referral";
  console.log("isHighlighted -> ", isHighlighted);
  const referralRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headingVariants = {
    hidden: { scaleX: 1 },
    visible: {
      scaleX: [1, 1.2, 0.9, 1.1, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      },
    },
  };

  useEffect(() => {
    if (isHighlighted && referralRef.current) {
      // Scroll to the paragraph when the component mounts
      (referralRef.current as any).scrollIntoView({ behavior: "smooth" });
    }
    console.log(referralRef.current);
  }, [isHighlighted]);

  return (
    <div>
      <section className="relative h-fit bg-cover bg-bg-winningPool">
        <div className="absolute inset-0 bg-[#7A7A7A] opacity-30"></div>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative leading-none font-semibold z-10 font-tradeWinds text-white py-8 text-center text-4xl md:text-[4.375rem]"
        >
          Win{" "}
          <span className="text-[#FFD700]">
            $1,5 Million <br /> in BNB, USDC and USDT <br />
          </span>{" "}
          with Widcoin
        </motion.h1>
        <div className="z-10 relative">
          <Table className="border border-gray-600/30 bg-[#6B4760]/50 mx-auto text-white font-bold max-w-4xl">
            <TableHeader className="">
              <TableRow className="text-white hover:bg-[#6B4760]/50 text-center">
                <TableHead className="w-[150px] text-white text-center">
                  Stages
                </TableHead>
                <TableHead className="text-white text-center">
                  Minimum participation $WID
                </TableHead>
                <TableHead className="text-center text-white">WIN</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-center notranslate">
              {stages.map((item, index) => (
                <TableRow key={index} className="text-center">
                  <TableCell className=" border-r border-gray-600">
                    {item.stage}
                  </TableCell>
                  <TableCell className=" border-r border-gray-600">
                    {item.minParticipation}
                  </TableCell>
                  <TableCell className=" border-r border-gray-600">
                    {item.widwin}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="text-center z-10 relative py-6 text-white">
          <h2 className="font-roborto text-[1.125rem] font-bold uppercase">
            🔒 🔓 AUTOMATIC BLOCK AND UNBLOCK OF WINNINGS PRE-SALE SMART
            CONTRACT
          </h2>

          <div className="mx-4">
            <h2 className="mt-4 font-roborto text-[1.125rem] text-center bg-bg-gradientText font-bold leading-5 px-8 rounded-md ">
              ** Random winner selection using Chainlink VRF. This process
              ensures that the results cannot be tampered with or manipulated by
              any single entity, including oracle operators, miners, users, or
              smart contract developers.
            </h2>
          </div>
        </div>
      </section>
      <section className="h-fit bg-[#27283C]">
        <motion.h1
          ref={ref}
          className="relative leading-none font-semibold z-10 font-tradeWinds text-white py-8 text-center text-4xl md:text-[4.375rem]"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          Winning Pool
        </motion.h1>

        <h1 className="relative leading-none font-semibold z-10 font-tradeWinds underline italic text-[#FF94FF]  text-center text-2xl md:text-[2.813rem]">
          🔥 Join $1,5 Million Quest 🔥
        </h1>
        <div className="text-white px-4  mx-auto max-w-6xl ">
          <h2 className="text-[2rem] pt-4  font-bold">Ready to Win Big?</h2>
          <h2 className="text-[1.75rem] py-2 font-bold">How to Participate?</h2>
          <p className="font-roborto text-base">
            Embark on your journey to winning by acquiring{" "}
            <span className="font-bold">$WID Tokens</span> during our exclusive
            presale period. Every purchase automatically enrolls your wallet
            address in our prize drawings at the end of each presale stage.
            Ensure you hold a minimum participation amount, starting at $150, to
            qualify for the excitement!
          </p>

          <h2 className="text-[1.75rem] py-2 font-bold">How Does it Work?</h2>

          <p className="font-roborto text-base">
            As each presale stage concludes, our cutting-edge smart contract
            identifies wallets meeting the minimum participation threshold.
            Through a random selection process, one lucky wallet receives the
            prize – the value of which is promptly delivered in BNB, USDC
            (BEP-20) and USDT (BEP-20). The winnings can be claimed at the end
            of each stage. Rest assured, our system is seamlessly managed by a
            smart contract deployed in the Blockchain, ensuring fairness and
            transparency at every step. In addition, the random selection of the
            winner is done using{" "}
            <span className="font-bold">Chainlink VRF.</span> This process
            ensures that the results cannot be tampered with or manipulated by
            any single entity, including oracle operators, miners, users, or
            smart contract developers.
          </p>

          <h2 className="text-[1.75rem] py-2 font-bold">
            What is “Minimum Participation”?
          </h2>

          <p className="font-roborto text-base">
            “Minimum Participation” signifies the{" "}
            <span className="font-bold">dollar value of $WID tokens</span> you
            hold. To be eligible for our thrilling prize draws, each presale
            stage mandates a specific minimum participation requirement.
            Notably, you can meet this threshold with ease, even if you’ve
            acquired $WID tokens for free through our Referral link program.
            These tokens seamlessly merge with your purchased ones, and you can
            effortlessly track your updated balance by linking your wallet to
            the purchase form.
          </p>

          <h2 className="text-[1.75rem] py-2 font-bold">
            What Are You Waiting For?
          </h2>

          <p className="font-roborto text-base">
            Seize the opportunity now! Act swiftly to become part of the
            excitement and stand a chance to win big!
          </p>
        </div>

        <div className="flex justify-center py-7 ">
          <div className="relative   inline-block">
            <motion.div
              className="absolute inset-0 bg-white rounded-3xl filter blur-md"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.button className="relative font-bold font-poppins  shadow-sm  bg-bg-gradientText4 p-3 px-8 text-[#3D214B]  text-base rounded-3xl">
              <Link href={referral ? `/buy?ref=${referral}` : "/buy"}>
                $ {"  "}
                Buy WID
              </Link>
            </motion.button>
          </div>
        </div>
      </section>
      <section className="h-fit bg-[#222330] py-8 ">
        <h1 className="relative leading-none font-semibold  font-tradeWinds  italic text-[#6EC1E4]  text-center text-4xl md:text-[2.813rem]">
          Terms & Conditions
        </h1>
        <div className="py-8 px-6">
          <Accordion
            className="border text-white border-white"
            allowZeroExpanded
            allowMultipleExpanded
            preExpanded={["a"]}
          >
            <AccordionItem uuid="a">
              <AccordionItemHeading className="border-y p-4 font-bold font-roborto underline text-[#6EB5C1] border-white/50">
                <AccordionItemButton>
                  <AccordionItemState>
                    {({ expanded }) => Eligibility(expanded)}
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel className="p-4 text-[#6C7975] font-roborto">
                <p className="space-y-4">
                  <div ref={referralRef}>
                    To qualify, ensure you hold a minimum participation of{" "}
                    <span className="font-bold">$150</span> or more in the{" "}
                    <span className="font-bold">Widcoin presale.</span>
                    This minimum participation reflects the dollar value of $WID
                    tokens you’ve purchased and own. The required amount may
                    vary for each presale stage, so ensure ownership before each
                    stage concludes.
                  </div>
                  <div>
                    <span className="font-bold">Important Note:</span> Even $WID
                    tokens obtained for free through our Referral link program
                    count towards meeting the minimum participation. These
                    tokens seamlessly combine with purchased ones, updating your
                    balance automatically when you connect your wallet to the
                    purchase form.
                  </div>
                  <div className={`${isHighlighted ? "bg-yellow-200" : ""}`}>
                    <span className="font-bold">
                      How to Earn Free $WID Tokens:
                    </span>{" "}
                    Participating in our Referral link program is simple! It’s
                    akin to “digital word of mouth.” Connect your wallet used
                    for purchasing $WID tokens to the purchase form, click the
                    “15% referral link” button, and receive a shareable link.
                    When someone clicks on your link and purchases, you both
                    receive a percentage of free $WID tokens! The owner of the
                    Referral link will receive 10% of the purchased value in
                    $WID tokens while the user who used the Referral link to
                    purchase $WID tokens will receive 5% more tokens. The amount
                    of free tokens received will be shown in the box “$WID You
                    Receive” after the symbol “+” .Don’t miss out on this
                    opportunity to win big with Widcoin! **Share your Referral
                    Link along with an Advertising Banner{" "}
                    <span className="text-pink-700 hover:text-[#2A4867]">
                      <Link
                        href={referral ? `/banner?ref=${referral}` : "/banner"}
                      >
                        {"<Download Banners👆>"}
                      </Link>
                    </span>
                  </div>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading className="border-y font-bold p-4 font-roborto underline text-[#6EB5C1] border-white/50">
                <AccordionItemButton>
                  <AccordionItemState>
                    {({ expanded }) => HowItsWork(expanded)}
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="p-4 text-[#6C7975] font-roborto">
                <p>
                  <div>
                    <span className="font-bold">Presale Token Handling:</span>
                    <ol className="mt-4 ml-6">
                      <li>
                        <span className="font-bold">1. During Presale:</span>
                        <ul className="list-disc mt-4 pl-20">
                          <li>
                            $WID tokens are securely held in a smart contract on
                            the Binance Smart Chain.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-bold">
                          2. Post-Presale Release:
                        </span>
                        <ul className="list-disc mt-4 pl-20">
                          <li>
                            Tokens are released to your wallet after the presale
                            concludes.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-bold">
                          3. Integration for Transfer:
                        </span>
                        <ul className="list-disc mt-4 pl-20">
                          <li>
                            Add the $WID token to your Binance Smart Chain
                            network for smooth transfer operations.
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <span className="font-bold">Prize Allocation:</span>
                    <ol className="mt-4 ml-6">
                      <li>
                        <span className="font-bold">1.Presale Conclusion:</span>
                        <ul className="list-disc mt-4 pl-20">
                          <li>
                            At each presale’s end, the smart contract proceeds
                            with prize allocation.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-bold">2.Random Selection:</span>
                        <ul className="list-disc mt-4 pl-20">
                          <li>
                            A qualified wallet is randomly chosen from those
                            meeting the minimum participation criteria.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-bold">
                          Winnings Distribution:
                        </span>
                        <ul className="list-disc mt-4 pl-20">
                          <li>
                            Winnings, a percentage of the total collected
                            amount, are automatically distributed in BNB, USDC
                            (BEP-20) and USDT (BEP-20) to the selected wallet.
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                  <div>
                    This straightforward guide ensures clarity on how presale
                    tokens are handled and how prize allocation occurs,
                    maintaining transparency and efficiency throughout the
                    process.
                  </div>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-center text-[#6C7975] font-roborto px-12 md:px-36">
          <span className="font-bold underline">Disclaimer:</span>{" "}
          Cryptocurrency may be unregulated in your jurisdiction. The value of
          cryptocurrencies may fluctuate. Profits may be subject to capital
          gains or other taxes applicable in your jurisdiction.
        </div>
      </section>
    </div>
  );
}
