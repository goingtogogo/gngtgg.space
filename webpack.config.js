const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        scripts: [
            './source/js/script.js',
            './source/scss/style.scss',
            './source/index.html',
        ],
    },
    resolve: {
        extensions: ['.js', '.scss', '.css'],
        modules: ['./node_modules/'],
    },
    mode: 'production',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 7777,
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '',
        filename: 'js/script.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [/source/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        browsers: ['> 1%', 'last 2 versions'],
                                    },
                                    corejs: '3.7.0',
                                    useBuiltIns: 'entry',
                                },
                            ],
                        ],
                        plugins: ['@babel/plugin-transform-async-to-generator'],
                    },
                },
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.s[a|c]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            url: false,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: false },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [['autoprefixer']],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attributes: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new WriteFilePlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'source/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.min.css',
            chunkFilename: '[id].css',
        }),
        new CssoWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: 'source/fonts/**/*.{woff,woff2}',
                    to: path.join(__dirname, 'build', 'fonts'),
                    flatten: true,
                },
                {
                    from: 'source/img/**',
                    to: path.join(__dirname, 'build'),
                    transformPath(targetPath) {
                        return targetPath.replace(`source${path.sep}`, '');
                    },
                },
                {
                    from: 'source/*.ico',
                    to: path.join(__dirname, 'build'),
                    flatten: true,
                },
                {
                    from: 'source/docs/**',
                    to: path.join(__dirname, 'build', 'docs'),
                    flatten: true,
                },
            ],
        }),
    ],
    optimization: {
        minimize: true,
    },
};
