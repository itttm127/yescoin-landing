import { AccordionComponent } from "./Accordion";

export const FaqComponent = () => {
  const Accordions = [
    {
      title: "How can I start earning with YesCoin?",
      content:
        "Simply join our platform, explore our exciting mini-games on Telegram, and start earning points and rewards. You’ll be able to earn YesCoin, USDT, and other prizes as you play and complete challenges!",
      top: 26,
      bottom: 17,
    },
    {
      title: "What types of rewards can I win?",
      content:
        "Simply join our platform, explore our exciting mini-games on Telegram, and start earning points and rewards. You’ll be able to earn YesCoin, USDT, and other prizes as you play and complete challenges!",
      top: 20,
      bottom: 19,
    },
    {
      title: "How do I withdraw my earnings?",
      content:
        "Simply join our platform, explore our exciting mini-games on Telegram, and start earning points and rewards. You’ll be able to earn YesCoin, USDT, and other prizes as you play and complete challenges!",
      top: 20,
      bottom: 18,
    },
    {
      title: "Are there daily opportunities to earn more?",
      content:
        "Simply join our platform, explore our exciting mini-games on Telegram, and start earning points and rewards. You’ll be able to earn YesCoin, USDT, and other prizes as you play and complete challenges!",
      top: 20,
      bottom: 19,
    },
  ];
  return (
    <div className="relative">
      <div className="w-full flex justify-center items-center">
        <div className="w-full md:mt-[134px] mt-[95px] md:px-10 px-5 md:max-w-[1280px]">
          <h1 className="text-white text-left font-semibold md:text-[64px] text-4xl md:leading-[70.4px] leading-[39.6px] font-neue-display">
            Your questions. <span className="text-[#FFFFFF99]">Answered.</span>
          </h1>
          <div className="w-full md:mt-[27px] mt-[14px]">
            {Accordions.map((item, ind) => (
              <AccordionComponent
                title={item.title}
                content={item.content}
                index={ind}
                active={ind == 0 ? true : false}
                key={ind}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
