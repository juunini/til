import { NextApiRequest, NextApiResponse } from 'next';
import {
  MockRequest,
  MockResponse,
  createMocks,
  RequestOptions,
  ResponseOptions,
} from 'node-mocks-http';

export type MockAPI = {
  req: MockRequest<NextApiRequest>;
  res: MockResponse<NextApiResponse>;
};

export const createAPIMocks = (
  reqOptions?: RequestOptions,
  resOptions?: ResponseOptions,
): MockAPI => createMocks(reqOptions, resOptions);
