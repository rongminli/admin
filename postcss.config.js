const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  plugins: {
    autoprefixer: {}
  },
  configureWebpack: {
    name: 'hsl',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  rules:[
	  {
	    test: /\.scss$/,
	    loaders: ['style', 'css', 'sass']
	  }
  ]
}
