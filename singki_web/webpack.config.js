var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/client'
  ],
  output:{
      path: require('path').resolve("./dist"),
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins:[
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module:{
      loaders:[
        {
          test:/\.js$/,
          loader:'babel-loader',
          exclude:/node_modules/,
          query:{
            presets:['react','es2015','react-hmre']
          }
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'autoprefixer', 'sass']
        },
        {
          test: /\.png$/,
          loader: "url-loader",
          query: { mimetype: "img/png" }

        }
      ]
  }
}
