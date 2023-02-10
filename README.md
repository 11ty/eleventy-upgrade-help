# eleventy-upgrade-help v2.0

A plugin to help you upgrade your Eleventy project from Eleventy v1.0 to v2.0.

Previous versions:

* [Upgrade from 0.12 to 1.0](https://github.com/11ty/eleventy-upgrade-help/tree/v1.x)

The major version of this plugin will always match the major version of Eleventy that you’re upgrading to.

## Usage

Install from npm:

```bash
npm install @11ty/eleventy-upgrade-help@2
```

Add to your configuration file (probably `.eleventy.js`):

```js
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function(eleventyConfig) {
  // If you have other `addPlugin` calls, it’s important that UpgradeHelper is added last.
  eleventyConfig.addPlugin(UpgradeHelper);
};
```

After your upgrade is complete and you’ve removed all of the violations/warnings from your output, delete the plugin from your `package.json` and `.eleventy.js` configuration file.

## Example demo

You can review a [sample project using this upgrade plugin](https://github.com/11ty/demo-eleventy-upgrade-help).

<!--
Steps:

1. Check eleventy version of current project to make sure it’s relevant.
2. Run the assigned ruleset specific to your project.
3. Show errors and warnings
4. If no errors or warnings, show a message to remove the plugin.
-->
