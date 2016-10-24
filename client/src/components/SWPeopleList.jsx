var React = require('react');
var StarWarsPerson = require('./SWPerson');

var StarWarsPeopleList = function(props) {
  var listItems = props.people.map(function(person, index) {
    return (
      <StarWarsPerson options={person} key={index} />
    )
  });

  return (
    
    <div 
    className="peopleList">
    {listItems}
    </div>
    )
}

module.exports = StarWarsPeopleList