var path = require('path');

module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['mocha'],
        client: {
          mocha: {
          }
        },
        files: [

            // test cases
            'tests/**/*.spec.js'
        ],

        reporters: ['progress', 'coverage'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [
            'PhantomJS'
        ],
        singleRun: false,
        preprocessors: {
            'tests/**/*.spec.*': ['webpack']
        },
        webpack: {
            output: {
                path: 'build/'
            },
            devtool: 'source-map',
            debug: true,
            resolve: {
                root: __dirname + '/'
            },
            module: {
                loaders: [
                    {test: /^(?!.*(node_modules|test)).*\.js$/, loader: 'istanbul-instrumenter'},
                    {test: /\.js$/, loader: 'babel?blacklist[]=strict'}
                ]
            }
        },
        webpackMiddleware: {
            noInfo: true
        },
        coverageReporter: {
            dir : 'coverage/',
            reporters: [
                { type: 'html', subdir: 'html' }
            ]
        }
    })
}
