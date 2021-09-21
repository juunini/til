import { GetStaticProps } from 'next';

import ls from 'lib/til/ls';
import TilLinks from 'lib/components/TilLinks';
import { Props } from 'lib/components/TilLink';

const TilLinkProps = (year: string): Props => ({
  href: year,
  contents: year,
  postfix: '년',
});

export default function Home({ years }: { years: Array<string> }) {
  return <TilLinks props={years.map(TilLinkProps)} />;
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    years: ls(),
  },
});
