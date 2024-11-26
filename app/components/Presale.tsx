"use client";
import React, { useEffect, useState } from "react";
import { useActiveAccount, useSendTransaction } from "thirdweb/react";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { contract, presaleContractEthers } from "../lib/thirdweb";
import { prepareContractCall, toWei } from "thirdweb";
import { ethers } from "ethers";
import {
  erc20_abi,
  presale_address,
  usdc_address,
  usdt_address,
  widcoin_address,
} from "../contract/data";
import { Stage } from "../lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import { calculateInitialCountdown } from "@/lib/utils";

const tokenAddressUrl = `https://bscscan.com/address/${widcoin_address}`;
const presaleAddressUrl = `https://bscscan.com/address/${presale_address}`;

const Presale = ({
  initialAirdropCountdown,
  isAirdropOpen,
  airdropEndTime,
  stageNumber,
  totalFundsRaised,
  tokensPrices,
  referrerPercentage,
}: {
  initialAirdropCountdown: string;
  isAirdropOpen: boolean;
  airdropEndTime: number;
  stageNumber: number;
  totalFundsRaised: Number;
  tokensPrices: {
    usdtPrice: number;
    bnbPrice: number;
    usdcPrice: number;
  };
  referrerPercentage: number;
}) => {
  const [selectedPaymentMode, setSelectedPaymentMode] = useState<number>(0); // 0 => BNB 1 => USDT
  const [showPopup, setShowPopup] = useState<boolean>(isAirdropOpen);
  const [referralLink, setReferralLink] = useState<string | undefined>(
    undefined
  );
  const [prices, setPrices] = useState({
    usdtAmount: 0,
    widAmount: 0,
    bnbAmount: 0,
    usdcAmount: 0,
  });
  const [isApproving, setIsApproving] = useState<boolean>(false);
  const [updatedTotalFunds, setUpdatedTotalFunds] = useState<
    number | undefined
  >(undefined);
  const [userWIDTokens, setUserWIDTokens] = useState<
    | {
        purchasedTokens: number;
        referralTokens: number;
      }
    | undefined
  >(undefined);
  const [stageDetails, setStageDetails] = useState<Stage | undefined>(
    undefined
  );
  const [countdown, setCountdown] = useState<string>(initialAirdropCountdown);

  const activeAccount = useActiveAccount();
  const searchParams = useSearchParams();
  const referral = searchParams.get("ref");
  const { toast } = useToast();
  const router = useRouter();
  const {
    mutate: sendTransaction,
    isPending,
    isSuccess,
    error,
    isError,
  } = useSendTransaction();

  useEffect(() => {
    const fetchAndUpdateData = async () => {
      const { address } = activeAccount!;
      const amount = await presaleContractEthers.purchasedTokens(address);
      const referralTokens = await presaleContractEthers.refferalTokens(
        address
      );
      setUserWIDTokens({
        purchasedTokens: Number(ethers.formatEther(amount)),
        referralTokens: Number(ethers.formatEther(referralTokens)),
      });
      console.log(userWIDTokens);
      const isAirdropOpen = await presaleContractEthers.isAirdropOpen();
      const airdropEndTime = await presaleContractEthers.airdropEndTime();
      setCountdown(
        isAirdropOpen ? calculateInitialCountdown(airdropEndTime) : ""
      );
      const currentStageNumber = await presaleContractEthers.currentStage();
      const stageDetailsRaw = await presaleContractEthers.getStageSpecs(
        currentStageNumber
      );
      const updatedStageSupply = ethers.formatEther(
        stageDetailsRaw.stageSupply
      );
      const supplySoldFormat = Number(
        ethers.formatEther(stageDetailsRaw.supplySold)
      );
      const remainingSupply = Number(updatedStageSupply) - supplySoldFormat;
      const updatedMinPartcip =
        Number(stageDetailsRaw.minParticipationUSDT) / 1e8;
      const updatedTokenPrice = Number(stageDetailsRaw.tokenPrice) / 1e8;
      const updatedStageDetails: Stage = {
        ...stageDetailsRaw,
        stageNumber: currentStageNumber,
        minParticipationUSDT: updatedMinPartcip,
        supplyRemaining: remainingSupply,
        stageSupply: updatedStageSupply,
        tokenPrice: updatedTokenPrice,
        winningPool: Number(stageDetailsRaw.winningPool) / 1e8,
      };
      setStageDetails(updatedStageDetails);
      let _totalFundsRaised: number = 0;
      await Promise.all(
        Array.from({ length: Number(currentStageNumber) }, async (_, index) => {
          const _stageSpecs: Stage = await presaleContractEthers.getStageSpecs(
            index + 1
          );
          const supplySoldFormat = Number(
            ethers.formatEther(_stageSpecs.supplySold!)
          );
          _totalFundsRaised +=
            supplySoldFormat *
            Number(ethers.formatUnits(_stageSpecs.tokenPrice, 8));
          return _stageSpecs;
        })
      );
      console.log("_totalFundsRaised: ", _totalFundsRaised);
      setUpdatedTotalFunds(_totalFundsRaised);
      setShowPopup(isAirdropOpen);
    };
    if (activeAccount) fetchAndUpdateData();
    if (isError) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
    if (isSuccess) {
      toast({
        title: "Purchase Transaction processed successfully!",
        description: "Please wait for the transaction confirmation.",
      });
      setTimeout(() => {
        console.log("soft refresh...");
        fetchAndUpdateData();
        router.refresh();
      }, 8000);
    }
  }, [activeAccount?.address, isError, isSuccess]);

  useEffect(() => {
    const fetchAndUpdateData = async () => {
      const currentStageNumber = await presaleContractEthers.currentStage();
      const stageDetailsRaw = await presaleContractEthers.getStageSpecs(
        currentStageNumber
      );
      const updatedStageSupply = ethers.formatEther(
        stageDetailsRaw.stageSupply
      );
      const supplySoldFormat = Number(
        ethers.formatEther(stageDetailsRaw.supplySold)
      );
      const remainingSupply = Number(updatedStageSupply) - supplySoldFormat;
      const updatedMinPartcip =
        Number(stageDetailsRaw.minParticipationUSDT) / 1e8;
      const updatedTokenPrice = Number(stageDetailsRaw.tokenPrice) / 1e8;
      const updatedStageDetails: Stage = {
        ...stageDetailsRaw,
        stageNumber: currentStageNumber,
        minParticipationUSDT: updatedMinPartcip,
        supplyRemaining: remainingSupply,
        stageSupply: updatedStageSupply,
        tokenPrice: updatedTokenPrice,
        winningPool: Number(stageDetailsRaw.winningPool) / 1e8,
      };
      setStageDetails(updatedStageDetails);
      let _totalFundsRaised: number = 0;
      await Promise.all(
        Array.from({ length: Number(currentStageNumber) }, async (_, index) => {
          const _stageSpecs: Stage = await presaleContractEthers.getStageSpecs(
            index + 1
          );
          const supplySoldFormat = Number(
            ethers.formatEther(_stageSpecs.supplySold!)
          );
          _totalFundsRaised +=
            supplySoldFormat *
            Number(ethers.formatUnits(_stageSpecs.tokenPrice, 8));
          return _stageSpecs;
        })
      );
      console.log("_totalFundsRaised: ", _totalFundsRaised);
      setUpdatedTotalFunds(_totalFundsRaised);
      if (activeAccount) {
        const { address } = activeAccount;
        const amount = await presaleContractEthers.purchasedTokens(address);
        const referralTokens = await presaleContractEthers.refferalTokens(
          address
        );
        setUserWIDTokens({
          purchasedTokens: Number(ethers.formatEther(amount)),
          referralTokens: Number(ethers.formatEther(referralTokens)),
        });
      }
      const isAirdropOpen = await presaleContractEthers.isAirdropOpen();
      const airdropEndTime = await presaleContractEthers.airdropEndTime();
      setCountdown(
        isAirdropOpen ? calculateInitialCountdown(airdropEndTime) : ""
      );
      setShowPopup(isAirdropOpen);
    };
    fetchAndUpdateData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const distance = Number(airdropEndTime) * 1000 - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (distance < 0) {
        clearInterval(interval);
        setCountdown("Airdrop Ended");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [airdropEndTime]);

  const prepareAndSendTransaction = async (totalWIDCost?: bigint) => {
    const widAmountDec = toWei(prices.widAmount.toString());
    const transaction = prepareContractCall({
      contract,
      method: "function buyToken(uint256 amount, uint8 mode,address refferal)",
      params: [
        widAmountDec,
        selectedPaymentMode,
        referral === null
          ? "0x0000000000000000000000000000000000000000"
          : referral,
      ],
      value: totalWIDCost,
    });
    console.log(transaction);
    sendTransaction(transaction);
  };

  const buyToken = async () => {
    if (!activeAccount) {
      toast({
        title: "Connect Your Wallet",
        variant: "destructive",
      });
    } else {
      try {
        setIsApproving(true);
        const wicAmountDec = toWei(prices.widAmount.toString());
        const totalWIDCost =
          await presaleContractEthers.calculateTotalTokensCost(
            wicAmountDec,
            selectedPaymentMode
          );
        console.log(totalWIDCost);
        if (typeof window !== "undefined") {
          const provider = new ethers.BrowserProvider((window as any).ethereum);
          const signer = await provider.getSigner();
          // BNB Payment
          if (selectedPaymentMode === 1) {
            await prepareAndSendTransaction(totalWIDCost);
          } else {
            const tokenSignerContract = new ethers.Contract(
              selectedPaymentMode === 2 ? usdt_address : usdc_address,
              erc20_abi,
              signer
            );
            const tx = await tokenSignerContract.approve(
              presale_address,
              totalWIDCost
            );
            console.log(tx);
            setTimeout(() => {
              console.log("processing after 10 seconds");
              prepareAndSendTransaction();
            }, 9000);
            toast({
              title: "Approval transaction processed successfully!",
              description:
                "Please wait for the confirmation and purchase transaction.",
            });
          }
        }
      } catch (error) {
        toast({
          title: "Error",
          description: String(error),
          variant: "destructive",
        });
      } finally {
        setIsApproving(false);
      }
    }
  };

  const handleSetPrice = (usdAmount: number) => {
    const { usdtPrice, bnbPrice, usdcPrice } = tokensPrices;
    const widAmount = usdAmount / stageDetails!.tokenPrice;
    console.log("Inside_handle -> ", usdtPrice, bnbPrice, usdcPrice);
    const usdtAmount = usdAmount / usdtPrice;
    const bnbAmount = usdAmount / bnbPrice;
    const usdcAmount = usdAmount / usdcPrice;
    console.log(usdtPrice, bnbPrice, usdcPrice);
    setPrices({
      usdtAmount,
      widAmount,
      bnbAmount,
      usdcAmount,
    });
  };

  const getNameByModeId = (mode: number) => {
    switch (mode) {
      case 0:
        return "USDC";
      case 1:
        return "BNB";
      case 2:
        return "USDT";
      default:
        return "";
    }
  };

  const calculateReferrerAmount = (widAmount: number) => {
    const referrerAmount = (referrerPercentage * widAmount) / 100; // 5% of widAmount
    return referrerAmount;
  };
  console.log("referral -> ", referral);
  return (
    <div className="w-full lg:w-1/2 my-4">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-black p-6 rounded-lg shadow-2xl text-center">
            <h2 className="text-2xl font-bold text-yellow-400">
              Buy now and double (x2) your $WID!
            </h2>
            <p className="text-gray-300 mt-3">
              Limited time offer during the airdrop period.
            </p>
            <p className="text-red-500 font-semibold text-lg">{countdown}</p>
            <button
              className="mt-5 px-5 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg shadow-lg hover:from-yellow-600 hover:to-yellow-700"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="container border-2 border-blue-500 rounded-lg bg-gradient-to-r from-blue-900 via-purple-900 to-black px-2 lg:px-5 py-5 ">
        <div className="iq-countdown text-center pb-2 pt-2">
          <h3 className="uppercase text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 pb-2">
            Join Presale
          </h3>
          <div className="progress my-3 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-500"
              style={{ width: "50%" }}
            ></div>
          </div>
          <p className="text-xl text-yellow-400 font-semibold pb-2 pt-2">
            🔥 1 $WID ={" "}
            <span className="font-bold">
              ${stageDetails && stageDetails.tokenPrice}
            </span>{" "}
            🔥
          </p>
        </div>
        <ul className="flex justify-center space-x-6 mb-5 pt-3">
          {["USDC(BEP-20)", "BNB", "USDT(BEP-20)"].map((item, index) => (
            <li
              key={index}
              className="nav-item rounded-md shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
            >
              <button
                className={`nav-link flex items-center space-x-2 p-3 text-white transition-all duration-300 ease-in-out ${
                  selectedPaymentMode === index
                    ? "bg-purple-500"
                    : "bg-purple-800"
                } hover:bg-purple-600`}
                onClick={() => setSelectedPaymentMode(index)}
              >
                <img
                  src={
                    item === "USDC(BEP-20)"
                      ? "/usdc(bep-20).png"
                      : item === "BNB"
                      ? "/bnb.png"
                      : "/usdt(bep-20).png"
                  }
                  alt={`${item}_logo`}
                  width={30}
                  height={30}
                />
                <b>
                  {item === "USDT(BEP-20)" ? (
                    <div className="flex flex-col">
                      <p className="text-xs lg:text-md md:text-sm font-bold tracking-wide">
                        USDT
                      </p>
                      <span className="text-xs lg:text-sm font-normal lg:font-bold md:font-medium">
                        (BEP-20)
                      </span>
                    </div>
                  ) : item === "BNB" ? (
                    <div className="flex flex-col">
                      <p className="text-xs lg:text-md md:text-sm font-bold tracking-wide">
                        BNB
                      </p>
                      <span className="text-xs lg:text-sm font-normal lg:font-bold md:font-medium">
                        (BEP-20)
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <p className="text-xs lg:text-md md:text-sm font-bold tracking-wide">
                        USDC
                      </p>
                      <span className="text-xs lg:text-sm font-normal lg:font-bold md:font-medium">
                        (BEP-20)
                      </span>
                    </div>
                  )}
                </b>
              </button>
            </li>
          ))}
        </ul>

        {
          <div className="text-center mt-2 text-sm text-gray-400">
            {selectedPaymentMode !== 1 && (
              <p>Note: There will be a total of 2 transactions.</p>
            )}
          </div>
        }
        <div className="tab-content py-4">
          <div className={`tab-pane fade show active`}>
            <div className="space-y-4 mt-4 mb-6">
              <label className="text-gray-200 text-lg font-semibold">
                Enter Amount
              </label>

              <div className="flex items-center">
                <div className="relative w-full">
                  <span className="absolute left-4 top-3 text-gray-400 ">
                    $
                  </span>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      handleSetPrice(Number(e.target.value));
                    }}
                    min={1}
                    type="number"
                    className="w-full py-3 px-8 rounded-l-lg border border-gray-600 bg-gray-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition pl-8"
                    placeholder="Enter Dollar amount"
                  />
                </div>
                <button className="flex items-center justify-center text-white rounded-r-lg transition px-4">
                  <img
                    src="/wclogo.png"
                    alt="Preloader Logo"
                    width={30}
                    height={30}
                  />
                </button>
              </div>

              <div className="flex items-center gap-x-4 justify-between">
                <div className="space-y-4 mt-2">
                  <label className="text-gray-200 text-md">
                    {getNameByModeId(selectedPaymentMode)} To Pay
                  </label>
                  <div className="flex items-center">
                    <input
                      disabled
                      className="w-full py-3 px-4 rounded-l-lg border border-gray-600 bg-gray-900 text-gray-500 text-sm"
                      placeholder={`${getNameByModeId(
                        selectedPaymentMode
                      )} to pay`}
                      value={
                        getNameByModeId(selectedPaymentMode) === "USDC"
                          ? prices.usdcAmount.toFixed(3)
                          : getNameByModeId(selectedPaymentMode) === "BNB"
                          ? prices.bnbAmount.toFixed(3)
                          : prices.usdtAmount.toFixed(3)
                      }
                    />
                    <button className="flex items-center justify-center text-white rounded-r-lg  transition px-4">
                      <img
                        src={
                          getNameByModeId(selectedPaymentMode) === "USDC"
                            ? "/usdc(bep-20).png"
                            : getNameByModeId(selectedPaymentMode) === "BNB"
                            ? "/bnb.png"
                            : "/usdt(bep-20).png"
                        }
                        alt={`token_logo`}
                        width={30}
                        height={30}
                      />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 mt-2">
                  <label className="text-gray-200 text-md">
                    $WID You Receive
                  </label>
                  <div className="flex items-center">
                    <input
                      disabled
                      className="w-full py-3 px-4 rounded-l-lg border border-gray-600 bg-gray-900 text-gray-500 text-sm"
                      placeholder="$WID you receive"
                      value={
                        isAirdropOpen
                          ? `${(prices.widAmount * 2).toFixed(2)} ${
                              referral
                                ? calculateReferrerAmount(
                                    prices.widAmount * 2
                                  ).toFixed(2)
                                : ""
                            }`
                          : `${prices.widAmount.toFixed(2)} ${
                              referral
                                ? "+" +
                                  calculateReferrerAmount(
                                    prices.widAmount
                                  ).toFixed(2)
                                : ""
                            }`
                      }
                    />
                    <button className="flex items-center justify-center text-white rounded-r-lg  transition px-4">
                      <img
                        src="/wclogo.png"
                        alt="Preloader Logo"
                        width={30}
                        height={30}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center my-5">
              <button
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-gold-light to-gold-dark text-white font-bold shadow-lg hover:from-gold-dark hover:to-gold-light transform hover:scale-105 transition-transform duration-300"
                onClick={buyToken}
                disabled={isPending || isApproving}
              >
                {isPending || isApproving
                  ? isApproving
                    ? `${
                        selectedPaymentMode === 1
                          ? "Processing..."
                          : "Approving..."
                      }`
                    : "Processing..."
                  : "Buy Now"}
              </button>
            </div>
          </div>
        </div>
        <div className="presaleStats bg-yellow-500 bg-opacity-10 text-gray-200 p-6 rounded-lg shadow-inner">
          <div className="flex space-x-2 items-center justify-center my-5 text-white text-xl font-semibold">
            {/* <hr className="border-t border-white w-1/5" /> */}
            <p className="">Your $WID = </p>
            <p className="text-sm md:text-base">
              {userWIDTokens && stageDetails
                ? (
                    Number(userWIDTokens.referralTokens) +
                    userWIDTokens.purchasedTokens
                  )
                    .toFixed(2)
                    .toString() +
                  " $WID ($" +
                  (
                    (userWIDTokens.referralTokens +
                      userWIDTokens.purchasedTokens) *
                    stageDetails.tokenPrice
                  )
                    .toFixed(2)
                    .toString() +
                  ")"
                : "---"}{" "}
            </p>
            {/* <hr className="border-t border-white w-1/5" /> */}
          </div>
          <div className="statTop flex justify-between items-center pb-3">
            <p className="text-sm md:text-base">Your Purchased $WID</p>
            <p>
              {userWIDTokens && stageDetails
                ? userWIDTokens.purchasedTokens.toFixed(2).toString() +
                  " " +
                  "($" +
                  (userWIDTokens.purchasedTokens * stageDetails.tokenPrice)
                    .toFixed(2)
                    .toString() +
                  ")"
                : activeAccount
                ? "---"
                : "Connect Wallet"}
            </p>
          </div>
          <div className="statTop flex justify-between items-center border-b border-gray-600 pb-3">
            <p className="text-sm md:text-base">Your Referral Rewards</p>
            <p className="text-sm md:text-base">
              {userWIDTokens && stageDetails
                ? Number(userWIDTokens.referralTokens).toFixed(2) +
                  " $WID ($" +
                  (userWIDTokens.referralTokens * stageDetails.tokenPrice)
                    .toFixed(2)
                    .toString() +
                  ")"
                : "---"}{" "}
            </p>
          </div>
          <div className="statBottom flex justify-between items-center py-3">
            <p className="text-sm md:text-base">Stage</p>
            <p className="text-sm md:text-base">
              {Number(stageDetails ? stageDetails.stageNumber : stageNumber)}
            </p>
          </div>
          <div className="statBottom flex justify-between items-center py-3">
            <p className="text-sm md:text-base">Token Sold</p>
            <p className="text-sm md:text-base">
              {stageDetails && stageDetails.stageSupply} /{" "}
              {stageDetails && stageDetails.supplyRemaining.toFixed(2)} $WID
            </p>
          </div>

          <div className="statBottom flex justify-between items-center py-3">
            <p className="text-sm md:text-base">Total Funds Raised</p>
            <p className="text-sm md:text-base">
              {updatedTotalFunds
                ? updatedTotalFunds.toFixed(2).toString()
                : totalFundsRaised.toFixed(2).toString()}{" "}
              $
            </p>
          </div>

          <div className="bg-blue-500 py-3 px-4 rounded-xl mt-2 border border-gray-900">
            <p className="text-center pt-1">Winning poll</p>
            <div className="statBottom flex justify-between items-center py-1">
              <p>Win</p>
              <p>{stageDetails && stageDetails.winningPool.toString()} $</p>
            </div>
            <div className="statBottom flex justify-between items-center py-2">
              <p className="text-sm md:text-base">
                Min Participation (Winner Pool)
              </p>
              <p className="text-sm md:text-base">
                {stageDetails && stageDetails.minParticipationUSDT} $
              </p>
            </div>
            <p className="text-center pt-1">
              {stageDetails &&
              userWIDTokens &&
              userWIDTokens.purchasedTokens * stageDetails.tokenPrice >=
                stageDetails.minParticipationUSDT
                ? "You will participate in the drawing, Good Luck!"
                : ""}
            </p>
          </div>
        </div>
        <div className="text-center mt-6 flex items-center justify-center flex-col">
          <button
            className="px-4 py-2 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-600"
            onClick={() =>
              activeAccount === undefined
                ? toast({
                    title: "Connect Your Wallet",
                    variant: "destructive",
                  })
                : setReferralLink(
                    `${window.location.origin}?ref=${activeAccount!.address}`
                  )
            }
          >
            <p className="text-pink-200 font-bold">Claim 10% Referral Link</p>
            {referralLink && (
              <Badge
                variant={"secondary"}
                className="cursor-pointer font-bold mt-2"
                onClick={() => {
                  navigator.clipboard.writeText(referralLink);
                  toast({
                    title: "Copied to Clipboard",
                  });
                }}
              >
                Copy Link
              </Badge>
            )}
          </button>
          <div className="flex items-center gap-4 mt-3 text-white pt-3">
            <a
              href={tokenAddressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 lg:gap-2 md:gap-2"
            >
              <img
                src={"/bsscan.png"}
                alt="bsscan_logo"
                className="w-6 h-6" // Adjust the size as needed
              />
              <span className="text-xs lg:text-sm md:text-sm">
                WID Coin Contract
              </span>
            </a>
            <a
              href={presaleAddressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center  gap-1 lg:gap-2 md:gap-2"
            >
              <img
                src={"/bsscan.png"}
                alt="BSScan Logo"
                className="w-6 h-6" // Adjust the size as needed
              />
              <span className="text-xs lg:text-sm md:text-sm">
                Presale Contract
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presale;
