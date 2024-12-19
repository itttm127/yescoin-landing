import Image from "next/image";
import Container from "@/components/layout/container";
import { appUrl } from "@/configs/data";

const Footer = () => {
    const socialIcons = [
        {
            img: "twitter.png",
            width: 16,
            height: 16
        },
        {
            img: "telegram.png",
            width: 16,
            height: 16
        },
        {
            img: "discord.png",
            width: 20,
            height: 16
        },
        {
            img: "song.png",
            width: 14,
            height: 16
        },
        {
            img: "youtbe.png",
            width: 18,
            height: 16
        },
        {
            img: "message.png",
            width: 16,
            height: 16
        },
        {
            img: "dot.png",
            width: 16,
            height: 16
        },
        {
            img: "instagram.png",
            width: 16,
            height: 16
        }
    ]
    return (
        <>
            <div className="w-full">
                <div className="w-full flex flex-col justify-center items-center sm:my-32 my-12">
                    {/* <h1 className="text-white font-semibold sm:text-[256px] text-[5rem] sm:leading-[256px] leading-[5rem] sm:tracking-[0.01em] tracking-[0.05em] underline-offset-[from-font] decoration-skip-ink-none">Yescoin</h1> */}
                    <div className="relative flex justify-center items-center sm:h-60 h-24">
                        <h1 className="text-white absolute top-0 z-10 font-semibold sm:text-[256px] text-[5rem] sm:leading-[256px] leading-[5rem] sm:tracking-[0.01em] tracking-[0.05em] underline-offset-[from-font] decoration-skip-ink-none">Yescoin</h1>
                        <h1 className="absolute top-0 text-white font-semibold sm:text-9xl text-5xl filter blur-sm sm:text-[256px] text-[5rem] sm:leading-[256px] leading-[5rem] sm:tracking-[0.01em] tracking-[0.05em] underline-offset-[from-font] decoration-skip-ink-none">Yescoin</h1>
                        <h1 className="z-0 absolute top-0 bg-gradient-to-b from-[#F86C25] to-[#8582D5] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[256px] text-[5rem] sm:leading-[256px] leading-[5rem] sm:tracking-[0.01em] tracking-[0.05em] underline-offset-[from-font] decoration-skip-ink-none">Yescoin</h1>
                        <h1 className="-z-[2] absolute top-0 bg-gradient-to-b from-[#FEE2D3] to-[#EBEAF8] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[256px] text-[5rem] sm:leading-[256px] leading-[5rem] sm:tracking-[0.01em] tracking-[0.05em] underline-offset-[from-font] decoration-skip-ink-none">Yescoin</h1>
                        <h1 className="-z-[4] absolute top-0 bg-gradient-to-b from-[#FDD3BE] to-[#C2C0EA] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[256px] text-[5rem] sm:leading-[256px] leading-[5rem] sm:tracking-[0.01em] tracking-[0.05em] underline-offset-[from-font] decoration-skip-ink-none">Yescoin</h1>
                        <h1 className="-z-[6] absolute top-0 bg-gradient-to-b from-[#F9915C] to-[#5C58C7] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[256px] text-[5rem] sm:leading-[256px] leading-[5rem] sm:tracking-[0.01em] tracking-[0.05em] underline-offset-[from-font] decoration-skip-ink-none">Yescoin</h1>
                        <h1 className="-z-[8] absolute top-0 bg-gradient-to-b from-[#954116] to-[#292594] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[256px] text-[5rem] sm:leading-[256px] leading-[5rem] sm:tracking-[0.01em] tracking-[0.05em] underline-offset-[from-font] decoration-skip-ink-none">Yescoin</h1>
                        <h1 className="-z-[10] absolute top-0 bg-gradient-to-b from-[#321607] to-[#0A0925] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[256px] text-[5rem] sm:leading-[256px] leading-[5rem] sm:tracking-[0.01em] tracking-[0.05em] underline-offset-[from-font] decoration-skip-ink-none">Yescoin</h1>
                        <div className="absolute bg-banner-gradient filter blur-[78px] sm:w-[1000px] w-[320px] sm:h-[290px] h-full -z-10 top-10" />
                    </div>
                    <p className="text-white text-center sm:mt-10 mt-4 font-medium sm:text-[64px] sm:leading-[70.4px] text-[27px] leading-[35.2px] opacity-65">Probaby Something</p>
                </div>
                <Container>
                    <div className="max-w-[1440px] w-[100vw]">
                        <div className="w-full flex sm:flex-row flex-col-reverse gap-2 justify-between items-center py-5 sm:px-[120px] px-[50px]">
                            <div className="flex justify-center items-center gap-6">
                                {socialIcons.map((item, ind) =>
                                    <Image
                                        src={`${appUrl}/social/${item.img}`}
                                        alt={item.img}
                                        width={item.width}
                                        height={item.height}
                                        key={ind}
                                    />
                                )}
                            </div>
                            <div className="flex justify-center items-center gap-6 pb-1.5">
                                <p className="text-[#FFFFFF66] cursor-pointer font-normal text-[12px] leading-[16.8px] font-[sans-serif]">
                                    Terms and Conditions
                                </p>
                                <p className="text-[#FFFFFF66] cursor-pointer font-normal text-[12px] leading-[16.8px] font-[sans-serif]">
                                    Privacy Policy
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer;