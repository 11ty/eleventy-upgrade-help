const chalk = require("chalk");
const pkg = require("../package.json");

module.exports = function(eleventyConfig) {
  let readMore = `Read more at https://www.11ty.dev/docs/copy/#passthrough-during-serve`;

  if(eleventyConfig.serverPassthroughCopyBehavior === "passthrough") {
    console.warn(chalk.blue(`[${pkg.name}]`), chalk.blue("NOTICE"), `When using the new default Eleventy Dev Server, passthrough copy files are _emulated_ (served directly from the input folder) and not hard-copied to your output folder. This avoids unnecessary builds when passthrough copy files are modified. This behavior **only** happens during --serve and does not apply to standard build or during --watch. You can revert to copying these files using \`eleventyConfig.setServerPassthroughCopyBehavior("copy")\`. ${readMore}`);
  } else {
    console.log(chalk.green(`[${pkg.name}]`), chalk.green("PASSED"), `This project has already reverted to the previous behavior of passthrough copy files. ${readMore}`);
  }
};