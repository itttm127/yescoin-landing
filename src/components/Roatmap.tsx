const RoadmapComponent = () => {
    const stepData = [
        {
            title: "Q2 2024",
            subtitle: "Launch & Grow",
            content: "Launch the Mini App Launch the Community Company Structure IT Infrastructure Scalable Socials ADS become Profitable",
            actived: true,
        },
        {
            title: "Q3 2024",
            subtitle: "Grow",
            content: "Exchange Negotiations Partnerships with Six VC Blockchain determinationTeam expansion for V2New profitable services Massive Campaign Revenue generation",
            actived: true,
        },
        {
            title: "Q4 2024",
            subtitle: "Consolidation",
            content: "Achieved ~9Mln users driving Free Wheel Of Fortune Launch B2B API integration ready KOL Massive engagement",
            actived: true,
        },
        {
            title: "Q1 2025",
            subtitle: "Listing",
            content: "Paid Wheel Of Fortune Launch Token Launch DEX/ CEX Listings Airdrop Introduction of New Advertising Services",
            actived: false,
        },
        {
            title: "Q2 2025",
            subtitle: "New Features",
            content: "New Engaging App Features Development of an AI- powered ad targeting system Development of an Analytics Dashboard Yespad's Launch",
            actived: false,
        },
        {
            title: "2025",
            subtitle: "And Beyond",
            content: "Partnership with gaming platforms for integrated and immersive advertising solutions. Expansion into third- party app advertising services, establishing the platform as a leading ad provider.Introduction of subscription - based premium features tailored to high - value users.Scaling to a global ad network serving major app ecosystems and blockchain platforms.",
            actived: false,
        }
    ];

    const activeLine = (
        <div>
            <div
                className="w-[3px] blur-[9px] h-full absolute top-0 left-0"
                style={{
                    background: "linear-gradient(180deg, #321607 0%, #0A0925 100%)"
                }}
            />
            <div
                className="w-[3px] blur-[9px] h-full absolute top-0 left-0"
                style={{
                    background: "linear-gradient(180deg, #954116 0%, #292594 100%)"
                }}
            />
            <div
                className="w-[3px] blur-[18px] h-full absolute top-0 left-0"
                style={{
                    background: "linear-gradient(180deg, #F9915C 0%, #5C58C7 100%)"
                }}
            />
            <div
                className="w-[3px] blur-[3px] h-full absolute top-0 left-0"
                style={{
                    background: "linear-gradient(180deg, #FDD3BE 0%, #C2C0EA 100%)"
                }}
            />
            <div
                className="w-[3px] blur-[9px] opacity-25 h-full absolute top-0 left-0"
                style={{
                    background: "linear-gradient(180deg, #FEE2D3 0%, #EBEAF8 100%)"
                }}
            />
            <div
                className="w-[3px] blur-[6px] h-full absolute top-0 left-0"
                style={{
                    background: "linear-gradient(180deg, #F86C25 0%, #8582D5 100%)"
                }}
            />
            <div
                className="w-[3px] h-full absolute top-0 left-0"
                style={{
                    background: "linear-gradient(180deg, rgba(254, 226, 211, 0.40) 0%, rgba(235, 234, 248, 0.40) 100%), #FFF"
                }}
            />
        </div>
    )

    const inactiveLine = (
        <div className="absolute w-[1px] h-full left-0 bg-[#141414]" />
    )

    return (
        <>
            <div className="w-full sm:px-0 px-5 sm:mt-[200px] mt-[120px] flex justify-center items-center">
                <div className="sm:w-[900px] w-full">
                    <h1 className="text-white text-[64px] leading-[70.4px] text-left">Roadmap</h1>
                    <div className="w-full sm:mt-[80px] mt-7 px-3 flex justify-between items-center">
                        <div className="w-full">
                            <ol className="relative text-gray-500  dark:text-gray-400">
                                {stepData.map((item, ind) =>
                                    <li className="relative pb-[84px] ps-[60px] flex sm:flex-row flex-col justify-between" key={ind} >
                                        <div>
                                            {item.actived ? (
                                                <>
                                                    {stepData[ind + 1]?.actived ? activeLine : inactiveLine}
                                                    <div className="absolute flex items-center justify-center w-[96px] h-[96px] dark:bg-[#141414] left-[-47px] top-[-36px] z-100" style={{
                                                        background: "url(/circle.svg)"
                                                    }} />
                                                </>
                                            ) : (
                                                <>
                                                    {ind < stepData.length - 1 && inactiveLine}
                                                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-[13px] bg-[#141414] left-[-11px] z-100" />
                                                </>
                                            )}

                                            <h3 className="text-white font-semibold text-5xl leading-[25px] pl-3">{item.title}</h3>
                                            <p className="text-white font-semibold text-2xl leading-[70px] pl-4">{item.subtitle}</p>
                                        </div>
                                        <div className="max-w-[200px] sm:-mt-[15px] mt-0 sm:mr-16 mr-0">
                                            <p className="text-[#FFFFFF99] font-medium text-base leading-[28.6px] font-[sans-serif] ">{item.content}</p>
                                        </div>
                                    </li>
                                )}

                            </ol>

                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default RoadmapComponent