import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  FundsSVG,
  HomeSVG,
  LearningSVG,
  BellSVG,
  AccountSVG,
} from "../../../assets/SideBarItemsSVG";
import { sideBarItemsSelected } from "../../../atoms";
import { SideBarItemsContainer } from "./SideBarItemsContainer";
import { useMedia } from "use-media";

export default function SideBarItems() {
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useRecoilState(sideBarItemsSelected);
  const laptop = useMedia({ minWidth: "1024px" });

  // only renders UI that uses the current theme when mounted ( fix hydration mismatch error )
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <Link href="/home" passHref>
        <div
          className={`${
            selected === "Home" && "bg-main font-bold dark:bg-btn_dark"
          } rounded-md p-5 m-5 hover:bg-main dark:hover:bg-btn_dark cursor-pointer`}
          onClick={() => setSelected("Home")}
        >
          <SideBarItemsContainer title="Home" svg={HomeSVG} />
        </div>
      </Link>

      <Link href="/funds" passHref>
        <div
          className={` ${
            selected === "Funds" && "bg-main font-bold dark:bg-btn_dark"
          } hover:bg-main dark:hover:bg-btn_dark rounded-md p-5 m-5 cursor-pointer`}
          onClick={() => setSelected("Funds")}
        >
          <SideBarItemsContainer title="Funds" svg={FundsSVG} />
        </div>
      </Link>

      <Link href="/learning" passHref>
        <div
          className={`${
            selected === "Learning" && "bg-main font-bold dark:bg-btn_dark"
          } hover:bg-main dark:hover:bg-btn_dark rounded-md p-5 m-5 cursor-pointer`}
          onClick={() => setSelected("Learning")}
        >
          <SideBarItemsContainer title="Learning" svg={LearningSVG} />
        </div>
      </Link>

      <Link href="/notifications" passHref>
        <div
          className={`${
            selected === "Notifications" && "bg-main font-bold dark:bg-btn_dark"
          } rounded-md p-5 m-5 hover:bg-main dark:hover:bg-btn_dark cursor-pointer`}
          onClick={() => setSelected("Notifications")}
        >
          <SideBarItemsContainer title="Notifications" svg={BellSVG} />
        </div>
      </Link>

      {!laptop && (
        <Link href="/account" passHref>
          <div
            className={`${
              selected === "Account" && "bg-main font-bold dark:bg-btn_dark"
            } rounded-md p-5 m-5 hover:bg-main dark:hover:bg-btn_dark cursor-pointer`}
            onClick={() => setSelected("Account")}
          >
            <SideBarItemsContainer title="Account" svg={AccountSVG} />
          </div>
        </Link>
      )}
    </>
  );
}
