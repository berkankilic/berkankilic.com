import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-white bg-[#080808]">
      <h2 className="text-[18px] sm:text-[26px] font-extralight mb-3">
        contact;
      </h2>
      <a
        className="text-[26px] sm:text-[46px] font-bold mb-5 hover:text-[#ff4e00] "
        href="mailto:hello@berkankilic.dev"
      >
        hello@berkankilic.dev
      </a>
      <div className="flex flex-row gap-0 sm:gap-4 text-[13px] sm:text-[18px]  font-extralight hover:text-[#757575] ">
        <a
          className="social-link"
          href="https://github.com/berkankilic"
          target="_blank"
        >
          github
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/1berkankilic/"
          target="_blank"
        >
          linkedin
        </a>
        <a className="social-link" href="#">
          twitter
        </a>
        <a className="social-link" href="#">
          instagram
        </a>
      </div>
      <div className="fixed block bottom-0 min-w-full ">
        <div className="flex items-center justify-center px-5">
          <div className="text-[12px] font-normal text-[#ffffffd2] text-center px-10 py-4 max-w-[400px] leading-6 bg-[#111] rounded-full mb-5">
            <p>
              I{"'"}m currently interested in{" "}
              <a
                className="tech-link"
                href="https://www.typescriptlang.org"
                target="_blank"
              >
                TypeScript
              </a>
              {", "}
              <a
                className="tech-link"
                href="https://nextjs.org"
                target="_blank"
              >
                NextJS
              </a>
              {", "}
              <a
                className="tech-link"
                href="https://vercel.com"
                target="_blank"
              >
                Vercel
              </a>
              {", "}
              <a
                className="tech-link"
                href="https://www.prisma.io"
                target="_blank"
              >
                Prisma
              </a>
              {", "}
              <a
                className="tech-link"
                href="https://tailwindcss.com"
                target="_blank"
              >
                Tailwind
              </a>{" "}
              and more new tech.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
