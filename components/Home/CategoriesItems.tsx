import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CategoriesItems() {
  const items = [
    {
      name: "Electricity & Water",
      image: "water-energy",
      link: "/electricity-and-water",
    },
    { name: "Renting", image: "house", link: "/renting" },
    { name: "Households", image: "household", link: "/households" },
    { name: "Savings", image: "piggy-bank", link: "/savings" },
  ];

  const list = {
    animate: {
      opacity: [0, 1],
      scale: [0.3, 1],
      transition: { duration: 0.6, ease: [0.37, 0, 0.63, 1] },
    },
  };

  return (
    <>
      <div className="grid auto-rows-max place-items-center tablet:flex desktop:flex-nowrap flex-wrap justify-center flex-row w-full p-10">
        {items.map((item, index) => (
          <Link key={index} href={`${item.link}`} passHref>
            <motion.main
              variants={list}
              animate="animate"
              className="group rounded-md mb-8 tablet:m-10 p-5 border-para dark:border-para_dark border-4 text-center grid grid-rows-4 w-60 h-64 cursor-pointer hover:border-btn dark:hover:border-btn_dark"
            >
              <motion.div className="relative w-full h-2/3 row-start-1 row-span-3 mt-5">
                <Image
                  src={`/${item.image}.svg`}
                  layout="fill"
                  objectFit="fill"
                  alt="Categories items"
                />
              </motion.div>
              <div className="flex flex-col justify-end row-start-4">
                <h1 className="font-semibold text-2xl text-headline dark:text-headline_dark">
                  {item.name}
                </h1>
              </div>
            </motion.main>
          </Link>
        ))}
      </div>
    </>
  );
}
