const { createProxyMiddleware } = require("http-proxy-middleware");
//npm install http-proxy-middleware --save 설치
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
