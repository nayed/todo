module.exports = {
    // the main entry of our app
    entry: ['./src/index.js', './src/todo-list.js'],
    // output configuration
    output: {
        path: __dirname + '/build/',
        publicPath: 'build/',
        filename: 'build.js'
    },

    module: {
        loaders: [
        // process *.js files using babel-loader
        // the exclude pattern is important so that we don't
        // apply babel transform to all the dependencies!
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
    },

    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}