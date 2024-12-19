import Image from "next/image";
import Container from "@/components/layout/container";
import { appUrl, HeaderMenu } from "@/configs/data";
import { HeaderMenuType } from "@/types/layout";

const Header = () => {
    return (
        <>
            <Container>
                <header className="w-full sm:h-20 h-[70px] sm:px-[120px] px-5 bg-black flex justify-between items-center">
                    <Image
                        src={`${appUrl}/logo.svg`}
                        alt="logo"
                        width="117"
                        height="24"
                    />
                    <div className="sm:flex justify-center items-center gap-8 hidden">
                        {HeaderMenu.map((item: HeaderMenuType) =>
                            <p className="leading-[14px] text-[14px] text-white font-[sans-serif]  font-thin" key={item.id}>{item.title}</p>
                        )}
                    </div>
                    <button className="bg-white w-24 h-9 px-[18px] rounded-full text-[14px] leading-[14px] text-nowrap font-medium">Play now</button>
                </header>
            </Container>
        </>
    )
}

export default Header;