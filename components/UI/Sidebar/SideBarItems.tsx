import Link from "next/link";
import { useRecoilState } from "recoil";
import {
  BillsSVG,
  HomeSVG,
  LearningSVG,
} from "../../../assets/SideBarItemsSVG";
import { sideBarItemsSelected } from "../../../atoms";
import { SideBarItemsContainer } from "./SideBarItemsContainer";

export default function SideBarItems() {
  const [selected, setSelected] = useRecoilState(sideBarItemsSelected);

  return (
    <>
      <Link href="/" passHref>
        <div
          className={`${
            selected === "Home" && "bg-main font-bold dark:bg-btn_dark"
          } rounded-md p-5 m-2 hover:bg-main dark:hover:bg-btn_dark cursor-pointer`}
          onClick={() => setSelected("Home")}
        >
          <SideBarItemsContainer title="Home" link="/" svg={HomeSVG} />
        </div>
      </Link>

      <Link href="/bills" passHref>
        <div
          className={` ${
            selected === "Contracts" && "bg-main font-bold dark:bg-btn_dark"
          } hover:bg-main dark:hover:bg-btn_dark rounded-md p-5 m-2 cursor-pointer`}
          onClick={() => setSelected("Contracts")}
        >
          <SideBarItemsContainer title="Bills" link="/bills" svg={BillsSVG} />
        </div>
      </Link>

      <Link href="/learning" passHref>
        <div
          className={`${
            selected === "Learning" && "bg-main font-bold dark:bg-btn_dark"
          } hover:bg-main dark:hover:bg-btn_dark rounded-md p-5 m-2 cursor-pointer`}
          onClick={() => setSelected("Learning")}
        >
          <SideBarItemsContainer
            title="Learning"
            link="/learning"
            svg={LearningSVG}
          />
        </div>
      </Link>
    </>
  );
}
