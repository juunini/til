/* eslint-disable no-underscore-dangle */
import versionAPI from 'pages/api/version';
import packageJson from 'package.json';
import { createAPIMocks } from '__tests__/jest.setup';

describe('version api', () => {
  const { req, res } = createAPIMocks({ method: 'GET' });

  it('returns version in package.json file', () => {
    versionAPI(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData().version).toBe(packageJson.version);
  });
});
