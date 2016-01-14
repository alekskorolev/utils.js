var path = require('path');

module.exports = {
    context: path.join(__dirname + '/..'),
    entry: {
        index: 'js/index.js'
    },
    output: {
        path: path.join(__dirname, '/../js'),
        filename: 'build.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel?loose=all'}
        ]
    },
    resolve: {
        root: path.join(__dirname + '/..')
    }
}
