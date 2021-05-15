/* eslint-disable no-underscore-dangle */
import healthAPI from 'pages/api/health';
import { createAPIMocks } from '__tests__/jest.setup';

describe('health api', () => {
  const { req, res } = createAPIMocks({ method: 'GET' });

  it('respond status 200 and "OK" message', () => {
    healthAPI(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData().message).toBe('OK');
  });
});
