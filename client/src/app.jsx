var React = require('react');
var ReactDOM = require('react-dom');

var StarWarsPeople = require('./components/ApiCheck')

window.onload = function(){
  ReactDOM.render(
    <StarWarsPeople />,
    document.getElementById('app')
  );
}
