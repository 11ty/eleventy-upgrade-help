const chalk = require("kleur");
const pkg = require("../package.json");

// https://v2-0-1.11ty.dev/docs/languages/html/#using-the-same-input-and-output-directories
module.exports = function(eleventyConfig) {
	eleventyConfig.on("eleventy.config", ({ config }) => {
		if(!("htmlOutputSuffix" in config)) {
			console.log(chalk.blue(`[${pkg.name}]`), chalk.blue(`NOTICE`), `The \`htmlOutputSuffix\` feature was removed. It doesn’t look like you were using it!`);
		} else {
			console.log(chalk.red(`[${pkg.name}]`), chalk.red(`ERROR`), `The \`htmlOutputSuffix\` feature was removed. Learn more: https://github.com/11ty/eleventy/issues/3327`);
		}
	})

	// Input and output are the same
	if(eleventyConfig.directories.input === eleventyConfig.directories.output) {
		console.log(chalk.yellow(`[${pkg.name}] WARNING`), `Your input and output folders are identical so please take note that Eleventy 3.0 will throw an error if any of your output files attempt to overwrite your input files. Learn more: https://github.com/11ty/eleventy/issues/3327`);
	}
};