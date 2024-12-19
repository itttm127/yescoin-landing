
// First Slider

import Image from "next/image"
import { appUrl } from "@/configs/data"

const ProviderComponent = () => {
    const FirstSliders = [
        { img: "protocal.png", width: 140, height: 24 },
        { img: "okx.png", width: 60, height: 32 },
        { img: 'ibc.png', width: 48, height: 24 },
        { img: 'baby.svg', width: 124, height: 28 },
        { img: "protocal.png", width: 140, height: 24 },
        { img: "mantel.png", width: 135, height: 38 }]
    const SecondSliders = ["w.png", "bybit.svg", "catizen.svg", "bitget.svg", "anilla.png", "seed.svg"]
    return (
        <>
            <div className="sm:mt-40 mt-[120px] flex justify-center items-center">
                <h2 className="font-semibold text-white sm:text-[64px] text-2xl sm:leading-[70.4px] leading-[26.4px]">Trusted by</h2>
            </div>
            <div className="sm:mt-[80px] mt-3">
                <div className="marquee flex justify-center items-center sm:gap-5 gap-3">
                    {[...FirstSliders, ...FirstSliders].map((item, ind: number) =>
                        <div key={ind} className={`marquee-inner sm:min-w-[224px] sm:h-[88px] min-w-[148px] h-[64px] bg-primary rounded-2xl flex justify-center items-center sm:px-[30px] sm:py-5 px-6 py-4`}>
                            <Image
                                className={`sm:w-[${item.width}px] w-[100px] sm:h-[${item.height}px] h-[20px]`}
                                src={`${appUrl}/slider/first/${item.img}`}
                                alt={item.img}
                                width={item.width}
                                height={item.height}
                            />
                        </div>
                    )}
                </div>
                <div className="marquee1 flex justify-center items-center sm:gap-5 gap-3 sm:mt-5 mt-3">
                    {[...SecondSliders, ...SecondSliders].map((item: string, ind: number) =>
                        <div key={ind} className="marquee1-inner sm:min-w-[224px] sm:h-[88px] min-w-[148px] h-[64px] bg-primary rounded-2xl flex justify-center items-center sm:px-[30px] sm:py-5 px-6 py-4">
                            <Image
                                src={`${appUrl}/slider/second/${item}`}
                                alt={item}
                                width="150"
                                height="30"
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProviderComponent