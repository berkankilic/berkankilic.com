import "@/styles/reset.css";
import "@/styles/global.css";
import "@/styles/custom.css";

import { Analytics } from "@vercel/analytics/react";

// font
import { Inter } from "next/font/google";
const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Berkan Kılıç - Jr. Fullstack Web Developer",
  description:
    "If you want to bring your digital projects to life, you can send an email right now. Do you want to work with me? hello@berkankilic.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className="html">
        <body className={inter.className}>
          {children}
          <Analytics />
        </body>
      </html>
    </>
  );
}
