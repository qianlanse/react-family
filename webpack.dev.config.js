const path = require('path')
const r = file => path.join(__dirname, file)

module.exports = {
    entry: {
        app: r('src/index')
    },
    output: {
        path: r('./dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ],
                include: r('src')
            }
        ]
    },
    devServer: {
        contentBase: r('dist'),
        historyApiFallback: true,
        port: 3001
    },
    resolve: {
        alias: {
            screens: r('src/screens'),
            components: r('src/components'),
            router: r('src/router')
        }
    }
}