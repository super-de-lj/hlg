const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox
} = require("customize-cra");
const path = require("path");
module.exports = override(
    disableEsLint(), // 在 webpack 中禁用 eslint
    addDecoratorsLegacy(), //添加装饰器语法
    addWebpackAlias({ // 添加 webpack 别名
        ["@"]: path.resolve("./src"),
    })
);