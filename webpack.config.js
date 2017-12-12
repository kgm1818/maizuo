const OpenBrowserWebpackPlugin=require('open-browser-webpack-plugin')  
module.exports={
    entry:'./src/main.js',
    output:{
        path:__dirname,
        filename:'dist/app.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader',
            },
            {
                test:/\.(png|jpe?g|gif|woff|woff2|ttf|otf)$/,
                loader:'file-loader'
            }
        ]
    },
    devServer: {
        contentBase: __dirname,
        historyApiFallback: true,
        port: 8080,
        inline: true,
        hot: true, //开发模式支持热更新
        proxy: {//数据请求代理（在此配置）
            '/v4':{
                target:'https://m.maizuo.com',
                changeOrigin:true
            },
            '/mzimages':{
                target:'http://www.maizuo.com',
                changeOrigin:true
            },
            '/api':{
                target:'https://aura.maizuo.com',
                changeOrigin:true
            },
            '/':{
                target:'http://mall.s.maizuo.com',
                changeOrigin:true
            }

        }
    },
    //插件项
    plugins:[
        new OpenBrowserWebpackPlugin({
            url: 'http://localhost:8080'
        })
    ]

    

}