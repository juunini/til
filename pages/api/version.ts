import { NextApiRequest, NextApiResponse } from 'next';

import packageJson from 'package.json';

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ version: packageJson.version });
};
