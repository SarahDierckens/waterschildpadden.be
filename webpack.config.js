module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "www/bundle.js"
    },
    devServer: {
        inline: true,
        contentBase: './www'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};