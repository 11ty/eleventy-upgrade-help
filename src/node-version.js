const chalk = require("kleur");

module.exports = function(eleventyConfig) {
	// This throws an error in Eleventy core, so if we’ve made it here—we’ve passed the test.
  console.log(chalk.green(`[11ty/eleventy-upgrade-help]`), chalk.green("PASSED"), `You are using Node ${process.version}. Node 18 or newer is required.`);
};