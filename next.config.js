const path = require("path");
// require("dotenv").config();

module.exports = {
  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["public"] = path.join(__dirname, "public");
    config.resolve.alias["assets"] = path.join(__dirname, "assets");
    return config;
  },
};
