import SideBarTitle from "./SideBarTitle";
import SideBarItems from "./SideBarItems";
import SideBarDarkModeBtn from "./SideBarDarkModeBtn";

export default function SideBar() {
  return (
    <>
      <div className="h-screen rounded-lg flex flex-col justify-between tablet:flex-wrap laptop:fixed">
        <main className="mt-7">
          <SideBarTitle />
          <SideBarItems />
        </main>
        <SideBarDarkModeBtn />
      </div>
    </>
  );
}
