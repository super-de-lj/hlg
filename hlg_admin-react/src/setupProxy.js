const { createProxyMiddleware: proxy } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        process.env.REACT_APP_BASE_API,
        proxy({
            // 此处的端口号要与后期数据请求的数据端一致
            target: "http://180.76.99.14",
            changeOrigin: true,
            // pathRewrite: { //路径重写
            //     ['^' + process.env.REACT_APP_BASE_API]: '',
            // },
        })
    );
};
