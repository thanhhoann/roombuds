import type { NextPage } from "next";
import Layout from "../../components/UI/Layout";
import Categories from "../../components/Home/Categories";

const Funds: NextPage = () => {
  return (
    <>
      <Layout title="Funds">
        <Categories />
      </Layout>
    </>
  );
};

export default Funds;
