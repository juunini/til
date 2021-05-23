/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';

import Head from 'layout/Head';
import '../styles/globals.css';
import Header from 'layout/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
