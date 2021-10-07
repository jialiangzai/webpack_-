

const path = require('path')

// 引入 自动生成html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// css单独抽离
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist2'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        port: 3007, // 端口号
        open: true // 自动打开浏览器
    },
    // source-map技术 分为生产环境和开发环境 开发环境production建议用 nosource-source-map，当然用source-map方面差错但是危险暴露了源代码 none是最流行的
    devtool: 'cheap-module-source-map', //（推荐） cheap-module-source-map 开发模式下使用, 保证运行时的行数 和 源代码行数 一致 
    // devtool: 'eval-cheap-source-map', // 运行时的行数 和 源代码行数 不一致（构建速度快）但是加了module和cheap效果也是很不错的

    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',

        }),
        new MiniCssExtractPlugin({
            filename:'css/bundle.css'
        })
    ],
    // 模块
    module: {
        // 规则
        rules: [
            // css
            {
                test: /\.css$/,
                // use: ["style-loader", "css-loader"]
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            // less
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            },
            // img
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024 //8kb
                    }
                }
            },
            // 字体图标 还是利用url-loader
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2 * 1024,
                            // 配置输出的文件名   []  表示站位符 
                            name: '[name].[ext]',
                            // 配置输出的文件目录
                            outputPath: "fonts/"
                        }
                    }
                ]
            },
            // js高级 用babel-loader 只会有一个用对象
            {
                test: /\.js$/,
                // 排除
                exclude: /node_module | bower_components/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                    }
                }
            },

        ]
    }

}