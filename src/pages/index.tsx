/* eslint-disable */
import { NextPage } from "next";
import { ROUTES } from "../lib/data/routes";
import Layout from "./Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout
        title={ROUTES.INDEX.title}
        description={ROUTES.INDEX.description}
        path={ROUTES.INDEX.url}
      >
        <div className="">test</div>
      </Layout>
    </>
  );
};

export default Home;
