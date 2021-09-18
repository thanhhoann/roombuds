import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/UI/Layout";

const Account: NextPage = () => {
  return (
    <>
      <Layout title="Account">
        <Link href="/">
          <h1 className="border-2 border-headline dark:border-btn_dark p-5 text-xl m-5 rounded-lg text-center">
            Log out
          </h1>
        </Link>
      </Layout>
    </>
  );
};

export default Account;
