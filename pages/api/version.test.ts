/* eslint-disable no-underscore-dangle */
import { createMocks } from 'node-mocks-http';

import versionAPI from 'pages/api/version';
import packageJson from 'package.json';
import { MockAPI } from 'jest.setup';

describe('version api', () => {
  const { req, res }: MockAPI = createMocks({ method: 'GET' });

  it('returns version in package.json file', () => {
    versionAPI(req, res);

    const responseBody = JSON.parse(res._getData());

    expect(responseBody.version).toBe(packageJson.version);
  });
});
