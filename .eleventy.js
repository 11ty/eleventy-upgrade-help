const pkg = require("./package.json");
const chalk = require("chalk");
const SlugToSlugify = require("./src/slug-to-slugify");
const DataDeepMerge = require("./src/data-deep-merge");
const LiquidOptions = require("./src/liquid-options");
const InputDirGitignore = require("./src/inputdir-gitignore");

module.exports = function(eleventyConfig, options = {
  slugToSlugify: true,
  dataDeepMerge: true,
  liquidOptions: true,
  inputDirGitignore: true,
}) {
  try {
    eleventyConfig.versionCheck(pkg["11ty"].compatibility);
  } catch(e) {
    console.error( `${chalk.blue(`[${pkg.name}]`)} ${chalk.red(`Plugin Compatibility Error`)} ${e.message}` );
    return;
  }

  // Check how safe it is to change existing usage of the `slug` filter to `slugify`
  if(options.slugToSlugify) {
    eleventyConfig.addPlugin(SlugToSlugify);
  }

  // Warn about dataDeepMerge default change
  if(options.dataDeepMerge) {
    eleventyConfig.addPlugin(DataDeepMerge);
  }

  // Liquid options were renamed
  if(options.liquidOptions) {
    eleventyConfig.addPlugin(LiquidOptions);
  }

  // Input dir .gitignore support was removed
  if(options.inputDirGitignore) {
    eleventyConfig.addPlugin(InputDirGitignore);
  }
};