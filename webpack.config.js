const path = require("path");
// import path from 'path';

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.tsx"),
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                // Typescript loader
                test: /\.tsx?$/,
                exclude: /(node_modules|\.webpack)/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                    },
                },
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                {
                  loader:"url-loader",
                  options: {
                    limit: 10000
                  }
                }
              ]
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        open: true
    },
    // experiments: {
    //   topLevelAwait: true,
    //   asyncWebAssembly: true,
    //   asyncAsset: true,
    //   syncWebAssembly: true,
    //   layers: true,
    //   outputModule: true,
    //   importAsync: true,
    //   importAwait: true,
    //   importDeferred: true,
    //   importExpression: true,
    //   callBySymbol: true,
    //   asset: true,
    //   unknownGlobalToModule: true,
    //   webpack5: true,
    //   cacheGroup: true,
    //   buildHttp: true,
    //   buildWasm: true,
    //   extendedAPI: true,
    //   persistentCaching: true,
    //   moduleGraph: true,
    //   errorOnDeprecated: true,
    //   topLevelAwait: true,
    //   topLevelAwaitFiber: true,
    // },
    output: {
        filename: "bundle.js",
        publicPath: "/",
        path: path.resolve(__dirname, "./dist"),
    },
};
