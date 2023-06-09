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
    "Dijital projelerinizi hayata geçirmek istiyorsanız hemen şimdi mail gönderebilirsiniz. Benimle çalışmak mı istiyorsunuz? hello@berkankilic.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Analytics />
        </body>
      </html>
    </>
  );
}
