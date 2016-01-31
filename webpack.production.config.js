var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: {
        app: [
            './src/index'
        ],
        vendor: ['jquery', 'bootstrap']
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: '[name].js',
        publicPath: '/static/'
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(), //去掉重复代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })

    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose?jQuery'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(png|jpg|bmp)$/,
                loader: 'url-loader?limit=8192&name=[path][name].[ext]?[hash]&context=src/assets'
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]&context=node_modules'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream&name=[path][name].[ext]&context=node_modules'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=[path][name].[ext]&context=node_modules'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml&name=[path][name].[ext]&context=node_modules'
            }

        ],
        postLoaders: [
            { loader: "transform?brfs" }
        ]
    }
};
