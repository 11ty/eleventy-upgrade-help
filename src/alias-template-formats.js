const chalk = require("kleur");

module.exports = function(eleventyConfig) {
	eleventyConfig.on("eleventy.config", templateConfig => {
		let templateFormatsActive = templateConfig.templateFormats.getTemplateFormats();

		if(eleventyConfig.extensionMap.size === 0) {
			console.log(chalk.green(`[11ty/eleventy-upgrade-help] PASSED`), `No aliases were added via \`eleventyConfig.addExtension()\`. If you had added an alias, it would need to be also added to your active template formats. Learn more about template formats: https://www.11ty.dev/docs/config/#template-formats or about this change: https://github.com/11ty/eleventy/issues/3302`);
		} else {
			for(let { key, extension, aliasKey } of eleventyConfig.extensionMap) {
				if(!aliasKey) {
					continue;
				}
				if(!templateFormatsActive.includes(extension)) {
					console.log(chalk.red(`[11ty/eleventy-upgrade-help] ERROR`), `Aliases added via \`eleventyConfig.addExtension()\` must be added to your active template formats, via \`--formats=${extension}\` on the command line, the \`templateFormats: "${extension}"\` configuration object property, \`eleventyConfig.setTemplateFormats("${extension}")\`, or \`eleventyConfig.addTemplateFormats("${extension}")\` (additive). This *might* be what you want if you added a plugin but don’t want to currently process ${extension} files in Eleventy. Learn more about template formats: https://www.11ty.dev/docs/config/#template-formats or about this change: https://github.com/11ty/eleventy/issues/3302`);
				} else {
					console.log(chalk.green(`[11ty/eleventy-upgrade-help] PASSED`), `\`${extension}\` is an active template format, referenced as an alias via \`eleventyConfig.addExtension()\`. Learn more about template formats: https://www.11ty.dev/docs/config/#template-formats or about this change: https://github.com/11ty/eleventy/issues/3302`);
				}
		}

		}
	});

};