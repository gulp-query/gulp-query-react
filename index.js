let Plugin = require('gulp-query-webpack');

class ReactPlugin extends Plugin {

  static method() {
    return 'react';
  }

  babelrc() {
    return {
      cacheDirectory: true,
      presets: ['babel-preset-react', 'babel-preset-env'].map(require.resolve)
    }
  }

}

ReactPlugin.storage = {};

module.exports = ReactPlugin;