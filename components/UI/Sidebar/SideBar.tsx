import SideBarTitle from "./SideBarTitle";
import SideBarItems from "./SideBarItems";
import SideBarDarkModeBtn from "./SideBarDarkModeBtn";

export default function SideBar() {
  return (
    <>
      <div className="col-start-1 col-span-2 row-span-full laptop:-mr-8 laptop:border-r-2 border-b-2 rounded-lg laptop:border-divider flex flex-col justify-between tablet:flex-wrap">
        <main className="mt-7">
          <SideBarTitle />
          <SideBarItems />
        </main>
        <SideBarDarkModeBtn />
      </div>
    </>
  );
}
