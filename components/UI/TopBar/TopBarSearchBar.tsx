import { SearchSVG } from "../../../assets/TopBar";

export default function TopBarSearchBar() {
  return (
    <>
      <div className="p-3 w-full col-start-1 col-span-5 ">
        <div className="p-8 w-2/3">
          <div className="bg-background dark:bg-background_dark border-2 dark:border-main flex items-center rounded-xl shadow-md">
            <input
              className="w-full py-4 px-6 text-headline dark:text-headline_dark dark:bg-background_dark leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="I search because I'm lazy."
            />

            <div className="p-4">
              <button className="p-2 w-12 h-12">{SearchSVG}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
