const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const AddEntryPlugin = require('./addEntryPoint');
const HydratePlugin = require('./hydrate');

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
    'home.css': './app/home/styles.scss',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].bundle.css',
    }),
    new AddEntryPlugin('./app/nordic-pages'),
    new HydratePlugin('./app/nordic-pages'),
    // new HydratePlugin({
    //   pages: [
    //     { name: 'home', componentPath: 'home/view/index.js' },
    //     { name: 'about', componentPath: 'about/view/index.js' },
    //   ]
    // })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
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
    chunkFilename: '[name].js',
  },
  externals: [nodeExternals()],
};

module.exports = (env) => {
  if (process.env.NODE_ENV === 'development') {
    clientConfig.devtool = 'source-map';
    serverConfig.devtool = 'source-map';
  }

  return [merge(commonConfig, clientConfig), merge(commonConfig, serverConfig)];
};
