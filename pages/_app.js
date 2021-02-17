import "../styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo_white.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
