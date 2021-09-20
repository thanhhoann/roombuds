import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const sideBarItemsSelected = atom({
  key: "sideBarItemsSelected",
  default: "Home",
  effects_UNSTABLE: [persistAtom],
});

export const isAuthenticated = atom({
  key: "isAuthenticated",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const authPageSeleted = atom({
  key: "authPageSeleted",
  default: "Sign In",
  effects_UNSTABLE: [persistAtom],
});
