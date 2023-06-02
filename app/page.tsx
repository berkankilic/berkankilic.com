import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-white bg-[#080808]">
      <h2 className="text-[26px] font-extralight mb-3">contact;</h2>
      <a
        className="text-[46px] font-bold mb-5 hover:text-[#ff4e00] "
        href="mailto:hello@berkankilic.dev"
      >
        hello@berkankilic.dev
      </a>
      <div className="flex flex-row gap-3 text-[18px] font-extralight hover:text-[#757575] ">
        <a
          className="hover:text-[#fff] p-2"
          href="https://github.com/berkankilic"
          target="_blank"
        >
          github
        </a>
        <a
          className="hover:text-[#fff] p-2"
          href="https://www.linkedin.com/in/1berkankilic/"
          target="_blank"
        >
          linkedin
        </a>
        <a className="hover:text-[#fff] p-2" href="#">
          twitter
        </a>
        <a className="hover:text-[#fff] p-2 " href="#">
          instagram
        </a>
      </div>
      <div className="absolute block bottom-0 min-w-full min-h-[60px] bg-[#111]">
        <div className="flex items-center justify-center min-h-[60px] uppercase text-[10px] font-bold text-[#757575] ">
          Services, products, blog and more will be added soon
        </div>
      </div>
    </main>
  );
}
