const chalk = require("kleur");

module.exports = function(eleventyConfig) {
	console.log(chalk.green(`[11ty/eleventy-upgrade-help] PASSED`), `The Edge plugin was removed from Eleventy core in 3.0. Any use will throw an error, so if you don’t see an error you’re not using it. Learn more: https://www.11ty.dev/docs/plugins/edge/`);
};