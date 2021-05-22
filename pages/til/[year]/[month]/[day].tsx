import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { dir, contents } from 'lib/til';

type Params = {
  params: {
    year: string;
    month: string;
    day: string;
  };
};

type Props = {
  year: string;
  month: string;
  day: string;
  content: string;
};

export default function Day({
  year, month, day, content,
}: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{`juunini's til - ${year}/${month}/${day}`}</title>
        <meta name="description" content={`juunini's til - ${year}/${month}/${day}`} />
      </Head>
      {`${year} ${month} ${day}`}
      <br />
      {content}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const years: string[] = dir();

  const paths = years.reduce((acc, year: string) => {
    const months: string[] = dir(year);

    const currentMonthParams = months.reduce((monthAcc, month: string) => {
      const days: string[] = dir(year, month);

      const currentDayParams = days.map((day: string) => ({ params: { year, month, day: day.replace('.md', '') } }));

      return [
        ...monthAcc,
        ...currentDayParams,
      ];
    }, []);

    return [
      ...acc,
      ...currentMonthParams,
    ];
  }, []);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { year, month, day } }: Params) => ({
  props: {
    year,
    month,
    day,
    content: contents(year, month, `${day}.md`),
  },
});
