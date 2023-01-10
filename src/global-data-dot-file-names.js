const chalk = require("chalk");
const fastglob = require("fast-glob");
const path = require("path");
const pkg = require("../package.json");

function getFilePathWithoutExtensions(file, extensions = []) {
	for(let ext of extensions) {
		if(file.endsWith("." + ext)) {
			return file.slice(0, -1 * ("." + ext).length);
		}
	}
	return file;
}

module.exports = function(eleventyConfig) {
	let description = `Global data files with one or more dots in the file name are stored differently in the data cascade in Eleventy 2.0. For example, \`a.b.json\` stores as \`'a.b': value\` instead of \`a: { b: value }\`.`;
	let readMore = "Read more: https://github.com/11ty/eleventy/pull/1912";

	eleventyConfig.on("eleventy.before", ({dir}) => {
		let dataExtensions = Array.from(eleventyConfig.dataExtensions.keys());
		dataExtensions.push("js");
		dataExtensions.push("cjs");
		dataExtensions.push("json");

		let errorDataFilePaths = [];

		let glob = path.join(dir.data, `**.{${dataExtensions.join(",")}}`);
		let files = fastglob.sync(glob);
		for(let file of files) {
			let fileSplit = file.split("/");
			let split = getFilePathWithoutExtensions(fileSplit[fileSplit.length - 1], dataExtensions).split(".");
			if(split.length > 1) {
				errorDataFilePaths.push(file);
			}
		}

		if(errorDataFilePaths.length > 0) {
			console.log(chalk.yellow(`[${pkg.name}]`), chalk.yellow("WARNING"), `${description} This project has affected data files: ${chalk.yellow(errorDataFilePaths.join(", "))} ${readMore}`);
		} else {
			console.log(chalk.green(`[${pkg.name}]`), chalk.green("PASSED"), `${description} This project has no affected data file paths. ${readMore}`);

		}
	});
};