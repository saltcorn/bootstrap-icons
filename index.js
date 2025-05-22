const Workflow = require("@saltcorn/data/models/workflow");
const Form = require("@saltcorn/data/models/form");
const icons = require("./bootstrap-icons.json");

module.exports = {
  sc_plugin_api_version: 1,
  plugin_name: "bootstrap-icons",
  headers: [
    {
      css: "/plugins/public/bootstrap-icons/bootstrap-icons.css",
    },
  ],
  icons: icons.map((icon) => `bi bi-${icon}`),
  configuration_workflow: () =>
    new Workflow({
      steps: [
        {
          name: "Bootstrap Icon configuration",
          form: () =>
            new Form({
              fields: [
                {
                  name: "enabled_icons",
                  label: "Enabled Icons",
                  type: "String",
                  sublabel:
                    "Comma-separated list of icons to enable. If not provided, all icons will be enabled.",
                  required: false,
                  attributes: {
                    options: icons.join(", "),
                  },
                },
                {
                  name: "css_path",
                  label: "Custom CSS Path",
                  type: "String",
                    sublabel:
                        "Path to custom CSS file. If not provided, the default Bootstrap Icons CSS will be used.",
                  required: false,
                },
              ],
            }),
        },
      ],
    }),

  onLoad: async (config) => {
    if (config.css_path) {
      module.exports.headers[0].css = config.css_path;
    }
    if (config.enabled_icons) {
      module.exports.icons = config.enabled_icons
        .split(",")
        .map((icon) => `bi bi-${icon.trim()}`);
    }
  },
};
