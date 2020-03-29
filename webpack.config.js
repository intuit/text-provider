/*
* This contains the configuration for our module.
* We use this configuration to figure out our start points, logical structure and other optimizations possible.
* These may (in the future) include :
*   - Splitting tthe code based on entry points
*   - Adding multiple outputs using the same config
*/
const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
    }
  },
  module : {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
          failOnError: true,
          emitWarning: true,
          failOnWarning: false,
        },
        resolve: {
          extensions: ['.js', '.jsx']
        }
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        resolve: {
          extensions: ['.js', '.jsx']
        },
        exclude: /node_modules/
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './'),
      './node_modules'
    ]
  },
  devServer: {
    port: 3001
  },
};

