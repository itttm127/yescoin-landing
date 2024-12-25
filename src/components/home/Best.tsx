"use client";

import Image from "next/image";
import { AppUrl } from "@/configs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

export const BestComponent = () => {
  const sliders = [
    {
      title: "Play for free",
      content:
        "Discover exciting games and start earning points while exploring innovative projects. Let’s play!",
      img: "free.png",
    },
    {
      title: "Invite friends",
      content:
        "Participate in challenges, earn rewards, and climb the \n leaderboards with your community.",
      img: "invite.png",
    },
    {
      title: "Start earning",
      content:
        "Redeem your points for valuable rewards, including USDT, YesCoin, and other exclusive perks",
      img: "start.png",
    },
  ];

  return (
    <div className="relative">
      <div className="sm:mt-[160px] mt-[120px] flex justify-center items-center sm:overflow-auto overflow-hidden">
        <div className="md:px-0 px-5 sm:max-w-[1200px] w-full">
          <h1 className="text-white font-medium sm:text-[64px] sm:leading-[70.4px] text-4xl leading-9 font-neue-display md:tracking-[0.014em] tracking-[0.015em]">
            Best ways to earn
          </h1>
          {/* Mobile view using Swiper */}
          <div className="sm:mt-[60px] mt-10 md:hidden">
            <Swiper
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className}"></span>`;
                },
              }}
              modules={[Pagination]}
              slidesPerView={"auto"}
              //   centeredSlides={true}
              className="w-full"
              spaceBetween={20}
              style={{}}
            >
              {sliders.map((item, ind) => (
                <SwiperSlide
                  key={ind}
                  className="bg-[#141414] px-8 pt-8 rounded-3xl min-w-[323px] max-w-[323px] !h-[448px] overflow-hidden"
                >
                  <h4 className="text-white font-semibold font-neue-display text-2xl leading-6">
                    {item.title}
                  </h4>
                  <p className="text-[#FFFFFFCC] sm:text-lg sm:leading-[25.2px] text-base leading-[22.4px] mt-4 font-neue-text tracking-[0.01em]">
                    {item.content}
                  </p>
                  <Image
                    className="mt-12 h-[300px] md:mt-[2rem]"
                    src={`${AppUrl}/images/phones/${item.img}`}
                    alt="Player Free"
                    width="256"
                    height="260"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Desktop view */}
          <div className="sm:mt-[60px] mt-10 items-center gap-5 md:flex hidden ">
            {sliders.map((item, ind) => (
              <div
                className="bg-[#141414] px-10 pt-10 rounded-3xl min-w-[320px] flex-1 h-[495px] overflow-hidden"
                key={ind}
              >
                <h4 className="text-white font-medium text-2xl leading-6 font-neue-display tracking-[0.02em]">
                  {item.title}
                </h4>
                <p className="text-[#FFFFFFCC] md:text-lg md:leading-[25.2px] text-base leading-[22.4px] mt-4 font-neue-text tracking-[0.01em]">
                  {item.content}
                </p>
                <Image
                  className="mt-2 h-[300px] md:mt-10 w-full"
                  src={`${AppUrl}/images/phones/${item.img}`}
                  alt="Player Free"
                  width="316"
                  height="300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
