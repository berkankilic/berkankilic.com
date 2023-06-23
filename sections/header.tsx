import Image from "next/image";

import Link from "next/link";
import Links from "@/components/Links";

import { HiOutlineMenuAlt4 } from "react-icons/hi";

import HeaderMenu from "@/components/header-menu";
import SocialMobilMenu from "@/components/social-menu-mobile";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left flex flex-row items-center w-2/3 lg:w-1/4 transition-all duration-300">
        <Link href={"/"}>
          <Image
            src="/assets/avatar/1x1profile.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-full lg:h-[80px] h-[60x] w-[60px] lg:w-[80px] hover:scale-125 transition-all duration-300"
          />
        </Link>

        <div className="flex flex-col pl-4">
          <h2 className=" font-medium text-[14px] mb-1 text-primary-text ">
            Hi, I&apos;m Berkan
          </h2>
          <p className="font-medium text-[12px] text-secondary-text  ">
            Jr. Full-Stack Developer
          </p>
        </div>
      </div>

      <div className="header-center flex flex-row justify-center font-semibold lg:w-2/4  gap-10">
        <div className="hidden lg:block text-[12px] font-normal text-[#ffffffd2] text-center px-10 py-4 max-w-[400px] leading-6 bg-[#111] rounded-full my-5 border-[2px] border-[#080808]">
          <Links />
        </div>
      </div>

      <div className="header-right flex flex-row gap-x-2 justify-end w-1/3 lg:w-1/4">
        <SocialMobilMenu />
        <HeaderMenu />
      </div>
    </header>
  );
}
