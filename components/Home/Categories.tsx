import CategoriesItems from "../Home/CategoriesItems";
import { CategoriesSVG } from "../../assets/HomePage";

export default function Categories() {
  return (
    <>
      <div className="flex flex-col text-para row-start-2 row-span-6 col-start-3 col-span-8 desktop:-ml-10">
        <CategoriesItems />
      </div>
    </>
  );
}
