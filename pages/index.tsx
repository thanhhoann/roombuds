import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isAuthenticated } from "../atoms";
import Layout from "../components/UI/Layout";

const Home: NextPage = () => {
  const router = useRouter();
  const [userAuth, setUserAuth] = useRecoilState(isAuthenticated);

  useEffect(() => {
    if (!userAuth) router.replace("/account/signin");
  }, []);

  return (
    <>
      <Layout title="Home">
        <main className="row-start-2 row-span-6 col-start-3 col-span-full">
          <div className="shadow-2xl px-4 py-6 bg-background dark:bg-background_dark relative m-10 rounded-lg border-2 dark:border-btn_dark">
            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
              Total Bills
            </p>
            <div className="flex items-end space-x-2 my-6">
              <p className="text-5xl text-black dark:text-white font-bold">
                12
              </p>
              <span className="text-green-500 text-xl font-bold flex items-center">
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  className="h-3"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                22%
              </span>
            </div>
            <div className="dark:text-white">
              <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                {/* TODO: dien va nuoc tinh rieng hay chung ? */}
                <p>Electricity & Water</p>
                <div className="flex items-end text-xs">
                  34
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    22%
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Embedded form</p>
                <div className="flex items-end text-xs">
                  13
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    12%
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                <p>New visitor</p>
                <div className="flex items-end text-xs">
                  45
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    41%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:p-8 m-5 p-6 bg-background shadow-2xl rounded-lg flex justify-between dark:bg-background_dark md:items-center md:flex-row flex-col gap-12 border-2 dark:border-btn_dark">
            <div>
              <span className="text-bold text-headline dark:text-headline_dark dark:text-gray-400 block">
                Total Savings
              </span>
              <span className="text-headline dark:text-headline_dark text-4xl md:text-5xl mt-2 block">
                999,999,999
              </span>
            </div>
            <div className="self-end">
              <div className="md:text-right text-left md:block">
                <p className="text-xl md:mb-2 mb-0 dark:text-gray-100 flex items-center increase">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-red-500 mr-2"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                  </svg>
                  1.2% increase
                </p>
              </div>
              <p className="text-lg text-gray-600 md:text-right text-left dark:text-gray-400 md:block inline-block md:mb-0">
                from yesterday (+906,503)
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
