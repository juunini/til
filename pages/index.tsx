import { GetStaticProps } from 'next';
import Link from 'next/link';

import { dir, internalURI } from 'lib/til';

export default function Home({ years }: { years: string[] }) {
  return (
    <main>
      <ul>
        {
          years.map((year: string): JSX.Element => (
            <li key={year}>
              <Link href={internalURI(year)}>{`${year}년`}</Link>
            </li>
          ))
        }
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    years: dir(),
  },
});
