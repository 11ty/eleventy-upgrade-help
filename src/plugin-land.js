const chalk = require("kleur");
const fastglob = require("fast-glob");

module.exports = function(eleventyConfig) {
	let installedPlugins = {};
	for(let { key, extension, aliasKey } of eleventyConfig.extensionMap) {
		installedPlugins[key] = true;
	}

	let allRemovedKeys = "pug,ejs,haml,mustache,handlebars".split(",");
	let notFound = [];

	for(let removedKey of allRemovedKeys) {
		let foundFiles = fastglob.sync(`${eleventyConfig.directories.input}**/*.${removedKey}`);
		if(foundFiles.length > 0) {
			if( !installedPlugins[removedKey]) {
				console.log(chalk.red(`[11ty/eleventy-upgrade-help] ERROR`), `Found ${foundFiles.length} ${removedKey} file${foundFiles.length !== 1 ? "s" : ""} in your project but the ${removedKey} plugin was moved from core to an officially supported plugin. You will need to add the plugin for ${removedKey}, available here: https://github.com/11ty/eleventy-plugin-template-languages and you can learn more about this here: https://github.com/11ty/eleventy/issues/3124`);
			} else {
				console.log(chalk.green(`[11ty/eleventy-upgrade-help] PASSED`), `You have installed the ${removedKey} plugin to handle the ${foundFiles.length} ${removedKey} file${foundFiles.length !== 1 ? "s" : ""} in your project. Learn more: https://github.com/11ty/eleventy/issues/3124`);
			}
		} else {
			notFound.push(removedKey);
		}
	}

	if(notFound.length > 0) {
		console.log(chalk.green(`[11ty/eleventy-upgrade-help] PASSED`), `No {${notFound.join(",")}} templates were found in this project. If you were, you would have needed to install plugins for these: https://github.com/11ty/eleventy-plugin-template-languages. Learn more: https://github.com/11ty/eleventy/issues/3124`);
	}
};