import fs from 'fs';
import path from 'path';
import { isEmpty } from 'lodash';

import { TilNotFoundError } from './errors';

const rootPath: string = './';
const tilDirectory: string = 'til';

function makePath(...paths: string[]): string {
  return path.resolve(
    rootPath,
    tilDirectory,
    ...paths.filter((value) => !isEmpty(value)),
  );
}

export function internalURI(...paths: string[]): string {
  return `/${tilDirectory}/${paths.join('/')}`;
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
