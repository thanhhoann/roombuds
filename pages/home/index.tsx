import type { NextPage } from "next";
import Layout from "../../components/UI/Layout";
import Categories from "../../components/Home/Categories";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Home">
        <Categories />
      </Layout>
    </>
  );
};

export default Home;
