import Image from "next/image";

export const RoadmapComponent = () => {
  const stepData = [
    {
      title: "Q2 2024",
      subtitle: "Launch & Grow",
      items: [
        "Launch the Mini App",
        "Launch the Community",
        "Company Structure",
        "IT Infrastructure Scalable",
        "Socials",
        "ADS become Profitable",
      ],
      actived: true,
    },
    {
      title: "Q3 2024",
      subtitle: "Grow",
      items: [
        "Exchange Negotiations",
        "Partnerships with Six VC",
        "Blockchain determination",
        "Team expansion for V2",
        "New profitable services",
        "Massive Campaign",
        "Revenue generation",
      ],
      actived: true,
    },
    {
      title: "Q4 2024",
      subtitle: "Consolidation",
      items: [
        "Achieved ~9Mln users driving",
        "Free Wheel Of Fortune Launch",
        "B2B API integration ready",
        "KOL Massive engagement",
      ],
      actived: true,
    },
    {
      title: "Q1 2025",
      subtitle: "Listing",
      items: [
        "Paid Wheel Of Fortune Launch",
        "Token Launch",
        "DEX/ CEX Listings",
        "Airdrop",
        "Introduction of New Advertising Services",
      ],
      actived: false,
    },
    {
      title: "Q2 2025",
      subtitle: "New Features",
      items: [
        "New Engaging App Features",
        "Development of an AI-powered ad targeting system",
        "Development of an Analytics Dashboard",
        <>Yespad&quot;s Launch</>,
      ],
      actived: false,
    },
    {
      title: "2025",
      subtitle: "And Beyond",
      items: [
        "Partnership with gaming platforms for integrated and immersive advertising solutions.",
        "Expansion into third-party app advertising services, establishing the platform as a leading ad provider.",
        "Introduction of subscription-based premium features tailored to high-value users.",
        "Scaling to a global ad network serving major app ecosystems and blockchain platforms.",
      ],
      actived: false,
    },
  ];

  const activeLine = (
    <div className="absolute left-[11px] top-4 h-full w-[3px]">
      <div
        className="w-[3px] blur-[9px] h-full absolute top-0 left-0"
        style={{
          background: "linear-gradient(180deg, #321607 0%, #0A0925 100%)",
        }}
      />
      <div
        className="w-[3px] blur-[9px] h-full absolute top-0 left-0"
        style={{
          background: "linear-gradient(180deg, #954116 0%, #292594 100%)",
        }}
      />
      <div
        className="w-[3px] blur-[18px] h-full absolute top-0 left-0"
        style={{
          background: "linear-gradient(180deg, #F9915C 0%, #5C58C7 100%)",
        }}
      />
      <div
        className="w-[3px] blur-[3px] h-full absolute top-0 left-0"
        style={{
          background: "linear-gradient(180deg, #FDD3BE 0%, #C2C0EA 100%)",
        }}
      />
      <div
        className="w-[3px] blur-[9px] opacity-25 h-full absolute top-0 left-0"
        style={{
          background: "linear-gradient(180deg, #FEE2D3 0%, #EBEAF8 100%)",
        }}
      />
      <div
        className="w-[3px] blur-[6px] h-full absolute top-0 left-0"
        style={{
          background: "linear-gradient(180deg, #F86C25 0%, #8582D5 100%)",
        }}
      />
      <div
        className="w-[3px] h-full absolute top-0 left-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(254, 226, 211, 0.40) 0%, rgba(235, 234, 248, 0.40) 100%), #FFF",
        }}
      />
    </div>
  );

  const activeBubble = (
    <div className="absolute w-6 h-6 top-4 left-0 overflow-visible">
      <div className="absolute blur-[18px] w-6 h-6 top-0 left-0 roadmap-bubble7 rounded-full"></div>
      <div className="absolute blur-[18px] w-6 h-6 top-0 left-0 roadmap-bubble6 rounded-full"></div>
      <div className="absolute blur-[36px] w-6 h-6 top-0 left-0 roadmap-bubble5 rounded-full"></div>
      <div className="absolute blur-[6px] w-6 h-6 top-0 left-0 roadmap-bubble4 rounded-full"></div>
      <div className="absolute blur-[18px] w-6 h-6 top-0 left-0 roadmap-bubble3 rounded-full"></div>
      <div className="absolute blur-[12px] w-6 h-6 top-0 left-0 roadmap-bubble2 rounded-full"></div>
      <div className="absolute w-6 h-6 top-0 left-0 roadmap-bubble1 rounded-full"></div>
    </div>
  );

  const inactiveLine = (
    <div className="absolute w-[1px] h-full top-4 left-3 bg-[#141414]" />
  );

  return (
    <div className="relative">
      <div className="w-full md:px-0 px-5 md:mt-[200px] mt-[118px] flex justify-center items-center">
        <div className="sm:w-[900px] w-full">
          <h1 className="text-white text-[64px] leading-[70.4px] text-left font-neue-display font-semibold md:font-medium md:tracking-[0.02em] tracking-[0.01em]">
            Roadmap
          </h1>
          <div className="mt-[62px] flex flex-col">
            {stepData.map((item, ind) => (
              <div className="pb-[84px] flex flex-row relative pl-[84px]">
                {item.actived ? (
                  <>
                    {stepData[ind + 1]?.actived ? activeLine : inactiveLine}
                    {activeBubble}
                  </>
                ) : (
                  <>
                    {ind < stepData.length - 1 && inactiveLine}
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full bg-[#141414] top-4 left-0 z-100"></span>
                  </>
                )}
                <div className="flex flex-col md:flex-row gap-[30px] md:gap-0 justify-start md:justify-between w-full">
                  <div>
                    <h3 className="text-white font-semibold text-5xl leading-[57.6px] font-neue-display">
                      {item.title}
                    </h3>
                    <p className="text-white font-semibold text-2xl leading-[28.8px] font-neue-display mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="text-[#FFFFFF99] font-medium text-base leading-[30px] font-neue-text">
                    {item.items.map((plan, index) => (
                      <div
                        key={index}
                        className="font-neue-text font-medium text-base leading-[22.4px] mt-[6px] text-[#FFFFFF99] w-[276px]"
                      >
                        {plan}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
