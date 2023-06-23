"use client";

import Data from "@/data/services.json";
import Image from "next/image";

interface Services {
  id: number;
  image: string;
  title: string;
  description: string;
  width: number;
  height: number;
  seo_alt: string;
}

const MyServices: Services[] = Data;

export default function Services() {
  return (
    <>
      <p className="text-[28px] lg:text-[36px] max-w-[250px] md:max-w-full mx-auto text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white  to-tertiary-text to-60% mt-[100px] mb-[90px] md:mt-[160px] md:mb-[140px] transition-all duration-300 ">
        Building digital products, brands<br></br>and expereince.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-10 gap max-w-[1440px] mx-auto text-center px-9 mt-14 transition-all duration-300">
        {MyServices.map((service) => {
          return (
            <div
              key={service.id}
              className="flex flex-col items-center justify-start max-w-[300px] mx-auto transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-secondary-bg w-[60px] h-[60px] rounded-xl ">
                <Image
                  src={service.image}
                  width={service.width}
                  height={service.height}
                  alt={service.seo_alt}
                />
              </div>
              <h3 className="text-[15px] text-primary-text mt-5 font-normal">
                {service.title}
              </h3>
              <p className="text-[13px] text-secondary-text mt-3 leading-6">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
