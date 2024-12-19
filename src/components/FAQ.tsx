import Accordion from "./Accordion"

const FaqComponent = () => {
    const Accordions = [
        {
            title: "How can I start earning with YesCoin?",
            content: "Simply join our platform, explore our exciting mini-games on Telegram, and start earning points and rewards. You’ll be able to earn YesCoin, USDT, and other prizes as you play and complete challenges!"
        },
        {
            title: "What types of rewards can I win?",
            content: "Simply join our platform, explore our exciting mini-games on Telegram, and start earning points and rewards. You’ll be able to earn YesCoin, USDT, and other prizes as you play and complete challenges!"
        },
        {
            title: "How do I withdraw my earnings?",
            content: "Simply join our platform, explore our exciting mini-games on Telegram, and start earning points and rewards. You’ll be able to earn YesCoin, USDT, and other prizes as you play and complete challenges!"
        },
        {
            title: "Are there daily opportunities to earn more?",
            content: "Simply join our platform, explore our exciting mini-games on Telegram, and start earning points and rewards. You’ll be able to earn YesCoin, USDT, and other prizes as you play and complete challenges!"
        }
    ]
    return (
        <>
            <div className="w-full flex justify-center items-center">
                <div className="w-full sm:mt-[160px] mt-[120px] sm:px-0 px-5 sm:max-w-[1280px]">
                    <div className="flex px-5">
                        <h1 className="text-white text-left font-semibold sm:text-[64px] text-4xl sm:leading-[70.4px] leading-[36.8px]">Your questions. <span className="text-[#FFFFFF99]">Answered.</span></h1>
                    </div>
                    <div className="w-full sm:mt-[60px] mt-[40px]">
                        {Accordions.map((item, ind) =>
                            <Accordion title={item.title} content={item.content} active={ind == 0 ? true : false} key={ind} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqComponent