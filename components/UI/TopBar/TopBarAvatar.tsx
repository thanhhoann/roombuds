import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { sideBarItemsSelected } from "../../../atoms";

export default function TopBarAvatar() {
  const [sideBarItemSelected, setSideBarItemSelected] =
    useRecoilState(sideBarItemsSelected);

  return (
    <>
      <Link href="/account" passHref>
        <main
          className="relative w-24 h-24 cursor-pointer col-start-7 mt-10 border-2 border-headline dark:border-headline_dark p-4 rounded-xl"
          onClick={() => setSideBarItemSelected("")}
        >
          <Image
            src="https://avatars.dicebear.com/api/micah/Thanh_Hoàn.svg"
            layout="fill"
            objectFit="fill"
            alt="Avatar"
          />
        </main>
      </Link>
    </>
  );
}
