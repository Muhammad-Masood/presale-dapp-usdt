"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";

import Faq from "react-faq-component";
const data = {
  title: "",
  rows: [
    {
      title: "Eligibility ",
      content: `To qualify, ensure you hold a minimum participation of $150 or more in the Widcoin presale. This minimum participation reflects the dollar value of $WID tokens you’ve purchased and own. The required amount may vary for each presale stage, so ensure ownership before each stage concludes. 

Important Note: Even $WID tokens obtained for free through our Referral link program count towards meeting the minimum participation. These tokens seamlessly combine with purchased ones, updating your balance automatically when you connect your wallet to the purchase form. 

How to Earn Free $WID Tokens: Participating in our Referral link program is simple! It’s akin to “digital word of mouth.” Connect your wallet used for purchasing $WID tokens to the purchase form, click the “10% referral link” button, and receive a shareable link. When someone clicks your link and purchases, you receive 10% free tokens! For instance, if they buy 10,000 WID tokens, you earn 1000 WID tokens, automatically added to your balance. Don’t miss out on this opportunity to win big with Widcoin! **Share your Referral Link along with an Advertising Banner <Download Banners👆>`,
    },
    {
      title: "How it works",
      content: `Presale Token Handling:

During Presale:

$WID tokens are securely held in a smart contract on the Binance Smart Chain.
Post-Presale Release:

Tokens are released to your wallet after the presale concludes.
Integration for Transfer:

Add the $WID token to your Binance Smart Chain network for smooth transfer operations.
Prize Allocation:

Presale Conclusion:

At each presale’s end, the smart contract proceeds with prize allocation.
Random Selection:

A qualified wallet is randomly chosen from those meeting the minimum participation criteria.
Winnings Distribution:

Winnings, a percentage of the total collected amount, are automatically distributed in USDC (BEP-20) and USDT (BEP-20) to the selected wallet.
This straightforward guide ensures clarity on how presale tokens are handled and how prize allocation occurs, maintaining transparency and efficiency throughout the process.`,
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

export default function Page() {
  return (
    <div>
      <section className="relative h-fit bg-cover bg-bg-winningPool">
        <div className="absolute inset-0 bg-[#7A7A7A] opacity-30"></div>
        <h1 className="relative leading-none font-semibold z-10 font-tradeWinds text-white py-8 text-center text-[4.375rem]">
          Win{" "}
          <span className="text-[#FFD700]">
            $1,5 Million <br /> in USDC and USDT <br />
          </span>{" "}
          with Widcoin
        </h1>
        <div className="z-10 relative">
          <Table className="border border-gray-600/30 bg-[#6B4760]/50 mx-auto text-white font-bold max-w-4xl">
            <TableHeader className="">
              <TableRow className="text-white hover:bg-[#6B4760]/50 text-center">
                <TableHead className="w-[150px] text-white text-center">
                  Stages
                </TableHead>
                <TableHead className="text-white text-center">
                  Minimum Participation
                </TableHead>
                <TableHead className="text-center text-white">
                  $WIDWIN
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stages.map((item, index) => (
                <TableRow key={index}>
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
        <h1 className="relative leading-none font-semibold z-10 font-tradeWinds text-white py-8 text-center text-[4.375rem]">
          Winning Pool
        </h1>

        <h1 className="relative leading-none font-semibold z-10 font-tradeWinds underline italic text-[#FF94FF]  text-center text-[2.813rem]">
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
            prize – the value of which is promptly delivered in USDC (BEP-20)
            and USDT (BEP-20). The winnings can be claimed at the end of each
            stage. Rest assured, our system is seamlessly managed by a smart
            contract deployed in the Blockchain, ensuring fairness and
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
            How to use free “Referral Rewards” tokens in the Winning Pool?
          </h2>

          <p className="font-roborto text-base">
            DDo you want to use your $WID tokens, acquired for free through the
            referral links to exceed the “Minimum Participation” value, and make
            them eligible to participate in the prize draw? It’s very easy:
            first, you must validate them before the end of each stage; second,
            when the sum of purchased tokens + free tokens exceeds the minimum
            value for participation, all you have to do is validate your
            participation for the prize draw by purchasing new tokens, even one
            $WID will be enough. This action is necessary and must always be
            done after exceeding the minimum value for participation, before the
            end of each stage and for all the stages of the presale in which you
            want to participate for the prize draw. If the value of the $WID
            tokens purchased already exceeds the “Minimum Participation”, no
            validation action is needed to participate for the prize draw,
            because everything will be validated automatically by the smart
            contract.
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
              $ {"  "}
              Buy WID
            </motion.button>
          </div>
        </div>
      </section>
      <section className="h-fit text-[#222330]">
        <h1 className="relative leading-none font-semibold z-10 font-tradeWinds  italic text-[#6EC1E4]  text-center text-[2.813rem]">
          Terms & Conditions
        </h1>

        {/* <Faq data={data} styles={styles} config={config} /> */}
      </section>
    </div>
  );
}
