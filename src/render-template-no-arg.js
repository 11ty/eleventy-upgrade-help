const chalk = require("chalk");
const pkg = require("../package.json");

module.exports = function(eleventyConfig) {
	let readMore = `Read more: https://github.com/11ty/eleventy/issues/2310`;

	let renderishPlugins = eleventyConfig.plugins.filter(entry => {
		return "File" in entry.plugin && "String" in entry.plugin && "RenderManager" in entry.plugin;
	});

	if(renderishPlugins.length === 0) {
		console.log(chalk.green(`[${pkg.name}]`), chalk.green("PASSED"), `This project is not using the Render plugin. If it did, I’d remind you that the \`renderTemplate\` shortcode behavior changed slightly in 2.0. But you don’t need to worry about it here. ${readMore}`);
		return;
	}

	// Handle overrides to the renderTemplate tag name
	let tagName = renderishPlugins[0].options.tagName || "renderTemplate";
	if(tagName in eleventyConfig.javascriptFunctions || tagName in eleventyConfig.nunjucksTags || tagName in eleventyConfig.liquidTags) {
		console.log(chalk.blue(`[${pkg.name}]`), chalk.blue("NOTICE"), `This project is using the Render plugin and the \`${tagName}\` shortcode behavior changed slightly. In Eleventy 2.0 when you call \`${tagName}\` without passing in a syntax, it will use the parent template syntax (instead of plain text). Make sure you review any \`${tagName}\` usage. ${readMore}`);
	}
};