import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { dir, contents, internalURI } from 'lib/til';
import Markdown from 'lib/markdown';

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
        <meta name="description" content={`${year}년 ${month}월 ${day}일`} />
      </Head>

      <main>
        <h1>
          <Link href={internalURI(year)}>{year}</Link>
          {'년 '}
          <Link href={internalURI(year, month)}>{month}</Link>
          {'월 '}
          {`${day}일`}
        </h1>
      </main>

      <Markdown>{content}</Markdown>
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
