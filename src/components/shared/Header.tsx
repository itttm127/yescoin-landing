import Image from "next/image";
import { Container } from "./Container";
import { AppUrl, navItems } from "@/configs";
import { HeaderMenuType } from "@/types";
import Link from "next/link";

export const Header = () => {
  return (
    <Container className="z-10 relative">
      <header className="w-full h-[70px] md:h-[80px] px-5 md:px-[120px] flex justify-between items-center font-neue-text">
        <Image src={`${AppUrl}/logo.svg`} alt="logo" width="117" height="24" />
        <div className="sm:flex justify-center items-center gap-8 hidden pr-[20px]">
          {navItems.map((item: HeaderMenuType) => (
            <Link href={item.url} key={item.id}>
              <p className="text-sm text-white font-normal">{item.title}</p>
            </Link>
          ))}
        </div>
        <button className="bg-white h-9 w-24 rounded-full text-sm text-nowrap font-medium">
          Play now
        </button>
      </header>
    </Container>
  );
};
