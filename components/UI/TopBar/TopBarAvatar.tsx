import Image from "next/image";

export default function TopBarAvatar() {
  return (
    <>
      <main className="border-headline dark:border-headline_dark border-2 rounded-md relative w-24 h-24 mt-6 mr-10">
        <Image
          src="https://avatars.dicebear.com/api/avataaars/hoan.svg"
          layout="fill"
          objectFit="fill"
          alt="Avatar"
        />
      </main>
    </>
  );
}
