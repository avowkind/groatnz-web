import Head from 'next/head'
import '../styles/normalize.css';
import '../styles/skeleton.css';
import '../styles/base.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Andrew Watkins - Groat.NZ</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
