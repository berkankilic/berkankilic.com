"use client";

import Data from "@/data/links.json";

import Link from "next/link";
import LinkIcon from "./LinkIcon";

import Tooltip from "@mui/material/Tooltip";

interface Links {
  id: number;
  tooltip: string;
  url: string;
  icon: string;
  target: string;
}

const MyLinks: Links[] = Data;

export default function Links() {
  const MyLinks: Links[] = Data;

  return (
    <div className="flex flex-row gap-2 lg:gap-5 text-[#eee] hover:text-[#757575]">
      {MyLinks.map((link) => {
        return (
          <Tooltip key={link.id} title={link.tooltip}>
            <Link href={link.url} target={link.target} className="social-icon">
              <LinkIcon icon={link.icon}></LinkIcon>
            </Link>
          </Tooltip>
        );
      })}
    </div>
  );
}
