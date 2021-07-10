const chalk = require("chalk");

module.exports = function(eleventyConfig) {
  eleventyConfig.on("eleventy.after", function() {
    if(!eleventyConfig.isDataDeepMergeModified()) {
      console.warn(chalk.blue("[11ty/eleventy-upgrade-help] ") + "eleventyConfig.setDataDeepMerge(true) is the new 1.0 default. Revert with eleventyConfig.setDataDeepMerge(false);");
    }
  })
};