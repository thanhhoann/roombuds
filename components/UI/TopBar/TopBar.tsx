import { BellSVG, SettingsSVG } from "../../../assets/TopBar";
import TopBarUsername from "../TopBar/TopBarUsername";
import TopBarAvatar from "./TopBarAvatar";
import TopBarSearchBar from "./TopBarSearchBar";
import TopBarBell from "./TopBarBell";

export default function TopBar() {
  return (
    <>
      <div className="row-start-1 col-start-3 col-span-full grid grid-cols-7">
        <TopBarSearchBar />
        <div className="p-14 mr-10 grid place-items-center">
          <TopBarBell />
        </div>
        <TopBarAvatar />
      </div>
    </>
  );
}
