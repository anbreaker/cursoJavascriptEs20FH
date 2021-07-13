const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          // True To move sources
          sources: false,
          // true to minify code html
          minimize: false,
        },
      },

      {
        test: /\.css$/i,
        exclude: /styles.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /styles.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),

    new MiniCssExtractPlugin({
      //filename: '[name].[fullhash].css',
      filename: '[name].css',
      ignoreOrder: false,
    }),
  ],
};
