import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { dir, internalURI } from 'lib/til';

export default function Home({ years }: { years: string[] }) {
  return (
    <>
      <Head>
        <title>juunini&apos;s til</title>
        <meta name="description" content="juunini's til" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {
          years.map((year: string): JSX.Element => (
            <Link href={internalURI(year)} key={year}>{year}</Link>
          ))
        }
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    years: dir(),
  },
});
