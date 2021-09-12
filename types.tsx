import { ReactNode } from "react";

export interface SideBarItemsContainerProps {
  svg: ReactNode;
  title: string;
  link: string;
}

export interface LayoutProps {
  title: string;
  children: ReactNode;
}
