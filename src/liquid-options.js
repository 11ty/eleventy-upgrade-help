const pkg = require("../package.json");
const chalk = require("chalk");

module.exports = function(eleventyConfig) {
  eleventyConfig.on("eleventy.after", function() {
    let warnings = [];
    if("strict_filters" in eleventyConfig.liquidOptions) {
      warnings.push("The liquidjs package renamed the `strict_filters` option to `strictFilters`. Please rename in `eleventyConfig.setLiquidOptions` accordingly.");
    } else if(!("strictFilters" in eleventyConfig.liquidOptions)) {
      // no strict_filters or strictFilters
      warnings.push("The liquidjs `strictFilters` option default (in Eleventy) changed from false to true. Revert with `eleventyConfig.setLiquidOptions({ strictFilters: false })`.");
    }
    
    if(!("dynamicPartials" in eleventyConfig.liquidOptions)) {
      warnings.push("The liquidjs `dynamicPartials` option default changed from false to true. Functionally this means `include` statements require quotes now. Revert with `eleventyConfig.setLiquidOptions({ dynamicPartials: false })`.");
    }

    for(let warn of warnings) {
      console.warn(chalk.blue(`[${pkg.name}]`), chalk.yellow("WARNING"), warn);
    }
    if(!warnings.length) {
      console.warn(chalk.blue(`[${pkg.name}]`), chalk.green("PASSED"), "liquidjs Options");
    }
  })
};