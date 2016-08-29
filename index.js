'use strict';
const chalk = require('chalk');

module.exports = (data, currentCP) => {
  const { value, title, avg, min, max } = data;
  const nextCP = Math.round(currentCP * avg);
  const maxCP = Math.round(currentCP * max);
  const minCP = Math.round(currentCP * min);
  console.log(`
    ${chalk.underline(title)} will evolve from ${chalk.dim(currentCP)} to ~${chalk.bold(nextCP)} \n
    ${chalk.dim(`Maximum CP: ${chalk.red(maxCP)} \n
    Minimum CP: ${chalk.green(minCP)}`)}
  `);
};
