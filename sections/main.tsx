export default function Main() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-[90px] -mt-[120px] lg:-mt-[160px] z-10  ">
        <h2 className="text-[32px] md:text-[40px] lg:text-[56px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white  to-tertiary-text to-60% transition-all duration-300 leading-relaxed">
          A passionate<br></br>Full-Stack developer<br></br>from Turkey.
        </h2>
        <div className="absolute flex flex-col bottom-0 bg-primary-color1 animate-bounce mb-5">
          <div className="bg-primary-text h-2 w-1 rounded-t-full"></div>
          <div className="bg-white/20 h-3 w-1 rounded-b-full"></div>
        </div>
      </div>
    </>
  );
}
