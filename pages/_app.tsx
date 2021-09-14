import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <motion.div key={router.route}>
        <ThemeProvider attribute="class">
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </ThemeProvider>
      </motion.div>
    </AnimatePresence>
  );
}
export default MyApp;
