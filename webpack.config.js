const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpack = new HtmlWebpackPlugin({
    template: './assets/index.template.html',
    filename: 'index.html'
});

module.exports={

    entry: './assets/javascript/entry.js',
    output:{
        publicPath: '/',
        path: path.join(__dirname, '..'),
        filename: 'dist/javascript/bundle.js'
    },
    devServer: {
    open: true,
    inline:true,
    port: 8000
  },
    plugins: [htmlWebpack],
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:['env', 'stage-2']
                    }
                }
            },
            {
                test: /\.jpg$/,
                use:'url-loader'
            }
        ]
    }

}