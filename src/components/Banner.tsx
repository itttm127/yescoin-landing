import Image from "next/image"
import { appUrl } from "@/configs/data"

export const BannerComponent = () => {
    return (
        <>
            <div className="w-full sm:px-[120px] px-5 flex flex-col sm:flex-row justify-between items-center">
                <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col gap-7">
                        <div className="w-full sm:mt-0 mt-[50px]">
                            <h1 className="text-white font-semibold sm:text-9xl text-5xl sm:leading-[115px] leading-[52.8px] sm:text-left text-center">Probably</h1>
                            <div className="relative sm:h-28 h-11 flex sm:justify-start justify-center">
                                <h1 className="text-white absolute z-10 font-semibold sm:text-9xl text-5xl sm:leading-[115px] leading-[52.8px] tracking-[0.015em] underline-offset-[from-font] decoration-skip-ink-none">Something</h1>
                                <h1 className="absolute top-0 text-white font-semibold sm:text-9xl text-5xl filter blur-sm sm:leading-[115px] leading-[52.8px] tracking-[0.015em] underline-offset-[from-font] decoration-skip-ink-none">Something</h1>
                                <h1 className="z-0 absolute top-0 bg-gradient-to-b from-[#F86C25] to-[#8582D5] bg-clip-text text-transparent filter blur-md font-semibold sm:text-9xl text-5xl sm:leading-[115px] leading-[52.8px] tracking-[0.015em] underline-offset-[from-font] decoration-skip-ink-none">Something</h1>
                                <h1 className="-z-[2] absolute top-0 bg-gradient-to-b from-[#FEE2D3] to-[#EBEAF8] bg-clip-text text-transparent filter blur-md font-semibold sm:text-9xl text-5xl sm:leading-[115px] leading-[52.8px] tracking-[0.015em] underline-offset-[from-font] decoration-skip-ink-none">Something</h1>
                                <div className="absolute bg-banner-gradient filter blur-[60px] w-full h-full -z-10 top-10" />
                            </div>
                        </div>

                        <div className="w-full md:px-0 px-3">
                            <p className="text-[#FFFFFFCC] font-sans font-normal md:text-[26px] text-[22px] max-w-[450px] md:text-start text-center ">Turning small yeses into big wins by simply tapping on the screen</p>
                        </div>
                        <div className="w-full flex justify-center sm:justify-start">
                            <button className="bg-white text-nowrap w-[138px] h-[48px] px-6 rounded-full">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <Image
                        className="w-full h-full"
                        src={`${appUrl}/banner/big.svg`}
                        alt="Main Big Banner"
                        width="440"
                        height="440"
                    />
                </div>
            </div>
        </>
    )
}

export default BannerComponent