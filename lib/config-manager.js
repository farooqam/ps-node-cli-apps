class ConfigManager {
  getConfig () {
    const key = process.env.MY_CLI_KEY;

    if (!key) {
      throw Error('MY_CLI_KEY environment variable does not exist or not set.');
    }

    const env = process.env.MY_CLI_ENV;

    if (!env) {
      throw Error('MY_CLI_ENV environment variable does not exist or not set.');
    }

    return {
      key,
      env
    };
  }
}

module.exports = ConfigManager;
