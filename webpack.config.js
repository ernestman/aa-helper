const path = require("path");

module.exports = {
    entry: "./frontend/src/aa_helper.jsx",
    output: {
        path: path.resolve(__dirname, "frontend", "static", "frontend"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                loader: 'url-loader',
                // options: {
                    // publicPath: 'frontend'
                // }
            },
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*'],
    }
}