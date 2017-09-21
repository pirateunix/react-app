const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.less', '.css']
    },
    entry: [
        './src/client.js'
    ],
    output: {
        path: path.resolve('./src/public/assets'),
        filename: "app.js",
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", 'less-loader']
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: [['env', {"modules": false}], 'react', 'stage-2'],
                    plugins: ['transform-function-bind', 'react-hot-loader/babel']
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                loader: 'file-loader'
            },
            {test: /\.svg(\?v=.+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
            {test: /\.woff(\?v=.+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
            {test: /\.woff2(\?v=.+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff2'},
            {test: /\.[ot]tf(\?v=.+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=.+)?$/, loader: 'url-loader?limit=10000&mimetype=application/vnd.ms-fontobject'}
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin(
            {
                output: {
                    comments: false
                },
            }
        ),
        new webpack.DefinePlugin(
            {
                'process.env.NODE_ENV': JSON.stringify("production"),
                'PRODUCTION': JSON.stringify("production")
            }
        ),
        new ExtractTextPlugin('[name].css')
    ]
};

