const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');

const commonConfig = {
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const clientConfig = {
  entry: {
    home: './app/client/home.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].bundle.css',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
};

const serverConfig = {
  entry: './index.js',
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'public'),
  },
  externals: [nodeExternals()],
};

module.exports = (env) => {
  if (env.NODE_ENV === 'development') {
    clientConfig.devtool = 'source-map';
    serverConfig.devtool = 'source-map';
  }

  return [merge(commonConfig, clientConfig), merge(commonConfig, serverConfig)];
};
