import { GetStaticPaths, GetStaticProps } from 'next';

import TilLinks from 'lib/components/TilLinks';
import { Props } from 'lib/components/TilLink';
import ls from 'lib/til/ls';

interface StaticProps {
  params: {
    year: string;
  };
}

interface PageProps {
  year: string;
  months: Array<string>;
}

const TilLinkProps = (year: string, month: string): Props => ({
  href: `${year}/${month}`,
  contents: month,
  postfix: '월',
});

export default function Year({ year, months }: PageProps): JSX.Element {
  return (
    <>
      <h1>{`${year}년`}</h1>

      <div className="markdown-body">
        <TilLinks props={months.map((month) => TilLinkProps(year, month))} />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const years: Array<string> = ls();
  const paths = years.map((year) => ({
    params: { year },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { year },
}: StaticProps) => {
  const months: Array<string> = ls(year);

  return {
    props: {
      year,
      months,
    },
  };
};
