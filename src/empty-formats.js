const chalk = require("kleur");
const minimist = require("minimist");

const argv = minimist(process.argv.slice(2), {
	string: ["formats"]
});

module.exports = function(eleventyConfig) {
	if(argv.formats || argv.formats === undefined) {
		console.log(chalk.green(`[11ty/eleventy-upgrade-help] PASSED`), `You aren’t using \`--formats=\` or  \`--formats=''\` but if you were you should know that these are now empty template format sets. In previous versions, they were aliased to "*". Read more: https://github.com/11ty/eleventy/issues/3255`);
	} else if(argv.formats === "" || argv.formats === null) {
		console.log(chalk.red(`[11ty/eleventy-upgrade-help] ERROR`), `In Eleventy 3.0 \`--formats=""\` and \`formats=\` are empty template format sets. Previous versions aliased these to "*". Use \`--formats=*\` if you want to keep using that behavior in 3.0. Read more: https://github.com/11ty/eleventy/issues/3255`);
	}
};