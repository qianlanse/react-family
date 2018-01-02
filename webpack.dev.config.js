const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const r = file => path.join(__dirname, file)

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            r('src/index')
        ],
        vender: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: r('./dist'),
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[chunkhash].js'
    },
    devtool: 'inline-source-map',   // 定位错误信息
    module: {
        rules: [
            {
                test: /\.js$/,
                include: r('src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]-[hash:base64:8]'
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'imgs/[hash:8].[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: r('dist'),
        historyApiFallback: true,
        port: 3001,
        hot: true,
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vender'
        }),
        new HtmlWebpackPlugin({
            title: '我的古风音乐园',
            filename: 'index.html',
            template: r('src/index.html')
        })
    ],
    resolve: {
        alias: {
            screens: r('src/screens'),
            components: r('src/components'),
            common: r('src/common'),
            router: r('src/router'),
            reducers: r('src/redux/reducers'),
            actions: r('src/redux/actions'),
            assets: r('src/assets')
        }
    }
}