const chalk = require("chalk");
const path = require("path");
const fs = require("fs");

module.exports = function(eleventyConfig) {
  eleventyConfig.on("eleventy.after", function({ inputDir }) {
    let gitignorePath = path.join(inputDir, ".gitignore");
    let eleventyignorePath = path.join(inputDir, ".eleventyignore");
    let isNotEmpty = fs.readFileSync(gitignorePath, "utf8").trim().length > 0;
    if(inputDir !== "." && fs.existsSync(gitignorePath) && isNotEmpty) {
      console.warn(chalk.blue("[11ty/eleventy-upgrade-help] ") + chalk.yellow("Only root .gitignore files are supported.") + ` The file at ${gitignorePath} will not be used by Eleventy. Move the entries into your project root .gitignore or use ${eleventyignorePath} instead.`);
    }
  })
};