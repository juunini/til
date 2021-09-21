import { GetStaticProps } from 'next';
import Link from 'next/link';

import { climbingOrder, dir, internalURI } from 'lib/til';

export default function Home({ years }: { years: string[] }) {
  return (
    <ul>
      {
        years.map((year: string): JSX.Element => (
          <li key={year}>
            <Link href={internalURI(year)}>{`${year}년`}</Link>
          </li>
        ))
      }
    </ul>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    years: climbingOrder(dir()),
  },
});
