import { FingerPrintSVG } from "../../assets/HomePage";
import { LayoutProps } from "../../types";

export default function AccountCTA({ title }: LayoutProps) {
  return (
    <>
      <button className="px-16 text-xl py-3 rounded-lg mt-8 desktop:mt-14 mb-5 desktop:mb-10 flex bg-svg text-white border-4 border-white hover:border-headline dark:border-background_dark dark:hover:border-btn_dark">
        <span className="mr-2">{FingerPrintSVG}</span>
        {title}
      </button>
    </>
  );
}
