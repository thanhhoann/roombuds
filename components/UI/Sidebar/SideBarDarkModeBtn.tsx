import { Switch } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { darkModeEnabled } from "../../../atoms";
import { moonSVG, sunSVG } from "../../../assets/SideBarDarkModeBtnSVG";
import enableDarkMode from "../../../hooks/useDarkMode";

export default function MyToggle() {
  const [enabled, setEnabled] = useRecoilState(darkModeEnabled);

  const switchHandler = () => {
    setEnabled(!enabled);
    enableDarkMode();
  };

  if (enabled) console.log('Dark mode is ENABLED.')

  return (
    <>
      <div className="m-10 flex dark:text-background">
        <div className="mr-2">{enabled ? moonSVG : sunSVG}</div>

        <Switch
          checked={enabled}
          onChange={switchHandler}
          className={`${
            enabled ? "bg-background_dark" : "bg-main"
          } relative inline-flex items-center h-6 rounded-full w-16 border-2`}
        >
          <span
            className={`${
              enabled ? "translate-x-10" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-btn_text dark:bg-btn_dark rounded-full`}
          />
        </Switch>
      </div>
    </>
  );
}
