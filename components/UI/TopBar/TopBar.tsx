import TopBarAvatar from "./TopBarAvatar";
import TopBarSearchBar from "./TopBarSearchBar";
import { useMedia } from "use-media";

export default function TopBar() {
  const laptop = useMedia({ minWidth: "1024px" });

  return (
    <>
      <div className="w-full row-start-1 col-start-3 col-span-full laptop:grid grid-cols-7 desktop:-ml-10">
        <TopBarSearchBar />
        {laptop && <TopBarAvatar />}
      </div>
    </>
  );
}
