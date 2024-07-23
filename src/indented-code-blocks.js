const chalk = require("kleur");
const pkg = require("../package.json");

module.exports = function(eleventyConfig) {
  console.log(chalk.blue(`[${pkg.name}]`), `${chalk.blue("NOTICE")} Markdown’s indented code blocks have been disabled by default in 2.0. Unfortunately, this plugin does *NOT* currently test whether this change affects your content. You can re-enable this feature using \`eleventyConfig.amendLibrary("md", mdLib => mdLib.enable("code"))\`. Read more: https://www.11ty.dev/docs/languages/markdown/#indented-code-blocks`);
};