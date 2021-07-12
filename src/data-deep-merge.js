const pkg = require("../package.json");
const chalk = require("chalk");

module.exports = function(eleventyConfig) {
  eleventyConfig.on("eleventy.after", function() {
    if(!eleventyConfig.isDataDeepMergeModified()) {
      console.warn(chalk.blue(`[${pkg.name}]`), chalk.yellow("WARNING"), "eleventyConfig.setDataDeepMerge(true) is the new 1.0 default. Revert with eleventyConfig.setDataDeepMerge(false);");
    }
  })
};