const pkg = require("./package.json");
const chalk = require("chalk");
const SlugToSlugify = require("./src/slug-to-slugify");

module.exports = function(eleventyConfig, options = {
  slugToSlugify: true
}) {
  try {
    eleventyConfig.versionCheck(pkg["11ty"].compatibility);
  } catch(e) {
    console.error( `${chalk.blue(`[${pkg.name}]`)} ${chalk.red(`Plugin Compatibility Error`)} ${e.message}` );
    return;
  }

  // Use this if you want to check how safe it is to change existing usage of the `slug` filter to `slugify`
  if(options.slugToSlugify) {
    eleventyConfig.addPlugin(SlugToSlugify);
  }
};