import { SideBarItemsContainerProps } from "../../../types";

export function SideBarItemsContainer({
  svg,
  title,
}: SideBarItemsContainerProps) {
  return (
    <>
      <div className={`text-2xl flex text-para dark:text-headline_dark `}>
        <span className="mr-3">{svg}</span>
        <h1 className="text-xl">{title}</h1>
      </div>
    </>
  );
}
