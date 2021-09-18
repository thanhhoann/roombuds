import type { NextPage } from "next";
import Layout from "../../components/UI/Layout";

const Notifications: NextPage = () => {
  return (
    <>
      <Layout title="Notifications">
        <section className="text-headline dark:text-headline_dark bg-gray-900 body-font col-start-3 col-span-full row-start-2 row-span-3 laptop:ml-10">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -my-8">
              <div className="py-8 px-4 lg:w-1/3">
                <div className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-headline dark:text-headline_dark pb-2 mb-2 border-b-2 border-main">
                      Jul
                    </span>
                    <span className="font-medium text-lg leading-none text-headline dark:text-headline_dark title-font">
                      18
                    </span>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-purple-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-xl font-medium text-headline dark:text-headline_dark mb-3">
                      The 400 Blows
                    </h1>
                    <p className="leading-relaxed mb-5">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <a className="inline-flex items-center">
                      <img
                        alt="blog"
                        src="https://dummyimage.com/103x103"
                        className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-3">
                        <span className="title-font font-medium text-headline dark:text-headline_dark">
                          Alper Kamu
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="py-8 px-4 lg:w-1/3">
                <div className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-headline dark:text-headline_dark pb-2 mb-2 border-b-2 border-main">
                      Jul
                    </span>
                    <span className="font-medium text-lg leading-none text-headline dark:text-headline_dark title-font">
                      18
                    </span>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-purple-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-xl font-medium text-headline dark:text-headline_dark mb-3">
                      Shooting Stars
                    </h1>
                    <p className="leading-relaxed mb-5">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <a className="inline-flex items-center">
                      <img
                        alt="blog"
                        src="https://dummyimage.com/102x102"
                        className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-3">
                        <span className="title-font font-medium text-headline dark:text-headline_dark">
                          Holden Caulfield
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="py-8 px-4 lg:w-1/3">
                <div className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-headline dark:text-headline_dark pb-2 mb-2 border-b-2 border-main">
                      Jul
                    </span>
                    <span className="font-medium text-lg leading-none text-headline dark:text-headline_dark title-font">
                      18
                    </span>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-purple-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-xl font-medium text-headline dark:text-headline_dark mb-3">
                      Neptune
                    </h1>
                    <p className="leading-relaxed mb-5">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <a className="inline-flex items-center">
                      <img
                        alt="blog"
                        src="https://dummyimage.com/101x101"
                        className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-3">
                        <span className="title-font font-medium text-headline dark:text-headline_dark">
                          Henry Letham
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Notifications;
