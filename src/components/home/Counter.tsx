import { AppUrl } from "@/configs";
import Image from "next/image";

export const CounterComponent = () => {
  return (
    <div className="relative">
      <div className="w-full sm:mt-[160px] mt-[120px] flex flex-col justify-center items-center overflow-x-hidden">
        <div>
          <h1 className="text-white font-neue-display md:font-neue-text font-medium sm:text-[64px] sm:leading-[70.4px] text-[32px] leading-[35.2px] text-center">
            These are
          </h1>
          <div className="relative sm:h-28 h-11 flex justify-center font-semibold font-neue-display md:mt-2">
            <Image
              className="absolute md:scale-[2.5] md:-top-[25px] scale-[3.46]"
              src={`${AppUrl}/images/svgs/counter_banner.svg`}
              alt="Counter Banner"
              width="446"
              height="80"
            />
          </div>
          <p className="text-white sm:mt-[9px] mt-[25px] font-medium sm:text-xl sm:leading-7 text-base leading-[22.4px] text-center font-neue-text">
            Since 2024
          </p>
        </div>
        <div className="w-full px-5 flex justify-center items-center">
          <div className="sm:w-[905px] sm:h-[262px] w-full h-[136px] bg-counter-gradient p-1 sm:mt-[61px] mt-10 rounded-3xl relative z-10">
            <div className="w-full h-full flex justify-center items-center rounded-3x relative z-10">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-center text-white sm:text-[64px] sm:leading-[64px] font-semibold text-5xl leading-[48px] font-neue-display">
                  13,000,000
                </h1>
                <p className="text-center text-white font-medium font-neue-text sm:text-base sm:leading-[22.4px] text-sm leading-[19.6px] mt-2 md:mt-0">
                  Total users
                </p>
              </div>
            </div>
            <div className="rounded-[20px] sm:w-[896px] sm:h-[254px] w-[calc(100%-10px)] h-[126px] absolute top-1 left-1 bg-border-gradient filter blur-[-2px]"></div>
            <div className="rounded-[20px] sm:w-[896px] sm:h-[254px] w-[calc(100%-10px)] h-[126px] absolute top-1 left-1 bg-border-gradient filter blur-[-4px]"></div>
            <div className="rounded-[20px] sm:w-[896px] sm:h-[254px] w-[calc(100%-10px)] h-[126px] absolute top-1 left-1 bg-border-gradient filter blur-[-8px]"></div>
            <div className="rounded-[20px] sm:w-[896px] sm:h-[254px] w-[calc(100%-10px)] h-[126px] absolute top-1 left-1 bg-border-gradient filter blur-[-16px]"></div>
            <div className="rounded-[20px] sm:w-[896px] sm:h-[254px] w-[calc(100%-10px)] h-[126px] absolute top-1 left-1 bg-border-gradient filter blur-[-32px]"></div>
            <div className="rounded-[20px] sm:w-[896px] sm:h-[254px] w-[calc(100%-10px)] h-[126px] absolute top-1 left-1 bg-border-gradient filter blur-[-48px]"></div>
            <div className="rounded-[20px] sm:w-[896px] sm:h-[254px] w-[calc(100%-10px)] h-[126px] absolute top-1 left-1  bg-black blur-[16px]"></div>
          </div>
        </div>
        <div className="sm:w-[900px] sm:h-[206px] w-full h-[136px] sm:mt-5 mt-[7px] px-5 sm:px-0 flex justify-between items-center gap-4 lg:gap-0">
          <div className="w-full lg:w-[443px] bg-[#141414] md:h-[206px] h-[122px] sm:px-8 px-6 flex justify-start items-start md:items-center rounded-[32px]">
            <div className="flex flex-col justify-center items-start gap-2 pt-6 md:pt-0">
              <h1 className="text-white text-start sm:text-5xl text-[32px] sm:leading-[48px] leading-8 font-neue-display font-semibold">
                400k
              </h1>
              <div className="flex items-center gap-1.5 md:gap-1">
                <div className="rounded-full bg-[#4DFF7A] sm:w-[7px] sm:h-[7px] w-[5px] h-[5px]" />
                <p className="text-white text-start font-medium sm:text-base sm:leading-[22.4px] text-[12px] leading-[16.8px] text-nowrap font-neue-text">
                  Daily active users
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[443px] bg-[#141414] sm:h-[206px] h-[122px] sm:px-8 px-6 flex justify-start items-start md:items-center rounded-[32px]">
            <div className="flex flex-col justify-center items-start gap-2 pt-6 md:pt-0">
              <h1 className="text-white text-start sm:text-5xl text-[32px] sm:leading-[48px] leading-8 font-neue-display font-semibold">
                240k
              </h1>
              <div className="flex md:items-center gap-1.5 md:gap-1">
                <div className="rounded-full mt-1 md:mt-0 bg-[#4DFF7A] sm:w-[7px] sm:h-[7px] w-[5px] h-[5px]" />
                <p className="text-white text-start font-medium sm:text-base sm:leading-[22.4px] text-[12px] leading-[16.8px] font-neue-text">
                  Monthly active users
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="sm:min-w-[900px] sm:min-h-[262px] min-w-[352] min-h-[136px] sm:mt-5 mt-0 md:flex hidden justify-between items-center">
          <div className="w-full lg:w-[443px] bg-[#141414] sm:h-[262px] h-[122px] sm:px-8 px-6 flex justify-start items-center rounded-[32px]">
            <div className="h-full py-[30px] flex flex-col justify-between items-start">
              <div className="bg-black w-16 h-16 rounded-2xl flex justify-center items-center text-[30px] leading-[42px]">
                📝
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="text-white text-start sm:text-5xl text-[32px] sm:leading-[48px] leading-8 font-neue-display font-semibold">
                  10,000M
                </h1>
                <p className="text-white text-start font-medium sm:text-base sm:leading-[22.4px] leading-[16.8px] font-neue-text">
                  Issued
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[443px] bg-[#141414] sm:h-[262px] h-[122px] sm:px-8 px-6 flex justify-start items-center rounded-[32px]">
            <div className="h-full py-[30px] flex flex-col justify-between items-start">
              <div className="bg-black w-16 h-16 rounded-2xl flex justify-center items-center text-[30px] leading-[42px]">
                🔥
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="text-white text-start sm:text-5xl text-[32px] sm:leading-[48px] leading-8 font-neue-display font-semibold">
                  8,000M
                </h1>
                <p className="text-white text-start font-medium sm:text-base sm:leading-[22.4px] leading-[16.8px] font-neue-text">
                  Burned
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="w-full px-5 mt-2 block md:hidden">
          <div className="rounded-3xl p-6 flex flex-col justify-between items-center bg-[#141414]">
            <div className="relative w-full">
              <h1 className="text-white text-center font-semibold text-[32px] leading-[32px]">
                10,000M
              </h1>
              <p className="text-white text-center font-medium text-xs leading-[16.8px] mt-2">
                Issued
              </p>
              <div className="absolute -top-1 left-2 text-[30px]">📝</div>
            </div>
            <p className="bg-[#FFFFFF1A] w-full my-5 h-[1.5px]" />
            <div className="relative w-full">
              <h1 className="text-white text-center font-semibold text-[32px] leading-[32px]">
                8,000M
              </h1>
              <p className="text-white text-center font-medium text-xs leading-[16.8px] mt-2">
                Burned
              </p>
              <div className="absolute -top-1 left-2 text-[30px]">🔥</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
