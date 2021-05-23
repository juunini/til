import NextHead from 'next/head';

export default function Head(): JSX.Element {
  return (
    <NextHead>
      <title>{'juunini\'s til'}</title>
      <meta name="description" content="juunini's til" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
