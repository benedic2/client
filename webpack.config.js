var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin =require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
      publicPath: '/',
    filename: 'bundle.js'
  },
    module: {
        rules:[
            {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },

        {
        use: ['style-loader','css-loader'],
        test: /\.css$/
        },
        
        {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        use: [
            {
                loader:'url-loader',
                options: {limit:40000}
            },
            {
            loader: 'image-webpack-loader',
            options: {}
            }
        ]
        }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin ({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
