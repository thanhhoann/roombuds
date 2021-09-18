import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { FingerPrintSVG } from "../../assets/HomePage";
import { LayoutProps } from "../../types";

export default function AccountCTA({ title }: LayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const router = useRouter();

  return (
    <>
      <button
        className="px-16 text-xl py-3 rounded-lg mt-8 desktop:mt-14 mb-5 desktop:mb-10 flex bg-svg text-white border-4 border-white hover:border-headline dark:border-background_dark dark:hover:border-btn_dark"
        onClick={() => isAuthenticated && router.replace("/home")}
      >
        <span className="mr-2">{FingerPrintSVG}</span>
        {title}
      </button>
    </>
  );
}
