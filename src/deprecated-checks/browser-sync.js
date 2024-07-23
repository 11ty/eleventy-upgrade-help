const chalk = require("kleur");
const pkg = require("../package.json");

module.exports = function(eleventyConfig) {
	let before = `Browsersync is no longer the default Development Server in Eleventy.`;
	let swap = `You can swap back to BrowserSync via an officially supported plugin: https://www.11ty.dev/docs/dev-server/#swap-back-to-browsersync But using the new Eleventy Dev Server is the recommended path moving forward.`;
	let after = `Learn more: https://www.11ty.dev/docs/dev-server/`;

	if(eleventyConfig._attemptedBrowserSyncUse) {
		console.log(chalk.yellow(`[${pkg.name}]`), chalk.yellow("WARNING"), `${before} This project seems to be using \`setBrowserSyncConfig\` which is a no-op in 2.0. ${swap} ${after}`);
	} else {
		console.log(chalk.green(`[${pkg.name}]`), chalk.green("PASSED"), `${before} This project doesn’t seem to be making use of any custom Browsersync options, so it’s unlikely to be affected! ${after}`);
	}
};