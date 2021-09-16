import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { HStack } from "@chakra-ui/layout";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import handShake from "../public/handshake.svg";
import curve_light from "../public/layered-light.svg";
import curve_dark from "../public/layered-dark.svg";
import blob from "../public/blob-scene-haikei (1).svg";
import blob_dark from "../public/blob-dark.svg";
import { FingerPrintSVG } from "../assets/HomePage";
import useMedia from "use-media";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import SidebBarDarkModeBtn from "../components/UI/Sidebar/SideBarDarkModeBtn";

const Home: NextPage = () => {
  const arr = [1, 2, 3, 4];
  const tablet = useMedia({ minWidth: "768px" });
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // only renders UI that uses the current theme when mounted ( fix hydration mismatch error )
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const svg = {
    animate: {
      clipPath: ["circle(1.8% at 50% 50%)", "circle(71.7% at 51% 50%)"],
      transition: { duration: 1 },
    },
  };

  return (
    <>
      <Head>
        <title>Login | RoomBuds</title>
        <link rel="icon" href="./handshake.svg" />
      </Head>
      <motion.div
        className="absolute w-screen h-screen"
        animate="animate"
        variants={svg}
      >
        <Image
          src={
            tablet
              ? theme === "dark"
                ? blob_dark
                : blob
              : theme === "dark"
              ? curve_dark
              : curve_light
          }
          layout="fill"
          objectFit="cover"
          alt="svg"
        />
      </motion.div>

      <div className="grid place-items-center z-50 w-screen h-screen">
        <div className="w-screen h-screen flex flex-col items-center justify-around z-50 -mb-5">
          <div className="grid place-items-center">
            <Image src={handShake} width={100} height={100} />
            <h1 className="font-bold text-2xl laptop:text-3xl desktop:text-4xl font-inter mt-8 tablet:mt-14">
              Sign In To{" "}
              <span className="font-pacifico p-1 rounded-lg dark:bg-background_dark">
                RoomBuds
              </span>
            </h1>
          </div>

          <main className="grid place-items-center tablet:-mt-32">
            <HStack>
              <PinInput type="alphanumeric" mask>
                {arr.map((index) => (
                  <PinInputField
                    key={index}
                    className="border-2 p-3 desktop:p-5 border-headline dark:border-btn_dark w-14 laptop:w-20 text-center rounded-md "
                  />
                ))}
              </PinInput>
            </HStack>

            <button className="px-16 text-xl py-3 rounded-lg mt-8 desktop:mt-14 mb-5 desktop:mb-10 flex bg-svg text-white">
              <span className="mr-2">{FingerPrintSVG}</span>
              Sign In
            </button>

            <button className="underline font-thin text-main tablet:text-headline mb-10 desktop:mb-14 dark:text-headline_dark">
              Forgot password ?
            </button>
            <div className="text-main font-medium tablet:text-headline desktop:text-xl dark:text-headline_dark">
              Don&apos;t have an account ? &nbsp;
              <Link href="/signup" passHref>
                <span className="font-bold">Sign Up</span>
              </Link>
            </div>
            <SidebBarDarkModeBtn />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
