import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

import { dir, internalURI } from 'lib/til';

type Params = {
  params: {
    year: string;
    month: string;
  };
};

type Props = {
  year: string;
  month: string;
  days: string[];
};

export default function Month({ year, month, days }: Props): JSX.Element {
  return (
    <>
      {
        days.map((day: string): JSX.Element => (
          <Link key={day} href={internalURI(year, month, day)}>{day}</Link>
        ))
      }
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const years: string[] = dir();

  const paths = years.reduce((acc, year: string) => {
    const months: string[] = dir(year);
    const currentParams = months.map((month: string) => ({ params: { year, month } }));
    return [
      ...acc,
      ...currentParams,
    ];
  }, []);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { year, month } }: Params) => {
  const days: string[] = dir(year, month);

  return {
    props: {
      year,
      month,
      days: days.map((day: string): string => day.replace('.md', '')),
    },
  };
};
