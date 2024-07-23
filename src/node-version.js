const chalk = require("kleur");
const pkg = require("../package.json");

module.exports = function(eleventyConfig) {
	// This throws an error in Eleventy core, so if we’ve made it here—we’ve passed the test.
  console.log(chalk.green(`[${pkg.name}]`), chalk.green("PASSED"), `This project is using Node 18 or newer!`);
};