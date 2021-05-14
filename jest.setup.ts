import { MockRequest, MockResponse } from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next';

export type MockAPI = {
  req: MockRequest<NextApiRequest>;
  res: MockResponse<NextApiResponse>;
};
