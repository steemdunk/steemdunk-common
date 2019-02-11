// Load the test environment before anything else
import * as process from 'process';
process.env.NODE_ENV = 'TEST';
process.env.TYPEORM_OVERRIDES = '../ormconfig.test.js';

describe('Lock', () => {
  require('./lock');
});
