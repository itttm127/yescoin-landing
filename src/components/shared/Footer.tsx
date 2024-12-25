import Image from "next/image";
import { Container } from "./Container";
import { AppUrl } from "@/configs";

export const Footer = () => {
  const socialIcons = [
    {
      img: "twitter.png",
      width: 16,
      height: 16,
    },
    {
      img: "telegram.png",
      width: 16,
      height: 16,
    },
    {
      img: "discord.png",
      width: 20,
      height: 16,
    },
    {
      img: "song.png",
      width: 14,
      height: 16,
    },
    {
      img: "youtbe.png",
      width: 18,
      height: 16,
    },
    {
      img: "message.png",
      width: 16,
      height: 16,
    },
    {
      img: "dot.png",
      width: 16,
      height: 16,
    },
    {
      img: "instagram.png",
      width: 16,
      height: 16,
    },
  ];
  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-col justify-center items-center md:my-20 mb-[60px] md:h-[640px] h-[380px] -my-[10px] overflow-hidden">
          <div className="relative flex justify-center items-center sm:h-60 h-24 md:w-[1175px] w-[450px]">
            <Image
              className="md:w-full w-[440px] absolute"
              src={`${AppUrl}/images/svgs/footer_banner.svg`}
              alt="Footer Banner"
              width="864"
              height="256"
            />
          </div>
          <p className="text-white text-center sm:-mt-12 -mt-[14px] font-semibold sm:text-[64px] sm:leading-[70.4px] text-[32px] leading-[35.2px] opacity-65 font-neue-display">
            Probaby Something
          </p>
        </div>
        <Container>
          <div className="max-w-[1440px] w-[100vw]">
            <div className="w-full flex sm:flex-row flex-col-reverse gap-2 justify-between items-center py-5 sm:px-[120px] px-[50px]">
              <div className="flex justify-center items-center gap-6">
                {socialIcons.map((item, ind) => (
                  <Image
                    src={`${AppUrl}/images/social/${item.img}`}
                    alt={item.img}
                    width={item.width}
                    height={item.height}
                    key={ind}
                  />
                ))}
              </div>
              <div className="flex justify-center items-center md:gap-[22px] pt-1 gap-[20px] md:pb-0 pb-[10px]">
                <p className="text-[#FFFFFF66] cursor-pointer font-normal text-[12px] leading-[16.8px] font-[sans-serif] md:tracking-[0.04em] tracking-[0.035em]">
                  Terms and Conditions
                </p>
                <p className="text-[#FFFFFF66] cursor-pointer font-normal text-[12px] leading-[16.8px] font-[sans-serif] md:tracking-[0.04em] tracking-[0.04em]">
                  Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
