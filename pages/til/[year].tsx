import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

import { dir } from 'lib/til';

type Params = {
  params: {
    year: string;
  };
};

type Props = {
  year: string;
  months: Array<string>;
};

export default function Year({ year, months }: Props): JSX.Element {
  return (
    <>
      {
        months.map((month: string) => (
          <Link key={month} href={`/til/${year}/${month}`}>{month}</Link>
        ))
      }
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const years: string[] = dir();
  const paths = years.map((year: string) => ({
    params: { year },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { year },
}: Params) => {
  const months: string[] = dir(year);

  return {
    props: {
      year,
      months,
    },
  };
};
