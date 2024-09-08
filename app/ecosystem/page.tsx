import { Button } from "@/components/shared";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <div>
      <section>
        <div className="relative">
          <div className="bg-bg-heroEcos h-32 bg-repeat-x bg-top bg-contain  flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[#222330] opacity-90"></div>
            <h1 className="font-telex font-bold text-[#FFE4B5] text-[2.813rem] z-10 relative">
              Widcoin EcoSystem
            </h1>
            <img
              className="w-1/4 z-10 relative"
              src="/landing-page/loading.gif"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="bg-[#222330] pt-8  container min-h-screen">
        <div className="grid-cols-1 px-24 md:grid-cols-3 grid ">
          <Card className="px-2 rounded-none  w-11/12 bg-[#27283C]  border-red-700 border-2">
            <div className="flex flex-col gap-6 items-center">
              <img
                className="size-[5.75rem]"
                src="/ecosystem/lopro.png"
                alt=""
              />
              <h3 className="font-poppins text-white font-bold text-[1.75rem]">
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
              <Button size="sm" className="w-full" color="primary">
                ⮃ Vote
              </Button>

              <Button size="sm" className="w-full" color="primary">
                📉 Polls
              </Button>

              <Button size="sm" className="w-full" color="primary">
                🎁 Rewards
              </Button>

              <Button size="sm" className="w-full" color="primary">
                🔎 Details
              </Button>
            </div>
          </Card>

          <Card className="px-2 rounded-none  w-11/12 bg-[#27283C]  border-red-700 border-2">
            <div className="flex flex-col gap-6 items-center">
              <img
                className="size-[5.75rem]"
                src="/ecosystem/lopro.png"
                alt=""
              />
              <h3 className="font-poppins text-white font-bold text-[1.75rem]">
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
              <Button size="sm" className="w-full" color="primary">
                ⮃ Vote
              </Button>

              <Button size="sm" className="w-full" color="primary">
                📉 Polls
              </Button>

              <Button size="sm" className="w-full" color="primary">
                🎁 Rewards
              </Button>

              <Button size="sm" className="w-full" color="primary">
                🔎 Details
              </Button>
            </div>
          </Card>

          <Card className="px-2 rounded-none  w-11/12 bg-[#27283C]  border-red-700 border-2">
            <div className="flex flex-col gap-6 items-center">
              <img
                className="size-[5.75rem]"
                src="/ecosystem/lopro.png"
                alt=""
              />
              <h3 className="font-poppins text-white font-bold text-[1.75rem]">
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
              <Button size="sm" className="w-full" color="primary">
                ⮃ Vote
              </Button>

              <Button size="sm" className="w-full" color="primary">
                📉 Polls
              </Button>

              <Button size="sm" className="w-full" color="primary">
                🎁 Rewards
              </Button>

              <Button size="sm" className="w-full" color="primary">
                🔎 Details
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
