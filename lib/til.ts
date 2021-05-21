import fs from 'fs';
import path from 'path';

const rootPath = __dirname.substring(0, __dirname.length - 4);

export function dir(...paths: string[]): string[] {
  return fs.readdirSync(
    path.resolve(
      rootPath,
      'til',
      ...paths.filter((value: string): boolean => value !== undefined && value !== ''),
    ),
  );
}

export const dummy = '';
