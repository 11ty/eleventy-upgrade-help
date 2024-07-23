const chalk = require("kleur");
const pkg = require("../package.json");

module.exports = function(eleventyConfig) {
	let readMore = `Read more about \`renderData\`: https://github.com/11ty/eleventy/issues/2356`;

	eleventyConfig.dataFilterSelectors.add("renderData");

	eleventyConfig.on("eleventy.after", ({results}) => {
		let count = 0;
		for(let page of results) {
			if(page.data && ("renderData" in page.data) && Object.keys(page.data.renderData || {}).length > 0) {
				count++;
				console.log(chalk.yellow(`[${pkg.name}]`), `${chalk.yellow("WARNING")} This project is using the removed renderData feature on: ${chalk.yellow(page.inputPath)}`);
			}
		}
		if(count === 0) {
			console.log(chalk.green(`[${pkg.name}]`), `${chalk.green("PASSED")} This project is not using the removed \`renderData\` feature. ${readMore}`);
		} else {
			console.log(chalk.yellow(`[${pkg.name}]`), `${chalk.yellow("WARNING")} ${readMore}`);
		}
	});
};