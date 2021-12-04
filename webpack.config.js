const path=require('path')
module.exports={
entry:'./main.js',
output:{
    filename:'main.js',
    clean: true,
    path: path.resolve(__dirname,'build')
},
module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: ['file-loader']
      },
      {
        test: /\.(css)$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },   
}