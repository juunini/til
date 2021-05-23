/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';

import Head from 'layout/Head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}
