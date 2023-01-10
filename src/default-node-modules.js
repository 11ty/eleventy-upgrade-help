const chalk = require("chalk");
const fastglob = require("fast-glob");
const pkg = require("../package.json");

module.exports = function(eleventyConfig) {
	let options = {
		markDirectories: true,
		onlyDirectories: true,
	};

	let str = `Eleventy has a new default ignore pattern of \`**/node_modules/**\` (previously: \`node_modules/**\`). Read more, including how to revert this behavior: https://www.11ty.dev/docs/ignores/#node_modules.`;

	let nestedNodeModules = fastglob.sync("./**/node_modules", options).filter(entry => {
		return !entry.startsWith("node_modules/");
	});
	let hasNestedNodeModules = nestedNodeModules.length > 0;
	if(hasNestedNodeModules) {
		console.log(chalk.yellow(`[${pkg.name}]`), `${chalk.yellow("WARNING")} ${str} This new default affects your project, as you do have at least one node_modules folder not in the project root (which will be ignored in 2.0+): "${nestedNodeModules}"`);
	} else {
		console.log(chalk.green(`[${pkg.name}]`), `${chalk.green("PASSED")} ${str} This does not appear to affect your project, as you have no nested node_modules folders!`);
	}
};