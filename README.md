# eleventy-upgrade-help v2.0

A plugin to help you upgrade your Eleventy project from Eleventy v1.0 to v2.0.

Previous versions:

* [Upgrade from 0.12 to 1.0](https://github.com/11ty/eleventy-upgrade-help/tree/v1.x)

The major version of this plugin will always match the major version of Eleventy that you’re upgrading to.

## Usage

Upgrade Eleventy with `npm` _before_ using this plugin by running the following command:

```bash
npm install @11ty/eleventy@2
```

Then, install this plugin:

```bash
npm install @11ty/eleventy-upgrade-help@2
```

Add to your configuration file (probably `.eleventy.js` or `eleventy.config.js`):

```js
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function(eleventyConfig) {
  // If you have other `addPlugin` calls, it’s important that UpgradeHelper is added last.
  eleventyConfig.addPlugin(UpgradeHelper);
};
```

Run your usual build command (e.g. `npm run build`) and pay attention to the output.
Address any violations and warnings. Once you’ve removed all of the violations/warnings from your output, run `npm uninstall @11ty/eleventy-upgrade-help` to remove the plugin and delete its code from your Eleventy configuration file.

## Example demo

You can review a [sample project using this upgrade plugin](https://github.com/11ty/demo-eleventy-upgrade-help).

<!--
Steps:

1. Check eleventy version of current project to make sure it’s relevant.
2. Run the assigned ruleset specific to your project.
3. Show errors and warnings
4. If no errors or warnings, show a message to remove the plugin.
-->
