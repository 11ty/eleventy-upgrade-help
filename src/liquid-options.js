const chalk = require("chalk");

module.exports = function(eleventyConfig) {
  eleventyConfig.on("eleventy.after", function() {
    if("strict_filters" in eleventyConfig.liquidOptions) {
      console.warn(chalk.blue("[11ty/eleventy-upgrade-help] ") + "The liquidjs package renamed the `strict_filters` option to `strictFilters`. Please rename in `eleventyConfig.setLiquidOptions` accordingly.");
    } else if(!("strictFilters" in eleventyConfig.liquidOptions)) {
      // no strict_filters or strictFilters
      console.warn(chalk.blue("[11ty/eleventy-upgrade-help] ") + "The liquidjs `strictFilters` option default changed from false to true. Revert with `eleventyConfig.setLiquidOptions({ strictFilters: false })`.");
    }
  })
};