const chalk = require("chalk");
const pkg = require("../package.json");

module.exports = function(eleventyConfig) {
	// This throws an unknown command line flag error in Eleventy core, so if we’ve made it here—we’ve passed the test.
  console.log(chalk.green(`[${pkg.name}]`), chalk.green("PASSED"), `You are not using the \`--passthroughall\` command. Read more at https://www.11ty.dev/docs/copy/#passthrough-everything`);
};