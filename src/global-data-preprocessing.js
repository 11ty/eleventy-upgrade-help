const chalk = require("kleur");
const pkg = require("../package.json");

module.exports = function(eleventyConfig) {
  let readMore = `Read more at https://www.11ty.dev/docs/data-preprocessing/`;
  if(eleventyConfig.dataTemplateEngine) {
    console.warn(chalk.yellow(`[${pkg.name}]`), chalk.yellow("WARNING"), `This project is using the \`dataTemplateEngine\` configuration property (value: "${eleventyConfig.dataTemplateEngine}") to preprocess JSON global data files with a template syntax. This feature was deprecated in 1.0 and removed in 2.0. Please use JavaScript global data files instead! ${readMore}`);
  } else {
    console.log(chalk.green(`[${pkg.name}]`), chalk.green("PASSED"), `This project is not using the previously deprecated and disabled by default \`dataTemplateEngine\` configuration property. ${readMore}`);
  }
};