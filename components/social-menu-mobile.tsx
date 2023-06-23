"use client";
import * as React from "react";
import Link from "next/link";
import Links from "./Links";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { IoShareSocialSharp } from "react-icons/io5";

export default function SocialMobilMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title={"Menu"}>
        <button
          onClick={handleClick}
          className="flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full h-[48px] w-[48px] text-white lg:hidden"
        >
          <IoShareSocialSharp size="17px" className="text-white" />
        </button>
      </Tooltip>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <button
          onClick={handleClose}
          className="absolute h-[40px] w-[40px] hover:bg-white/20 transition-all duration-300 bg-white/10 -mt-[30px] -mr-[8px] right-0 top-0 rounded-xl text-secondary-text hover:text-white"
        >
          <IoCloseSharp size="17px" className="ml-2 mt-1" />
        </button>
        <MenuItem onClick={handleClose} disableRipple>
          <div className="flex items-center justify-center flex-col gap-x-3 lg:gap-x-0 gap-y-6 mx-8 mt-4 ">
            <p className="rounded-full font-semibold text-[13px]">
              Contact & Social
            </p>
            <Links />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
