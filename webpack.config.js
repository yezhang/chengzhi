var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: {
        app: [
            'webpack-hot-middleware/client',
            './src/index'
        ],

        vendors: ['jquery', 'bootstrap']
    },


    output: {
        path: path.join(__dirname, 'static'),
        filename: '[name].js',
        publicPath: '/static/'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendors"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
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
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                //处理bootstrap的依赖.
                test: /bootstrap\/js\//,
                loader: "imports?jQuery=jquery"
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
        ]
    }
};
