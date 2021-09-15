import { Switch } from "@headlessui/react";
import { moonSVG, sunSVG } from "../../../assets/SideBarDarkModeBtnSVG";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function MyToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // only renders UI that uses the current theme when mounted ( fix hydration mismatch error )
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <div className="m-10 flex dark:text-background">
        <div className="mr-2">{theme === "dark" ? moonSVG : sunSVG}</div>

        <Switch
          checked={theme === "dark" ? true : false}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`bg-main dark:bg-background_dark relative inline-flex items-center h-6 rounded-full w-16 border-2`}
        >
          <span
            className={`${
              theme === "dark" ? "translate-x-10" : "translate-x-1"
            } inline-block w-4 h-4 transform duration-200 ease-linear bg-btn_text dark:bg-btn_dark rounded-full`}
          />
        </Switch>
      </div>
    </>
  );
}
