import Image from "next/image";
import { AppUrl } from "@/configs";

export const HeroComponent = () => {
  return (
    <>
      <div className="relative w-full md:px-[120px] flex flex-col md:flex-row justify-between items-center">
        <div className="w-full flex justify-between items-center px-0 md:px-0">
          <div className="flex flex-col">
            <div className="w-full mt-[62px] md:mt-20 font-neue-display">
              <h1 className="text-white font-semibold md:text-9xl text-5xl md:text-left text-center  md:-tracking-[0.0097em]">
                Probably
              </h1>
              <div className="relative md:w-[900px] w-[393px] md:h-28 h-11 flex md:justify-start justify-center mt-1 md:mt-0">
                <Image
                  className="absolute md:scale-[1.45] md:left-5 md:-top-[45px] scale-[0.86] -top-[53px] left-[10px]"
                  src={`${AppUrl}/images/svgs/something_banner.svg`}
                  alt="Something Banner"
                  width="604"
                  height="128"
                />
              </div>
            </div>

            <div className="w-full md:px-0 pr-3 pl-9 mt-6 md:mt-[47px] text-[#FFFFFFCC] font-neue-text font-medium md:text-[24px] text-[20px] md:max-w-[450px] max-w-[370px] md:text-start text-center leading-7 md:leading-[33.6px]">
              Turning small yeses into big wins by simply tapping on the screen
            </div>
            <div className="w-full flex justify-center md:justify-start mt-6 md:mt-[40px]">
              <button className="w-[138px] h-[48px] rounded-full text-base leading-4 font-neue-text font-medium bg-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="md:absolute right-[26px] -top-[59px]">
          <Image
            src={`${AppUrl}/images/hero/hero-logo.png`}
            alt=""
            width="720"
            height="720"
            className="hidden md:block"
          />
          <Image
            src={`${AppUrl}/images/hero/mobile-hero-logo.png`}
            alt=""
            width="720"
            height="720"
            className="block md:hidden -mt-9"
          />
        </div>
      </div>
    </>
  );
};
