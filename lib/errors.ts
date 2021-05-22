export class TilNotFoundError extends Error {
  constructor(fileName: string) {
    super(`til not found: ${fileName}`);
  }
}

export const dummy = '';
