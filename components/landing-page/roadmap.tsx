import { Card } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const RoadMap: React.FC = () => {
  return (
    <section className="">
      <div className="text-center py-6 px-14 text-white">
        <h2 className="font-poppins text-[#B07BFE] font-bold text-[2.5rem]">
          Roadmap
        </h2>
        <p className="font-poppins text-[0.875rem]">
          Detailed action plan of how we are going to reshape the future of
          earntertainment.
        </p>
      </div>

      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <div className="flex items-center text-[#B07BFE] font-bold justify-center font-poppins text-2xl">
              Q1
            </div>
            <div className="flex w-full inset-4 items-center rounded-full h-14">
              <div className="flex-grow border-4 border-b border-[#B07BFE]"></div>
              <div className="w-12 h-12 flex items-center justify-center  rounded-full shadow border-4 border-[#B07BFE] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="e-font-icon-svg size-6 e-fas-rocket"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#B07BFE"
                    d="M505.12 19.094c-1.19-5.532-6.658-11-12.207-12.188C460.716 0 435.507 0 410.407 0 307.175 0 245.27 55.203 199.052 128H94.838c-16.348.016-35.557 11.875-42.887 26.484L2.516 253.297A28.4 28.4 0 000 264a24.009 24.009 0 0024.006 24h103.81l-22.474 22.469c-11.366 11.361-12.996 32.258 0 45.25l50.904 50.906c11.156 11.188 32.156 13.156 45.277 0l22.475-22.469V488a24.009 24.009 0 0024.005 24 28.56 28.56 0 0010.707-2.516l98.729-49.39c14.629-7.297 26.508-26.5 26.508-42.86V312.797C456.544 266.484 511.98 204.39 511.98 101.703c.094-25.203.094-50.406-6.86-82.61zM384.04 168a40 40 0 1140.01-40 40.023 40.023 0 01-40.01 40z"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow border-b border-4 border-[#B07BFE]"></div>
            </div>
            <Card className="relative border-0 bg-[#251942]  px-8 pb-36 rounded-xl pt-9 m-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-[#251942] "></div>
              <div className="flex flex-col gap-4">
                <h3 className="font-poppins space-y-8 font-bold text-[1.25rem] text-[#B07BFE]">
                  Integration with Etherscan
                </h3>
                <p className="font-poppins  text-[0.875] text-white">
                  Our Crypto Wallet App is not limited to a single
                  cryptocurrency.
                </p>
              </div>
            </Card>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 pl-0 lg:basis-1/4">
            <div className="flex items-center text-[#B07BFE] font-bold justify-center font-poppins text-2xl">
              Q2
            </div>
            <div className="flex w-full  items-center rounded-full h-14">
              <div className="flex-grow border-4 border-b border-[#B07BFE]"></div>
              <div className="w-12 h-12 flex items-center justify-center  rounded-full shadow border-4 border-[#B07BFE] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="e-font-icon-svg size-6 e-fas-rocket"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#B07BFE"
                    d="M505.12 19.094c-1.19-5.532-6.658-11-12.207-12.188C460.716 0 435.507 0 410.407 0 307.175 0 245.27 55.203 199.052 128H94.838c-16.348.016-35.557 11.875-42.887 26.484L2.516 253.297A28.4 28.4 0 000 264a24.009 24.009 0 0024.006 24h103.81l-22.474 22.469c-11.366 11.361-12.996 32.258 0 45.25l50.904 50.906c11.156 11.188 32.156 13.156 45.277 0l22.475-22.469V488a24.009 24.009 0 0024.005 24 28.56 28.56 0 0010.707-2.516l98.729-49.39c14.629-7.297 26.508-26.5 26.508-42.86V312.797C456.544 266.484 511.98 204.39 511.98 101.703c.094-25.203.094-50.406-6.86-82.61zM384.04 168a40 40 0 1140.01-40 40.023 40.023 0 01-40.01 40z"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow border-b border-4 border-[#B07BFE]"></div>
            </div>
            <Card className="relative ml-2 border-0 bg-[#251942]  px-8 pb-36 rounded-xl pt-9 m-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-[#251942] "></div>
              <div className="flex flex-col gap-4">
                <h3 className="font-poppins space-y-8 font-bold text-[1.25rem] text-[#B07BFE]">
                  Integration with Etherscan
                </h3>
                <p className="font-poppins  text-[0.875] text-white">
                  Our Crypto Wallet App is not limited to a single
                  cryptocurrency.
                </p>
              </div>
            </Card>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 pl-0 lg:basis-1/4">
            <div className="flex items-center text-[#B07BFE] font-bold justify-center font-poppins text-2xl">
              Q3
            </div>
            <div className="flex w-full inset-4 items-center rounded-full h-14">
              <div className="flex-grow border-4 border-b border-[#B07BFE]"></div>
              <div className="w-12 h-12 flex items-center justify-center  rounded-full shadow border-4 border-[#B07BFE] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="e-font-icon-svg size-6 e-fas-rocket"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#B07BFE"
                    d="M505.12 19.094c-1.19-5.532-6.658-11-12.207-12.188C460.716 0 435.507 0 410.407 0 307.175 0 245.27 55.203 199.052 128H94.838c-16.348.016-35.557 11.875-42.887 26.484L2.516 253.297A28.4 28.4 0 000 264a24.009 24.009 0 0024.006 24h103.81l-22.474 22.469c-11.366 11.361-12.996 32.258 0 45.25l50.904 50.906c11.156 11.188 32.156 13.156 45.277 0l22.475-22.469V488a24.009 24.009 0 0024.005 24 28.56 28.56 0 0010.707-2.516l98.729-49.39c14.629-7.297 26.508-26.5 26.508-42.86V312.797C456.544 266.484 511.98 204.39 511.98 101.703c.094-25.203.094-50.406-6.86-82.61zM384.04 168a40 40 0 1140.01-40 40.023 40.023 0 01-40.01 40z"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow border-b border-4 border-[#B07BFE]"></div>
            </div>
            <Card className="relative ml-2 border-0 bg-[#251942]  px-8 pb-36 rounded-xl pt-9 m-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-[#251942] "></div>
              <div className="flex flex-col gap-4">
                <h3 className="font-poppins space-y-8 font-bold text-[1.25rem] text-[#B07BFE]">
                  Integration with Etherscan
                </h3>
                <p className="font-poppins  text-[0.875] text-white">
                  Our Crypto Wallet App is not limited to a single
                  cryptocurrency.
                </p>
              </div>
            </Card>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 pl-0 lg:basis-1/4">
            <div className="flex items-center text-[#B07BFE] font-bold justify-center font-poppins text-2xl">
              Q4
            </div>
            <div className="flex w-full inset-4 items-center rounded-full h-14">
              <div className="flex-grow border-4 border-b border-[#B07BFE]"></div>
              <div className="w-12 h-12 flex items-center justify-center  rounded-full shadow border-4 border-[#B07BFE] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="e-font-icon-svg size-6 e-fas-rocket"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#B07BFE"
                    d="M505.12 19.094c-1.19-5.532-6.658-11-12.207-12.188C460.716 0 435.507 0 410.407 0 307.175 0 245.27 55.203 199.052 128H94.838c-16.348.016-35.557 11.875-42.887 26.484L2.516 253.297A28.4 28.4 0 000 264a24.009 24.009 0 0024.006 24h103.81l-22.474 22.469c-11.366 11.361-12.996 32.258 0 45.25l50.904 50.906c11.156 11.188 32.156 13.156 45.277 0l22.475-22.469V488a24.009 24.009 0 0024.005 24 28.56 28.56 0 0010.707-2.516l98.729-49.39c14.629-7.297 26.508-26.5 26.508-42.86V312.797C456.544 266.484 511.98 204.39 511.98 101.703c.094-25.203.094-50.406-6.86-82.61zM384.04 168a40 40 0 1140.01-40 40.023 40.023 0 01-40.01 40z"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow border-b border-4 border-[#B07BFE]"></div>
            </div>
            <Card className="relative ml-2 border-0 bg-[#251942]  px-8 pb-36 rounded-xl pt-9 m-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-[#251942] "></div>
              <div className="flex flex-col gap-4">
                <h3 className="font-poppins space-y-8 font-bold text-[1.25rem] text-[#B07BFE]">
                  Integration with Etherscan
                </h3>
                <p className="font-poppins  text-[0.875] text-white">
                  Our Crypto Wallet App is not limited to a single
                  cryptocurrency.
                </p>
              </div>
            </Card>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 pl-0 lg:basis-1/4">
            <div className="flex items-center text-[#B07BFE] font-bold justify-center font-poppins text-2xl">
              Q5
            </div>
            <div className="flex w-full inset-4 items-center rounded-full h-14">
              <div className="flex-grow border-4 border-b border-[#B07BFE]"></div>
              <div className="w-12 h-12 flex items-center justify-center  rounded-full shadow border-4 border-[#B07BFE] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="e-font-icon-svg size-6 e-fas-rocket"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#B07BFE"
                    d="M505.12 19.094c-1.19-5.532-6.658-11-12.207-12.188C460.716 0 435.507 0 410.407 0 307.175 0 245.27 55.203 199.052 128H94.838c-16.348.016-35.557 11.875-42.887 26.484L2.516 253.297A28.4 28.4 0 000 264a24.009 24.009 0 0024.006 24h103.81l-22.474 22.469c-11.366 11.361-12.996 32.258 0 45.25l50.904 50.906c11.156 11.188 32.156 13.156 45.277 0l22.475-22.469V488a24.009 24.009 0 0024.005 24 28.56 28.56 0 0010.707-2.516l98.729-49.39c14.629-7.297 26.508-26.5 26.508-42.86V312.797C456.544 266.484 511.98 204.39 511.98 101.703c.094-25.203.094-50.406-6.86-82.61zM384.04 168a40 40 0 1140.01-40 40.023 40.023 0 01-40.01 40z"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow border-b border-4 border-[#B07BFE]"></div>
            </div>
            <Card className="relative border-0 bg-[#251942] ml-2  px-8 pb-36 rounded-xl pt-9 m-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-[#251942] "></div>
              <div className="flex flex-col gap-4">
                <h3 className="font-poppins space-y-8 font-bold text-[1.25rem] text-[#B07BFE]">
                  Integration with Etherscan
                </h3>
                <p className="font-poppins  text-[0.875] text-white">
                  Our Crypto Wallet App is not limited to a single
                  cryptocurrency.
                </p>
              </div>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};
export default RoadMap;
