import CategoriesItems from "../Home/CategoriesItems";
import { CategoriesSVG } from "../../assets/HomePage";

export default function Categories() {
  return (
    <>
      <div className="flex flex-col text-para row-start-3 col-start-3 col-span-8">
        <main className="grid place-items-center laptop:flex">
          <h1 className="font-extrabold border-2 border-headline dark:border-headline_dark rounded-md p-3 tracking-normal text-center laptop:text-left text-4xl laptop:text-5xl laptop:ml-20 dark:text-headline_dark flex">
            <span className="grid place-items-center bg-main rounded-md p-3 mr-3">{CategoriesSVG}</span>
            Categories
          </h1>
        </main>
        <CategoriesItems />
      </div>
    </>
  );
}
