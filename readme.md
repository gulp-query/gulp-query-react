## gulp-query-react
React plugin for [gulp-query](https://github.com/gulp-query/gulp-query)

Uses
[babel-loader](https://www.npmjs.com/package/babel-loader),
[style-loader](https://www.npmjs.com/package/style-loader),
[css-loader](https://www.npmjs.com/package/css-loader) and
[sass-loader](https://www.npmjs.com/package/sass-loader)

React with a single line of code.

Supports:
* Webpack 4 + Babel
* Import `.scss` ans `.css` in js
* Decorators (For [mobx](https://mobx.js.org)), dynamic import, class properties, object rest spread
* Custom config for Babel

```text
npm install gulp-query gulp-query-react
```

### Example
Paste the code into your `gulpfile.js` and configure it
```javascript
let build = require('gulp-query')
  , react = require('gulp-query-react')
;
build((query) => {
    query.plugins([react])
      .react('src/js/app.jsx','js/','app')
    
      // Rename and own babel config
      .react('src/js/admin.js','js/undercover.js',{
        babel: {
          presets: ['@babel/preset-env','@babel/preset-react'],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-object-rest-spread",
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-proposal-class-properties", { "loose" : true }]
          ]
        }
      })
    
      // Config as object
      .react({
        from: 'src/js/main.js',
        to: 'js/',
        name: 'main'
      })
    ;
});
```
And feel the freedom
```
gulp
gulp --production // For production
gulp watch // Watching change
gulp react // Only for react
gulp react:app // Only for app.js
gulp react:admin react:main watch // Watching change only for admin and main
...
```

### Options
```javascript
.react({
    name: "task_name", // For gulp react:task_name 
    from: "src/js/app.js",
    to: "js/", // set filename "js/concat.js" -- for rename
    source_map: true,
    source_map_type: 'inline',
    full: false, // if set true is without compress in prod
    babel: {
      presets: ['@babel/preset-env','@babel/preset-react'],
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose" : true }]
      ]
    }
})
```