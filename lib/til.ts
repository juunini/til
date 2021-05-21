import fs from 'fs';
import path from 'path';
import { TilNotFoundError } from './errors';

const rootPath: string = __dirname.substring(0, __dirname.length - 4);
const tilDirectory: string = 'til';

function makePath(...paths: string[]): string {
  return path.resolve(
    rootPath,
    tilDirectory,
    ...paths.filter((value: string): boolean => value !== undefined && value !== ''),
  );
}

export function dir(...paths: string[]): string[] {
  return fs.readdirSync(
    makePath(...paths),
  );
}

export function contents(...paths: string[]): string {
  const targetPath = makePath(...paths);

  try {
    return fs.readFileSync(
      targetPath,
      'utf-8',
    );
  } catch {
    throw new TilNotFoundError(targetPath);
  }
}
