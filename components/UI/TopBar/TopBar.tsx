import TopBarUsername from "../TopBar/TopBarUsername";
import TopBarAvatar from "./TopBarAvatar";

export default function TopBar() {
  return (
    <>
      <div className=" row-start-1 col-start-3 col-span-full flex justify-end">
        <TopBarUsername />
        <TopBarAvatar />
      </div>
    </>
  );
}
