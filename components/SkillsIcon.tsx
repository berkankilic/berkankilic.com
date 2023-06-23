import { default as JavaScript } from "@/public/assets/skills/javascript.svg";
import { default as TypeScript } from "@/public/assets/skills/typescript.svg";
import { default as React } from "@/public/assets/skills/react.svg";
import { default as NextJS } from "@/public/assets/skills/nextjs.svg";
import { default as Supabase } from "@/public/assets/skills/supabase.svg";
import { default as MongoDB } from "@/public/assets/skills/mongodb.svg";
import { default as VSCode } from "@/public/assets/skills/vs-code.svg";
import { default as NodeJS } from "@/public/assets/skills/nodejs.svg";
import { default as HTML } from "@/public/assets/skills/html.svg";
import { default as CSS } from "@/public/assets/skills/css.svg";
import { default as TailwindCSS } from "@/public/assets/skills/tailwindcss.svg";
import { default as Prisma } from "@/public/assets/skills/prisma.svg";
import { default as Vercel } from "@/public/assets/skills/vercel.svg";
import { default as ExpressJS } from "@/public/assets/skills/expressjs.svg";
import { default as AdobeXD } from "@/public/assets/skills/adobexd.svg";
import { default as AdobePS } from "@/public/assets/skills/adobeps.svg";
import { default as AdobeAI } from "@/public/assets/skills/adobeai.svg";
import { default as Postman } from "@/public/assets/skills/postman.svg";
import { default as Figma } from "@/public/assets/skills/figma.svg";
import { default as GraphQL } from "@/public/assets/skills/graphql.svg";
import { default as Github } from "@/public/assets/skills/github.svg";
import { default as Git } from "@/public/assets/skills/git.svg";

interface props {
  icon: string;
}

export default function SkillIcons(props: props) {
  if (props.icon === "javascript") {
    return <JavaScript className="h-[34px]" />;
  }
  if (props.icon === "typescript") {
    return <TypeScript className="h-[34px]" />;
  }
  if (props.icon === "react") {
    return <React className="h-[42px]" />;
  }
  if (props.icon === "nextjs") {
    return <NextJS className="h-[40px] " />;
  }
  if (props.icon === "supabase") {
    return <Supabase className="h-[32px] " />;
  }
  if (props.icon === "mongodb") {
    return <MongoDB className="h-[34px]" />;
  }
  if (props.icon === "vscode") {
    return <VSCode className="h-[34px]" />;
  }
  if (props.icon === "nodejs") {
    return <NodeJS className="h-[34px]" />;
  }
  if (props.icon === "css") {
    return <CSS className="h-[30px]" />;
  }
  if (props.icon === "html") {
    return <HTML className="h-[30px]" />;
  }
  if (props.icon === "tailwindcss") {
    return <TailwindCSS className="h-[46px]" />;
  }
  if (props.icon === "prisma") {
    return <Prisma className="h-[40px]" />;
  }
  if (props.icon === "vercel") {
    return <Vercel className="h-[24px]" />;
  }
  if (props.icon === "expressjs") {
    return <ExpressJS className="h-[34px]" />;
  }
  if (props.icon === "adobexd") {
    return <AdobeXD className="h-[32px]" />;
  }
  if (props.icon === "adobeps") {
    return <AdobePS className="h-[32px]" />;
  }
  if (props.icon === "adobeai") {
    return <AdobeAI className="h-[32px]" />;
  }
  if (props.icon === "postman") {
    return <Postman className="h-[32px]" />;
  }
  if (props.icon === "figma") {
    return <Figma className="h-[34px]" />;
  }
  if (props.icon === "graphql") {
    return <GraphQL className="h-[32px]" />;
  }
  if (props.icon === "github") {
    return <Github className="h-[32px]" />;
  }
  if (props.icon === "git") {
    return <Git className="w-[40px]" />;
  } else {
    <JavaScript className="h-[50px] " />;
  }
}
