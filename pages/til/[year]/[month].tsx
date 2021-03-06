import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import TilLinks from 'lib/components/TilLinks';
import TilLink, { Props } from 'lib/components/TilLink';
import ls from 'lib/til/ls';

interface StaticProps {
  params: {
    year: string;
    month: string;
  };
}

interface PageProps {
  year: string;
  month: string;
  days: string[];
}

const TilLinkProps = (year: string, month: string, day: string): Props => ({
  href: `${year}/${month}/${day}`,
  contents: day,
  postfix: '일',
});

export default function Month({ year, month, days }: PageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{`juunini's til - ${year}년 ${month}월`}</title>
      </Head>

      <h1>
        <TilLink href={year} contents={year} postfix="년" />
        {` ${month}월`}
      </h1>

      <div className="markdown-body">
        <TilLinks props={days.map((day) => TilLinkProps(year, month, day))} />
      </div>
    </>
  );
}

const getMonths = (year: string): Array<StaticProps> => ls(year).map(
  (month) => ({ params: { year, month } }),
);
const removeExtension = (filename: string): string => filename.replace(/[^0-9]/gi, '');

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: Array<StaticProps> = ls().flatMap(getMonths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { year, month },
}: StaticProps) => {
  const days: Array<string> = ls(year, month).map(removeExtension);

  return {
    props: {
      year,
      month,
      days,
    },
  };
};
