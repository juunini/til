import Link from 'next/link';

const TIL_ROOT = '/til/';

export interface Props {
  href: string;
  contents: string;
  postfix?: string;
}

export default function TilLink({
  href,
  contents,
  postfix = '',
}: Props): JSX.Element {
  return <Link href={TIL_ROOT + href}>{contents + postfix}</Link>;
}
