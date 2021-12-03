const path=require('path')
module.exports={
entry:'./src/js/main.js',
output:{
    filename:'main.[contenthash].js',
    clean: true,
    path: path.resolve(__dirname,'build')
},
module: {
    rules: [
      {
        test: /\.(css)$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },   
}