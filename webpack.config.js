const { join } = require("path");

module.exports = {
    entry: "./src/index",
    output: {
        filename: "[name].js",
        path: join(__dirname, "./dist"),
    },
}
