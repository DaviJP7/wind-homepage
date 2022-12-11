const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.js$/i, include: path.resolve(__dirname, 'src'), use: {
                loader: 'babel-loader', options: {
                    presets: ['@babel/preset-env'],
                },
            },
        }, {
            test: /\.css$/i,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ],
        },],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}