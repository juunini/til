/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>juunini&apos;s til</title>
        <meta name="description" content="juunini's til" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
