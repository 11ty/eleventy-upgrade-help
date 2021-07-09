# eleventy-upgrade-help

A plugin to help you upgrade your Eleventy project to a new version.

## Usage

**WARNING THIS PLUGIN IS IN PRERELEASE STATUS AND HAS NOT YET BEEN PUBLISHED TO NPM**

Install from npm:

```bash
npm install @11ty/eleventy-upgrade-help
```

Add to your configuration file (probably `.eleventy.js`):

```js
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(UpgradeHelper);
};
```

### Opt-out of features

```js
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(UpgradeHelper, {
    slugToSlugify: false
  });
};
```

<!--
Steps:

1. Check eleventy version of current project to make sure it’s relevant.
2. Run the assigned ruleset specific to your project.
3. Show errors and warnings
4. If no errors or warnings, show a message to remove the plugin.
-->