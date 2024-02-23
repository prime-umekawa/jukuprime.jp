import { NextSeo } from "next-seo";
import {
  APP_ROOT_URL,
  DEFAULT_META_TITLE,
  SITE_NAME,
  createCanonicalURL,
} from "../lib/data/metaData";
import Header from "../components/common/Header";

type Props = {
  title: string;
  description?: string;
  path?: string;
  ogImagePath?: string;
  children: React.ReactNode;
};

const Layout = (props: Props): JSX.Element => {
  const {
    title = DEFAULT_META_TITLE,
    description: DEFAULT_META_DESCRIPTION,
    path,
    ogImagePath,
    children,
  } = props;

  // ページの絶対パス
  const pageUrl = createCanonicalURL(path ?? "");

  // OG画像の絶対パス
  const ogImageUrl = APP_ROOT_URL + ogImagePath;

  return (
    <>
      <NextSeo
        title={title}
        cononical={pageUrl}
        description={description}
        og={{
          title,
          description,
          url: pageUrl,
          image: ogImageUrl,
          type: "website",
          siteName: SITE_NAME,
        }}
      />
      <div className="">
        <div className="mb-12">
          <Header />
        </div>
      </div>
    </>
  );
};

export default Layout;
