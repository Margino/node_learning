const path = require('path');

console.log(path.basename(__filename));
// path.js

console.log(path.dirname(__filename));
// /Users/margino/Documents/JavaScript/node_learning/traversy/reference

console.log(path.extname(__filename));
// .js

console.log(path.parse(__filename));
// {
//   root: '/',
//   dir:
//   '/Users/margino/Documents/JavaScript/node_learning/traversy/reference',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path'
// }

console.log(path.join(__dirname, 'test', 'hello.html'));
// /Users/margino/Documents/JavaScript/node_learning/traversy/reference/test/hello.html
