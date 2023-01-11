const chalk = require("chalk");
const pkg = require("../package.json");

module.exports = function(eleventyConfig) {
	let before = `\`eleventyConfig.ignores\` are no longer re-used for the file watcher during --watch and --serve. If you’d like files to be ignored by the file watcher (to avoid triggering new builds), use the new dedicated \`eleventyConfig.watchIgnores\` API instead.`;
	let readMore = "Read more: https://www.11ty.dev/docs/watch-serve/#ignore-watching-files";

	if(eleventyConfig.ignores.size > 2) {
		console.log(chalk.blue(`[${pkg.name}]`), chalk.blue("NOTICE"), `${before} ${readMore}`);
	} else {
		console.log(chalk.green(`[${pkg.name}]`), chalk.green("PASSED"), `${before} This project doesn’t seem to be making use of the feature. ${readMore}`);
	}
};