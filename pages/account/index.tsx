import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/UI/Layout";
import ReactRough, { Rectangle } from "react-rough";
import { useRecoilState } from "recoil";
import { isAuthenticated } from "../../atoms";
import { useRouter } from "next/router";

const Account: NextPage = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useRecoilState(isAuthenticated);

  const logOutHandler = () => {
    setIsAuth(false);
    router.replace("/account/signin");
  };
  return (
    <>
      <Layout title="Account">
        <Link href="/">
          <h1
            className="border-2 border-headline dark:border-btn_dark p-5 text-xl m-5 rounded-lg text-center col-start-3"
            onClick={logOutHandler}
          >
            Log out
          </h1>
        </Link>
      </Layout>
    </>
  );
};

export default Account;
