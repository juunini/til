import { GetStaticProps } from 'next';
import Link from 'next/link';

import { dir, internalURI } from 'lib/til';

export default function Home({ years }: { years: string[] }) {
  return (
    <>
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
