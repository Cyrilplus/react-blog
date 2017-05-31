/**
 * @author YongNie
 * @email nieyong@baidu.com
 * @create date 2017-03-22 03:39:10
 * @modify date 2017-04-01 05:10:40
 * @file webpack config
*/
const webpack = require('webpack');
module.exports = {
    // entry: {
    //     "app": './src/index.js',
    //     vendors: ["react-dom"]
    // },
    entry: './src/index.js',
    output: {
        path: `${__dirname}/public/`,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.scss$/,
                include: `${__dirname}/src/styles`,
                loader: 'style-loader!css-loader!sass-loader'
            }, {
                test: /\.scss$/,
                exclude: `${__dirname}/src/styles`,
                loader: 'style-loader!css-loader?modules!sass-loader'
            }, {
                test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack
            .optimize
            .AggressiveMergingPlugin(), //合并块
        new webpack
            .optimize
            .UglifyJsPlugin({
                comments: false,
                compress: {
                    warnings: false
                }
            }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};
