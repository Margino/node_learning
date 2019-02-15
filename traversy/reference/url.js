const url = require('url');

const myUrl = new URL('https://petrov.com.ru/index.html?id=15&status=active');

console.log(myUrl.href);
console.log(myUrl.toString());
// https://petrov.com.ru/index.html?id=15&status=active

console.log(myUrl.host);
// petrov.com.ru
console.log(myUrl.hostname); // does not get pror, petrov.com.ru:8000 i.e.
// petrov.com.ru

console.log(myUrl.pathname);
// /index.html

console.log(myUrl.search);
// ?id=15&status=active
console.log(myUrl.searchParams);
// URLSearchParams { 'id' => '15', 'status' => 'active' }
console.log(myUrl.searchParams.append('abc', 123));
console.log(myUrl.searchParams);
// URLSearchParams { 'id' => '15', 'status' => 'active', 'abc' => '123' }
myUrl.searchParams.forEach((value, name) => console.log(value, name));
