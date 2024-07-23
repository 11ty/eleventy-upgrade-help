const chalk = require("kleur");
const pkg = require("../package.json");

module.exports = function(eleventyConfig) {
  console.log(chalk.blue(`[${pkg.name}]`), `${chalk.blue("NOTICE")} The \`liquidjs\` dependency was updated from 9.x to 10.x. This should not require action, but you can read the full release notes: https://github.com/harttle/liquidjs/releases/tag/v10.0.0`);
};