let Plugin = require('gulp-query-webpack');

class ReactPlugin extends Plugin {

  static method() {
    return 'react';
  }

  babelLoaderConfig() {
    return {
      presets: ['@babel/preset-env','@babel/preset-react'].map(require.resolve),
      plugins: [
        require.resolve("@babel/plugin-syntax-dynamic-import"),
        require.resolve("@babel/plugin-proposal-object-rest-spread"),
        [require.resolve("@babel/plugin-proposal-decorators"), { "legacy": true }],
        [require.resolve("@babel/plugin-proposal-class-properties"), { "loose" : true }]
      ]
    }
  }

}

ReactPlugin.storage = {};

module.exports = ReactPlugin;