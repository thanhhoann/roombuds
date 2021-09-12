import Head from "next/head";
import React, { ReactNode } from "react";
import TopBar from "../UI/TopBar/TopBar";
import SideBar from "../UI/Sidebar/SideBar";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title} | Roombuds </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="bg-background font-inter w-screen h-screen grid grid-cols-10 grid-rows-6 dark:bg-background_dark">
        <SideBar />
        <TopBar />
        {children}
      </main>
    </>
  );
}
