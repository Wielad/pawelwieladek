const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/scripts/main.js'),
    output: {
        path: path.join(__dirname, 'public/dist'),
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.js?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'url-loader?limit=10000'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './public/')
    },
    plugins: [
        new CleanWebpackPlugin(['./public/dist'])
    ]
};
