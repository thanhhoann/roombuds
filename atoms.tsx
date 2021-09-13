import { atom } from "recoil";

export const sideBarItemsSelected = atom({
  key: "sideBarItemsSelected", 
  default: "Home", 
});

export const darkModeEnabled = atom({
  key: "darkModeEnabled",
  default: false,
});

