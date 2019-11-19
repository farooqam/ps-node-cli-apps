#! /usr/bin/env node

const ConfigManager = require('../lib/config-manager');
const Logger = require('../lib/logger');
const Cli = require('../lib/cli');

const logger = new Logger();
const cli = new Cli(logger);
const cm = new ConfigManager();

try {
  cli.run(process.argv);
  const config = cm.getConfig();
  logger.info(JSON.stringify(config));
} catch (err) {
  logger.error(err);
}
