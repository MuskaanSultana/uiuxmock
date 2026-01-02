import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";

const appFont= Nunito_Sans({
  subsets:['latin']
})



export const metadata: Metadata = {
  title: "UIUX Generator App",
  description: "Generate Free UI and UX Designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={appFont.className}
      >
        {children}
      </body>
    </html>
  );
}
