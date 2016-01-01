var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'source-map', //debug in webstorm
    //devtool: 'cheap-module-eval-source-map',
    //devtool: 'eval-source-map',

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

    //externals: {
    //    // require("jquery") is external and available
    //    //  on the global var jQuery
    //    "jquery": "jQuery",
    //    "jquery": "$"
    //},

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendors"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            //{
            //    //处理bootstrap的依赖.
            //    test: /bootstrap\/js\//,
            //    loader: "imports?jQuery=jquery"
            //},
            {
                test: require.resolve('jquery'),
                loader: 'expose?jQuery'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
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
