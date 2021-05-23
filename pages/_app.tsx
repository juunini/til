/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';

import Head from 'layout/Head';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
