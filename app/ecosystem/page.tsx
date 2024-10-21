/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/shared";
import { Card } from "@/components/ui/card";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

const OpenModal = ({ value }: { value: string }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button size="sm" className="w-full" color="primary">
          {value}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="z-50 data-[state=open]:animate-contentShow  p-4 fixed top-[50%] left-[50%] max-h-[85vh]  max-w-[650px] translate-x-[-50%] translate-y-[-50%]  bg-white  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="grid-cols-1 gap-2 pt-4 md:gap-4 md:grid-cols-2 grid">
            <div>
              <img src="/ecosystem/widnet-img.png" alt="" />
            </div>
            <div>
              <h3 className="md:mt-4 mt-1 font-nunito text-xl md:text-2xl leading-none font-semibold text-[#27283C]">
                Please wait until the presale ends. Access is reserved for $WID
                token Holders!
              </h3>
              <img
                className="w-2/5 mx-auto mt-4"
                src="/ecosystem/circle.gif"
                alt=""
              />
            </div>
          </div>
          <Dialog.Close asChild>
            <button
              className=" absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center  "
              aria-label="Close"
            >
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default function Page() {
  return (
    <div>
      <section>
        <div className="relative">
          <div className="bg-bg-heroEcos h-32 bg-repeat-x bg-top bg-contain  flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[#222330] opacity-90"></div>
            <h1 className="font-telex md:text-left text-center font-bold text-[#FFE4B5] text-4xl mt-2 md:text-[2.813rem] z-10 relative">
              Widcoin EcoSystem
            </h1>
            <img
              className="w-1/2 md:w-1/4 z-10 relative"
              src="/landing-page/loading.gif"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="bg-[#222330] py-12  container min-h-screen">
        <div className="grid-cols-1 md:px-24 md:grid-cols-3 grid gap-y-12  justify-items-center ">
          <Card className="p-2 rounded-none  w-11/12 bg-[#27283C]  border-red-700 border-2">
            <div className="flex flex-col gap-6 items-center">
              <a target="_blank" href="https://europandex.com/">
                <img
                  className="size-[5.75rem]"
                  src="/ecosystem/lopro.png"
                  alt=""
                />
              </a>
              <h3 className="font-poppins text-white font-bold text-[1.75rem] notranslate">
                Europandex
              </h3>
              <p className="text-center  font-poppins text-base text-[#6BD8D4]">
                P2P Crypto Exchange Platform With Escrow {">"} Non-Custodial
              </p>
              <div className="w-full  bg-gray-100  h-6 ">
                <div
                  className="bg-secondary flex font-roborto px-2 text-[#43484D] justify-between items-center h-6  text-xs  text-center"
                  style={{ width: "50%" }}
                >
                  <span>in progress</span>
                  <span>50%</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-[0.813rem] pb-2 mt-4 font-semibold">
              <OpenModal value="⮃ Vote" />
              <OpenModal value="📉 Polls" />
              <OpenModal value="🎁 Rewards" />

              <OpenModal value="🔎 Details" />
            </div>
          </Card>

          <Card className="p-2 rounded-none  w-11/12 bg-[#27283C]  border-[#FF8000] border-2">
            <div className="flex flex-col gap-6 items-center">
              <a target="_blank" href="https://tryllet.com/">
                <img
                  className="size-[5.75rem]"
                  src="/ecosystem/lopro1.png"
                  alt=""
                />
              </a>
              <h3 className="font-poppins text-white font-bold text-[1.75rem] notranslate">
                Tryllet
              </h3>
              <p className="text-center  font-poppins text-base text-[#6BD8D4]">
                The new generation of Social Networks Web3 integration and more
              </p>
              <div className="w-full  bg-gray-100  h-6 ">
                <div
                  className="bg-secondary flex font-roborto px-2 text-[#43484D] justify-between items-center h-6  text-xs  text-center"
                  style={{ width: "40%" }}
                >
                  <span>in progress</span>
                  <span>40%</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-[0.813rem] pb-2 mt-4 font-semibold">
              <OpenModal value="⮃ Vote" />

              <OpenModal value="📉 Polls" />

              <OpenModal value="🎁 Rewards" />

              <OpenModal value="🔎 Details" />
            </div>
          </Card>

          <Card className="p-2 rounded-none  w-11/12 bg-[#27283C]  border-[#6DD8D4] border-2">
            <div className="flex flex-col gap-6 items-center">
              <a target="_blank" href="">
                <img
                  className="size-[5.75rem]"
                  src="/ecosystem/lopro2.png"
                  alt=""
                />
              </a>
              <h3 className="font-poppins text-white font-bold text-[1.75rem] notranslate">
                Swapbay
              </h3>
              <p className="text-center  font-poppins text-base text-[#6BD8D4]">
                A superfast, low commission, multi chain crypto swapping
                platform
              </p>
              <div className="w-full  bg-gray-100  h-6 ">
                <div
                  className="bg-secondary flex font-roborto px-2 text-[#43484D] justify-between items-center h-6  text-xs  text-center"
                  style={{ width: "80%" }}
                >
                  <span>in progress</span>
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-[0.813rem] pb-2 mt-4 font-semibold">
              <OpenModal value="⮃ Vote" />

              <OpenModal value="📉 Polls" />

              <OpenModal value="🎁 Rewards" />

              <OpenModal value="🔎 Details" />
            </div>
          </Card>

          <Card className="p-2 rounded-none  w-11/12 bg-[#27283C]  border-[#A1410D] border-2">
            <div className="flex flex-col gap-6 items-center">
              <a target="_blank" href="https://widpay.net/">
                <img
                  className="size-[5.75rem]"
                  src="/ecosystem/lopro3.png"
                  alt=""
                />
              </a>
              <h3 className="font-poppins text-white font-bold text-[1.75rem] notranslate">
                Widpay
              </h3>
              <p className="text-center  font-poppins text-base text-[#6BD8D4]">
                Payment Gateway, Debit cards, Exchange, Multi-wallet...
              </p>
              <div className="w-full  bg-gray-100  h-6 ">
                <div
                  className="bg-secondary flex font-roborto px-2 text-[#43484D] justify-between items-center h-6  text-xs  text-center"
                  style={{ width: "10%" }}
                >
                  {/* <span>in progress</span> */}
                  <span>10%</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-[0.813rem] pb-2 mt-4 font-semibold">
              <OpenModal value="⮃ Vote" />

              <OpenModal value="📉 Polls" />

              <OpenModal value="🎁 Rewards" />

              <OpenModal value="🔎 Details" />
            </div>
          </Card>

          <Card className="p-2 rounded-none  w-11/12 bg-[#27283C]  border-[#3D214B] border-2">
            <div className="flex flex-col gap-6 items-center">
              <a target="_blank" href="https://widlance.com/">
                <img
                  className="size-[5.75rem]"
                  src="/ecosystem/wl.jpg"
                  alt=""
                />
              </a>
              <h3 className="font-poppins text-white font-bold text-[1.75rem] notranslate">
                Widlance
              </h3>
              <p className="text-center  font-poppins text-base text-[#6BD8D4]">
                Innovative Freelance Platform, Crypto payments, Web3 technology
              </p>
              <div className="w-full  bg-gray-100  h-6 ">
                <div
                  className="bg-secondary flex font-roborto px-2 text-[#43484D] justify-between items-center h-6  text-xs  text-center"
                  style={{ width: "15%" }}
                >
                  {/* <span>in progress</span> */}
                  <span>15%</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-[0.813rem] pb-2 mt-4 font-semibold">
              <OpenModal value="⮃ Vote" />

              <OpenModal value="📉 Polls" />

              <OpenModal value="🎁 Rewards" />

              <OpenModal value="🔎 Details" />
            </div>
          </Card>

          <Card className="p-2 rounded-none  w-11/12 bg-[#27283C]  border-[#61CE70] border-2">
            <div className="flex flex-col gap-6 items-center">
              <a target="_blank" href="https://widnet.network/">
                <img
                  className="size-[5.75rem]"
                  src="/ecosystem/wn.png"
                  alt=""
                />
              </a>
              <h3 className="font-poppins text-white font-bold text-[1.75rem] notranslate">
                WIDNET
              </h3>
              <p className="text-center  font-poppins text-base text-[#6BD8D4]">
                Blockchain, Layer 2, EVM-Compatible, Fast & Secure transactions,
                Low gas
              </p>
              <div className="w-full  bg-gray-100  h-6 ">
                <div
                  className="bg-secondary flex font-roborto px-2 text-[#43484D] justify-between items-center h-6  text-xs  text-center"
                  style={{ width: "3%" }}
                >
                  {/* <span>in progress</span> */}
                  <span>3%</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-[0.813rem] pb-2 mt-4 font-semibold">
              <OpenModal value="⮃ Vote" />

              <OpenModal value="📉 Polls" />

              <OpenModal value="🎁 Rewards" />
              <OpenModal value="🔎 Details" />
            </div>
          </Card>

          <Card className="p-2 rounded-none  w-11/12 bg-[#27283C]  border-[#61CE70] border-2">
            <div className="flex flex-col gap-6 items-center">
              <a target="_blank" href="https://wusdtoken.com/">
                <img
                  className="size-[5.75rem]"
                  src="/ecosystem/wusd.png"
                  alt=""
                />
              </a>
              <h3 className="font-poppins text-white font-bold text-[1.75rem] notranslate">
                WUSD
              </h3>
              <p className="text-center  font-poppins text-base text-[#6BD8D4]">
                The First Stabletoken, EVM-Wallet, Zero transaction fees, Secure
                & Trusted
              </p>
              <div className="w-full  bg-gray-100  h-6 ">
                <div
                  className="bg-secondary flex font-roborto px-2 text-[#43484D] justify-between items-center h-6  text-xs  text-center"
                  style={{ width: "2%" }}
                >
                  {/* <span>in progress</span> */}
                  <span>2%</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-[0.813rem] pb-2 mt-4 font-semibold">
              <OpenModal value="⮃ Vote" />
              <OpenModal value="📉 Polls" />
              <OpenModal value="🎁 Rewards" />
              <OpenModal value="🔎 Details" />
            </div>
          </Card>

          <Card className="p-2 rounded-none  w-11/12 bg-[#27283C]  border-[#61CE70] border-2">
            <div className="flex flex-col gap-6 items-center">
              <a target="_blank" href="">
                <img
                  className="size-[5.75rem]"
                  src="/ecosystem/lopro5.png"
                  alt=""
                />
              </a>
              <h3 className="font-poppins text-white font-bold text-[1.75rem] notranslate">
                New Project
              </h3>
              <p className="text-center  font-poppins text-base text-[#6BD8D4]">
                We are already thinking about a new project ...
              </p>
              <div className="w-full  bg-gray-100  h-6 ">
                <div
                  className="bg-green-400 flex font-roborto px-2 text-[#43484D] items-center h-6 text-xs text-center space-x-2"
                  style={{ width: "100%" }}
                >
                  <span>👉🏽</span>
                  <span>Join the project ...</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-[0.813rem] pb-2 mt-4 font-semibold">
              <OpenModal value="> Project <" />
              <OpenModal value="> Timeshare Project <" />
              <OpenModal value="🎁 Rewards" />
              <OpenModal value="🔎 Details" />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
