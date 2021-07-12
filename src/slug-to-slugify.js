const chalk = require("chalk");
const pkg = require("../package.json");
const assert = require("assert");
const inspect = require("util").inspect;

module.exports= (eleventyConfig) => {
  // modified from @pdehaan’s original:
  // https://github.com/11ty/eleventy/issues/278#issuecomment-873367464

  const slugFn = eleventyConfig.getFilter("slug");
  const slugifyFn = eleventyConfig.getFilter("slugify");

  let warnings = new Set();

  eleventyConfig.on("eleventy.before", function() {
    warnings = new Set();
  });

  eleventyConfig.on("eleventy.after", function() {
    if(!warnings.size) {
      console.warn(chalk.blue(`[${pkg.name}]`), chalk.green("PASSED"), "`slug` to `slugify` filter");
    } else {
      console.warn(chalk.blue(`[${pkg.name}]`), chalk.blue("NOTICE"), "`slug` to `slugify` filter mismatches found.", "No action is strictly required here, but if this site has been published publicly make sure that you continue to use the `slug` filter for these templates or your public facing URLs will change/break!");
      for(let warn of warnings) {
        console.warn(`\n${warn}`);
      }
    }
  });

  // replace the default `slug` filter
  eleventyConfig.addFilter("slug", function (str="") {
    const slugValue = slugFn(str);
    try {
      assert.strictEqual(slugValue, slugifyFn(str));
    } catch(e) {
      warnings.add(`${inspect(str)}\n${e.message}`);
    } finally {
      return slugValue;
    }
  });
};