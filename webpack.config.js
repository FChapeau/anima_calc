module.exports =
{
  entry: {
    app: "./client/index.jsx"
  },
  output: {
    filename: "./public/js/[name].js"
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
  },

  module :{
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel"
      }
    ]
  }
};
