"use client"


import { useState } from 'react';
import Link from 'next/link';
import LinkIcon from './LinkIcon';
import Data from "../data/links.json"
import Tooltip from '@mui/material/Tooltip';


interface Links {
  id: number
  tooltip: string
  url: string
  icon: string
  target: string
}

const MyLinks: Links[] =
  Data;


export default function Links() {
  const [links, setLinks] = useState(MyLinks)
  return (

    <div className="flex flex-row gap-0 sm:gap-3 text-[#eee] hover:text-[#757575]">

      {
        links.map(link => {
          return (
            <Tooltip key={link.id} title={link.tooltip}> 
            <Link href={link.url}  target={link.target} className="social-icon">
              <LinkIcon icon={link.icon}></LinkIcon>
            </Link>
            </Tooltip>
            
          )

        })

      }

    </div>

  )
}
