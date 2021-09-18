import { LayoutProps } from "../../types";
import Image from "next/image";
import handShake from "../../public/handshake.svg";

export default function AccountHeaderTitle({ title }: LayoutProps) {
  return (
    <>
      <div className="grid place-items-center">
        <Image src={handShake} width={100} height={100} alt="Header image"/>
        <h1 className="font-bold text-2xl laptop:text-3xl desktop:text-4xl font-inter mt-8 tablet:mt-14">
          {title}
          <span className="font-pacifico p-1 rounded-lg dark:bg-background_dark">
            RoomBuds
          </span>
        </h1>
      </div>
    </>
  );
}
