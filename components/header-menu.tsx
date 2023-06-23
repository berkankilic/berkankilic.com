"use client";
import * as React from "react";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

export default function HeaderMenu() {
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
          className="flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full h-[48px] w-[48px] text-white "
        >
          <HiOutlineMenuAlt4 size="22px" className="text-white" />
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
          <Link
            href="/#"
            onClick={handleClose}
            className="menu-item flex flex-row items-center justify-start py-4 px-2 ml-5 text-primary-text hover:text-secondary-text"
          >
            <div>About Me</div>
            <div className="bg-white/10 px-2 py-1 font-medium text-[10px] rounded-full ml-2 uppercase text-white">
              Soon
            </div>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Link
            href="/#"
            onClick={handleClose}
            className="menu-item flex flex-row items-center justify-start py-4 px-2 ml-5 text-primary-text hover:text-secondary-text"
          >
            <div>My Works</div>
            <div className="bg-white/10 px-2 py-1 font-medium text-[10px] rounded-full ml-2 uppercase text-white">
              Soon
            </div>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Link
            href="/#"
            onClick={handleClose}
            className="menu-item flex flex-row items-center justify-start py-4 px-2 ml-5 text-primary-text hover:text-secondary-text"
          >
            <div>Journey</div>
            <div className="bg-white/10 px-2 py-1 font-medium text-[10px] rounded-full ml-2 uppercase text-white">
              Soon
            </div>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Link
            href="/#"
            onClick={handleClose}
            className="menu-item flex flex-row items-center justify-start py-4 px-2 ml-5 text-primary-text hover:text-secondary-text"
          >
            <div>Blog</div>
            <div className="bg-white/10 px-2 py-1 font-medium text-[10px] rounded-full ml-2 uppercase text-white">
              Soon
            </div>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
