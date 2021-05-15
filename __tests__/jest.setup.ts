import {
  MockRequest,
  MockResponse,
  createMocks,
  RequestOptions,
  ResponseOptions,
} from 'node-mocks-http';

export type MockAPI = {
  req: MockRequest<any>;
  res: MockResponse<any>;
};

export const createAPIMocks = (
  reqOptions?: RequestOptions,
  resOptions?: ResponseOptions,
): MockAPI => createMocks(reqOptions, resOptions);
