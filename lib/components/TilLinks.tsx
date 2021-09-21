import TilLink, { Props as TilLinkProps } from './TilLink';

interface Props {
  props: Array<TilLinkProps>;
}

export default function TilLinks({ props }: Props): JSX.Element {
  return (
    <ul>
      {
        props.map(({ href, contents, postfix }) => (
          <li key={href}>
            <TilLink
              href={href}
              contents={contents}
              postfix={postfix}
            />
          </li>
        ))
      }
    </ul>
  );
}
