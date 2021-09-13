import CategoriesItems from "../Home/CategoriesItems";

export default function Categories() {
  return (
    <>
      <div className="flex flex-col text-para col-start-3 col-span-8">
        <h1 className="font-bold text-5xl ml-20 dark:text-headline_dark">
          Categories
        </h1>
        <CategoriesItems />
      </div>
    </>
  );
}
