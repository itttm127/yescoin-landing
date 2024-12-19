const CounterComponent = () => {
    return (<>
        <div className="w-full sm:mt-40 mt-[120px] flex flex-col justify-center items-center">
            <div>
                <h1 className="text-white font-medium sm:text-[64px] sm:leading-[80.4px] text-[32px] leading-[35.2px] text-center">
                    These are
                </h1>
                <div className="relative sm:h-28 h-11 flex justify-center">
                    <h1 className="text-white absolute z-10 font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px] text-nowrap">Our numbers</h1>
                    <h1 className="absolute top-0 text-white filter blur-sm font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px] text-nowrap">Our numbers</h1>
                    <h1 className="z-0 absolute top-0 bg-gradient-to-b from-[#8582D5] to-[#F86C25] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px] text-nowrap">Our numbers</h1>
                    <h1 className="-z-[2] absolute top-0 bg-gradient-to-b from-[#EBEAF8] to-[#FEE2D3] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px] text-nowrap">Our numbers</h1>
                    {/* <h1 className="-z-[4] absolute top-0 bg-gradient-to-b from-[#C2C0EA] to-[#FDD3BE] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px] text-nowrap">Our numbers</h1>
                    <h1 className="-z-[6] absolute top-0 bg-gradient-to-b from-[#5C58C7] to-[#F9915C] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px] text-nowrap">Our numbers</h1>
                    <h1 className="-z-[8] absolute top-0 bg-gradient-to-b from-[#292594] to-[#954116] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px] text-nowrap">Our numbers</h1>
                    <h1 className="-z-[10] absolute top-0 bg-gradient-to-b from-[#0A0925] to-[#321607] bg-clip-text text-transparent filter blur-md font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px] text-nowrap">Our numbers</h1> */}
                    <div className="absolute bg-banner-gradient filter blur-[80px] w-full h-1/2 -z-10 top-5" />
                </div>
                {/* <h1 className="text-white mt-2 bg-banner-gradient font-semibold sm:text-[80px] sm:leading-[80px] text-5xl leading-[52px]">Our numbers</h1> */}
                <p className="text-white sm:mt-10 mt-4 font-medium sm:text-xl sm:leading-7 text-base leading-[22.4px] text-center">Since 2024</p>
            </div>
            <div className="w-full px-5 flex justify-center items-center">
                <div className="sm:w-[905px] sm:h-[262px] w-full h-[136px] bg-counter-gradient p-1 sm:mt-[30px] mt-10 rounded-3xl relative z-10">
                    {/* <div className="w-full h-full flex justify-center items-center rounded-3xl p-1"> */}
                    <div className="w-full h-full flex justify-center items-center rounded-3x absolute z-10">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-center text-white sm:text-[64px] sm:leading-[64px] font-semibold text-5xl leading-[48px]">13,000,000</h1>
                            <p className="text-center text-white font-medium sm:text-base sm:leading-[22.4px] text-sm leading-[19.6px]">
                                Total users
                            </p>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className="rounded-3xl sm:w-[896px] sm:h-[254px] w-full h-[126px]  absolute top-1 bottom-1 left-1 right-1 bg-border-gradient filter blur-[-2px]"></div>
                    <div className="rounded-3xl sm:w-[896px] sm:h-[254px] w-full h-[126px]  absolute top-1 bottom-1 left-1 right-1 bg-border-gradient filter blur-[-4px]"></div>
                    <div className="rounded-3xl sm:w-[896px] sm:h-[254px] w-full h-[126px]  absolute top-1 bottom-1 left-1 right-1 bg-border-gradient filter blur-[-8px]"></div>
                    <div className="rounded-3xl sm:w-[896px] sm:h-[254px] w-full h-[126px]  absolute top-1 bottom-1 left-1 right-1 bg-border-gradient filter blur-[-16px]"></div>
                    <div className="rounded-3xl sm:w-[896px] sm:h-[254px] w-full h-[126px]  absolute top-1 bottom-1 left-1 right-1 bg-border-gradient filter blur-[-32px]"></div>
                    <div className="rounded-3xl sm:w-[896px] sm:h-[254px] w-full h-[126px]  absolute top-1 bottom-1 left-1 right-1 bg-border-gradient filter blur-[-48px]"></div>
                    <div className="rounded-3xl sm:w-[896px] sm:h-[254px] w-full h-[126px] absolute top-1 bottom-1 left-1 right-1  bg-black blur-[16px]"></div>
                    {/* <div className="rounded-3xl sm:w-[890px] sm:h-[248px] w-full h-[120px] absolute top-[3px] bottom-[3px] left-[3px] right-[3px]  w-full h-full bg-[#1A1A1A] blur-[4px]"></div> */}
                    {/* <div className="rounded-3xl absolute top-0 w-full h-full bg-[#DBDBDB] blur-[32px]"></div> */}
                </div>
            </div>
            <div className="sm:w-[900px] sm:h-[206px] w-full h-[136px] sm:mt-5 mt-4 px-5 sm:px-0 flex justify-between items-center sm:gap-[20px] gap-4">
                <div className="w-full bg-[#141414] sm:h-[206px] h-[122px] sm:px-8 px-6 flex justify-start items-center rounded-[32px]">
                    <div className="flex flex-col justify-center items-start gap-2">
                        <h1 className="text-white text-start sm:text-5xl text-[32px] sm:leading-[48px] leading-8">400 k</h1>
                        <div className="flex items-center gap-1">
                            <div className="rounded-full bg-[#4DFF7A] sm:w-[7px] sm:h-[7px] w-[5px] h-[5px]" />
                            <p className="text-white text-start font-medium sm:text-base sm:leading-[22.4px] text-[12px] leading-[16.8px] text-nowrap">Daily active users</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#141414] sm:h-[206px] h-[122px] sm:px-8 px-6 flex justify-start items-center rounded-[32px]">
                    <div className="flex flex-col justify-center items-start gap-2">
                        <h1 className="text-white text-start sm:text-5xl text-[32px] sm:leading-[48px] leading-8">240 k</h1>
                        <div className="flex items-center gap-1">
                            <div className="rounded-full bg-[#4DFF7A] sm:w-[7px] sm:h-[7px] w-[5px] h-[5px]" />
                            <p className="text-white text-start font-medium sm:text-base sm:leading-[22.4px] text-[12px] leading-[16.8px]">Monthly active users</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop */}
            <div className="sm:min-w-[900px] sm:min-h-[262px] min-w-[352] min-h-[136px] sm:mt-5 mt-4 sm:flex hidden justify-between items-center sm:gap-[20px] gap-4">
                <div className="w-full bg-[#141414] sm:h-[262px] h-[122px] sm:px-8 px-6 flex justify-start items-center rounded-[32px]">
                    <div className="h-full py-[30px] flex flex-col justify-between items-start">
                        <div className="bg-black w-16 h-16 rounded-2xl flex justify-center items-center text-[30px] leading-[42px]">📝</div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <h1 className="text-white text-start sm:text-5xl text-[32px] sm:leading-[48px] leading-8">10,000M</h1>
                            <p className="text-white text-start font-medium sm:text-base sm:leading-[22.4px] text-sm leading-[16.8px]">Issued</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#141414] sm:h-[262px] h-[122px] sm:px-8 px-6 flex justify-start items-center rounded-[32px]">
                    <div className="h-full py-[30px] flex flex-col justify-between items-start">
                        <div className="bg-black w-16 h-16 rounded-2xl flex justify-center items-center text-[30px] leading-[42px]">🔥</div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <h1 className="text-white text-start sm:text-5xl text-[32px] sm:leading-[48px] leading-8">8000M</h1>
                            <p className="text-white text-start font-medium sm:text-base sm:leading-[22.4px] text-sm leading-[16.8px]">Burned</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="w-full px-5 sm:-mt-3 mt-3 block sm:hidden">
                <div className="rounded-3xl p-6 flex flex-col justify-between items-center bg-[#141414]">
                    <div className="relative w-full">
                        <h1 className="text-white text-center font-semibold text-[32px] leading-[32px]">10,000M</h1>
                        <p className="text-white text-center font-medium text-[12px] leading-[16.8px]">Issued</p>
                        <div className="absolute -top-1 left-0 text-[30px]">📝</div>
                    </div>
                    <p className="bg-[#FFFFFF1A] w-full my-5 h-[1.5px]" />
                    <div className="relative w-full">
                        <h1 className="text-white text-center font-semibold text-[32px] leading-[32px]">8,000M</h1>
                        <p className="text-white text-center font-medium text-[12px] leading-[16.8px]">Burned</p>
                        <div className="absolute -top-1 left-0 text-[30px]">🔥</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default CounterComponent