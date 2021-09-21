import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import Markdown from 'lib/markdown';
import TilLink from 'lib/components/TilLink';
import ls from 'lib/til/ls';
import cat from 'lib/til/cat';

interface StaticProps {
  params: {
    year: string;
    month: string;
    day: string;
  };
}

interface PageProps {
  year: string;
  month: string;
  day: string;
  content: string;
}

export default function Day({
  year, month, day, content,
}: PageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{`juunini's til - ${year}년 ${month}월 ${day}일`}</title>
      </Head>

      <h1>
        <TilLink href={year} contents={year} postfix="년" />
        {' '}
        <TilLink href={`${year}/${month}`} contents={month} postfix="월" />
        {' '}
        {`${day}일`}
      </h1>

      <Markdown>{content}</Markdown>
    </>
  );
}

const removeExtension = (filename: string): string => filename.replace(/[^0-9]/gi, '');
const getDays = (year: string, month: string): Array<StaticProps> => ls(year, month).map(
  (day) => ({ params: { year, month, day: removeExtension(day) } }),
);
const getMonths = (year: string): Array<StaticProps> => ls(year).flatMap(
  (month) => getDays(year, month),
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: Array<StaticProps> = ls().flatMap(getMonths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { year, month, day },
}: StaticProps) => ({
  props: {
    year,
    month,
    day,
    content: cat(year, month, day),
  },
});
