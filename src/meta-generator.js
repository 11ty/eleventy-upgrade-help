const chalk = require("kleur");

module.exports = async function(eleventyConfig) {
	const { default: matchHelper } = await import("posthtml-match-helper");

	let htmlTemplatesMissingMetaGenerator = new Set();
	let found = 0;

	eleventyConfig.on("eleventy.before", () => {
		htmlTemplatesMissingMetaGenerator = new Set();
		found = 0;
	});

	eleventyConfig.on("eleventy.after", () => {
		if(htmlTemplatesMissingMetaGenerator.size > 0) {
			console.log(chalk.blue(`[11ty/eleventy-upgrade-help] NOTICE`), `Your project has .html output files (×${htmlTemplatesMissingMetaGenerator.size}) that don’t have a populated <meta name="generator" content> tag. It would be helpful to Eleventy if you added it (but isn’t required). Applicable input files: ${Array.from(htmlTemplatesMissingMetaGenerator).join(", ")} Read more: https://www.11ty.dev/docs/data-eleventy-supplied/#use-with-meta-namegenerator`);
		} else {
			console.log(chalk.green(`[11ty/eleventy-upgrade-help] PASSED`), `All of your project’s .html output files (×${found}) are using <meta name="generator" content="Eleventy …">`);
		}
	});

	eleventyConfig.htmlTransformer.addPosthtmlPlugin(
		"html",
		function (options) {
			return function (tree) {
				let missing = 1;

				tree.match(matchHelper(`meta[name="generator"]`), function (node) {
					if (node.attrs?.content && (node.attrs?.content || "").toLowerCase().startsWith("eleventy")) {
						missing--;
					}

					return node;
				});

				if(missing > 0) {
					htmlTemplatesMissingMetaGenerator.add(options.page.inputPath);
				} else {
					found++;
				}
			};
		}
	);
};