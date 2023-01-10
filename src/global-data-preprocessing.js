const chalk = require("chalk");
const pkg = require("../package.json");

module.exports = function(eleventyConfig) {
  if(eleventyConfig.dataTemplateEngine) {
    console.warn(chalk.yellow(`[${pkg.name}]`), chalk.yellow("WARNING"), `You are using the \`dataTemplateEngine\` configuration property (value: "${eleventyConfig.dataTemplateEngine}") to preprocess JSON global data files with a template syntax. This feature was deprecated in 1.0 and removed in 2.0. Please use JavaScript global data files instead! Read more at https://www.11ty.dev/docs/data-preprocessing/`);
  } else {
    console.log(chalk.green(`[${pkg.name}]`), chalk.green("PASSED"), "You are not using the `dataTemplateEngine` configuration property. https://www.11ty.dev/docs/data-preprocessing/");
  }
};