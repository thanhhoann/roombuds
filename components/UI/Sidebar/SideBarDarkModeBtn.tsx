import { useState } from "react";
import { Switch } from "@headlessui/react";
import useDarkMode from "../../../hooks/useDarkMode";
import { useRecoilState } from "recoil";
import { darkModeEnabled } from "../../../atoms";

export default function MyToggle() {
  //  const [enabled, setEnabled] = useState(false);
  const [enabled, setEnabled] = useRecoilState(darkModeEnabled);

  const switchHandler = () => {
    setEnabled(!enabled);
    useDarkMode();
  };

  console.log(enabled);

  return (
    <>
      <div className="m-10 flex dark:text-background">
        <div className="mr-2">
          {enabled ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </div>

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
