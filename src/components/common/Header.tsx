import Head from "next/head";

const Header = (): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
      </Head>
      <input type="checkbox" id="hamburger" className="hidden" />
      <label htmlFor="hamburger" className="hamburger-overlay" />

      <div className="">
        <Link href="/">
          
        </Link>
      </div>
    </>
  );
};

export default Header;
