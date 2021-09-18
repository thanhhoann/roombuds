import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import notFound from "../public/Astronaut-01.svg";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
        <link rel="icon" href="./handshake.svg" />
      </Head>
      <div className="w-screen h-screen p-32 flex justify-around dark:bg-background_dark">
        <div className="text-center">
          <h1 className="text-7xl font-thin z-50">Got lost ?</h1>
          <Link href="/" passHref>
            <a>
              <h1 className="m-10 text-5xl font-bold bg-main rounded-lg p-3 text-center dark:bg-btn_dark">
                Go back
              </h1>
            </a>
          </Link>
        </div>
        <div className="w-1/2 h-screen">
          <Image src={notFound} width={700} height={700} alt="404 image"/>
        </div>
      </div>
    </>
  );
};

export default NotFound;
