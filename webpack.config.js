module.exports = {

  //define entry point
  entry: './src/script1.js',

  //define outpoint point
  output: {
    path: '/dist/bundle.js',
    filename: 'bundle.js'
  },   

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules/),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};

