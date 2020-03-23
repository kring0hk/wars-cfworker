const path = require("path")
const HandlebarsPlugin = require("handlebars-webpack-plugin")

module.exports = {
    target: 'webworker',
    entry: './index.js',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.hbs']
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                query: {
                    partialDirs: [
                        path.resolve(__dirname, 'views/layout')
                    ]
                }
            }
        ]
    },
    plugins: [
        new HandlebarsPlugin({
            entry: path.resolve(__dirname, 'views/pages/*.hbs'),
            output: path.resolve(__dirname, 'build/[name].html'),
            partials: [
                path.resolve(__dirname, 'views/layout/*.hbs'),
            ],
            helpers: [
                path.resolve(__dirname, 'views/helpers/*.js'),
            ],
            getPartialId: filePath => {
                return filePath.match(/([^/]+)\.hbs$/).pop()
            }
        })
    ]
}
