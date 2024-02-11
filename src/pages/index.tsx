// import "react-datepicker/dist/react-datepicker.css";
import { NextPage } from "next";
import Link from "next/link";

// import Layout from '@/components/common/Layout';
// import Container from '@/components/common/parts/Container';
// import Question01 from '@/components/form01/Question01';
// import Question02 from '@/components/todo01/Question02';
import { ROUTES } from "@/lib/data/routes";

const TopPage: NextPage = () => {
  return (
    <>
      <h1>test</h1>
    </>
    // <Layout path={ROUTES.ANSWER01} title="Answer01">
    //   <Container maxWidth="max-w-4xl">
    //     <div className="mt-8">
    //       <h1 className="text-h1">課題</h1>
    //       <Question01 />
    //       <Link href={ROUTES.ANSWER01}>
    //         <a className="text-primary ml-2 mt-2 text-sm underline duration-200 hover:opacity-80">
    //           答えを見る
    //         </a>
    //       </Link>
    //       <Question02 />
    //       <Link href={ROUTES.ANSWER02}>
    //         <a className="text-primary ml-2 mt-2 text-sm underline duration-200 hover:opacity-80">
    //           答えを見る
    //         </a>
    //       </Link>
    //     </div>
    //   </Container>
    // </Layout>
  );
};

export default TopPage;
