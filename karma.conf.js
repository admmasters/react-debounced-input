var path = require("path");
var WebpackTestConfig = require('./webpack.test');

// Karma configuration here
module.exports = function (config) {
  config.set({
    logLevel: config.LOG_DEBUG,
    port: 3334,
    autoWatch: true,
    browsers: ['PhantomJS'],
    frameworks: ['mocha'], //use jasmine as framework
    files: [
      'karma.tests.js' //test files
    ],
    preprocessors: {
      'karma.tests.js': ['webpack', 'sourcemap'] //preprocess with webpack and sourcemap loader
    },
    reporters: ['progress'], //report results in this format
    webpack: WebpackTestConfig
  });
};
