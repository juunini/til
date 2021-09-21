const tilRoot = 'til';

export default function tilAddress(...params: string[]): string {
  return `/${tilRoot}/${params.join('/')}`;
}
