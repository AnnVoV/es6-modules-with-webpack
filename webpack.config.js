module.exports = {
    entry  : {
        main: './src/main.js'
    },
    output : {
        path     : __dirname + '/build',
        filename : '[name].dist.js',
        publicPath: '/build/'
    },
    module : {
        loaders: [ {
            test    : /\.js$/,
            exclude : /node_modules/,
            loader  : 'babel-loader'
        }
        ]
    }
};

