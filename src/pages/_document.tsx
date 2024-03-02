import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang="ja" dir="ltr">
        <Head>
          {/* ファビコン等の設定 */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/images/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#3e92a3" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#3e92a3" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
