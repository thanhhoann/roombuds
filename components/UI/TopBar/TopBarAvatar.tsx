import Image from "next/image";
import Link from "next/link";

export default function TopBarAvatar() {
  return (
    <>
      <Link href="/account" passHref>
        <main className="relative w-24 h-24 cursor-pointer col-start-7 mt-5">
          <Image
            src="https://avatars.dicebear.com/api/micah/hoanhtaoenu.svg"
            layout="fill"
            objectFit="fill"
            alt="Avatar"
          />
        </main>
      </Link>
    </>
  );
}
