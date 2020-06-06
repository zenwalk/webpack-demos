var data = require('data');
var config = require('config');

console.log(data);
console.log(config);

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(<h1>{config.url}</h1>, document.body);
