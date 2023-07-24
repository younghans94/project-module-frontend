const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './src/index',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.less']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', {
            runtime: 'automatic'
          }]
        }
      },
      {
        test: /\.tsx$/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-react', {
            runtime: 'automatic'
          }],
          '@babel/preset-typescript']
        }
      }
    ]
  },
  devServer: {

  },
  plugins: [new ESLintPlugin({ extensions: ['.js', '.ts'] })]
}
