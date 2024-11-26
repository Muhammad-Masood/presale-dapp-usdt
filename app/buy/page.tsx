// "use server";
import { ethers } from "ethers";
import { calculateInitialCountdown } from "@/lib/utils";
import { Suspense } from "react";
import { Stage } from "../lib/types";
import Presale from "../components/Presale";
import { presaleContractEthers } from "../lib/thirdweb";

export const dynamic = "force-dynamic";

export default async function Home() {
  const isAirdropOpen = await presaleContractEthers.isAirdropOpen();
  const airdropEndTime = await presaleContractEthers.airdropEndTime();
  const currentStageNumber = await presaleContractEthers.currentStage();
  // const stageDetails = await presaleContractEthers.getStageSpecs(
  //   currentStageNumber
  // );
  // const updatedStageSupply = ethers.formatEther(stageDetails.stageSupply);
  // const supplySoldFormat = Number(ethers.formatEther(stageDetails.supplySold));
  // const remainingSupply = Number(updatedStageSupply) - supplySoldFormat;
  // const updatedMinPartcip = Number(stageDetails.minParticipationUSDT) / 1e8;
  // const updatedTokenPrice = Number(stageDetails.tokenPrice) / 1e8;
  // const updatedStageDetails: Stage = {
  //   ...stageDetails,
  //   minParticipationUSDT: updatedMinPartcip,
  //   supplyRemaining: remainingSupply,
  //   stageSupply: updatedStageSupply,
  //   tokenPrice: updatedTokenPrice,
  //   winningPool: Number(stageDetails.winningPool) / 1e8,
  // };

  const currentStage = await presaleContractEthers.currentStage();
  let totalFundsRaised: number = 0;
  await Promise.all(
    Array.from({ length: Number(currentStage) }, async (_, index) => {
      const stageSpecs: Stage = await presaleContractEthers.getStageSpecs(
        index + 1
      );
      const supplySoldFormat = Number(
        ethers.formatEther(stageSpecs.supplySold!)
      );
      totalFundsRaised +=
        supplySoldFormat * Number(ethers.formatUnits(stageSpecs.tokenPrice, 8));
      return stageSpecs;
    })
  );

  const usdtPriceResponse = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd"
  );
  const usdtData = await usdtPriceResponse.json();
  const usdtPrice: number = usdtData.tether.usd;
  const bnbPriceResponse = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
  );
  const bnbData = await bnbPriceResponse.json();
  const bnbPrice: number = bnbData.binancecoin.usd;
  const usdcPriceResponse = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=usd-coin&vs_currencies=usd"
  );
  const usdcData = await usdcPriceResponse.json();
  const usdcPrice: number = usdcData["usd-coin"].usd;

  return (
    <Suspense>
      <div className="flex items-center justify-center">
        <Presale
          initialAirdropCountdown={
            isAirdropOpen ? calculateInitialCountdown(airdropEndTime) : ""
          }
          isAirdropOpen={isAirdropOpen}
          airdropEndTime={Number(airdropEndTime)}
          // referral={undefined}
          // stageDetails={updatedStageDetails}
          stageNumber={currentStageNumber}
          totalFundsRaised={totalFundsRaised}
          tokensPrices={{ usdtPrice, bnbPrice, usdcPrice }}
          referrerPercentage={5}
        />
      </div>
    </Suspense>
  );
}
