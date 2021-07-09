const chalk = require("chalk");
const pkg = require("../package.json");
const assert = require("assert");
const inspect = require("util").inspect;

module.exports= (eleventyConfig) => {
  // modified from @pdehaan’s original:
  // https://github.com/11ty/eleventy/issues/278#issuecomment-873367464

  const slugFn = eleventyConfig.getFilter("slug");
  const slugifyFn = eleventyConfig.getFilter("slugify");

  let errors = new Set();

  eleventyConfig.on("eleventy.before", function() {
    errors = new Set();
  });

  eleventyConfig.on("eleventy.after", function() {
    if(!errors.size) {

    } else {
      let sep = "-----------------------------------------------";
      console.error(sep);
      console.error(chalk.blue(`[${pkg.name}] `) + chalk.yellow("`slug` to `slugify` filter mismatches found.") + " If this site has been published publicly, continue to use the `slug` filter for these templates or your public facing URLs will change!");
      for(let error of errors) {
        console.error(`\n${error}`);
      }
      console.error(sep);
    }
  });

  // replace the default `slug` filter
  eleventyConfig.addFilter("slug", function (str="") {
    const slugValue = slugFn(str);

    try {
      assert.strictEqual(slugValue, slugifyFn(str));
    } catch(e) {
      errors.add(`${inspect(str)}\n${e.message}`);
    } finally {
      return slugValue;
    }
  });
};