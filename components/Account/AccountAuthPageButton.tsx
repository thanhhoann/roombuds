import { FingerPrintSVG } from "../../assets/HomePage";
import { useRecoilState } from "recoil";
import { authPageSeleted, sideBarItemsSelected } from "../../atoms";

interface AccountAuthPageButtonProps {
  submitHandler: (arg: any) => void;
  title?: string;
}
export default function AccountAuthPageButton({
  submitHandler,
  title,
}: AccountAuthPageButtonProps) {
  const [authPageGlobal, setAuthPageGlobal] = useRecoilState(authPageSeleted);
  const [selected, setSelected] = useRecoilState(sideBarItemsSelected);
  setAuthPageGlobal(title);
  setSelected("Home");

  return (
    <>
      <button
        type="submit"
        className="px-16 text-xl py-3 rounded-lg mt-8 desktop:mt-14 mb-5 desktop:mb-10 flex bg-svg text-white border-4 border-white hover:border-headline dark:border-background_dark dark:hover:border-btn_dark"
        onClick={submitHandler}
      >
        <span className="mr-2">{FingerPrintSVG}</span>
        {title}
      </button>
    </>
  );
}
