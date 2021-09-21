import Link from 'next/link';

import constants from 'lib/constants';

interface Params {
  year: number;
  month: number;
  day: number;
  postFix: string;
}

export default function TilLink({
  year, month = 0, day = 0, postFix = '',
}: Params): JSX.Element {
  const paths = [year, month, day].filter((target) => target !== 0);
  const href = `${constants.tilRoot}/${paths.join('/')}`;
  const contents = paths[paths.length - 1] + postFix;

  return <Link href={href}>{contents}</Link>;
}
