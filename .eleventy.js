const pkg = require("./package.json");
const chalk = require("chalk");


module.exports = function(eleventyConfig) {
  try {
    eleventyConfig.versionCheck(pkg["11ty"].compatibility);
  } catch(e) {
    console.error( `${chalk.blue(`[${pkg.name}]`)} ${chalk.red(`Plugin Compatibility Error`)} ${e.message}` );
    return;
  }

  console.log(chalk.blue(`[${pkg.name}] ---`));
  console.log(chalk.blue(`[${pkg.name}]`), `This plugin will help you migrate from 1.0 to 2.0.`);
  console.log(chalk.blue(`[${pkg.name}]`), `If you are migrating from 0.x, downgrade to the 1.0 version of this plugin!`);
  console.log(chalk.blue(`[${pkg.name}] ---`));

  // Full list of issues: https://github.com/11ty/eleventy/issues?q=milestone%3A%22Eleventy+2.0.0%22+is%3Aclosed+label%3Abreaking-change
  eleventyConfig.addPlugin(require("./src/emulated-passthrough-behavior"));
  eleventyConfig.addPlugin(require("./src/global-data-preprocessing"));
  eleventyConfig.addPlugin(require("./src/passthrough-all"));
  eleventyConfig.addPlugin(require("./src/liquidjs"));
  eleventyConfig.addPlugin(require("./src/indented-code-blocks"));
  eleventyConfig.addPlugin(require("./src/default-node-modules"));
  eleventyConfig.addPlugin(require("./src/renderdata"));
  eleventyConfig.addPlugin(require("./src/node-version"));
  eleventyConfig.addPlugin(require("./src/render-template-no-arg"));
  eleventyConfig.addPlugin(require("./src/directory-date-slugs"));
  eleventyConfig.addPlugin(require("./src/global-data-dot-file-names"));
  eleventyConfig.addPlugin(require("./src/watch-ignores"));
  eleventyConfig.addPlugin(require("./src/browser-sync"));

  eleventyConfig.on("eleventy.after", () => {
    console.log(chalk.blue(`[${pkg.name}] This plugin is intended for temporary use: once you’re satisfied please remove this plugin from your project!`));
  })
};