// Load the test environment before anything else
import * as process from 'process';
process.env.NODE_ENV = 'TEST';
process.env.TYPEORM_OVERRIDES = '../ormconfig.test.js';

import { setConfig } from '../src/config';
setConfig({
  steem_net: undefined!,
  steem_settings: undefined!,
  steem_connect: undefined!
});

describe('Lock', () => {
  require('./lock');
});
