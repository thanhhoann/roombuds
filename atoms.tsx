import { atom } from "recoil";

export const sideBarItemsSelected = atom({
  key: "sideBarItemsSelected", // unique ID (with respect to other atoms/selectors)
  default: "Home", // default value (aka initial value)
});

export const darkModeEnabled = atom({
  key: "darkModeEnabled",
  default: false,
});
