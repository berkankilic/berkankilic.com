"use client";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import SkillIcons from "@/components/SkillsIcon";
import Data from "@/data/skills.json";

interface Skills {
  id: number;
  title: string;
  url: string;
  icon: string;
  target: string;
}

const MySkills: Skills[] = Data;
const skillwithtitle = MySkills.slice(0, 6);
const skillwithtooltip = MySkills.slice(6, 200);

export default function SkillSs() {
  return (
    <>
      <div className="flex justify-center flex-col">
        <p className="text-[22px] md:text-[28px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white  to-tertiary-text to-60% ">
          Interested Languages & Tools
        </p>
        <div className="flex justify-center items-center flex-row mt-2 text-[14px] md:text-[15px] ">
          <p className="text-center font-medium text-secondary-text">
            and more
          </p>
          <p className="font-medium underline inline-block text-white ml-2">
            new tech.
          </p>
        </div>
      </div>
      <div className=" grid gap-2 mt-12  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto px-3 lg:pr-2 lg:pl-3 transition-all duration-300">
        {skillwithtitle.map((skill) => {
          return (
            <div
              key={skill.id}
              className="skill flex flex-col px-3 py-10 items-center justify-center bg-secondary-bg rounded-2xl duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center h-[50px]">
                <SkillIcons icon={skill.icon} />
              </div>
              <button className="text-[13px] font-medium bg-white/5 rounded-full px-5 py-2 mt-4 transition-all duration-300">
                {skill.title}
              </button>
            </div>
          );
        })}
      </div>
      <div className="grid gap-2 mt-2 grid-cols-4 md:grid-cols-8 mx-auto pr-2 pl-3 mb-20">
        {skillwithtooltip.map((skill) => {
          return (
            <Tooltip key={skill.id} title={skill.title} arrow={true}>
              <Link
                href={skill.url}
                target={skill.target}
                className="flex flex-col px-3 py-9 items-center justify-center bg-secondary-bg hover:bg-tertiary-bg rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-center h-[50px]">
                  <SkillIcons icon={skill.icon} />
                </div>
              </Link>
            </Tooltip>
          );
        })}
      </div>
    </>
  );
}
