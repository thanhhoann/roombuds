import Head from "next/head";
import React, { useEffect, useState } from "react";
import TopBar from "../UI/TopBar/TopBar";
import SideBar from "../UI/Sidebar/SideBar";
import { LayoutProps } from "../../types";
import useMedia from "use-media";
import { ThreeSlashes, X_Button } from "../../assets/TopBar";
import { AnimatePresence, motion } from "framer-motion";
import TopBarBell from "./TopBar/TopBarBell";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Layout({ title, children }: LayoutProps) {
  const laptop = useMedia({ minWidth: "1024px" });
  const [sideBarOpen, setSideBarOpen] = useState(false);
  useEffect(() => AOS.init(), []);

  return (
    <>
      <Head>
        <title>{title} | RoomBuds </title>
        <link rel="icon" href="./handshake.svg" />
      </Head>
      <main className="bg-background font-inter w-screen h-auto laptop:grid grid-cols-10 grid-rows-6 dark:bg-background_dark">
        {laptop ? (
          <SideBar />
        ) : (
          <>
            <div className="flex items-center justify-between w-screen">
              <div
                className="m-10 p-2 rounded-md font-extrabold"
                onClick={() => setSideBarOpen(!sideBarOpen)}
              >
                {!sideBarOpen ? <>{ThreeSlashes}</> : <>{X_Button} </>}
              </div>
              <TopBarBell />
            </div>
          </>
        )}

        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {sideBarOpen && (
            <motion.div
              className="w-screen"
              animate={{
                clipPath: ["circle(0% at 4% 4%)", "circle(150.2% at 4% 4%)"],
                transition: { duration: 0.7, easing: [0.99, 0.43, 0.33, 1.86] },
              }}
              exit={{
                opacity: [1, 0],
                transition: { duration: 0.2, ease: [0.99, 0.43, 0.33, 1.86] },
              }}
            >
              <SideBar />
            </motion.div>
          )}
        </AnimatePresence>
        {laptop && <TopBar />}
        {!sideBarOpen && children}
      </main>
    </>
  );
}
