const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfigDev = require('./webpack/webpack.config.dev');
const webpackConfigProd = require('./webpack/webpack.config.prod');

const isDev = process.env.NODE_ENV === 'development';

const cssLoaders = (extra) => {
  const loader = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true,
      },
    },
    'css-loader',
  ];

  if (extra) {
    loader.push(extra);
  }

  return loader;
};

const babelOptions = (preset) => {
  const opts = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

const webpackConfigCommon = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.tsx',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions(),
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-typescript'),
        },
      },
    ],
  },
};

module.exports = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return merge([webpackConfigCommon, webpackConfigDev]);
    case 'production':
      return merge(webpackConfigCommon, webpackConfigProd);
    default:
      throw new Error('No matching configuration was found!');
  }
};
