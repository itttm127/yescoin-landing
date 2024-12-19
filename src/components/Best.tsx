'use client'

import Image from "next/image"
import { appUrl } from "@/configs/data"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const BestComponent = () => {

    const sliders = [
        {
            title: "Player for free",
            content: "Discover exciting games and start earning points while exploring innovative projects. Let’s play!",
            img: "free.png"
        },
        {
            title: "Invite friends",
            content: "Participate in challenges, earn rewards, and climb the leaderboards with your community.",
            img: "invite.png"
        },
        {
            title: "Start earning",
            content: "Redeem your points for valuable rewards, including USDT, YesCoin, and other exclusive perks",
            img: "start.png"
        }
    ]

    return (
        <>
            <div className="sm:mt-[160px] mt-[120px] flex justify-center items-center sm:overflow-auto overflow-hidden">
                <div className='px-5 sm:max-w-[1200px] w-full'>
                    <h1 className='text-white font-semibold sm:text-[64px] sm:leading-[70.4px] text-4xl leading-9'>Best ways to earn</h1>
                    {/* Mobile view using Swiper */}
                    <div className="sm:mt-[60px] mt-10 flex items-center gap-5 block sm:hidden">
                        <Swiper
                            pagination={{
                                clickable: true,
                                renderBullet: (index, className) => {
                                    return `<span class="${className}"></span>`;
                                },
                            }}
                            modules={[Pagination]}
                            slidesPerView={'auto'}
                            className="w-full"
                            spaceBetween={10}
                            // slidesPerView={1}
                            style={{
                            }}
                        >
                            {sliders.map((item, ind) =>
                                <SwiperSlide key={ind} className="bg-[#141414] px-10 pt-10 rounded-3xl min-w-[320px] max-w-[320px]" >
                                    <h4 className="text-white font-medium text-2xl leading-6">{item.title}</h4>
                                    <p className="text-[#FFFFFFCC] font-[20px] sm:text-lg sm:leading-[25.2px] text-base leading-[22.4px] mt-4 font-[sans-serif] ">
                                        {item.content}
                                    </p>
                                    <Image
                                        className="mt-2 h-[300px] mt-[2rem]"
                                        src={`${appUrl}/best/${item.img}`}
                                        alt="Player Free"
                                        width="316"
                                        height="300"
                                    />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                    {/* Desktop view */}
                    <div className="sm:mt-[60px] mt-10 items-center gap-5 sm:flex hidden ">
                        {sliders.map((item, ind) =>
                            <div className="bg-[#141414] px-10 pt-10 rounded-3xl min-w-[320px]" key={ind}>
                                <h4 className="text-white font-medium text-2xl leading-6">{item.title}</h4>
                                <p className="text-[#FFFFFFCC] font-[20px] sm:text-lg sm:leading-[25.2px] text-base leading-[22.4px] mt-4 font-[sans-serif] ">
                                    {item.content}
                                </p>
                                <Image
                                    className="mt-2 h-[300px] mt-[2rem]"
                                    src={`${appUrl}/best/${item.img}`}
                                    alt="Player Free"
                                    width="316"
                                    height="300"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestComponent