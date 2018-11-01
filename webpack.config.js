const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const dev = process.env.NODE_ENV === "dev ";

let config ={
    //mode : "development",
    devtool : dev ? "cheap-module-eval-source-map" : "source-map",
    entry: "./assets/js/apps.js",
    output:{
        path: path.resolve("./dist/"),
        filename : "main.js"
    }, 
    watch :dev,
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                  } 
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
              },
            {
                test: /\.scss$/,   
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins:[new ExtractTextPlugin({
        filename: '[name].css',
        disable:dev
    }),]
}

dev ? config.mode = "development" : config.mode = "production";

if(!dev){
    config.plugins.push(new UglifyJsPlugin({sourceMap:true}))
}

module.exports = config;