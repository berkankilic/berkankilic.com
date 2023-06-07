
import Links from "./components/Links";
import Description from "./components/description";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-white bg-[#080808]">
      <div className=' flex flex-row items-center'>
        <Image
          src="/1x1profile.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          className='rounded-full h-[220px] w-[220px]'
        />
        <div className='flex flex-col ml-[40px]'>

          <div className="border-left">
            <h1 className="font-medium text-[24px] mb-1">Berkan Kılıç</h1>
            <h2 className="font-normal text-[14px] text-white/75 mb-5">Jr. Fullstack web Developer</h2>
          </div>

          <Links />
        </div>

      </div>
      <Description />
    </main>
  );
}
