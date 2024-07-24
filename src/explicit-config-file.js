const fs = require("node:fs");
const chalk = require("kleur");

const minimist = require("minimist");

const argv = minimist(process.argv.slice(2), {
	string: ["config"]
});

module.exports = function(eleventyConfig) {
	if(argv.config) {
		if(!fs.existsSync(argv.config)) {
			// We’ll never get here because the configuration file has to work to run the upgrade plugin.
			console.log(chalk.red(`[11ty/eleventy-upgrade-help] ERROR`), `Eleventy will fail with an error when you point \`--config\` to a configuration file that does not exist. Previous versions ran as-is (without application configuration). Read more: https://github.com/11ty/eleventy/issues/3373`);
		} else {
			console.log(chalk.green(`[11ty/eleventy-upgrade-help] PASSED`), `Eleventy will fail with an error when you point \`--config\` to a configuration file that does not exist. You are using \`--config\` but your configuration file _does_ exist—great! Read more: https://github.com/11ty/eleventy/issues/3373`);
		}
	} else {
		console.log(chalk.green(`[11ty/eleventy-upgrade-help] PASSED`), `Eleventy will fail with an error when you point \`--config\` to a configuration file that does not exist. You are not using \`--config\`—so don’t worry about it! Read more: https://github.com/11ty/eleventy/issues/3373`);
	}

};