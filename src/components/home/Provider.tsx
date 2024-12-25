// First Slider

import { AppUrl } from "@/configs";

export const ProviderComponent = () => {
  const FirstSliders = [
    "protocal.png",
    "okx.svg",
    "ibc.svg",
    "baby.svg",
    "mantel.svg",
  ];
  const SecondSliders = [
    "w.png",
    "bybit.svg",
    "catizen.svg",
    "bitget.svg",
    "anilla.svg",
    "seed.svg",
  ];
  return (
    <div className="relative">
      <div className="sm:mt-40 mt-[120px] flex justify-center items-center">
        <h2 className="font-semibold font-neue-display text-white sm:text-[64px] text-2xl sm:leading-[70.4px] leading-[26.4px]">
          Trusted by
        </h2>
      </div>
      <div className="sm:mt-[58px] mt-[39px]">
        <div className="marquee flex justify-center items-center sm:gap-5 gap-3">
          {[...FirstSliders, ...FirstSliders].map((item, ind: number) => (
            <div
              key={ind}
              className={`marquee-inner sm:min-w-[224px] sm:h-[88px] min-w-[148px] h-[64px] bg-primary rounded-2xl flex justify-center items-center sm:px-[30px] sm:py-5 px-6 py-4`}
            >
              <img src={`${AppUrl}/images/brands/${item}`} alt={item} />
            </div>
          ))}
        </div>
        <div className="marquee1 flex justify-center items-center sm:gap-5 gap-3 sm:mt-5 mt-3">
          {[...SecondSliders, ...SecondSliders].map(
            (item: string, ind: number) => (
              <div
                key={ind}
                className="marquee1-inner sm:min-w-[224px] sm:h-[88px] min-w-[148px] h-[64px] bg-primary rounded-2xl flex justify-center items-center sm:px-[30px] sm:py-5 px-6 py-4"
              >
                <img src={`${AppUrl}/images/brands/${item}`} alt={item} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
