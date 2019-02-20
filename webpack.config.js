var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'bundle.js'
    },
   module: {
      rules: [
          { test : /\.css$/, loader: "style-loader!css-loader" },
          {
             test: /\.js$/,
             use: [
                     {
                          loader: 'babel-loader',
                          options: { presets: ['es2015'] }
                     }
             ]
          }
      ]
   },
   plugins: [ new HtmlWebpackPlugin() ]
};
