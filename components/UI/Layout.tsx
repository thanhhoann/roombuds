import Head from "next/head";
import React from "react";
import TopBar from "../UI/TopBar/TopBar";
import SideBar from "../UI/Sidebar/SideBar";
import { LayoutProps } from "../../types";

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title} | Roombuds </title>
        <link rel="icon" href="./house.svg" />
      </Head>
      <main className="bg-background font-inter w-screen h-screen grid grid-cols-10 grid-rows-6 dark:bg-background_dark">
        <SideBar />
        <TopBar />
        {children}
      </main>
    </>
  );
}
