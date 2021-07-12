const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const pkg = require("../package.json");

module.exports = function(eleventyConfig) {
  eleventyConfig.on("eleventy.after", function({ inputDir }) {
    let gitignorePath = path.join(inputDir, ".gitignore");
    let eleventyignorePath = path.join(inputDir, ".eleventyignore");

    if(inputDir !== "." && fs.existsSync(gitignorePath) && fs.readFileSync(gitignorePath, "utf8").trim().length > 0) {
      console.warn(chalk.blue(`[${pkg.name}]`), chalk.yellow("Only root .gitignore files are supported.") + ` The file at ${gitignorePath} will not be used by Eleventy. Move the entries into your project root .gitignore or use ${eleventyignorePath} instead.`);
    } else {
      console.log(chalk.blue(`[${pkg.name}]`), chalk.green("PASSED"), "input directory .gitignore check")
    }
  })
};