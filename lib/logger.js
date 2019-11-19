const chalk = require('chalk');

class Logger {
  error (msg) {
    console.error(chalk.red(msg));
  }

  info (msg) {
    console.log(chalk.green(msg));
  }
}

module.exports = Logger;
