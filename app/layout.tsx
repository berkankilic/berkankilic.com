import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

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
