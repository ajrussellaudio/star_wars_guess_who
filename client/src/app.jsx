var React = require('react');
var ReactDOM = require('react-dom');

var StarWarsPeople = require('./components/SWPeople')

window.onload = function(){
  ReactDOM.render(
    <StarWarsPeople numFilms={2} />,
    document.getElementById('app')
  );
}
