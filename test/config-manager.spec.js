const chai = require('chai');
const { expect } = chai;

const ConfigManager = require('../lib/config-manager');

describe('ConfigManager', () => {
  let cm;

  beforeEach(() => {
    cm = new ConfigManager();
  });

  it('throws error when MY_CLI_KEY environment variable does not exist', () => {
    expect(cm.getConfig).to.throw(Error, 'MY_CLI_KEY environment variable does not exist or not set.');
  });

  it('throws error when MY_CLI_KEY environment variable is not set', () => {
    process.env.MY_CLI_KEY = '';
    expect(cm.getConfig).to.throw(Error, 'MY_CLI_KEY environment variable does not exist or not set.');
  });

  it('returns the configuration', () => {
    process.env.MY_CLI_KEY = 'foo';
    expect(cm.getConfig()).to.deep.eq({ key: 'foo' });
  });

  afterEach(() => {
    delete process.env.MY_CLI_KEY;
  });
});
