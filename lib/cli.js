const pkg = require('../package.json');
const program = require('commander');

class Cli {
  constructor (logger) {
    this.logger = logger;
  }

  $showHelp (processArgs) {
    if (!processArgs.slice(2).length) {
      program.outputHelp(help => {
        throw Error(help);
      });

      process.exit(1);
    }
  }

  run (processArgs) {
    this.$showHelp(processArgs);

    program.version(pkg.version)
      .command('configure')
      .description('configure app parameters')
      .requiredOption('-k, --key <key>', 'API key')
      .requiredOption('-e, --env <env>', 'Environment [test|int|prod]')
      .action((setting) => {
        process.env.MY_CLI_KEY = setting.key;

        const env = setting.env.toLowerCase();

        if (!['test', 'int', 'prod'].includes(env)) {
          throw Error('Invalid environment.');
        }

        process.env.MY_CLI_ENV = setting.env;
      });

    program.parse(processArgs);
  }
}

module.exports = Cli;
