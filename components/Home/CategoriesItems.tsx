import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CategoriesItems() {
  const items = [
    { name: "Water", image: "drop", link: "/home/water" },
    { name: "Electricity", image: "lightning", link: "/home/electricity" },
    { name: "Households", image: "household", link: "/home/households" },
    { name: "Savings", image: "piggy-bank", link: "/home/savings" },
  ];

  const list = {
    animate: {
      opacity: [0, 1],
      y: [100, 0],
      transition: { duration: 1 },
    },
  };

  return (
    <>
      <div className="flex w-full m-5 mt-10">
        {items.map((item, index) => (
          <Link key={index} href={`${item.link}`} passHref>
            <motion.main
              variants={list}
              animate="animate"
              className="rounded-md m-5 p-5 border-para dark:border-para_dark border-4 text-center grid grid-rows-4 w-60 h-64 cursor-pointer hover:border-btn dark:hover:border-btn_dark"
            >
              <motion.div
                className="relative w-full h-2/3 row-start-1 row-span-3 mt-5"
                animate={{
                  scale: [1, 0.9],
                  transition: { duration: 1, repeat: Infinity },
                }}
              >
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
