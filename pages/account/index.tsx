import type { NextPage } from "next";
import Layout from "../../components/UI/Layout";

const Account: NextPage = () => {
  return (
    <>
      <Layout title="Account">
        <div className="bg-main rounded-md p-3 text-2xl text-center m-10">Change username</div>
        <div className="bg-main rounded-md p-3 text-2xl text-center m-10">Change password</div>
        <div className="bg-main rounded-md p-3 text-2xl text-center m-10">Change bio</div>
        <div className="bg-main rounded-md p-3 text-2xl text-center m-10">Log out</div>
      </Layout>
    </>
  );
};

export default Account;
