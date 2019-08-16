module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const appConfig = config;

    if (target === "web") {
      config.module.rules.push({
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              javascriptEnabled: true
            }
          }
        ]
      });
    }

    return appConfig;
  }
};
