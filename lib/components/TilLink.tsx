import Link from 'next/link';

import tilAddress from 'lib/utils/tilAddress';
import withPostFix from 'lib/utils/withPostFix';

interface Params {
  paths: Array<string>;
  name: string;
  postFix: string;
}

export default function TilLink({ paths, name, postFix = '' }: Params): JSX.Element {
  return (
    <Link href={tilAddress(...paths)}>
      {withPostFix(name, postFix)}
    </Link>
  );
}
