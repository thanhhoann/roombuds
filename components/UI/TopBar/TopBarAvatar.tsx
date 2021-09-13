import Image from "next/image";
import Link from "next/link";

export default function TopBarAvatar() {
  return (
    <>
      <Link href="/account" passHref>
        <main className="border-headline dark:border-headline_dark border-2 rounded-md relative w-24 h-24 m-10 cursor-pointer">
          <Image
            src="https://avatars.dicebear.com/api/avataaars/hoan.svg"
            layout="fill"
            objectFit="fill"
            alt="Avatar"
          />
        </main>
      </Link>
    </>
  );
}
