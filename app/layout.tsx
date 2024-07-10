import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/MainNavigation";
import classes from "./Layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Meetups",
  description: "A platform for React meetups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavigation />
        <main className={classes.main}>{children}</main>
      </body>
    </html>
  );
}
