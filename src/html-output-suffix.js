const chalk = require("kleur");

// https://v2-0-1.11ty.dev/docs/languages/html/#using-the-same-input-and-output-directories
module.exports = function(eleventyConfig) {
	eleventyConfig.on("eleventy.config", (templateConfig) => {
		if(!("htmlOutputSuffix" in templateConfig.config)) {
			console.log(chalk.green(`[11ty/eleventy-upgrade-help] PASSED`), `The \`htmlOutputSuffix\` feature was removed. It doesn’t look like you were using it! Learn more: https://github.com/11ty/eleventy/issues/3327`);
		} else {
			console.log(chalk.red(`[11ty/eleventy-upgrade-help]`), chalk.red(`ERROR`), `The \`htmlOutputSuffix\` feature was removed. Learn more: https://github.com/11ty/eleventy/issues/3327`);
		}
	})

	// Input and output are the same
	if(eleventyConfig.directories.input === eleventyConfig.directories.output) {
		console.log(chalk.blue(`[11ty/eleventy-upgrade-help] NOTICE`), `Your input and output folders are identical so please take note that Eleventy will now throw an error if any of your output files attempt to overwrite your input files. Learn more: https://github.com/11ty/eleventy/issues/3327`);
	}
};