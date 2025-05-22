const icons = require("./bootstrap-icons.json");

module.exports = {
  sc_plugin_api_version: 1,
  plugin_name: "bootstrap-icons",
  headers: [
    {
      css: `/plugins/public/bootstrap-icons@${
        require("./package.json").version
      }/bootstrap-icons.css`,
    },
  ],
  icons: icons.map((icon) => `bi bi-${icon}`),
};
