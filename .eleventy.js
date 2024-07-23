const pkg = require("./package.json");
const chalk = require("kleur");

module.exports = function(eleventyConfig) {
  try {
    eleventyConfig.versionCheck(pkg["11ty"].compatibility);
  } catch(e) {
    console.error( `${chalk.blue(`[${pkg.name}]`)} ${chalk.red(`Plugin Compatibility Error`)} ${e.message}` );
    return;
  }

  console.log(chalk.blue(`[${pkg.name}] ---`));
  console.log(chalk.blue(`[${pkg.name}]`), `This plugin will help you migrate from 2.0 to 3.0.`);
  console.log(chalk.blue(`[${pkg.name}]`), `If you are migrating from 0.x or 1.x, downgrade to a previous version of this plugin!`);
  console.log(chalk.blue(`[${pkg.name}] ---`));

  // Full list of issues: https://github.com/11ty/eleventy/issues?q=milestone%3A%22Eleventy+3.0.0%22+is%3Aclosed+label%3Abreaking-change
  eleventyConfig.addPlugin(require("./src/node-version.js"));
  eleventyConfig.addPlugin(require("./src/explicit-config-file.js"));
  eleventyConfig.addPlugin(require("./src/html-output-suffix.js"));
  eleventyConfig.addPlugin(require("./src/alias-template-formats.js"));
  eleventyConfig.addPlugin(require("./src/empty-formats.js"));
  eleventyConfig.addPlugin(require("./src/plugin-land.js"));
  eleventyConfig.addPlugin(require("./src/compile-options-permalink.js"));
  eleventyConfig.addPlugin(require("./src/js-yaml.js"));

  eleventyConfig.on("eleventy.after", () => {
    console.log(chalk.blue(`[${pkg.name}] This plugin is intended for temporary use: once you’re satisfied please remove this plugin from your project!`));
  })
};