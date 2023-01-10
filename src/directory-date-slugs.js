const chalk = require("chalk");
const pkg = require("../package.json");

module.exports = function(eleventyConfig) {
	let description = `When calculating \`page.fileSlug\` dates are now stripped from parent folder names of index.* files.`;
	let readMore = "Read more: https://github.com/11ty/eleventy/pull/2111";

	eleventyConfig.dataFilterSelectors.add("page");

	eleventyConfig.on("eleventy.after", ({results}) => {
		let affectedInputPaths = [];
		for(let result of results) {
			let split = result.inputPath.split("/");
			let filenameSplit = split[split.length - 1].split(".");
			// only applies to parent folders of index.* files
			if(filenameSplit[0] !== "index") {
				continue;
			}

			let slugDirs = split.slice(0, -1).filter(dir => dir.match(/\d{4}-\d{2}-\d{2}-.*/));
			if(slugDirs.length > 0) {
				affectedInputPaths.push(result.inputPath);
			}
		}
		if(affectedInputPaths.length > 0) {
			console.log(chalk.yellow(`[${pkg.name}]`), chalk.yellow("WARNING"), `${description} The following paths are affected: ${chalk.yellow(affectedInputPaths.join(", "))}. You will need to review usage of \`page.fileSlug\` in your project, see https://www.11ty.dev/docs/data-eleventy-supplied/#page-variable. ${readMore}`);
		} else {
			console.log(chalk.green(`[${pkg.name}]`), chalk.green("PASSED"), `${description} This project has no file/directory paths that are affected, no worries here. ${readMore}`);
		}
	});
};