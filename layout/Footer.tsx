export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="container">
        {'Copyleft '}
        <img src="/Copyleft_white.svg.png" alt="copyleft" />
        {' 2021'}
        {new Date().getFullYear() !== 2021 && `-${new Date().getFullYear()}`}
        <strong>{' juunini'}</strong>
        {' All wrongs reserved.'}
      </div>
    </footer>
  );
}
