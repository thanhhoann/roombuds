import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  BillsSVG,
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
  const tablet = useMedia({ minWidth: "768px" });

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

      <Link href="/bills" passHref>
        <div
          className={` ${
            selected === "Contracts" && "bg-main font-bold dark:bg-btn_dark"
          } hover:bg-main dark:hover:bg-btn_dark rounded-md p-5 m-5 cursor-pointer`}
          onClick={() => setSelected("Contracts")}
        >
          <SideBarItemsContainer title="Bills" svg={BillsSVG} />
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

      {!tablet && (
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
