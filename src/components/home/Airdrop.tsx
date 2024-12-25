import Image from "next/image";
import { AppUrl } from "@/configs";

export const AirdropComponent = () => {
  return (
    <>
      <div className="relative w-full flex justify-center items-center sm:mt-[160px] mt-[25px]">
        <div className="flex flex-col w-full gap-[9.5px]">
          <p className="text-white text-center sm:text-xl sm:leading-7 text-base font-normal md:font-medium leading-[22.4px] font-neue-text">
            Get the Airdrop and try to
          </p>
          <p className="text-white text-center sm:text-[64px] sm:leading-[70.4px] text-2xl leading-[26.4px] font-neue-display md:font-neue-text font-semibold md:font-medium">
            Win up to
          </p>
          <div className="w-full flex justify-center items-center">
            <div className="relative sm:h-28 h-11 sm:w-[680px] w-[393px]">
              <Image
                className="absolute md:scale-[1.48] md:-top-11 md:left-1 scale-[0.96] -top-[42px]"
                src={`${AppUrl}/images/svgs/airdrop_banner.svg`}
                alt="Airdrop Banner"
                width="667"
                height="128"
              />
            </div>
          </div>
          <p className="text-white text-center sm:mt-12 mt-4 font-medium sm:text-xl sm:leading-7 text-base leading-[22.4px] font-neue-text">
            in annual prizes
          </p>
        </div>
      </div>
    </>
  );
};
