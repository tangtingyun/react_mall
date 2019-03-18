/**
 * Created by zhangyifei on 18/8/8.
 */

var babel = require('babel-core')

var es6Code = 'let x = n => n + 1';

var es5code = babel.transform(es6Code, {
    presets: ['env']
})
console.log(es5code)