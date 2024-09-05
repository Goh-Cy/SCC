const path = require('path');

module.exports = {
    entry: ['./src/index.js','./src/scroll.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
        ],
    },
    devServer: {
        static: './dist',
    },
    mode: 'development',
};