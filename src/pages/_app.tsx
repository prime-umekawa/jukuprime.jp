import { AppProps } from "next/app";
// 使うようになったら考える
// import { RecoilRoot } from "recoil";

import "@/styles/globals.css";
import MessageDialog from "@/components/common/MessageDialog";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
