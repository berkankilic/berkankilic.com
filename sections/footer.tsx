import Link from "next/link";
import { BsFillHeartFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="flex flex-row items-center justify-center gap-3 px-10 py-4 max-w-[400px] text-[12px]  bg-secondary-bg rounded-full my-5 border-[2px] border-primary-bg min-w-[300px] md:max-w-[400px]">
        <p className="">Made with love</p>
        <BsFillHeartFill size={14} className="fill-red-600 animate-pulse" />
        <Link
          className="hover:underline transition-all duration-300"
          href={"https://github.com/berkankilic/berkankilic.com"}
          target="_blank"
        >
          Github repository
        </Link>
      </div>
    </footer>
  );
}
