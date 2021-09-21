import fs from 'fs';
import path from 'path';

const TIL_PATH = './til';

/**
 * @param paths - year, month, day 순으로 넣으세요.
 * @returns 해당 날짜의 md 파일 내용
 */
export default function cat(year: string, month: string, day: string): string {
  const targetPath = path.resolve(TIL_PATH, year, month, `${day}.md`);

  return fs.readFileSync(
    targetPath,
    'utf-8',
  );
}
