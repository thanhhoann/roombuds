import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useMedia } from "use-media";
import { motion } from "framer-motion";
import Image from "next/image";
import curve_light from "../../public/layered-light.svg";
import curve_dark from "../../public/layered-dark.svg";
import blob from "../../public/blob-scene-haikei (1).svg";
import blob_dark from "../../public/blob-dark.svg";

export default function AccountBackgroundImage() {
  const tablet = useMedia({ minWidth: "768px" });
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // only renders UI that uses the current theme when mounted ( fix hydration mismatch error )
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const svg = {
    animate: {
      clipPath: ["circle(1.8% at 50% 50%)", "circle(71.7% at 51% 50%)"],
      transition: { duration: 1 },
    },
  };

  return (
    <>
      <motion.div
        className="absolute w-screen h-screen"
        animate="animate"
        variants={svg}
      >
        <Image
          src={
            tablet
              ? theme === "dark"
                ? blob_dark
                : blob
              : theme === "dark"
              ? curve_dark
              : curve_light
          }
          layout="fill"
          objectFit="cover"
          alt="svg"
        />
      </motion.div>
    </>
  );
}
