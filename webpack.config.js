const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () =>{
  const config = { 
    splitChunks:{
      chunks: 'all'
    }
  }

  if(isProd){
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config;
};

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = extra => {
  const loader = [ 
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true,
      }
    }, 
    'css-loader'
  ]

  if(extra){
    loader.push(extra)
  }

  return loader;
}

const babelOptions = preset => {
  const opts = {
    presets: ['@babel/preset-env']
  }

  if(preset){
    opts.presets.push(preset)
  }

  return opts;
}

const plugins = () =>{
  const base = [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify:{
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    })
  ];

  if(isProd){
    base.push(new BundleAnalyzerPlugin())
  }
  return base;
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.tsx',
  output: {
    filename:  filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve:{
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: optimization(),
  devServer:{
    port: 3000,
    hot: isDev,
  },
  devtool: isDev ? 'source-map' : false,
  plugins: plugins(),
  module:{
    rules:[
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader') 
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions('@babel/preset-react')
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      }
      
    ]
  }
}