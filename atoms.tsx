import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const sideBarItemsSelected = atom({
  key: "sideBarItemsSelected",
  default: "Home",
  effects_UNSTABLE: [persistAtom],
});
