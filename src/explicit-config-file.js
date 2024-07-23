const fs = require("node:fs");
const chalk = require("kleur");
const pkg = require("../package.json");

const minimist = require("minimist");

const argv = minimist(process.argv.slice(2), {
	string: ["config"]
});

module.exports = function(eleventyConfig) {
	let type = chalk.blue("NOTICE");

	if(argv.config && !fs.existsSync(argv.config)) {
		// We’ll never get here because the configuration file has to work to run the upgrade plugin.
		type = chalk.red("ERROR");
	}

	console.log(chalk.blue(`[${pkg.name}]`), type, `Eleventy will fail with an error when you point \`--config\` to a configuration file that does not exist. Previous versions ran as-is (without application configuration). Read more: https://github.com/11ty/eleventy/issues/3373`);
};