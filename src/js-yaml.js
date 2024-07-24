const chalk = require("kleur");

module.exports = function(eleventyConfig) {
	console.log(chalk.blue(`[11ty/eleventy-upgrade-help] NOTICE`), `The \`js-yaml\` dependency was upgraded from v3 to v4 to improve error messaging when folks use tabs in their front matter. GitHub issue: https://github.com/11ty/eleventy/issues/2126 Most folks will be unaffected by this change but you can read the \`js-yaml\` migration guide: https://github.com/nodeca/js-yaml/blob/master/migrate_v3_to_v4.md`);
};