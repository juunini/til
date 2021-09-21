import fs from 'fs';
import path from 'path';
import { isEmpty, toInteger } from 'lodash';

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

function stringToInteger(target: string): number {
  return toInteger(target.replace(/[^0-9]/g, ''));
}

export function internalURI(...paths: string[]): string {
  return `/${tilDirectory}/${paths.join('/')}`;
}

export function dir(...paths: string[]): string[] {
  return fs.readdirSync(
    makePath(...paths),
  );
}

export function climbingOrder(target: string[]): string[] {
  return target.sort((a, b) => stringToInteger(a) - stringToInteger(b));
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
