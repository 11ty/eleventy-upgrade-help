const chalk = require("kleur");

module.exports = function(eleventyConfig) {
	for(let { key, compileOptions } of eleventyConfig.extensionMap) {
		if(compileOptions && compileOptions.permalink) {
			console.log(chalk.green(`[11ty/eleventy-upgrade-help] PASSED`), `The ${key} Custom Template Language has an explicit option that decides how permalinks are rendered in ${key} files. If you didn’t specify this, it would be important to know that the \`compileOptions.permalink\` default was changed from \`true\` to "raw". Docs: https://www.11ty.dev/docs/languages/custom/#compileoptions.permalink-to-override-permalink-compilation GitHub issue: https://github.com/11ty/eleventy/issues/2780`);
		} else {
			console.log(chalk.yellow(`[11ty/eleventy-upgrade-help] WARNING`), `You will likely want to add a \`compileOptions.permalink\` option for the ${key} Custom Template Language. If you do not explicitly specify this behavior, we will no longer render permalink strings in ${key} syntax. The default for this option changed from \`true\` to "raw". Docs: https://www.11ty.dev/docs/languages/custom/#compileoptions.permalink-to-override-permalink-compilation GitHub issue: https://github.com/11ty/eleventy/issues/2780`);
		}
	}
};