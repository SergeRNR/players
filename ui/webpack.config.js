module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'app.js',
        publicPath: ''
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
            }
        ]
    }
}
