import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <header>
      <div className="container">
        <h1>
          <Link href="/">
            juunini&apos;s til
          </Link>
        </h1>
      </div>
    </header>
  );
}
