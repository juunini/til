import fs from 'fs';
import path from 'path';

const TIL_PATH = './til';

/**
 * 디렉토리에 있는 파일 리스트를 리턴합니다.
 *
 * @param paths - year, month, day 순서로 넣으세요. 넣지 않을 경우 til 폴더 최상단의 연도 폴더 리스트를 리턴합니다.
 */
export default function ls(...paths: Array<string>): Array<string> {
  const targetPath = path.resolve(TIL_PATH, ...paths);
  return fs.readdirSync(targetPath);
}
